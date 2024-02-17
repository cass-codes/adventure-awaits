import { Screen } from "../../../types/Screen";

const theAdventureBegins: Screen = {
  _id: "theAdventureBegins",
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
        screenId: "rustySword_1",
        saveValues: [
          { savePath: "User.stats.goodness", saveValue: "++" },
          { savePath: "User.coins", saveValue: "--" },
          { savePath: "User.coins", saveValue: "--" },
        ],
      },
      {
        type: "save",
        optionText: "The Silver Spoon",
        screenId: "silverSpoon1",
        saveValues: [
          { savePath: "User.stats.cleverness", saveValue: "++" },
          { savePath: "User.coins", saveValue: "--" },
          { savePath: "User.coins", saveValue: "--" },
          { savePath: "User.coins", saveValue: "--" },
        ],
      },
      {
        type: "save",
        optionText: "Sewer Water",
        screenId: "sewerWater1",
        saveValues: [
          { savePath: "User.stats.sneakiness", saveValue: "++" },
          { savePath: "User.coins", saveValue: "--" },
        ],
      },
    ],
  },
};

// RUSTY SWORD

const rustySword_1: Screen = {
  _id: "rustySword_1",
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
        type: "save",
        optionText: "Join the festivities",
        screenId: "joinTheFestivities",
        saveValues: [{ savePath: "User.stats.charm", saveValue: "++" }],
      },
      {
        type: "screen",
        optionText: "Seek solitude",
        screenId: "seekSolitude",
      },
    ],
  },
};

const seekSolitude: Screen = {
  _id: "seekSolitude",
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
        saveValues: [{ savePath: "User.stats.goodness", saveValue: "++" }],
      },
      {
        type: "screen",
        optionText: "Not Your Problem",
        screenId: "callItANight",
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
        screenId: "callItANight",
        saveValues: [{ savePath: "User.coins", saveValue: "++" }],
      },
    ],
  },
};

const joinTheFestivities: Screen = {
  _id: "joinTheFestivities",
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
        type: "conditionalScreen",
        optionText: "Arm wrestle",
        conditionPath: "User.stats.brawn",
        conditionOperator: ">=",
        conditionValue: "1",
        trueScreenId: "winArmWrestle",
        falseScreenId: "loseArmWrestle",
      },
      {
        type: "screen",
        optionText: "Call it a night",
        screenId: "callItANight",
      },
    ],
  },
};

const callItANight: Screen = {
  _id: "callItANight",
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
        screenId: "endFirstDay",
      },
    ],
  },
};

const winArmWrestle: Screen = {
  _id: "winArmWrestle",
  header: "The Rusty Sword",
  main: [
    `Your strength and skill impress the crowd, earning you hearty cheers and a round of drinks on the house.`,
    `A young warrior in the corner, who has been watching the match, approaches you and offers to buy you a drink.`,
    {
      url: "Kael.png",
      alt: "Bearded Warrior",
      side: "right",
      sideText:
        "I see you have some talent and by your pack I'm thinking you're new in town. What brings you to Belenham?",
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "I'm here to make money",
        screenId: "tryingToMakeMoney",
        saveValues: [{ savePath: "User.motivations", saveValue: "money" }],
      },
      {
        type: "save",
        optionText: "I'm trying to prove myself",
        screenId: "tryingToProveMyself",
        saveValues: [{ savePath: "User.motivations", saveValue: "power" }],
      },
      {
        type: "save",
        optionText: "I'm out to get revenge",
        screenId: "tryingToGetRevenge",
        saveValues: [{ savePath: "User.motivations", saveValue: "revenge" }],
      },
    ],
  },
};

