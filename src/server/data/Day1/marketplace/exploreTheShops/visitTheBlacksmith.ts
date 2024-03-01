import { ChoiceOption, Screen } from "../../../../../types/Screen";
import { SavingService } from "../../../../SavingService/SavingService";

const visitTheBlacksmith: Screen = {
  _id: "visitTheBlacksmith",
  header: "The Blacksmith",
  main: [
    `You decide to visit the blacksmith. The sound of metal on metal is even louder inside.`,
    `A large woman with a thick apron and soot on her face looks up from her work and nods at you.`,
    `"Let me know if I can do anything for you, hun," she says in a surprisingly high voice.`,
    `You thank her and start examining the weapons and armor, noticing the wear and prices as you look.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Next",
        screenId: "whatsForSale_blacksmith",
      },
    ],
  },
};
const whatsForSale_blacksmith: Screen = {
  _id: "whatsForSale_blacksmith",
  header: "The Blacksmith",
  main: [
    `There's a sword that looks like it's seen a lot of use, but it's still in good shape, the price is
    5 gold.`,
    `There's a set of armor that looks like it's never been worn, the price is 15 gold.`,
    `There's a shield that looks like it's been through a lot and the strap is broken, the price is 2 gold.`,
    `You have %%{User.coins} gold.`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Do something else",
        screenId: "exploreTheShops",
      },
      {
        type: "screen",
        optionText: "Buy the sword",
        screenId: "buyTheSword",
      },
      {
        type: "screen",
        optionText: "Buy the armor",
        screenId: "buyTheArmor",
      },
      {
        type: "screen",
        optionText: "Buy the shield",
        screenId: "buyTheShield",
      },
    ],
  },
};

const buyTheShield: Screen = {
  _id: "buyTheShield",
  header: "The Blacksmith",
  main: [
    `The shield looks a little worse for wear, but you need something to protect you.`,
    `The blacksmith catches your eye and comes over.`,
    `"You're looking to take that one, hun?" she says, "It's a good shield, even with the broken strap. I bet you could get someone to 
    fix it for you for a few pennies."`,
    `"What do you say, worth 2 gold?"`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight_shield",
        saveValues: [{ savePath: "User.coins", saveValue: "-2" }], // TODO: Once inventory is added, add shield to the inventory
      },
      (): ChoiceOption => {
        const user = SavingService.loadUser();
        if (user.stats.charm < 2) {
          return {
            type: "save",
            optionText: "Try to haggle",
            screenId: "haggleFail_shield",
            saveValues: [{ savePath: "User.stats.charm", saveValue: "++" }],
          };
        } else {
          return {
            type: "screen",
            optionText: "Try to haggle",
            screenId: "haggleSuccess_shield",
          };
        }
      },
    ],
  },
};

const haggleSuccess_shield: Screen = {
  _id: "haggleSuccess_shield",
  header: "The Blacksmith",
  main: [
    `You straighten your back and start to reason with the blacksmith. She's reluctant at first, but you manage to talk her down to 1 gold.`,
    `"No lower than that, hun," she says, "I've got to make a living."`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight_shield",
        saveValues: [{ savePath: "User.coins", saveValue: "-1" }], // TODO: add shield to inventory
      },
    ],
  },
};

const buyItOutRight_shield: Screen = {
  _id: "buyItOutRight_shield",
  header: "The Blacksmith",
  main: [
    `You decide to buy the shield.`,
    `The blacksmith nods and smiles, taking your gold. You walk out of the shop with a new shield and a sense of adventure.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Leave the shop",
        screenId: "exploreTheShops",
      },
    ],
  },
};

const haggleFail_shield: Screen = {
  _id: "haggleFail_shield",
  header: "The Blacksmith",
  main: [
    `You try to haggle, but the blacksmith just laughs at you.`,
    `"You're a charmer, but I've got to make a living, hun," she says, "2 gold."`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight_shield",
        saveValues: [{ savePath: "User.coins", saveValue: "-2" }], // TODO: add shield to inventory
      },
    ],
  },
};

// ARMOR
const buyTheArmor: Screen = {
  _id: "buyTheArmor",
  header: "The Blacksmith",
  main: [
    `The armor is a little out of your price range, but it's tempting. You can't help but think about how much it would
    protect you.`,
    `The blacksmith catches your eye and comes over.`,
    `"That's a good set of armor, hun," she says, "I made it myself. It's worth every penny."`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight",
        saveValues: [{ savePath: "User.coins", saveValue: "-15" }], // TODO: Once inventory is added, add armor to the inventory
      },
      (): ChoiceOption => {
        const user = SavingService.loadUser();
        if (user.stats.charm < 3) {
          return {
            type: "save",
            optionText: "Try to haggle",
            screenId: "haggleFail_armor",
            saveValues: [{ savePath: "User.stats.charm", saveValue: "++" }],
          };
        } else if (user.stats.charm < 4) {
          return {
            type: "save",
            optionText: "Try to haggle",
            screenId: "paymentPlan_armor",
            saveValues: [{ savePath: "User.stats.charm", saveValue: "++" }],
          };
        } else {
          return {
            type: "screen",
            optionText: "Try to haggle",
            screenId: "haggleSuccess_armor",
          };
        }
      },
    ],
  },
};

const haggleSuccess_armor: Screen = {
  _id: "haggleSuccess_armor",
  header: "The Blacksmith",
  main: [
    `You straighten your back and start to reason with the blacksmith. She's reluctant at first, but you manage to talk her down to 12 gold.`,
    `"No lower than that, hun," she says, "I've got to make a living."`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight_armor",
        saveValues: [{ savePath: "User.coins", saveValue: "-12" }], // TODO: add armor to inventory
      },
    ],
  },
};

