import { Quest, QuestStatus } from "../../types/Quest";
import { Motivations, Relationship, Stat, User } from "../../types/User";
import { allQuests } from "../data/quests";
import { parseSavePath } from "./helper";

let user: User = {
  quests: allQuests,
  coins: 10,
  stats: {
    goodness: 0,
    sneakiness: 0,
    cleverness: 0,
    brawn: 0,
    magic: 0,
    charm: 0,
  },
  relationships: {},
};

function evalPlusMinusInput(input: string) {
  if (input === "++") {
    return 1;
  } else if (input === "--") {
    return -1;
  } else {
    throw Error(`Invalid input: ${input}`);
  }
}

export class SavingService {
  static saveContent(input: string, savePath: string) {
    const { ObjectName, propertyPath } = parseSavePath(savePath);
    if (ObjectName === "User") {
      if (propertyPath[0] === "name") {
        user.name = input;
      } else if (propertyPath[0] === "class") {
        user.class = input;
      } else if (propertyPath[0] === "stats") {
        const stat = Stat[propertyPath[1] as keyof typeof Stat];
        const currentStat = user.stats[stat];
        const changeBy = evalPlusMinusInput(input);
        user.stats[stat] = currentStat + changeBy;
      } else if (propertyPath[0] === "coins") {
        const changeBy = evalPlusMinusInput(input);
        user.coins += changeBy;
      } else if (propertyPath[0] === "motivations") {
        if (user.motivations === undefined) {
          user.motivations = [];
        }
        const motive = input as keyof typeof Motivations;
        user.motivations.push(Motivations[motive]);
      } else if (propertyPath[0] === "relationships") {
        const relationship =
          Relationship[propertyPath[1] as keyof typeof Relationship];
        let rel = user.relationships[relationship];
        if (rel === undefined) {
          rel = 0;
        }
        rel += evalPlusMinusInput(input);
        user.relationships[relationship] = rel;
      } else if (propertyPath[0] === "quests") {
        if (propertyPath.length < 2) {
          user.quests[input].status = QuestStatus.active;
        } else {
          const quest = user.quests[propertyPath[1]];
          if (quest === undefined) {
            throw Error(`Quest not found: ${propertyPath[1]}`);
          }
          if (propertyPath[2] === "status") {
            quest.status = input as QuestStatus;
          } else {
            throw Error(`Property not found: ${propertyPath[2]}`);
          }
        }
      } else {
        throw Error(`Property not found: ${propertyPath[0]}`);
      }
    } else {
      throw Error(`Object not found ${ObjectName}`);
    }
  }

  static loadUser() {
    return user;
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
      quests: this.restartQuests(allQuests),
      coins: 10,
      stats: {
        goodness: 0,
        sneakiness: 0,
        cleverness: 0,
        brawn: 0,
        magic: 0,
        charm: 0,
      },
      relationships: {},
    };
    localStorage.removeItem("user");
    localStorage.removeItem("screenId");
  }

  static restartQuests(quests: { [key: string]: Quest }) {
    for (const key in quests) {
      quests[key].status = QuestStatus.notFound;
    }
    return quests;
  }
}
