import { Screen } from "../../../../types";

const meetHunstanForAnswers: Screen = {
  _id: "meetHunstanForAnswers",
  header: "Belenham",
  main: [
    `You head out into Belenham, lingering around the inn for a little while waiting for Hunstan.`,
    `After the better part of half an hour you see him lumbering towards you, a short and stout
    figure walking next to him.`,
    {
      url: "Hunstan.png",
      alt: "Hunstan",
      side: "right",
      sideText: [
        `I'm glad to see you again, %%{User.name}. I was hoping you'd show up.`,
        `This here is Dulgot, he's a good friend and works at Foxtail Academy. 
        He can help get you a spot for their next class if you're able to prove yourself.`,
      ],
    },
    `The shorter man regards you with a stern eye.`,
    {
      url: "Dulgot.png",
      alt: "Dulgot",
      side: "right",
      sideText: [
        `I'm not one for wasting time, so I'll get right to it.`,
        `There's a group of bandits that have been causing trouble in the city. They call 
        themselves the Red Hot Opera and they've mostly been attacking the wealthier areas of 
        the city. I need someone to scope out where we think they're hiding and report back to me.`,
        `If you can do that quickly and without getting yourself hurt or caught I should be able to
        get you a spot at the academy.`,
      ],
    },
  ],
  choiceInformation: {
    text: "What do you say?",
    options: [
      {
        type: "save",
        optionText: "I actually think I'm better on my own.",
        screenId: "rejectHunstanAndDulgotForJob",
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForAnswers.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
          { savePath: "User.relationships.Dulgot", saveValue: "++" },
          { savePath: "User.stats.charm", saveValue: "--" },
        ],
      },
      {
        type: "save",
        optionText: "Tell me where to go and I'll do it.",
        screenId: "", //TODO
        saveValues: [
          {
            savePath: "User.quests.meetGrizzledManForAnswers.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Hunstan", saveValue: "++" },
          { savePath: "User.relationships.Dulgot", saveValue: "++" },
          { savePath: "User.motivations", saveValue: "knowledge" },
        ],
      },
    ],
  },
};

const rejectHunstanAndDulgotForJob: Screen = {
  _id: "rejectHunstanAndDulgotForJob",
  header: "Belenham",
  main: [
    {
      url: "Hunstan.png",
      alt: "Hunstan",
      side: "right",
      sideText: [
        `Think you can make it on your own, eh? Well I'm not going to stop you. I wish you hadn't dragged me over here for nothing, though.`,
      ],
    },
    `Hunstan turns and walks away. Dulgot gives you a disappointed shake of his head.`,
    {
      url: "Dulgot.png",
      alt: "Dulgot",
      side: "right",
      sideText: [
        `You could have done well with us, %%{User.name}. Come find me if you change your mind.`,
      ],
    },
    `Dulgot walks off, leaving you standing in the street.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Head out",
        screenId: "headOut",
        // TODO: save something about finding Dulgot later
      },
    ],
  },
};

export const screens = [meetHunstanForAnswers, rejectHunstanAndDulgotForJob];
