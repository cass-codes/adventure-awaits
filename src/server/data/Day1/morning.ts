import { v4 as uuid } from "uuid";
import { Screen } from "../../../types/Screen";

const wakeUp_RustySword: Screen = {
  _id: uuid(),
  header: "The Rusty Sword",
  main: [
    `You wake up in your room at The Rusty Sword. The sun is shining through the window, 
    and the birds are chirping. You gather your things and head downstairs, smelling the
    wonderful aromas of coffee and breakfast.`,
  ],
  choiceInformation: {
    text: "What do you want to do?",
    options: [
      // TODO: do this
      {
        type: "screen",
        optionText: "Head to the bar",
        screenId: "meetLyraForWork",
      },
    ],
  },
};

export const morningScreens = [wakeUp_RustySword];
