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
  sideText: string;
}

export type MainContentProps = (string | PictureMain)[];

// Choices

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

interface QuitChoiceOption extends BaseChoiceOption {
  type: "quit";
}

export type ChoiceOption =
  | StringChoiceOption
  | SaveChoiceOption
  | InputChoiceOption
  | QuitChoiceOption;
