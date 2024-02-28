import { Screen } from "../../../../types";

const meetHunstanForDisappear: Screen = {
  _id: "meetHunstanForDisappear",
  header: "Belenham",
  main: [
    `You head out into Belenham, lingering around the inn for a little while waiting for Hunstan.`,
    `After the better part of half an hour you see him lumbering towards you, a young woman at his side.`,
    `He notices you and points you out to the woman and you straighten slightly as they approach.`,
    {
      url: "Hunstan.png",
      alt: "Hunstan",
      side: "left",
      sideText: [
        `This is %%{User.name}, the one I was telling you about. They need to get away and from what they
        said, get away quick.`,
        `This is Lyra, she's got a nose for trouble and a good head on her shoulders. She's going to help you.`,
      ],
    },
    `Before you or Lyra can respond, Hunstan turns away and walks off down the road without saying goodbye.`,
    `You and Lyra look at each other and she shrugs.`,
    {
      url: "Lyra.png",
      alt: "Lyra",
      side: "left",
      sideText: [
        `I'm glad to meet you, %%{User.name}. I'm sorry about Hunstan, he can be a bit gruff but he's a
        good man. Helped me out a lot when I first got to the city.`,
        `How're you feeling about this now? Ready to disappear?`,
      ],
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "I'm ready",
        screenId: "", // TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForDisappear.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "What do you mean by disappear?",
        screenId: "moreInformationOnDisappearing", // TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForDisappear.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
    ],
  },
};

const moreInformationOnDisappearing: Screen = {
  _id: "moreInformationOnDisappearing",
  header: "Belenham",
  main: [
    `Lyra looks around before leaning in close to you.`,
    {
      url: "Lyra.png",
      alt: "Lyra",
      side: "left",
      sideText: [
        `I can't tell you much, but I can help you.`,
        `We can get you out of the city tonight if you want. I've got a place you can stay for a while.`,
        `I can't promise it'll be easy, but it'll be better than whatever you're running from.`,
      ],
    },
    `She looks at you expectantly.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "There's been a misunderstanding",
        screenId: "", // TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForDisappear.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "Maybe later",
        screenId: "", // TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForDisappear.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "I'm ready",
        screenId: "", // TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForDisappear.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Lyra", saveValue: "++" },
        ],
      },
    ],
  },
};

export const screens = [meetHunstanForDisappear, moreInformationOnDisappearing];