const tryingToMakeMoney: Screen = {
  _id: "tryingToMakeMoney",
  header: "The Rusty Sword",
  main: [
    {
      url: "Kael.png",
      alt: "Bearded Warrior",
      side: "right",
      sideText: `I know some places where you can make some coin. I'll introduce you to some people in the morning if you meet me here.`,
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank you",
        screenId: "thankTheKnight_callItANight",
        saveValues: [
          { savePath: "User.quests", saveValue: "meetBeardedKnightForWork" },
        ],
      },
    ],
  },
};

const tryingToProveMyself: Screen = {
  _id: "tryingToProveMyself",
  header: "The Rusty Sword",
  main: [
    {
      url: "Kael.png",
      alt: "Bearded Warrior",
      side: "right",
      sideText: `Prove yourself, huh? I'm not sure what you're looking for, but I might be able to help you find it. I'll meet you here tomorrow morning, I think I have a job for you.`,
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank you",
        screenId: "thankTheKnight_callItANight",
        saveValues: [
          {
            savePath: "User.quests",
            saveValue: "meetBeardedKnightForAdventure",
          },
        ],
      },
    ],
  },
};

const tryingToGetRevenge: Screen = {
  _id: "tryingToGetRevenge",
  header: "The Rusty Sword",
  main: [
    {
      url: "Kael.png",
      alt: "Bearded Warrior",
      side: "right",
      sideText: `Revenge is a dangerous game. I wish I could help you find what you're looking for. Best of luck to you`,
    },
    `The warrior gives you a nod and heads back to their table. You finish your meal with your thoughts buzzing.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Next",
        screenId: "callItANight",
      },
    ],
  },
};

const thankTheKnight_callItANight: Screen = {
  _id: "thankTheKnight_callItANight",
  header: "The Rusty Sword",
  main: [
    `You thank the young warrior who introduces themself as Kael, and head up to your room. 
    The bed is soft and the room is warm, you fall asleep quickly.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "endFirstDay",
        saveValues: [{ savePath: "User.relationships.Kael", saveValue: "++" }],
      },
    ],
  },
};

const loseArmWrestle: Screen = {
  _id: "loseArmWrestle",
  header: "The Rusty Sword",
  main: [
    `You put up a good fight, but your opponent's strength wins out in the end. 
    The crowd cheers and you both share a laugh. Your opponent buys you a drink 
    and you end up sitting at the same table`,
    {
      url: "Somerild.png",
      alt: "Young Fighter",
      side: "left",
      sideText: "You're new in town, aren't you? What brings you to Belenham?",
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "I'm trying to prove myself",
        screenId: "tryToProveYourself",
      },
    ],
  },
};

const tryToProveYourself: Screen = {
  _id: "tryToProveYourself",
  header: "The Rusty Sword",
  main: [
    {
      url: "Somerild.png",
      alt: "Young Fighter",
      side: "left",
      sideText: `Proving yourself is so hard in this city! I'm also trying to prove myself. Do you want to work together?`,
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "No thanks",
        screenId: "callItANight",
      },
      {
        type: "screen",
        optionText: "Yes please!",
        screenId: "yesToWorkingTogether",
      },
    ],
  },
};

