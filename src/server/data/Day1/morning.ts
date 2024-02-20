import { v4 as uuid } from "uuid";
import {
  EvaluatedChoiceOption,
  SaveChoiceOption,
  Screen,
} from "../../../types/Screen";
import { SavingService } from "../../SavingService/SavingService";
import { QuestStatus } from "../../../types/Quest";
import { Tavern } from "../../../types/User";

const morningScreens: Screen[] = [];

function evalStartFirstDay() {
  const user = SavingService.loadUser();
  const quests = user.quests;
  const options = [
    {
      type: "screen",
      optionText: "Explore the marketplace",
      screenId: "Explore the marketplace", // TODO
    },
  ];
  Object.values(quests).forEach((quest) => {
    if (quest.status === QuestStatus.active) {
      options.push({
        type: "screen",
        optionText: quest.displayText,
        screenId: quest.screenId,
      });
    }
  });
  return options;
}
const headOut: Screen = {
  _id: uuid(),
  header: "Belenham",
  main: [
    `You head out into the city. The streets are bustling with people, and the sun is shining. 
    You feel a sense of excitement and adventure as you contemplate the day before you.`,
  ],
  choiceInformation: {
    text: "What is the first thing you do?",
    options: evalStartFirstDay,
  },
};
morningScreens.push(headOut);

function evalMain_sitAndChat() {
  const user = SavingService.loadUser();
  return user.quests.learnAboutRobberies.status === QuestStatus.notFound
    ? `You learn that the city has had some recent economic troubles and many believe that they
  are due to a series of robberies that have targeted the city's wealthiest citizens.`
    : "";
}
function evalOpts_sitAndChat() {
  const user = SavingService.loadUser();
  return user.quests.learnAboutRobberies.status === QuestStatus.notFound
    ? {
        type: "save",
        optionText: "Head out",
        screenId: headOut._id,
        saveValues: [
          {
            savePath: "User.quests",
            saveValue: "learnAboutRobberies",
          },
        ],
      }
    : {
        type: "screen",
        optionText: "Head out",
        screenId: headOut._id,
      };
}
const sitAndChat: Screen = {
  _id: uuid(),
  header: "The Rusty Sword",
  main: [
    `You sit at the bar and chat with the barkeep. He tells you about the latest news and gossip
    in the city.`,
    evalMain_sitAndChat,
    `You eat a hearty breakfast and drink a cup of coffee. You feel ready to take on the day.`,
  ],
  choiceInformation: {
    text: "",
    options: [evalOpts_sitAndChat],
  },
};
morningScreens.push(sitAndChat);

const wakeUp_RustySword: Screen = {
  _id: uuid(),
  header: "The Rusty Sword",
  main: [
    `You wake up in your room at The Rusty Sword. The sun is shining through the window, 
    and the birds are chirping. You gather your things and head downstairs, smelling the
    wonderful aromas of coffee and breakfast. The barkeep nods at you as you appear in the
    dining room.
    `,
  ],
  choiceInformation: {
    text: "Do you sit and chat with him and have breakfast, or head out into the city?",
    options: [
      {
        type: "screen",
        optionText: "Sit and chat",
        screenId: sitAndChat._id,
      },
      {
        type: "screen",
        optionText: "Head out",
        screenId: headOut._id,
      },
    ],
  },
};
morningScreens.push(wakeUp_RustySword);

function evalWhichTavern() {
  const user = SavingService.loadUser();
  switch (user.tavern) {
    case Tavern.TheRustySword:
      return wakeUp_RustySword._id;
    case Tavern.TheSilverSpoon:
      return "The Silver Spoon"; // TODO
    case Tavern.SewerWater:
      return "Sewer Water"; //TODO
  }
}
const endFirstDay: Screen = {
  _id: "endFirstDay",
  header: "You have finished your first day in Belenham!`",
  main: [],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "quit",
        optionText: "Restart game",
        screenId: "0",
      },
      {
        type: "screen",
        optionText: "Continue to Day 1 (in development)",
        screenId: evalWhichTavern,
      },
    ],
  },
};
morningScreens.push(endFirstDay);

// QUEST SCREENS
function evalStats(): Pick<
  SaveChoiceOption,
  "type" | "optionText" | "screenId"
