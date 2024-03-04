import { ChoiceInfo, ChoiceOption } from "../types/Screen";
import { SavingService } from "./SavingService/SavingService";

export function unfurlObjects(text: ChoiceInfo) {
  console.log("text", text);
  const options =
    text.options instanceof Function ? text.options() : text.options;
  console.log("options", options);
  const newChoice: ChoiceInfo = {
    text: unfurlString(text.text),
    options: options.map((_option: ChoiceOption) => {
      const option = _option instanceof Function ? _option() : _option;
      console.log("option", option);
      return {
        ...option,
        optionText: unfurlString(option.optionText),
      };
    }),
  };
  console.log("newChoice", newChoice);
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