const yesToWorkingTogether: Screen = {
  _id: "yesToWorkingTogether",
  header: "The Rusty Sword",
  main: [
    `You agree to work together with the fighter who introduces herself as Somerild and the two of you make plans to meet in the morning. 
    You head up to your room and fall asleep quickly.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "endFirstDay",
        saveValues: [
          { savePath: "User.relationships.Somerild", saveValue: "++" },
          { savePath: "User.relationships.Somerild", saveValue: "++" },
          { savePath: "User.quests", saveValue: "workWithSomerild" },
        ],
      },
    ],
  },
};

// SILVER SPOON

const callItANight_SS: Screen = {
  ...callItANight,
  _id: "callItANight_SS",
  header: "The Silver Spoon",
};

const silverSpoon1: Screen = {
  _id: "silverSpoon1",
  header: "The Silver Spoon",
  main: [
    `Drawn by the promise of a quiet reprieve, you enter The Silver Spoon. The air is hushed, punctuated 
    only by the clinking of silverware and murmured conversations. A lone figure sits at the bar, nursing 
    a glass of wine. Their cloak is pulled up around their face, and they carry a long staff that is
    leaning against the bar.`,
  ],
  choiceInformation: {
    text: "Do you approach them or choose a table for yourself?",
    options: [
      {
        type: "save",
        optionText: "Approach the figure",
        screenId: "approachFigure",
        saveValues: [
          {
            savePath: "User.stats.charm",
            saveValue: "++",
          },
        ],
      },
      {
        type: "screen",
        optionText: "Choose a table",
        screenId: "findTable",
      },
    ],
  },
};

// Lyra stuff
const approachFigure: Screen = {
  _id: "approachFigure",
  header: "The Silver Spoon",
  main: [
    `You casually slide onto the stool next to the strange figure, sliding your heavy pack onto the floor 
    with a thud. The figure looks up at you, their eyes twinkling with amusement.`,
    `You sit in comfortable silence for a while, as you order a meal and a glass of mead from the barkeep.
    Eventually the figure finally speaks.`,
    {
      url: "Lyra.png",
      alt: "Quiet Druid",
      side: "left",
      sideText:
        "You look like you've been on a long journey. What brings you to Belenham?",
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "I'm looking for work",
        saveValues: [{ savePath: "User.motivations", saveValue: "money" }],
        screenId: "lookForWork",
      },
      {
        type: "save",
        optionText: "I'm trying to see the world",
        saveValues: [{ savePath: "User.motivations", saveValue: "adventure" }],
        screenId: "tryingToSeeTheWorld", // TODO
      },
      {
        type: "save",
        optionText: "I'm running away from something",
        saveValues: [{ savePath: "User.motivations", saveValue: "safety" }],
        screenId: "runningAwayFromSomething", // TODO
      },
    ],
  },
};

const lookForWork: Screen = {
  _id: "lookForWork",
  header: "The Silver Spoon",
  main: [
    {
      url: "Lyra.png",
      alt: "Quiet Druid",
      side: "left",
      sideText: `Well, I'm not really in the hiring business, but I might know
      someone who can help you. I'll bring them by in the morning.`,
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank you",
        screenId: "thankTheDruid_callItANight",
        saveValues: [{ savePath: "User.quests", saveValue: "meetLyraForWork" }],
      },
    ],
  },
};

const tryingToSeeTheWorld: Screen = {
  _id: "tryingToSeeTheWorld",
  header: "The Silver Spoon",
  main: [
    {
      url: "Lyra.png",
      alt: "Quiet Druid",
      side: "left",
      sideText: `I understand that feeling. I've seen a lot of the world myself. 
      I might be able to help you find some interesting places.`,
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank you",
        screenId: "thankTheDruid_callItANight",
        saveValues: [
          { savePath: "User.quests", saveValue: "meetLyraForAdventure" },
        ],
      },
    ],
  },
};

const runningAwayFromSomething: Screen = {
  _id: "runningAwayFromSomething",
  header: "The Silver Spoon",
  main: [
    `The woman is quiet for a moment, just looking at you`,
    {
      url: "Lyra.png",
      alt: "Quiet Druid",
      side: "left",
      sideText: `I understand that. Not all of the world is kind to everyone. 
        If you're looking to make a new start I can introduce you to someone 
        who might be able to help. I'll meet you here tomorrow morning.`,
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank You",
        screenId: "thankTheDruid_callItANight",
        saveValues: [
          { savePath: "User.quests", saveValue: "meetLyraForFreshStart" },
        ],
      },
    ],
  },
};

