import { Screen } from "../../../types";

const start: Screen = {
  _id: "start",
  header: "Build Your Character",
  main: [
    "You are traveling on a road to a destination you hope will bring you answers. You will reach your destination soon, but first, who are you?",
  ],
  choiceInformation: {
    text: "What is your name?",
    options: [
      {
        type: "input",
        optionText: "Next",
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
        optionText: "No, let me choose again.",
        screenId: "pickClass",
        saveValues: [{ savePath: "User.stats.charm", saveValue: "--" }],
      },
      {
        type: "save",
        optionText: "Next",
        screenId: "theAdventureBegins",
        saveValues: [{ savePath: "User.class", saveValue: "bard" }],
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
        optionText: "No, let me choose again.",
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
            saveValue: "fighter",
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
    `It's just about time to start your journey. You are a young mage with a lot to learn. You have been traveling to 
    the Great University in Belenham to get training to control your magic. If this does not seem like the path for you, 
    you can choose again.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "No, let me choose again.",
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
            saveValue: "mage",
          },
        ],
      },
    ],
  },
};

export const buildingCharacterScreens: Screen[] = [
  start,
  pickClass,
  bardBegin,
  fighterBegin,
  mageBegin,
];