>[] {
  const user = SavingService.loadUser();
  const options: Pick<SaveChoiceOption, "type" | "optionText" | "screenId">[] =
    [];
  if (user.stats.brawn > 0) {
    options.push({
      type: "save",
      optionText: "I'm pretty strong.",
      screenId: "prettyStrong",
    });
  }
  if (user.stats.goodness > 0) {
    options.push({
      type: "save",
      optionText: "People say I'm a fair judge.",
      screenId: "fairJudge",
    });
  }
  if (user.stats.sneakiness > 0) {
    options.push({
      type: "save",
      optionText: "I'm good a sneaking around.",
      screenId: "sneakingAround",
    });
  }
  if (user.stats.cleverness > 0) {
    options.push({
      type: "save",
      optionText: "I'm clever and good with books.",
      screenId: "cleverBooks",
    });
  }
  if (user.stats.magic > 0) {
    options.push({
      type: "save",
      optionText: "I'm decent with magic and the arcane.",
      screenId: "magicAndArcane",
    });
  }
  if (user.stats.charm > 0) {
    options.push({
      type: "save",
      optionText: "I'm good with people.",
      screenId: "goodWithPeople",
    });
  }
  return options;
}

function evalStatsForKael(): EvaluatedChoiceOption[] {
  const options = evalStats();
  const newOptions: EvaluatedChoiceOption[] = [];
  options.forEach((option) => {
    const newOption: EvaluatedChoiceOption = {
      type: "save",
      optionText: option.optionText,
      screenId: option.screenId,
      saveValues: [
        {
          savePath: "User.quests.meetBeardedKnightForWork",
          saveValue: "completed",
        },
      ],
    };
    newOptions.push(newOption);
  });
  return newOptions;
}
const meetKaelForWork: Screen = {
  _id: "meetKaelForWork",
  header: "The Rusty Sword",
  main: [
    `You see Kael heading towards The Rusty Sword shortly after you step outside. 
    They idle up to you, giving you a friendly wave.`,
    {
      url: "Kael.png",
      alt: "Kael",
      side: "left",
      sideText: [
        `Good morning! I know I said last night that I might have some work 
      for you but I realize I didn't get a lot of details from you about what 
      type of work you're looking for. I know a few people in town who might be
      able to help if you tell me what you're good at.`,
      ],
    },
  ],
  choiceInformation: {
    text: "What do you tell Kael you specialize in?",
    options: evalStatsForKael,
  },
};
morningScreens.push(meetKaelForWork);