const thankTheDruid_callItANight: Screen = {
  _id: "thankTheDruid_callItANight",
  header: "The Silver Spoon",
  main: [
    `You thank the woman who introduces herself as Lyra, and head up to your room. 
    The bed is soft and the room is warm, you fall asleep quickly.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "endFirstDay",
        saveValues: [{ savePath: "User.relationships.Lyra", saveValue: "++" }],
      },
    ],
  },
};

// Find a table stuff
const findTable: Screen = {
  _id: "findTable",
  header: "The Silver Spoon",
  main: [
    `You find a small table near the back of the room and take a seat. The barkeep 
    brings you a glass of wine and a menu.`,
    `As you sip your wine and peruse the 
    menu, you overhear a group of merchants at the next table discussing the city's 
    recent economic troubles.`,
  ],
  choiceInformation: {
    text: "Do you eavesdrop on their conversation or mind your own business?",
    options: [
      {
        type: "save",
        optionText: "Eavesdrop",
        screenId: "eavesdrop",
        saveValues: [{ savePath: "User.stats.sneakiness", saveValue: "++" }],
      },
      {
        type: "screen",
        optionText: "Mind your own business",
        screenId: "callItANight_SS",
      },
    ],
  },
};

const eavesdrop: Screen = {
  _id: "eavesdrop",
  header: "The Silver Spoon",
  main: [
    `You lean back in your chair, feigning disinterest as you listen to the merchants' conversation. 
    You learn that the city's recent economic troubles are due to a series of robberies that have 
    targeted the city's wealthiest citizens.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "callItANight_SS",
        saveValues: [
          { savePath: "User.quests", saveValue: "learnAboutRobberies" },
        ],
      },
    ],
  },
};

// SEWER WATER

const sewerWater1: Screen = {
  _id: "sewerWater1",
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
        screenId: "intervene",
      },
      {
        type: "screen",
        optionText: "Observe",
        screenId: "observe",
      },
    ],
  },
};

const callItANight_SW: Screen = {
  ...callItANight,
  _id: "callItANight_SW",
  header: "Sewer Water",
};

const observe: Screen = {
  _id: "observe",
  header: "Sewer Water",
  main: [
    `You decide to observe from a safe distance, not wanting to get involved in whatever trouble 
    is brewing inside. The people in the middle of the argument are dirty and rough looking. You
    notice a few of them have weapons.`,
  ],
  choiceInformation: {
    text: "Do you keep a low profile, get involved, or turn around to find a different inn?",
    options: [
      {
        type: "save",
        optionText: "Keep a low profile",
        screenId: "keepALowProfile",
        saveValues: [{ savePath: "User.stats.cleverness", saveValue: "++" }],
      },
      {
        type: "screen",
        optionText: "Get Involved",
        screenId: "intervene",
      },
      {
        type: "screen",
        optionText: "Find A Different Inn",
        screenId: "findDifferentInn",
      },
    ],
  },
};

const keepALowProfile: Screen = {
  _id: "keepALowProfile",
  header: "Sewer Water",
  main: [
    `You keep a low profile and find a table in the corner, ordering a meal and a drink. 
    You keep an eye on the group, but they seem to be too wrapped up in their argument to notice you.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Next",
        screenId: "callItANight_SW",
      },
    ],
  },
};

const intervene: Screen = {
  _id: "intervene",
  header: "Sewer Water",
  main: [
    `You push open the door and stride into the inn, your presence drawing the attention of the 
    arguing group.`,
  ],
  choiceInformation: {
    text: "Do you try to defuse the situation or take a more aggressive approach?",
    options: [
      {
        type: "conditionalScreen",
        optionText: "Defuse",
        conditionPath: "User.stats.charm",
        conditionOperator: ">=",
        conditionValue: "1",
        trueScreenId: "defuseSituation_success",
        falseScreenId: "defuseSituation_failure",
      },
      {
        type: "screen",
        optionText: "Aggressive",
        screenId: "aggressive",
      },
    ],
  },
};

const aggressive: Screen = {
  _id: "aggressive",
  header: "Sewer Water",
  main: [
    `You take a more aggressive approach, and the group responds in kind. 
    You find yourself in the middle of a brawl.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "middleOfBrawl",
        saveValues: [
          { savePath: "User.stats.brawn", saveValue: "++" },
          { savePath: "User.stats.goodness", saveValue: "--" },
        ],
      },
    ],
  },
};

