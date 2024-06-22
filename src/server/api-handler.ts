import axios from "axios";
import { User } from "../types";

const baseUrl = "http://localhost:3090";

export async function getScreenById(id: string) {
  const res = await axios.get(`${baseUrl}/api/screen/${id}`);
  return res.data;
}

export async function saveGame(id: string, gameId: string) {
  console.log("saving game", id, gameId);
  const res = await axios.post(`${baseUrl}/api/save`, { screenId: id, gameId });
  return res.data;
}

export async function saveContent(
  value: string,
  objectPath: string,
  gameId: string,
  screenId: string
) {
  console.log("saving content", value, objectPath, gameId, screenId);
  const res = await axios.post(`${baseUrl}/api/save/${gameId}`, {
    value,
    objectPath,
    screenId,
  });
  return res.data;
}

export async function loadUser(gameId: string): Promise<User> {
  const res = await axios.get(`${baseUrl}/api/user/${gameId}`);
  return res.data;
}
