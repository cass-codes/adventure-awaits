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

export interface ConditionalScreenOption {
  type: "conditionalScreen";
  optionText: string;
  conditionPath: string;
  conditionOperator: string;
  conditionValue: string;
  trueScreenId: string;
  falseScreenId: string;
}

interface SaveChoiceOption extends BaseChoiceOption {
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

export type ChoiceOption =
  | ConditionalScreenOption
  | StringChoiceOption
  | SaveChoiceOption
  | InputChoiceOption
  | QuitChoiceOption;
