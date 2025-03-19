import { UserService } from "@services/UserService";
import { TOKEN_TITLE } from "@src/types/common";
import { TokenType } from "@src/types/user";
import { jwtDecode } from "jwt-decode";
import { flow, makeObservable, observable } from "mobx";

export class UserStore {
  user: WebAppUser & { uuid: string; lastVisitAt: string; createdAt: string } =
    null;
  isFetching: boolean = false;

  constructor() {
    makeObservable(this, {
      isFetching: observable,
      user: observable,
      // setUserData: action.bound,
      fetchUser: flow.bound,
    });
  }

  detach() {
    this.user = {
      id: 0,
      uuid: "",
      first_name: "",
      lastVisitAt: "",
      createdAt: "",
    };
  }

  getChatId() {
    const token = localStorage.getItem(TOKEN_TITLE);
    if (token !== "undefined" || token !== null) {
      return (jwtDecode(token) as TokenType).chatId;
    }
  }

  *fetchUser() {
    this.isFetching = true;
    try {
      const chatId = this.getChatId();
      this.user = yield UserService.fetchUserById(chatId);
    } catch (e) {
      console.error("Ошибка загрузки пользователя:", e);
    } finally {
      this.isFetching = false;
    }
  }
}
