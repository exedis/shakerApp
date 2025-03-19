import { ServiceBase } from "./BaseService";
import { TOKEN_TITLE } from "@src/types/common";

export class UserService extends ServiceBase {
  protected static BASE_URL = "/user";

  protected static HEADERS = {
    headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_TITLE)}` },
  };

  static async fetchUserById(id: number): Promise<any> {
    const { data } = await this.get<any>(`/${id}`, {}, this.HEADERS);
    return data;
  }
}
