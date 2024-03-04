import axios from "axios";

const baseUrl = "http://localhost:3090";

export function getScreenById(id: string) {
  const res = axios.get(`${baseUrl}/api/screen/${id}`);
  return res;
}
