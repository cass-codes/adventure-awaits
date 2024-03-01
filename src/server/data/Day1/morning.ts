import { ChoiceOption, Screen } from "../../../types/Screen";
import { SavingService } from "../../SavingService/SavingService";
import { QuestStatus } from "../../../types/Quest";
import { Tavern } from "../../../types/User";

// TODO: check all of these screens to make sure they have the right header.
// TODO: finish the evalWhichTavern fn and the respective screens

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
        screenId: (): string => {
          const user = SavingService.loadUser();
          switch (user.tavern) {
            case Tavern.TheRustySword:
              return wakeUp_RustySword._id;
            case Tavern.TheSilverSpoon:
              return wakeUp_SilverSpoon._id; // TODO
            case Tavern.SewerWater:
              return "Sewer Water"; //TODO
            default:
              throw new Error("Invalid tavern");
          }
        },
      },
    ],
  },
};

const wakeUp_RustySword: Screen = {
  _id: "wakeUp_RustySword",
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
        screenId: "sitAndChat",
      },
      {
        type: "screen",
        optionText: "Head out",
        screenId: "headOut",
      },
    ],
  },
};

const wakeUp_SilverSpoon: Screen = {
  _id: "wakeUp_SilverSpoon",
  header: "The Silver Spoon",
  main: [
    `You wake up in your room at The Silver Spoon. The sun is shining through the window, 
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
        screenId: "sitAndChat",
      },
      {
        type: "screen",
        optionText: "Head out",
        screenId: "headOut",
      },
    ],
  },
};

function evalStartFirstDay() {
  const user = SavingService.loadUser();
  const quests = user.quests;
  const options = [
    {
      type: "screen",
      optionText: "Explore the marketplace",
      screenId: "day1Marketplace",
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
  _id: "headOut",
  header: "Belenham",
  main: [
    `You head out into the city. The streets are bustling with people, and the sun is shining. 
    You feel a sense of excitement and adventure as you contemplate the day before you.`,
  ],
  choiceInformation: {
    text: "What is do you do?",
    options: evalStartFirstDay,
  },
};

const sitAndChat: Screen = {
  _id: "sitAndChat",
  header: "The Rusty Sword",
  main: [
    `You sit at the bar and chat with the barkeep. He tells you about the latest news and gossip
    in the city.`,
    (): string => {
      const user = SavingService.loadUser();
      return user.quests.learnAboutRobberies.status === QuestStatus.notFound
        ? `You learn that the city has had some recent economic troubles and many believe that they
      are due to a series of robberies that have targeted the city's wealthiest citizens.`
        : "";
    },
    `You eat a hearty breakfast and drink a cup of coffee. You feel ready to take on the day.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      (): ChoiceOption => {
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
      },
    ],
  },
};

export const startingMorningScreens = [
  wakeUp_RustySword,
  wakeUp_SilverSpoon,
  sitAndChat,
  headOut,
  endFirstDay,
];
