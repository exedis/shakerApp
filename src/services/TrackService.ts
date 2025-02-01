import { ServiceBase } from "./BaseService";

export class TrackService extends ServiceBase {
  protected static BASE_URL = "/tracks";

  static async fetchTracks(): Promise<unknown> {
    const { data } = await this.get<unknown>("");
    console.log("data", data);
    return data;
  }
}
