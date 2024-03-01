import { Screen } from "../../types/Screen";
import { day0Screens } from "./Day0";
import { day1Screens } from "./Day1";

export const startScreen: Screen = {
  _id: "0",
  header: "Welcome, Adventurer!",
  main: ["This is an adventure game where you make choices to progress."],
  choiceInformation: {
    text: "Start the game, or load a previous game in the upper left corner.",
    options: [{ type: "screen", optionText: "Start", screenId: "start" }],
  },
};

export const quit: Screen = {
  _id: "quit",
  header: "Are you sure you want to quit?",
  main: [
    "This is your last chance to save your character data and story progress",
  ],
  choiceInformation: {
    text: "",
    options: [
      { type: "screen", optionText: "Save and Quit", screenId: "0" },
      {
        type: "quit",
        optionText: "Quit without Saving",
        screenId: "0",
      },
    ],
  },
};

export const errorScreen: Screen = {
  _id: "error",
  header: "Error",
  main: ["An error occurred."],
  choiceInformation: {
    text: "Return to the start screen then Load your game.",
    options: [{ type: "screen", optionText: "Start", screenId: "0" }],
  },
};

export const screens: Screen[] = [
  startScreen,
  quit,
  errorScreen,
  ...day0Screens,
  ...day1Screens,
];