const meetKaelForAdventure: Screen = {
  _id: "meetKaelForAdventure",
  header: "The Rusty Sword",
  main: [
    `You see Kael heading towards The Rusty Sword shortly after you step outside. 
    They idle up to you, giving you a friendly wave.`,
    {
      url: "Kael.png",
      alt: "Kael",
      side: "left",
      sideText: [
        `Good morning! Last night you seemed keen on proving yourself. 
      I know of a tournament happening in town today. My troupe and I were going
      to enter but we need one more person and I think you'd be a good fit.
      What do you say?`,
      ],
    },
  ],
  choiceInformation: {
    text: "Do you join the tournament with Kael and their group?",
    options: [
      {
        type: "save",
        optionText: "Yes",
        screenId: "joinTournament",
        saveValues: [
          {
            savePath: "User.quests.meetBeardedKnightForAdventure",
            saveValue: "completed",
          },
          { savePath: "User.quests", saveValue: "enterTournamentWithKael" },
          { savePath: "User.relationships.Kael", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "No",
        screenId: "noTournament",
        saveValues: [
          {
            savePath: "User.quests.meetBeardedKnightForAdventure",
            saveValue: "completed",
          },
        ],
      },
    ],
  },
};
morningScreens.push(meetKaelForAdventure);

const noTournament: Screen = {
  _id: "noTournament",
  header: "The Rusty Sword",
  main: [
    `You decline Kael's offer. They seem a little disappointed but understanding.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Head out",
        screenId: headOut._id,
      },
    ],
  },
};
morningScreens.push(noTournament);

function evalIfMetHunstan() {
  const user = SavingService.loadUser();
  return user.relationships.Hunstan && user.relationships.Hunstan > 0
    ? {
        img: "Hunstan.png",
        alt: "Hunstan",
        side: "left",
        sideText: `I'm glad to see you not in quite so much trouble, this is a much
    better inn to be staying at. Lyra says you're here looking for work? What're you good at?`,
      }
    : {
        img: "Hunstan.png",
        alt: "Hunstan",
        side: "left",
        sideText: `The name's Hunstan. I's good to meet you I guess. Lyra says you're
    here looking for work? What're you good at?`,
      };
}
function evalStatsForLyraAndHunstan() {
  const options = evalStats();
  const newOptions: EvaluatedChoiceOption[] = [];
  options.forEach((option) => {
    const newOption: EvaluatedChoiceOption = {
      type: "save",
      optionText: option.optionText,
      screenId: option.screenId,
      saveValues: [
        {
          savePath: "User.quests.meetLyraForWork",
          saveValue: "completed",
        },
      ],
    };
    newOptions.push(newOption);
  });
  return newOptions;
}
const meetLyraForWork: Screen = {
  _id: "meetLyraForWork",
  header: "The Silver Spoon",
  main: [
    `You wait for a few minutes outside of the Silver Spoon before you see Lyra
    approaching. She is walking slowly with a tall gruff looking man with a shaggy
    beard. You wave as they head over to you. `,
    {
      url: "Lyra.png",
      alt: "Lyra",
      side: "left",
      sideText: [
        `Hi %%{User.name}, I'm glad to see you again. Hunstan here was 
      wondering if you were even real or if you'd show at all.`,
      ],
    },
    `You look at the man next to her and shake his hand. He grunts at you and
    Lyra laughs.`,
    evalIfMetHunstan,
  ],
  choiceInformation: {
    text: "What do you tell Lyra you specialize in?",
    options: evalStatsForLyraAndHunstan,
  },
};
morningScreens.push(meetLyraForWork);

const meetLyraForAdventure: Screen = {
  _id: "meetLyraForAdventure",
  header: "The Silver Spoon",
  main: [
    `You wait for a few minutes outside of the Silver Spoon before you see Lyra
    approaching. She walks up to you and you notice she's holding a small backpack 
    as well as her staff from last night.`,
    {
      url: "Lyra.png",
      alt: "Lyra",
      side: "left",
      sideText: [
        `I'm glad to see you again, %%{User.name}. I was hoping you'd show up. I have a 
      feeling that today is going to be a big day for us.`,
      ],
    },
    `You walk idly with Lyra for a little while and she suggests that you head out of the city
    for a different kind of adventure. She tells you about an enchanted forest outside of the city
    that has been known to house strange and magical creatures.`,
  ],
  choiceInformation: {
    text: "Do you go with Lyra?",
    options: [
      {
        type: "save",
        optionText: "Yes",
        screenId: "goWithLyraToEnchantedForest",
        saveValues: [
          {
            savePath: "User.quests.meetLyraForAdventure",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "No",
        screenId: "noLyra",
        saveValues: [
          {
            savePath: "User.quests.meetLyraForAdventure",
            saveValue: "completed",
          },
        ],
      },
    ],
  },
};
morningScreens.push(meetLyraForAdventure);

const meetLyraForFreshStart: Screen = {
  _id: "meetLyraForFreshStart",
  header: "The Silver Spoon",
  main: [
    `You wait for a few minutes outside of the Silver Spoon before you see Lyra
    approaching. She walks up to you and you notice there is someone else walking
    beside her.`,
    {
      url: "Lyra.png",
      alt: "Lyra",
      side: "left",
      sideText: [
        `I'm glad to see you again, %%{User.name}. I was hoping you'd show up. You told me last 
        night that you wanted a fresh start.`,
        `This is Hunstan. He's a bit grumpy but he knows this city like the back of his hand.`,
      ],
    },
    `You walk idly with Lyra for a little while chatting`,
  ],
  choiceInformation: {
    text: "Do you go with Lyra?",
    options: [
      {
        type: "save",
        optionText: "Yes",
        screenId: "goWithLyraToEnchantedForest",
        saveValues: [
          {
            savePath: "User.quests.meetLyraForFreshStart",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "No",
        screenId: "noLyra",
        saveValues: [
          {
            savePath: "User.quests.meetLyraForFreshStart",
            saveValue: "completed",
          },
        ],
      },
    ],
  },
};
morningScreens.push(meetLyraForFreshStart);

export { morningScreens };
