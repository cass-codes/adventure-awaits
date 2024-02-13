import { Screen } from "../types/Screen";

export const startScreen: Screen = {
  _id: "0",
  header: "Welcome to the game!",
  main: "This is an adventure game where you make choices to progress.",
  choiceInformation: {
    text: "Start the game?",
    options: [
      { type: "screen", optionText: "Start", screenId: "start" },
      { type: "screen", optionText: "Quit", screenId: "0" },
    ],
  },
};

const quit: Screen = {
  _id: "quit",
  header: "Are you sure you want to quit?",
  main: "This is your last chance to save your character data and story progress",
  choiceInformation: {
    text: "",
    options: [
      { type: "screen", optionText: "Save and Quit", screenId: "saveScreen" },
      { type: "screen", optionText: "Quit without Saving", screenId: "0" },
    ],
  },
};

const start: Screen = {
  _id: "start",
  header: "Build Your Character",
  main: "You are traveling on a road to a destination you hope will bring you answers. You will reach your destination soon, but first who are you?",
  choiceInformation: {
    text: "",
    options: [
      {
        type: "input",
        optionText: "Next",
        promptText: "What is your name?",
        screenId: "pickClass",
        savePath: "User.name",
      },
    ],
  },
};

const pickClass: Screen = {
  _id: "pickClass",
  header: start.header,
  main: start.main,
  choiceInformation: {
    text: "What is your class?",
    options: [
      { type: "screen", optionText: "Bard", screenId: "bardBegin" },
      { type: "screen", optionText: "Fighter", screenId: "fighterBegin" },
      { type: "screen", optionText: "Mage", screenId: "mageBegin" },
    ],
  },
};

const bardBegin: Screen = {
  _id: "bardBegin",
  header: "Welcome %%{User.name} the Bard!",
  main: "You are a bard! ",
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "No Let Me Choose Again",
        screenId: "pickClass",
      },
      {
        type: "save",
        optionText: "Next",
        screenId: "first",
        savePath: "User.class",
        saveValue: "Fighter",
      },
    ],
  },
};

const fighterBegin: Screen = {
  _id: "fighterBegin",
  header: "Welcome %%{User.name} the Fighter!",
  main: "",
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "No Let Me Choose Again",
        screenId: "pickClass",
      },
      {
        type: "save",
        optionText: "Next",
        screenId: "first",
        savePath: "User.class",
        saveValue: "Fighter",
      },
    ],
  },
};

const mageBegin: Screen = {
  _id: "mageBegin",
  header: "Welcome %%{User.name} the Mage!",
  main: "",
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "No Let Me Choose Again",
        screenId: "pickClass",
      },
      {
        type: "save",
        optionText: "Next",
        screenId: "first",
        savePath: "User.class",
        saveValue: "Mage",
      },
    ],
  },
};

const first: Screen = {
  _id: "first",
  header: "blah",
  main: "blah",
  choiceInformation: {
    text: "blah",
    options: [{ type: "screen", optionText: "blah", screenId: "0" }],
  },
};

export const screens = [
  startScreen,
  quit,
  start,
  pickClass,
  bardBegin,
  fighterBegin,
  mageBegin,
  first,
];