const defuseSituation_success: Screen = {
  _id: "defuseSituation_success",
  header: "Sewer Water",
  main: [
    `You manage to defuse the situation with a few well-chosen words, and the group 
    disperses with grumbles and glares.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "callItANight_SW",
        saveValues: [{ savePath: "User.stats.goodness", saveValue: "++" }],
      },
    ],
  },
};

const defuseSituation_failure: Screen = {
  _id: "defuseSituation_failure",
  header: "Sewer Water",
  main: [
    `Your attempt to defuse the situation only seems to make things worse. 
    The group turns their anger on you, and you find yourself in the middle of a brawl.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "middleOfBrawl",
        saveValues: [
          { savePath: "User.stats.brawn", saveValue: "++" },
          { savePath: "User.stats.goodness", saveValue: "--" },
        ],
      },
    ],
  },
};

const middleOfBrawl: Screen = {
  _id: "middleOfBrawl",
  header: "Sewer Water",
  main: [
    `You're dodging fists and trying to keep your feet as the other patrons join in the fray.`,
    `Out of nowhere, you feel a tug at the back of your neck and you're suddenly yanked
    from the fight and out the door. You find yourself face to face with a tall figure`,
    {
      url: "Hunstan.png",
      alt: "Tall Grizzled Man",
      side: "right",
      sideText:
        "Are you stupid or something? You should know better than to get involved in a fight in a place like this!",
    },
    `He gives you a shake and a stern look before releasing you and walking back inside.`,
  ],
  choiceInformation: {
    text: "Do you follow him back inside or find a different inn?",
    options: [
      {
        type: "save",
        optionText: "Find a different inn",
        screenId: "findDifferentInn",
        saveValues: [
          { savePath: "User.stats.sneakiness", saveValue: "--" },
          { savePath: "User.coins", saveValue: "++" },
        ],
      },
      {
        type: "screen",
        optionText: "Follow him inside",
        screenId: "followHimInside",
      },
    ],
  },
};

const followHimInside: Screen = {
  _id: "followHimInside",
  header: "Sewer Water",
  main: [
    `You follow the man back inside, and he leads you to a table in the corner.`,
    `He sits down and gestures for you to do the same.`,
    {
      url: "Hunstan.png",
      alt: "Tall Grizzled Man",
      side: "right",
      sideText:
        "You're lucky I was there to pull you out of that mess. You look like you could use a drink. What are you doing in Belenham?",
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "I'm looking to disappear",
        screenId: "lookingToDisappear",
        saveValues: [{ savePath: "User.motivations", saveValue: "safety" }],
      },
      {
        type: "save",
        optionText: "I'm trying to see the world",
        screenId: "SW_tryingToSeeTheWorld",
        saveValues: [{ savePath: "User.motivations", saveValue: "adventure" }],
      },
      {
        type: "save",
        optionText: "I'm looking for answers",
        screenId: "lookingForAnswers",
        saveValues: [{ savePath: "User.motivations", saveValue: "knowledge" }],
      },
    ],
  },
};

const lookingToDisappear: Screen = {
  _id: "lookingToDisappear",
  header: "Sewer Water",
  main: [
    {
      url: "Hunstan.png",
      alt: "Tall Grizzled Man",
      side: "right",
      sideText:
        "I understand that. I know someone who is very good at that sort of thing. I'll introduce you in the morning.",
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank you",
        screenId: "thankTheMan_callItANight",
        saveValues: [
          { savePath: "User.quests", saveValue: "meetGrizzledManForDisappear" },
        ],
      },
    ],
  },
};

