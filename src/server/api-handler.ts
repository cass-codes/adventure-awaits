import axios from "axios";
import { User } from "../types";

const baseUrl = "http://localhost:3090";

export async function getScreenById(id: string) {
  const res = await axios.get(`${baseUrl}/api/screen/${id}`);
  return res.data;
}

export async function saveGame(id: string, gameId: string) {
  const res = await axios.post(`${baseUrl}/api/save`, { screenId: id, gameId });
  return res.data;
}

export async function saveContent(value: string, objectPath: string) {
  const res = await axios.post(`${baseUrl}/api/save/content`, {
    value,
    objectPath,
  });
  return res.data;
}

export async function loadUser(): Promise<User> {
  const res = await axios.get(`${baseUrl}/api/user`);
  return res.data;
}
