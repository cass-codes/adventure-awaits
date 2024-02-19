import { ChoiceInfo } from "../types/Screen";
import { SavingService } from "./SavingService/SavingService";

export function unfurlObjects(text: ChoiceInfo) {
  const newChoice: ChoiceInfo = {
    text: unfurlString(text.text),
    options: text.options.map((option) => {
      return {
        ...option,
        optionText: unfurlString(option.optionText),
      };
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
