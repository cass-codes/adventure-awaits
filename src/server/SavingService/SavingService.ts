import { Character } from "../../types/User";
import { getGame, saveGame } from "../api-handler";

export let user: Character = {
  quests: [],
  money: {
    gold: 10,
    pennies: 0,
  },
  stats: {
    goodness: 0,
    sneakiness: 0,
    cleverness: 0,
    brawn: 0,
    magic: 0,
    charm: 0,
  },
  relationships: {},
  // skills: [],
};

export class SavingService {
  static loadUser() {
    return user;
  }

  static setUser(newUser: Character) {
    user = newUser;
  }

  static async loadGameId(): Promise<string> {
    let localGameId: string | null = await localStorage.getItem("gameId");
    if (localGameId) {
      return localGameId;
    }
    const dbGameId = await saveGame("0", "");
    if (!dbGameId) {
      throw new Error("No game id found");
    }
    localStorage.setItem("gameId", dbGameId);
    return dbGameId;
  }

  static async loadGame(userId: string, gameId: string) {
    await getGame(gameId, userId);
  }

  static restartGame() {
    user = {
      quests: [],
      money: { gold: 10, pennies: 0 },
      stats: {
        goodness: 0,
        sneakiness: 0,
        cleverness: 0,
        brawn: 0,
        magic: 0,
        charm: 0,
      },
      relationships: {},
      // skills: [],
    };
  }
}
