import { Track } from "@src/types/track";
import { ServiceBase } from "./BaseService";
import { TOKEN_TITLE } from "@src/types/common";

export class TrackService extends ServiceBase {
  protected static BASE_URL = "/tracks";

  protected static HEADERS = {
    headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_TITLE)}` },
  };

  static async fetchTracks(): Promise<Track[]> {
    const { data } = await this.get<Track[]>("/", {}, this.HEADERS);
    return data;
  }

  static async fetchSingleTracks(id: string): Promise<Track[]> {
    const { data } = await this.get<Track[]>(id, {}, this.HEADERS);
    return data;
  }

  static async uploadTracks(trackFiles): Promise<any> {
    const formData = new FormData(); // Создаем объект FormData

    // Добавляем каждый файл в FormData
    trackFiles.forEach((file) => {
      formData.append("files", file); // Ключ 'files' должен совпадать с тем, что ожидает бэкенд
    });

    console.log("trackFiles", trackFiles);
    return await this.post<any>("/upload", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_TITLE)}`,
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
