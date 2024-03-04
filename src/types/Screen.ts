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

export interface ScreenChoiceOption extends BaseChoiceOption {
  type: "screen";
}

export interface SaveChoiceOption extends BaseChoiceOption {
  type: "save";
  saveValues: {
    savePath: string;
    saveValue: string;
  }[];
}

export interface InputChoiceOption extends BaseChoiceOption {
  type: "input";
  savePath: string;
}

export interface QuitChoiceOption extends BaseChoiceOption {
  type: "quit";
}

export type EvaluatedChoiceOption =
  | ScreenChoiceOption
  | SaveChoiceOption
  | InputChoiceOption
  | QuitChoiceOption;

export type ChoiceOption = EvaluatedChoiceOption;
