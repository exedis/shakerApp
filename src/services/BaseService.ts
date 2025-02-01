import queryString, { ParsedUrlQueryInput } from "querystring";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from "axios";

export const noticeInterceptor = (
  error: AxiosError<{ disableGlobalNotice: boolean; message: string }>
) => {
  if (!error.response?.data?.disableGlobalNotice && error.response?.data) {
    let message = error.response.data?.message;

    if (error.response.data instanceof ArrayBuffer) {
      const data = new TextDecoder().decode(error.response.data);

      message = JSON.parse(data)?.message;
    }

    if (!message) {
      const errorData = error?.toJSON() as { status: number; message: string };
      if (errorData?.status || errorData?.message) {
        message = `(${errorData?.status}) ${errorData?.message}`;
      } else {
        message = "Unknown Error";
      }
    }

    // stores.NoticeStore.initError(message, { withThrottle: true });
  }
};

export const axiosInstance: AxiosInstance = axios.create({
  timeout: 300000,
  headers: { Accept: "application/json" },
  baseURL: process.env.APP_SERVER_HOST || "http://localhost:3000",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    // logoutInterceptor(error);

    noticeInterceptor(error);

    return Promise.reject(error);
  }
);

export abstract class ServiceBase {
  protected static BASE_URL: string;

  protected static api = axiosInstance;

  public static buildUrl(url: string): string {
    return `${this.BASE_URL}${url}`;
  }

  protected static get<T>(
    url: string,
    data?: Nullable<ParsedUrlQueryInput>,
    options?: AxiosRequestConfig
  ): AxiosPromise<T> {
    let newUrl: string = url;

    if (data && Object.keys(data).length) {
      newUrl = `${newUrl}?${queryString.stringify(data)}`;
    }
    return this.api.get(this.buildUrl(newUrl), options);
  }

  protected static post<T>(
    url: string,
    data?: Nullable<unknown>,
    options?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.api.post(this.buildUrl(url), data, options);
  }

  protected static put<T>(
    url: string,
    data?: Nullable<unknown>,
    options?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.api.put(this.buildUrl(url), data, options);
  }

  protected static patch<T>(
    url: string,
    data?: Nullable<unknown>,
    options?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.api.patch(this.buildUrl(url), data, options);
  }

  protected static delete<T>(
    url: string,
    data?: Nullable<ParsedUrlQueryInput>,
    options?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.api.delete(this.buildUrl(url), { ...options, data });
  }
}
