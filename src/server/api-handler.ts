import axios from "axios";
import { SaveValues, Game } from "../types";

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

export async function saveGame(
  userId: string,
  game: Game
): Promise<{ id: string }> {
  if (!game._id) {
    const res = await axios.post(`${baseUrl}/api/games`, { ...game, userId });
    return res.data;
  } else {
    return { id: game._id };
  }
}
