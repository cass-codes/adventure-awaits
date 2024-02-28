import { Screen } from "../../../../types";

const workWithSomerild: Screen = {
  _id: "workWithSomerild",
  header: "Belenham",
  main: [
    `You step outside into the bright morning sun and take a deep breath, you're ready to face
    the day. It doesn't take long before you see Somerild heading towards you down the road.
    She's wearing her leather armor from the night before and is carrying a small rucksack.`,
    {
      url: "Somerild.png",
      alt: "Somerild",
      side: "left",
      sideText: [
        `Hey %%{User.name}!! I was hoping you'd still be here. I've been up since dawn
      looking at the job boards and I think I found some good ones for us! What do you think?`,
      ],
    },
    `She shows you three sheets of parchment she's clearly pulled off of a job board somewhere.
    They have different styles of writing and are all in different colors of ink.
    You study them a moment, not knowing which to pick.`,
    `1. `, // TODO: Add the first job here
    `2. `, // TODO: Add the second job here
    `3. `, // TODO: Add the third job here
  ],
  choiceInformation: {
    text: "Which job do you chose?",
    options: [
      {
        type: "screen",
        optionText: "The first looks good.",
        screenId: "firstJob", // TODO
      },
      {
        type: "screen",
        optionText: "How about the second one?",
        screenId: "secondJob", // TODO
      },
      {
        type: "screen",
        optionText: "This third one looks fun.",
        screenId: "thirdJob", // TODO
      },
    ],
  },
};

export const screens = [workWithSomerild];
