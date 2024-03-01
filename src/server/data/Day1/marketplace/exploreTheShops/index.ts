import { Screen } from "../../../../../types/Screen";
import { screens as blacksmithScreens } from "./visitTheBlacksmith";

const exploreTheShops: Screen = {
  _id: "exploreTheShops",
  header: "Explore the Shops",
  main: [
    `You decide to explore the shops. There are so many to choose from!`,
    `The blacksmith is a large, open-air building with a forge in the back. The sound of metal on metal rings out. 
    You see walls lined with weapons and armor, and a few people are browsing.`,
    `The general store is a small building with a sign that reads "Gadgets and Gizmos". The door is propped open
    and the smell of fresh ink and parchment wafts out. You see a few people inside, looking at various items.`,
    `The potion shop is a small, cozy building with no sign, just a picture of a potion bottle. The smell of herbs and
    flowers is strong even with the door closed. The windows are dark and you can't see if anyone is inside.`,
    `The bookstore is a large, two-story building with a sign that reads "The Book Nook". The windows are open and you
    can see people inside, reading and chatting. A young woman sweeps the front steps.`,
    `The instrument shop is a small building with a sign that reads "Melody's Music". The door is open and you can hear
    the unmistakable sound of a child singing off key.`,
  ],
  choiceInformation: {
    text: "Where do you go?",
    options: [
      {
        type: "screen",
        optionText: "Do something else",
        screenId: "day1Marketplace_again",
      },
      {
        type: "screen",
        optionText: "Visit the blacksmith",
        screenId: "visitTheBlacksmith",
      },
      {
        type: "screen",
        optionText: "Visit the general store",
        screenId: "visitTheGeneralStore",
      },
      {
        type: "screen",
        optionText: "Visit the potion shop",
        screenId: "visitThePotionShop",
      },
      {
        type: "screen",
        optionText: "Visit the bookstore",
        screenId: "visitTheBookstore",
      },
      {
        type: "screen",
        optionText: "Visit the instrument shop",
        screenId: "visitTheInstrumentShop",
      },
    ],
  },
};

export const screens = [exploreTheShops, ...blacksmithScreens];
