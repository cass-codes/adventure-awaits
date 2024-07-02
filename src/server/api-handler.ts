import axios from "axios";
import { SaveValues, Character, Game } from "../types";

const baseUrl = "http://localhost:3090";

export async function getScreenById(
  screenId: string,
  gameId: string,
  userId: string,
  saveValues?: SaveValues[]
) {
  const res = await axios.request({
    url: `${baseUrl}/api/screen/${screenId}`,
    method: "PUT",
    params: { gameId, userId },
    ...(saveValues ? { data: { saveValues } } : {}),
  });

  return res.data;
}

export async function saveNewGame(userId: string, game: Game) {
  const res = await axios.post(`${baseUrl}/api/games`, { ...game, userId });
  return res.data;
}

export async function saveGame(id: string, gameId: string) {
  const res = await axios.post(`${baseUrl}/api/save`, { screenId: id, gameId });
  return res.data;
}

export async function loadGame(
  gameId: string,
  userId: string
): Promise<Character> {
  const res = await axios.get(`${baseUrl}/api/games/${gameId}`, {
    params: { userId },
  });
  return res.data;
}