const SW_tryingToSeeTheWorld: Screen = {
  _id: "SW_tryingToSeeTheWorld",
  header: "Sewer Water",
  main: [
    {
      url: "Hunstan.png",
      alt: "Tall Grizzled Man",
      side: "right",
      sideText:
        "I understand that. I might be able to help you find some interesting places.",
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank you",
        screenId: "thankTheMan_callItANight",
        saveValues: [
          { savePath: "User.quests", saveValue: "meetGrizzledManForAdventure" },
        ],
      },
    ],
  },
};

const lookingForAnswers: Screen = {
  _id: "lookingForAnswers",
  header: "Sewer Water",
  main: [
    {
      url: "Hunstan.png",
      alt: "Tall Grizzled Man",
      side: "right",
      sideText: `Getting answers can be dangerous. I might know someone who 
      can help you. She's got ins with the right people. Meet me here tomorrow
      morning and I'll introduce you.`,
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Thank you",
        screenId: "thankTheMan_callItANight",
        saveValues: [
          { savePath: "User.quests", saveValue: "meetGrizzledManForAnswers" },
        ],
      },
    ],
  },
};

const thankTheMan_callItANight: Screen = {
  _id: "thankTheMan_callItANight",
  header: "Sewer Water",
  main: [
    `You thank the man who introduces himself as Hunstan, and after eating some gritty 
    food you head up to your room. The bed is scratchy and there's a draft in the room, 
    but you fall asleep quickly.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "Next",
        screenId: "endFirstDay",
        saveValues: [
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
        ],
      },
    ],
  },
};

const findDifferentInn: Screen = {
  _id: "findDifferentInn",
  header: "",
  main: [
    `You decide to find a different inn.`,
    `There's The Rusty Sword, it's windows are yellow with light and laughter seems to spill 
    from it's hearth.`,
    `There's also The Silver Spoon, it's windows are dark and the only sound you hear is the soft
    clinking of silverware and occasionally a low murmur.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "The Rusty Sword",
        screenId: "rustySword_1",
        saveValues: [
          { savePath: "User.stats.goodness", saveValue: "++" },
          { savePath: "User.coins", saveValue: "--" },
          { savePath: "User.coins", saveValue: "--" },
        ],
      },
      {
        type: "save",
        optionText: "The Silver Spoon",
        screenId: "silverSpoon1",
        saveValues: [
          { savePath: "User.stats.cleverness", saveValue: "++" },
          { savePath: "User.coins", saveValue: "--" },
          { savePath: "User.coins", saveValue: "--" },
          { savePath: "User.coins", saveValue: "--" },
        ],
      },
    ],
  },
};

// End of Day 0

const endFirstDay: Screen = {
  _id: "endFirstDay",
  header: "You have finished your first day in Belenham!`",
  main: [``, ``, ``, ``],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Restart game",
        screenId: "quit",
      },
    ],
  },
};

export const fighterScreens = [
  theAdventureBegins,
  rustySword_1,
  silverSpoon1,
  sewerWater1,
  joinTheFestivities,
  winArmWrestle,
  callItANight,
  seekSolitude,
  stepInToHelp,
  approachFigure,
  loseArmWrestle,
  lookForWork,
  tryingToSeeTheWorld,
  runningAwayFromSomething,
  thankTheDruid_callItANight,
  callItANight_SS,
  findTable,
  eavesdrop,
  callItANight_SW,
  intervene,
  defuseSituation_success,
  defuseSituation_failure,
  findDifferentInn,
  middleOfBrawl,
  followHimInside,
  thankTheMan_callItANight,
  lookingToDisappear,
  SW_tryingToSeeTheWorld,
  lookingForAnswers,
  aggressive,
  keepALowProfile,
  observe,
  tryingToMakeMoney,
  tryingToProveMyself,
  tryingToGetRevenge,
  thankTheKnight_callItANight,
  tryToProveYourself,
  yesToWorkingTogether,
  endFirstDay,
];
