import { SaveChoiceOption } from "../../../../types";
import { SavingService } from "../../../SavingService/SavingService";

export function evalStats(): Pick<
  SaveChoiceOption,
  "type" | "optionText" | "screenId"
>[] {
  const user = SavingService.loadUser();
  const options: Pick<SaveChoiceOption, "type" | "optionText" | "screenId">[] =
    [];
  if (user.stats.brawn > 0) {
    options.push({
      type: "save",
      optionText: "I'm pretty strong.",
      screenId: "prettyStrong",
    });
  }
  if (user.stats.goodness > 0) {
    options.push({
      type: "save",
      optionText: "People say I'm a fair judge.",
      screenId: "fairJudge",
    });
  }
  if (user.stats.sneakiness > 0) {
    options.push({
      type: "save",
      optionText: "I'm good a sneaking around.",
      screenId: "sneakingAround",
    });
  }
  if (user.stats.cleverness > 0) {
    options.push({
      type: "save",
      optionText: "I'm clever and good with books.",
      screenId: "cleverBooks",
    });
  }
  if (user.stats.magic > 0) {
    options.push({
      type: "save",
      optionText: "I'm decent with magic and the arcane.",
      screenId: "magicAndArcane",
    });
  }
  if (user.stats.charm > 0) {
    options.push({
      type: "save",
      optionText: "I'm good with people.",
      screenId: "goodWithPeople",
    });
  }
  return options;
}
