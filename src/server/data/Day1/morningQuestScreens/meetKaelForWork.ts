import { EvaluatedChoiceOption, Screen } from "../../../../types";
import { evalStats } from "./_shared";

function evalStatsForKael(): EvaluatedChoiceOption[] {
  const options = evalStats();
  const newOptions: EvaluatedChoiceOption[] = [];
  options.forEach((option) => {
    const newOption: EvaluatedChoiceOption = {
      type: "save",
      optionText: option.optionText,
      screenId: option.screenId,
      saveValues: [
        {
          savePath: "User.quests.meetBeardedKnightForWork.status",
          saveValue: "completed",
        },
      ],
    };
    newOptions.push(newOption);
  });
  return newOptions;
}

const meetKaelForWork: Screen = {
  _id: "meetKaelForWork",
  header: "Belenham",
  main: [
    `You see Kael heading towards The Rusty Sword shortly after you step outside. 
    They idle up to you, giving you a friendly wave.`,
    {
      url: "Kael.png",
      alt: "Kael",
      side: "right",
      sideText: [
        `Good morning! I know I said last night that I might have some work 
      for you but I realize I didn't get a lot of details from you about what 
      type of work you're looking for. I know a few people in town who might be
      able to help if you tell me what you're good at.`,
      ],
    },
  ],
  choiceInformation: {
    text: "What do you tell Kael you specialize in?",
    options: evalStatsForKael,
  },
};

export const screens = [meetKaelForWork];
