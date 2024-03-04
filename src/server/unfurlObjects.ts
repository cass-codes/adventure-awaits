import { ChoiceInfo, ChoiceOption } from "../types/Screen";
import { SavingService } from "./SavingService/SavingService";

export function unfurlObjects(text: ChoiceInfo) {
  const options =
    text.options instanceof Function ? text.options() : text.options;
  const newChoice: ChoiceInfo = {
    text: unfurlString(text.text),
    options: options.map((option: ChoiceOption) => {
      if (typeof option === "function") {
        const opt = option();
        return {
          ...opt,
          optionText: unfurlString(opt.optionText),
        };
      }
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
