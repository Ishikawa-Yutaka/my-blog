// 環境設定
export const BASE_URL = import.meta.env.BASE_URL;
export const NORMALIZED_BASE_URL = BASE_URL.endsWith("/")
  ? BASE_URL
  : BASE_URL + "/";

// 便利な関数
export function getPath(path: string): string {
  return `${NORMALIZED_BASE_URL}${path}`;
}
