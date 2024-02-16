import { User } from "../../types/User";
import { parseSavePath } from "./helper";

let user: User = {};

export class SavingService {
  static saveContent(input: string, savePath: string) {
    const { ObjectName, propertyPath } = parseSavePath(savePath);
    if (ObjectName === "User") {
      if (propertyPath[0] === "name") {
        user.name = input;
      } else if (propertyPath[0] === "class") {
        user.class = input;
      } else if (propertyPath[0] === "stats") {
        console.log("updating stats", user.stats, propertyPath[1], input);
        if (user.stats === undefined) {
          user.stats = {
            goodness: 0,
            sneakiness: 0,
            cleverness: 0,
            brawn: 0,
            magic: 0,
            charm: 0,
          };
        }
        const stat = propertyPath[1];
        if (stat === "goodness") {
          if (input === "++") {
            user.stats.goodness++;
          } else if (input === "--") {
            user.stats.goodness--;
          } else {
            console.error("Invalid input", input);
          }
        } else if (stat === "cleverness") {
          if (input === "++") {
            user.stats.cleverness++;
          } else if (input === "--") {
            user.stats.cleverness--;
          } else {
            console.error("Invalid input", input);
          }
        } else if (stat === "sneakiness") {
          if (input === "++") {
            user.stats.sneakiness++;
          } else if (input === "--") {
            user.stats.sneakiness--;
          } else {
            console.error("Invalid input", input);
          }
        } else if (stat === "brawn") {
          if (input === "++") {
            user.stats.brawn++;
          } else if (input === "--") {
            user.stats.brawn--;
          } else {
            console.error("Invalid input", input);
          }
        } else if (stat === "magic") {
          if (input === "++") {
            user.stats.magic++;
          } else if (input === "--") {
            user.stats.magic--;
          } else {
            console.error("Invalid input", input);
          }
        } else if (stat === "charm") {
          if (input === "++") {
            user.stats.charm++;
          } else if (input === "--") {
            user.stats.charm--;
          } else {
            console.error("Invalid input", input);
          }
        } else {
          console.error("Stat not found", stat);
        }
      } else if (propertyPath[0] === "coins") {
        if (user.coins === undefined) {
          user.coins = 10;
        }
        if (input === "++") {
          user.coins++;
        } else if (input === "--") {
          user.coins--;
        } else {
          console.error("Invalid input", input);
        }
      } else {
        console.error("Property not found", propertyPath[0]);
      }
    } else {
      console.error("Object not found", ObjectName);
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
    }
  }

  static saveGame(screenId: string) {
    console.log("savingGame", user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("screenId", screenId);
  }

  static loadGame(): { screenId: string } {
    const localUser = localStorage.getItem("user");
    const localScreenId = localStorage.getItem("screenId");
    if (localUser) {
      user = JSON.parse(localUser);
    }
    console.log("loadingGame", user, localScreenId);
    return { screenId: localScreenId || "0" };
  }

  static restartGame() {
    user = {};
    localStorage.removeItem("user");
    localStorage.removeItem("screenId");
  }
}
