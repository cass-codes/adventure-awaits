import { Screen } from "../../../../types";

const meetSerenaForLute: Screen = {
  _id: "meetSerenaForLute",
  header: "Belenham",
  main: [
    `You step outside into the bright morning sun and take a deep breath, feeling ready to face the day.
  After a moment you remember you were going to meet Serena as she promised to 
  take you to meet a friend of hers who makes lutes. You idle around the front of the
  inn for a little while waiting for her. Eventually you see her coming down the road.`,
    `She holds up a small box with a tantalizing smell wafting out of it as she approaches.`,
    {
      url: "Serena.png",
      alt: "Serena",
      side: "left",
      sideText: [
        `Hey %%{User.name}! Sorry I'm a little late, I wanted to grab breakfast first. 
        I realized this morning that I haven't eaten in two days!`,
        `What do you think? Ready to buy your lute today?!`,
      ],
    },
  ],
  choiceInformation: {
    text: "What do you say?",
    options: [
      {
        optionText: "I'm ready!",
        screenId: "buyLute",
        type: "screen",
      },
      {
        optionText: "I'm not ready yet.",
        screenId: "notReady", // will lead to `headOut` screen
        type: "screen",
      },
    ],
  },
};

export const screens = [meetSerenaForLute];
