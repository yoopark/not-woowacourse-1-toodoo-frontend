const FRONTEND_URL =
  (process.env.NODE_ENV === 'development' && 'http://localhost:10242') ||
  (process.env.NODE_ENV === 'production' &&
    'https://not-woowacourse-toodoo.yopark.dev') ||
  '';

const API_PROXY_URL = new URL('/backend-api', FRONTEND_URL).toString();

const API_URL = API_PROXY_URL;

export { API_URL };