// TODO add something about checking what you can afford

const paymentPlan_armor: Screen = {
  _id: "paymentPlan_armor",
  header: "The Blacksmith",
  main: [
    `You straighten your back and start to reason with the blacksmith. She's reluctant "I've got to make a living, hun," she says, "but I can see you're in need."`,
    `She offers to let you pay the rest in installments. "5 gold a week for three weeks and it's yours," she says, "If you miss a payment
    though I'll be selling it to someone else. What do you say?"`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "That works it",
        screenId: "paymentPlanAccepted_armor",
        saveValues: [{ savePath: "User.coins", saveValue: "-5" }], // Add payment plan to your quests?
      },
    ],
  },
};

const paymentPlanAccepted_armor: Screen = {
  _id: "paymentPlanAccepted_armor",
  header: "The Blacksmith",
  main: [
    `You agree to the payment plan. The blacksmith nods and smiles, taking your gold. You walk out of the shop 
    a sense of adventure, and a lighter purse.`,
  ],
  choiceInformation: {
    text: "Next",
    options: [
      {
        type: "screen",
        optionText: "Leave the shop",
        screenId: "exploreTheShops",
      },
    ],
  },
};

const haggleFail_armor: Screen = {
  _id: "haggleFail_armor",
  header: "The Blacksmith",
  main: [
    `You try to haggle, but the blacksmith just laughs at you.`,
    `"You're a charmer, but I've got to make a living, hun," she says, "15 gold."`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight_armor",
        saveValues: [{ savePath: "User.coins", saveValue: "-15" }], // TODO: add armor to inventory
      },
    ],
  },
};

const buyItOutRight_armor: Screen = {
  _id: "buyItOutRight_armor",
  header: "The Blacksmith",
  main: [
    `You decide to buy the armor.`,
    `The blacksmith nods and smiles, taking your gold. You walk out of the shop with a new set of armor and a sense of adventure.`,
  ],
  choiceInformation: {
    text: "Next",
    options: [
      {
        type: "screen",
        optionText: "Leave the shop",
        screenId: "exploreTheShops",
      },
    ],
  },
};

// SWORD
const buyTheSword: Screen = {
  _id: "buyTheSword",
  header: "The Blacksmith",
  main: [
    `The gleam of the pommel and the obvious history of the sword draws you in. It's balance is excellent, even if it 
    is a little dented.`,
    `You catch the blacksmiths eye, and she wipes her hands on her apron and comes over.`,
    `"Ahh, I see you've found something you like," she says, examining it, "That's a good blade, I reset the pommel stone
    myself just last month. Would you like to buy it? 5 gold is a fair price"`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it out right",
        screenId: "buyItOutRight_sword",
        saveValues: [{ savePath: "User.coins", saveValue: "-5" }], // TODO: Once inventory is added, add sword to the inventory
      },
      (): ChoiceOption => {
        const user = SavingService.loadUser();
        if (user.stats.charm < 3) {
          return {
            type: "save",
            optionText: "Try to haggle",
            screenId: "haggleFail_sword",
            saveValues: [{ savePath: "User.stats.charm", saveValue: "++" }],
          };
        } else {
          return {
            type: "screen",
            optionText: "Try to haggle",
            screenId: "haggleSuccess_sword",
          };
        }
      },
    ],
  },
};

const haggleSuccess_sword: Screen = {
  _id: "haggleSuccess_sword",
  header: "The Blacksmith",
  main: [
    `You straighten you back and start to reason with the blacksmith. She's reluctant at first, but you manage to talk her down to 4 gold.`,
    `"No lower than that, hun," she says, "I've got to make a living."`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight_sword",
        saveValues: [{ savePath: "User.coins", saveValue: "-4" }], // TODO: add sword to inventory
      },
    ],
  },
};

const haggleFail_sword: Screen = {
  _id: "haggleFail_sword",
  header: "The Blacksmith",
  main: [
    `You try to haggle, but the blacksmith just laughs at you.`,
    `"You're a charmer, but I've got to make a living, hun," she says, "5 gold."`,
  ],
  choiceInformation: {
    text: "What do you do?",
    options: [
      {
        type: "screen",
        optionText: "Nevermind",
        screenId: "whatsForSale_blacksmith",
      },
      {
        type: "save",
        optionText: "Buy it",
        screenId: "buyItOutRight_sword",
        saveValues: [{ savePath: "User.coins", saveValue: "-5" }], // TODO: add sword to inventory
      },
    ],
  },
};

const buyItOutRight_sword: Screen = {
  _id: "buyItOutRight_sword",
  header: "The Blacksmith",
  main: [
    `You decide to buy the sword.`,
    `The blacksmith nods and smiles, taking your gold. You walk out of the shop with a new sword and sense of adventure.`,
  ],
  choiceInformation: {
    text: "Next",
    options: [
      {
        type: "screen",
        optionText: "Leave the shop",
        screenId: "exploreTheShops",
      },
    ],
  },
};

export const screens = [
  visitTheBlacksmith,
  buyTheShield,
  haggleSuccess_shield,
  haggleFail_shield,
  buyItOutRight_shield,
  buyTheArmor,
  haggleSuccess_armor,
  paymentPlan_armor,
  paymentPlanAccepted_armor,
  haggleFail_armor,
  buyItOutRight_armor,
  buyTheSword,
  buyItOutRight_sword,
  whatsForSale_blacksmith,
  haggleSuccess_sword,
  haggleFail_sword,
];
