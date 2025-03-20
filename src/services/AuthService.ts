import { TOKEN_TITLE } from "@src/types/common";
import { ServiceBase } from "./BaseService";
import { Token, VerifyParams } from "@src/types/auth";

export class AuthService extends ServiceBase {
  protected static BASE_URL = "/auth";

  protected static HEADERS = {
    headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_TITLE)}` },
  };

  static async login(param): Promise<unknown> {
    const { data } = await this.post<unknown>("/login", { initData: param });
    return data;
  }

  static async logout(): Promise<void> {
    const { data } = await this.post<void>("/logout", {}, this.HEADERS);
    return data;
  }

  static async verify(param: VerifyParams): Promise<Token> {
    const { data } = await this.post<Token>("/verify", {
      code: param.code,
      user: param.user,
    });
    return data;
  }

  static async refresh(): Promise<string> {
    const { data } = await this.get<{ token: string }>("/refresh");
    return data.token;
  }
}
