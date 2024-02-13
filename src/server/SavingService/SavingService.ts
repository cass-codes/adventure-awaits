import { User } from "../../types/User";
import { parseSavePath } from "./helper";

let user: User = {};

export class SavingService {
  static saveContent(input: string, savePath: string) {
    const { ObjectName, propertyName } = parseSavePath(savePath);
    if (ObjectName === "User") {
      if (propertyName === "name") {
        user.name = input;
      } else if (propertyName === "class") {
        user.class = input;
      }
    }
  }

  static getObjectPathString(objectPath: string) {
    const { ObjectName, propertyName } = parseSavePath(objectPath);
    if (ObjectName === "User") {
      if (propertyName === "name") {
        return user.name;
      }
      if (propertyName === "class") {
        return user.class;
      }
    }
  }
}
