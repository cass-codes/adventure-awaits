import { Relationship, Stat, User } from "../../types/User";
import { parseSavePath } from "./helper";

export let user: User = {
  quests: {},
  coins: 10,
  pennies: 0,
  stats: {
    goodness: 0,
    sneakiness: 0,
    cleverness: 0,
    brawn: 0,
    magic: 0,
    charm: 0,
  },
  relationships: {},
  skills: [],
};

export class SavingService {
  static loadUser() {
    return user;
  }

  static setGameId(gameId: string) {
    user.gameId = gameId;
  }

  static setUser(newUser: User) {
    user = newUser;
  }

  static getObjectPathString(objectPath: string) {
    const { ObjectName, propertyPath } = parseSavePath(objectPath);
    if (ObjectName === "User") {
      if (propertyPath[0] === "name") {
        return user.name;
      }
      if (propertyPath[0] === "class") {
        return user.class;
      }
      if (propertyPath[0] === "stats") {
        const stat = Stat[propertyPath[1] as keyof typeof Stat];
        return user.stats[stat].toString();
      }
      if (propertyPath[0] === "coins") {
        return user.coins.toString();
      }
      if (propertyPath[0] === "motivations") {
        return user.motivations?.join(", ") || "";
      }
      if (propertyPath[0] === "relationships") {
        const relationship =
          Relationship[propertyPath[1] as keyof typeof Relationship];
        return user.relationships[relationship]?.toString() || "";
      }
      if (propertyPath[0] === "quests") {
        return user.quests[propertyPath[1]].displayText;
      }
    }
  }

  static saveGame(screenId: string) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("screenId", screenId);
  }

  static loadGame(): { screenId: string } {
    const localUser = localStorage.getItem("user");
    const localScreenId = localStorage.getItem("screenId");
    if (localUser) {
      user = JSON.parse(localUser);
    }
    return { screenId: localScreenId || "0" };
  }

  static restartGame() {
    user = {
      quests: {},
      coins: 10,
      pennies: 0,
      stats: {
        goodness: 0,
        sneakiness: 0,
        cleverness: 0,
        brawn: 0,
        magic: 0,
        charm: 0,
      },
      relationships: {},
      skills: [],
    };
    localStorage.removeItem("user");
    localStorage.removeItem("screenId");
  }
}
