import { Screen } from "../../../../types";

const meetHunstanForAdventure: Screen = {
  _id: "meetHunstanForAdventure",
  header: "Belenham",
  main: [
    `You head out into Belenham, lingering around the inn for a little while waiting for Hunstan.`,
    `After the better part of half an hour you see him lumbering towards you.`,
    {
      url: "Hunstan.png",
      alt: "Hunstan",
      side: "right",
      sideText: [
        `I'm glad to see you again, %%{User.name}. I was hoping you'd show up.`,
        `I'm looking for someone to help me with a little problem I've been having. Rumor has it
        that there's a group of bandits that have been causing trouble in the city. They call 
        themselves the Red Hot Opera and they've mostly been attacking the wealthier areas of 
        the city`,
        `I need someone to scope out where we think they're hiding and report back to me. I can
        pay you a little bit for your time and if you do well, I might have more work for you.`,
      ],
    },
  ],
  choiceInformation: {
    text: "What do you say?",
    options: [
      {
        type: "save",
        optionText: "I actually think I'm better on my own.",
        screenId: "", // TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForAdventure",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "Tell me where to go and I'll do it.",
        screenId: "", //TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForAdventure",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
          { savePath: "User.motivations", saveValue: "money" },
        ],
      },
      {
        type: "save",
        optionText: "I need some more information.",
        screenId: "", //TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForAdventure",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
          { savePath: "User.stats.cleverness", saveValue: "++" },
          { savePath: "User.motivations", saveValue: "money" },
        ],
      },
    ],
  },
};

export const screens = [meetHunstanForAdventure];