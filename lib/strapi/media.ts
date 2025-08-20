export function mediaUrl(url?: string) {
  return url?.startsWith("/") ? `https://metrik-api.onrender.com${url}` : url;
}