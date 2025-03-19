import { UserService } from "@services/UserService";
import { TOKEN_TITLE } from "@src/types/common";
import { flow, makeObservable, observable } from "mobx";

export class BaseStore {
  token = null;

  constructor() {
    makeObservable(this, {
      token: observable,
    });
  }

  // detach() {
  //   this.token = [];
  // }
}
