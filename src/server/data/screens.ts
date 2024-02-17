import { Screen } from "../../types/Screen";
import { fighterScreens } from "./Day0/findAnInn";

export const startScreen: Screen = {
  _id: "0",
  header: "Welcome to the game!",
  main: ["This is an adventure game where you make choices to progress."],
  choiceInformation: {
    text: "Start the game, or Load a previous game in the upper left corner.",
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

const start: Screen = {
  _id: "start",
  header: "Build Your Character",
  main: [
    "You are traveling on a road to a destination you hope will bring you answers. You will reach your destination soon, but first who are you?",
  ],
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
      {
        type: "save",
        optionText: "Bard",
        screenId: "bardBegin",
        saveValues: [{ savePath: "User.stats.charm", saveValue: "++" }],
      },
      {
        type: "save",
        optionText: "Fighter",
        screenId: "fighterBegin",
        saveValues: [{ savePath: "User.stats.brawn", saveValue: "++" }],
      },
      {
        type: "save",
        optionText: "Mage",
        screenId: "mageBegin",
        saveValues: [{ savePath: "User.stats.magic", saveValue: "++" }],
      },
    ],
  },
};

const bardBegin: Screen = {
  _id: "bardBegin",
  header: "Welcome %%{User.name} the Bard!",
  main: [
    "It's just about time to start your journey. You are a young bard with a song in your heart. You have been traveling to Belenham to find a place to perform and spread the joy of your song. If this does not seem like the path for you, you can choose again.",
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "No Let Me Choose Again",
        screenId: "pickClass",
        saveValues: [{ savePath: "User.stats.charm", saveValue: "--" }],
      },
      {
        type: "save",
        optionText: "Next",
        screenId: "theAdventureBegins",
        saveValues: [{ savePath: "User.class", saveValue: "Fighter" }],
      },
    ],
  },
};

const fighterBegin: Screen = {
  _id: "fighterBegin",
  header: "Welcome %%{User.name} the Fighter!",
  main: [
    "It's just about time to start your journey. You are a young fighter with a thirst to prove yourself. You have been traveling to Belenham to find jobs and adventure. If this does not seem like the path for you, you can choose again.",
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "No Let Me Choose Again",
        screenId: "pickClass",
        saveValues: [
          {
            savePath: "User.stats.brawn",
            saveValue: "--",
          },
        ],
      },
      {
        type: "save",
        optionText: "Next",
        screenId: "theAdventureBegins",
        saveValues: [
          {
            savePath: "User.class",
            saveValue: "Fighter",
          },
        ],
      },
    ],
  },
};

const mageBegin: Screen = {
  _id: "mageBegin",
  header: "Welcome %%{User.name} the Mage!",
  main: [
    "It's just about time to start your journey. You are a young mage with a lot to learn. You have been traveling to the Great University in Belenham to try to get training to control your magic. If this does not seem like the path for you, you can choose again.",
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "No Let Me Choose Again",
        screenId: "pickClass",
        saveValues: [
          {
            savePath: "User.stats.magic",
            saveValue: "--",
          },
        ],
      },
      {
        type: "save",
        optionText: "Next",
        screenId: "theAdventureBegins",
        saveValues: [
          {
            savePath: "User.class",
            saveValue: "Mage",
          },
        ],
      },
    ],
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
  ...fighterScreens,
];
