import { Screen } from "../../../../types";

const meetLyraForFreshStart: Screen = {
  _id: "meetLyraForFreshStart",
  header: "Belenham",
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
    `You greet Hunstan and the three of you talk for a little while. Hunstan
    tells you about a job he's looking to fill for the moment that will help you start 
    to make a name for yourself.`,
    {
      url: "Hunstan.png",
      alt: "Hunstan",
      side: "right",
      sideText: [
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
        optionText: "Who are you and why should I trust you?",
        screenId: "", //TODO
        saveValues: [
          {
            savePath: "User.quests.meetLyraForFreshStart.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
          { savePath: "User.stats.cleverness", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "Tell me where to go and I'll do it.",
        screenId: "", //TODO
        saveValues: [
          {
            savePath: "User.quests.meetLyraForFreshStart.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
          { savePath: "User.motivations", saveValue: "money" },
        ],
      },
      {
        type: "save",
        optionText: "I actually think I'm better on my own.",
        screenId: "", // TODO
        saveValues: [
          {
            savePath: "User.quests.meetLyraForFreshStart.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
        ],
      },
    ],
  },
};

export const screens = [meetLyraForFreshStart];
