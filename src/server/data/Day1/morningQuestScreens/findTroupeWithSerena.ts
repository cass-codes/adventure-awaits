import { Screen } from "../../../../types";

const findTroupeWithSerena: Screen = {
  _id: "findTroupeWithSerena",
  header: "Belenham",
  main: [
    `You step outside into the bright morning sun and take a deep breath, feeling ready to face the day.
  You idle around the front of the inn for a little while but then you see Serena heading in your direction.`,
    `She holds up a small box with a tantalizing smell wafting out of it as she approaches.`,
    {
      url: "Serena.png",
      alt: "Serena",
      side: "right",
      sideText: [
        `Hey %%{User.name}! I'm glad you're here! I grabbed breakfast for us, 
        I realized this morning that I haven't eaten in two days!`,
        `What do you think? Ready to find our troupe?!`,
      ],
    },
    `The marketplace is bustling with activity and you can hear the sound of children laughing 
    and playing in the distance.`,
    `You realized that bard troupe are not known to hold auditions 
    in the marketplace, but you might be able to meet a few and ask if they are looking for new 
    members.`,
    `You also realized you could ask around at the taverns. The Rusty Sword, The Silver Spoon,
    even Sewer Water might have some leads.`,
  ],
  choiceInformation: {
    text: "Where do you start",
    options: [
      {
        type: "screen",
        optionText: "Explore the marketplace",
        screenId: "exploreMarketplace_withSerena",
      },
      {
        type: "screen",
        optionText: "Ask around at the taverns",
        screenId: "askAtTaverns_withSerena",
      },
    ],
  },
};

export const screens = [findTroupeWithSerena];
