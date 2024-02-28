import { Screen } from "../../../../types";

const findATroupeToJoin: Screen = {
  _id: "findATroupeToJoin",
  header: "Belenham",
  main: [
    `You step outside into the bright morning sun and take a deep breath, feeling ready to 
    face the day. The marketplace is bustling with activity and you can hear the sound of
    children laughing and playing in the distance.`,
    `Bard troupe are not known to hold auditions in the marketplace, but you might be able to
    meet a few and ask if they are looking for new members.`,
    `You also realized you could ask around at the taverns. The Rusty Sword, The Silver Spoon,
    even Sewer Water might have some leads.`,
  ],
  choiceInformation: {
    text: "Do you explore the marketplace or the taverns?",
    options: [
      {
        type: "screen",
        optionText: "Explore the marketplace",
        screenId: "exploreMarketplace",
      },
      {
        type: "screen",
        optionText: "Ask around at the taverns",
        screenId: "askAtTaverns",
      },
    ],
  },
};

export const screens = [findATroupeToJoin];
