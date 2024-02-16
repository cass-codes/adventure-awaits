import { ChoiceInfo, ConditionalMain } from "../types/Screen";
import { SavingService } from "./SavingService/SavingService";

export function unfurlObjects(text: ChoiceInfo) {
  const newChoice: ChoiceInfo = {
    text: unfurlString(text.text),
    options: text.options.map((option) => {
      if (option.type === "input") {
        return {
          ...option,
          optionText: unfurlString(option.optionText),
          promptText: unfurlString(option.promptText),
        };
      } else {
        return {
          ...option,
          optionText: unfurlString(option.optionText),
        };
      }
    }),
  };
  return newChoice;
}

export function unfurlString(text: string) {
  const parts = text.split("%%{");
  let returnVal = parts[0];
  for (let i = 1; i < parts.length; i++) {
    const objectPath = parts[i].split("}");
    const evaluatedVal = SavingService.getObjectPathString(objectPath[0]);
    returnVal += evaluatedVal + objectPath[1];
  }
  return returnVal;
}

export function evaluateConditionMain(content: ConditionalMain) {
  let userValStr = SavingService.getObjectPathString(content.conditionPath);
  console.log("content.conditionPath", content.conditionPath);
  console.log("userValStr", userValStr);

  if (userValStr === undefined) {
    throw Error("Invalid condition path, check your screen data");
  }
  const userVal = parseInt(userValStr);
  const testVal = parseInt(content.conditionValue);

  switch (content.conditionOperator) {
    case "===":
      return userVal === testVal ? content.trueMain : content.falseMain;
    case "!==":
      return userVal !== testVal ? content.trueMain : content.falseMain;
    case ">":
      return userVal > testVal ? content.trueMain : content.falseMain;
    case "<":
      return userVal < testVal ? content.trueMain : content.falseMain;
    case ">=":
      return userVal >= testVal ? content.trueMain : content.falseMain;
    case "<=":
      return userVal <= testVal ? content.trueMain : content.falseMain;
    default:
      throw Error("Invalid condition operator, check your screen data");
  }
}
