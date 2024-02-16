import { Screen } from "../../../types/Screen";

const _1: Screen = {
  _id: "fighter1",
  header: "The Adventure Begins!",
  main: [
    `After a long day on the road you are ready to find a place to rest and find some work in the morning.
    Beleham is medium sized city with a large market and a few inns. As you walk through the streets a few
    inns stand out to you as places you might find rest. `,
    `The first is called The Rusty Sword, it's windows are yellow with light and laughter seems to spill 
    from it's hearth.`,
    `The second is called The Silver Spoon, it's windows are dark and the only sound you hear is the soft
    clinking of silverware and occasionally a low murmur.`,
    `The third is called Sewer Water, it's windows are small and dirty, you hear raised voices from inside
    and the sound of a heated argument.`,
  ],
  choiceInformation: {
    text: "Which inn do you choose?",
    options: [
      {
        type: "save",
        optionText: "The Rusty Sword",
        screenId: "fighter2_1",
        savePath: "User.stats.goodness",
        saveValue: "++",
      },
      {
        type: "save",
        optionText: "The Silver Spoon",
        screenId: "fighter2_2",
        savePath: "User.stats.cleverness",
        saveValue: "++",
      },
      {
        type: "save",
        optionText: "Sewer Water",
        screenId: "fighter2_3",
        savePath: "User.stats.sneakiness",
        saveValue: "++",
      },
    ],
  },
};

const _2_1: Screen = {
  _id: "fighter2_1",
  header: "The Rusty Sword",
  main: [
    `Intrigued by the lively atmosphere, you enter The Rusty Sword. The aroma of hearty stew and freshly baked bread greets 
    you as you step inside. Patrons raise their tankards in cheerful toasts, and a bard strums a merry tune in the corner. 
    `,
  ],
  choiceInformation: {
    text: "Do you join in the revelry or seek a quieter corner to rest?",
    options: [
      {
        type: "screen",
        optionText: "Join the festivities",
        screenId: "fighter2_1_1",
      },
      {
        type: "screen",
        optionText: "Seek solitude",
        screenId: "fighter2_1_2",
      },
    ],
  },
};

const seekSolitude: Screen = {
  _id: "fighter2_1_2",
  header: "The Rusty Sword",
  main: [
    `You take a seat at a table near the entrance, keeping a watchful eye on the comings and goings of the tavern.
    At one point a rowdy patron, who has had too much to drink, starts to cause trouble with the barkeep. 
    `,
  ],
  choiceInformation: {
    text: "Do you step in to help?",
    options: [
      {
        type: "save",
        optionText: "Help",
        screenId: "stepInToHelp",
        savePath: "User.stats.goodness",
        saveValue: "++",
      },
      {
        type: "screen",
        optionText: "Not Your Problem",
        screenId: "fighter2_1_1_2",
      },
    ],
  },
};

const stepInToHelp: Screen = {
  _id: "stepInToHelp",
  header: "The Rusty Sword",
  main: [
    `You step in to defuse the situation with a firm but fair hand, earning the gratitude of the 
    barkeep and a discount on your meal.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "fighter2_1_1_2",
        savePath: "User.coins",
        saveValue: "++",
      },
    ],
  },
};

const _2_1_1: Screen = {
  _id: "fighter2_1_1",
  header: "The Rusty Sword",
  main: [
    `You head straight to the center of the room, where a large crew of strong looking patrons
    are sitting at a long table. You hail them with a hearty greeting and they invite you to sit with them.`,
    `After a few rounds of ale and a hearty meal you're feeling like you want to show off a little.`,
  ],
  choiceInformation: {
    text: "Challenge someone to a friendly arm wrestling match or call it a night?",
    options: [
      {
        type: "save",
        optionText: "Arm wrestle",
        screenId: "fighter2_1_1_1",
        savePath: "User.stats.charm",
        saveValue: "++",
      },
      {
        type: "screen",
        optionText: "Call it a night",
        screenId: "fighter2_1_1_2",
      },
    ],
  },
};

const callItANight: Screen = {
  _id: "fighter2_1_1_2",
  header: "The Rusty Sword",
  main: [
    `You decide to call it a night and head up to your room. The bed is soft and the room is warm, you fall asleep quickly.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Next",
        screenId: "fighterDay1",
      },
    ],
  },
};

const _2_1_1_1: Screen = {
  _id: "fighter2_1_1_1",
  header: "The Rusty Sword",
  main: [
    `Your strength and skill impress the crowd, earning you hearty cheers and a round of drinks on the house.`,
    `After a few more hours of happy chatting and drinking.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Next",
        screenId: "fighter2_1_1_2",
      },
    ],
  },
};

const _2_2: Screen = {
  _id: "fighter2_2",
  header: "The Silver Spoon",
  main: [
    `Drawn by the promise of a quiet reprieve, you enter The Silver Spoon. The air is hushed, punctuated 
    only by the clinking of silverware and murmured conversations. A lone figure sits at the bar, nursing 
    a glass of wine.`,
  ],
  choiceInformation: {
    text: "Do you approach them or choose a table for yourself?",
    options: [
      {
        type: "save",
        optionText: "Approach the figure",
        screenId: "approachFigure",
        savePath: "User.stats.charm",
        saveValue: "++",
      },
      {
        type: "screen",
        optionText: "Choose a table",
        screenId: "findTable",
      },
    ],
  },
};

const approachFigure: Screen = {
  _id: "approachFigure",
  header: "The Silver Spoon",
  main: [
    `You strike up a conversation with the mysterious stranger, who reveals themselves to 
    be a retired adventurer. They offer to share tales of their exploits in exchange for 
    a friendly game of cards. Through their stories, you gain valuable insights into the 
    city's history and its hidden secrets.`,
    {
      url: "grizzledMan.png",
      alt: "Grizzled Adventurer",
      side: "right",
      sideText:
        "Hello there, young one. I see the fire of adventure in your eyes. Sit with me, and I'll share with you the tales of my youth.",
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "fighter2_2_1",
        savePath: "User.stats.charm",
        saveValue: "++",
      },
    ],
  },
};

const _2_3: Screen = {
  _id: "fighter2_3",
  header: "Sewer Water",
  main: [
    `Despite its foreboding name, you decide to investigate Sewer Water out of curiosity. The windows are 
    grimy, and the sounds of a heated argument echo from within. Peering through the cracked glass, you 
    see a group of rough-looking individuals engaged in a heated discussion.`,
  ],
  choiceInformation: {
    text: "Do you intervene or observe from a safe distance?",
    options: [
      {
        type: "screen",
        optionText: "Intervene",
        screenId: "fighter2_3_1",
      },
      {
        type: "screen",
        optionText: "Observe",
        screenId: "fighter2_3_2",
      },
    ],
  },
};

export const fighterScreens = [
  _1,
  _2_1,
  _2_2,
  _2_3,
  _2_1_1,
  _2_1_1_1,
  callItANight,
  seekSolitude,
  stepInToHelp,
  approachFigure,
];
