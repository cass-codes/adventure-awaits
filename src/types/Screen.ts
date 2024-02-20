export interface Screen {
  _id: string;
  header: string;
  main: MainContentProps;
  choiceInformation: ChoiceInfo;
}

// Main

export interface PictureMain {
  url: string;
  alt: string;
  side: "left" | "right";
  sideText: string[];
}

export type MainContentProps = (string | PictureMain | Function)[];

// Choices

export interface ChoiceInfo {
  text: string;
  options: ChoiceOption[] | Function;
}

interface BaseChoiceOption {
  optionText: string;
  screenId: string | Function;
}

interface StringChoiceOption extends BaseChoiceOption {
  type: "screen";
}

export interface SaveChoiceOption extends BaseChoiceOption {
  type: "save";
  saveValues: {
    savePath: string;
    saveValue: string;
  }[];
}

interface InputChoiceOption extends BaseChoiceOption {
  type: "input";
  savePath: string;
}

interface QuitChoiceOption extends BaseChoiceOption {
  type: "quit";
}

export type EvaluatedChoiceOption =
  | StringChoiceOption
  | SaveChoiceOption
  | InputChoiceOption
  | QuitChoiceOption;

export type ChoiceOption = Function | EvaluatedChoiceOption;
