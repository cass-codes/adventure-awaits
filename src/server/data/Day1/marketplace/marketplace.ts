import * as _ from "lodash";
import { Screen } from "../../../../types/Screen";

const day1Marketplace: Screen = {
  _id: "day1Marketplace",
  header: "The Marketplace",
  main: [
    `You arrive at the marketplace. The smell of fresh bread and the sound of merchants hawking their wares 
    fills the air.`,
    `You walk aimlessly for a little while, taking in the sights and sounds. Some small
    children run past your feet with a harried looking parent running after them. Vendors call out to you as
    you pass, each of them promising something better than the last.`,
    `There's a booth with some older folks in heavy armor standing around it and a sign that reads "The Champion's Tournament".
    A few groups of people are standing by it, chatting excitedly.`,
    `There are useful shops too, like a blacksmith, a general store, and a potion shop. There's even a bookstore and a 
    place to buy instruments.`,
    `As you walk even further you see another booth set up with a sign for Foxtail Academy. A large man with a big
    beard is seated at a table, looking over some papers. The sign on the table says "Sign up for the next class!"`,
    `There's a lot to do here, and you're feeling a little overwhelmed by the choices.`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Chat with some vendors",
        screenId: "chatWithVendors",
      },
      {
        type: "screen",
        optionText: "Explore the shops",
        screenId: "exploreTheShops",
      },
      {
        type: "screen",
        optionText: "Learn about the Champion's Tournament",
        screenId: "learnAboutChampionsTournament",
      },
      {
        type: "screen",
        optionText: "Learn about Foxtail Academy",
        screenId: "learnAboutFoxtailAcademy",
      }, // TODO: add an option for leaving the marketplace
    ],
  },
};

const day1Marketplace_again: Screen = _.cloneDeep(day1Marketplace);
day1Marketplace_again._id = "day1Marketplace_again";
day1Marketplace_again.main[0] = `You return to the marketplace.`;
day1Marketplace_again.main[1] = `Vendors call out to you as you pass, each of them promising something better than the last.`;

export const screens = [day1Marketplace, day1Marketplace_again];
