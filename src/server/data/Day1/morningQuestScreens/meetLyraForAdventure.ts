import { Screen } from "../../../../types";

const meetLyraForAdventure: Screen = {
  _id: "meetLyraForAdventure",
  header: "Belenham",
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
            savePath: "User.quests.meetLyraForAdventure.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "No",
        screenId: "headOut",
        saveValues: [
          {
            savePath: "User.quests.meetLyraForAdventure.status",
            saveValue: "completed",
          },
        ],
      },
    ],
  },
};

export const screens = [meetLyraForAdventure];
