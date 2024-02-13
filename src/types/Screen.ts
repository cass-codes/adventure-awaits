export interface Screen {
  _id: string;
  header: string;
  main: string;
  choiceInformation: ChoiceInfo;
}

export interface ChoiceInfo {
  text: string;
  options: ChoiceOption[];
}

interface BaseChoiceOption {
  optionText: string;
  screenId: string;
}

interface StringChoiceOption extends BaseChoiceOption {
  type: "screen";
}

interface SaveChoiceOption extends BaseChoiceOption {
  type: "save";
  savePath: string;
  saveValue: string;
}

interface InputChoiceOption extends BaseChoiceOption {
  type: "input";
  promptText: string;
  savePath: string;
}

export type ChoiceOption =
  | StringChoiceOption
  | SaveChoiceOption
  | InputChoiceOption;
