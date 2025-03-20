import { Path } from "@consts/path";
import { AuthService } from "@services/AuthService";
import { TOKEN_TITLE } from "@src/types/common";
import { action, flow, makeObservable, observable } from "mobx";
import { UserStore } from "@store/userStore";

export class AuthStore {
  isFetching = false;

  isAuthendificated = false;

  verifyCode: string = "";

  constructor(private userStore: UserStore) {
    makeObservable(this, {
      isFetching: observable,
      verifyCode: observable,
      isAuthendificated: observable,
      setVerifyCode: action.bound,
      logout: flow.bound,
      login: flow.bound,
      verify: flow.bound,
      checkIsAuth: action.bound,
      tokenRefresh: flow.bound,
    });

    this.checkIsAuth();
  }

  setVerifyCode(code: string) {
    this.verifyCode = code;
  }

  *login(data: string) {
    this.isFetching = true;
    try {
      yield AuthService.login(data);
    } catch (e) {
      console.error("Ошибка авторизации", e);
    } finally {
      this.isFetching = false;
    }
  }

  *verify(user) {
    this.isFetching = true;
    try {
      const token = yield AuthService.verify({
        code: this.verifyCode,
        user: user,
      });

      localStorage.setItem(TOKEN_TITLE, token);
      yield this.userStore.fetchUser();
      this.isAuthendificated = true;
    } catch (e) {
      console.error("Ошибка авторизации", e);
    } finally {
      this.isFetching = false;
      window.location.replace(Path.TO_HOME);
    }
  }

  *logout() {
    this.isFetching = true;
    try {
      yield AuthService.logout();
      localStorage.removeItem(TOKEN_TITLE);
      this.userStore.user = null;
      this.isAuthendificated = false;
    } catch {
      console.error("Ошибка авторизации");
    } finally {
      this.isFetching = false;
    }
  }

  checkIsAuth() {
    const token = localStorage.getItem(TOKEN_TITLE);
    if (token && token !== "undefined") {
      this.isAuthendificated = true;
      // yield this.userStore.fetchUser();
    } else {
      this.isAuthendificated = false;
      localStorage.removeItem(TOKEN_TITLE);
    }
  }

  *tokenRefresh() {
    try {
      const token = yield AuthService.refresh();
      localStorage.setItem(TOKEN_TITLE, token);
      this.isAuthendificated = true;
      return true;
    } catch (e) {
      console.error("Ошибка обновления токена", e);
      this.logout();
      return false;
    }
  }
}
