// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { _env_ = {} } = window;

enum Environment {
  DEV = "develop",
  TEST = "test",
  STAGE = "stage",
  AUTOTEST = "autotest",
  QC = "qc",
  PROD = "prod",
}

type Config = {
  NODE_ENV: string;
  ENVIRONMENT: Environment;
  VITE_APP_SERVER_HOST: string;
  VITE_APP_SENTRY_DSN: string;
  ADS_APPLICATION: string;
  WEB_VERSION_URL: string;
  VITE_YANDEX_S3_DOMAIN: string;
  VITE_APP_BOT_NAME: string;
};

const apiUrl =
  _env_.VITE_APP_SERVER_HOST || import.meta.env.VITE_APP_SERVER_HOST;

export const config: Config = {
  NODE_ENV: _env_.NODE_ENV || import.meta.env.VITE_APP_NODE_ENV,
  ENVIRONMENT:
    _env_.ENVIRONMENT ||
    import.meta.env.VITE_APP_ENVIRONMENT ||
    Environment.DEV,
  VITE_APP_SERVER_HOST: `${
    apiUrl?.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl
  }`,
  VITE_APP_SENTRY_DSN:
    _env_.VITE_APP_SENTRY_DSN || import.meta.env.VITE_APP_SENTRY_DSN,
  ADS_APPLICATION: _env_.ADS_APPLICATION || import.meta.env.ADS_APPLICATION,
  WEB_VERSION_URL: _env_.WEB_VERSION_URL || import.meta.env.WEB_VERSION_URL,
  VITE_YANDEX_S3_DOMAIN:
    _env_.VITE_YANDEX_S3_DOMAIN || import.meta.env.VITE_YANDEX_S3_DOMAIN,
  VITE_APP_BOT_NAME:
    _env_.VITE_APP_BOT_NAME || import.meta.env.VITE_APP_BOT_NAME,
};
console.log(
  "import.meta.env.YANDEX_S3_DOMAIN",
  import.meta.env.YANDEX_S3_DOMAIN
);
export const isNotProd = [
  Environment.DEV,
  Environment.STAGE,
  Environment.TEST,
  Environment.AUTOTEST,
  Environment.QC,
].includes(config.ENVIRONMENT);
