import { buildingCharacterScreens } from "./buildingCharacter";
import { findAnInnScreens } from "./findAnInn";

export { dayZeroQuests } from "./quests";
export const day0Screens = [...buildingCharacterScreens, ...findAnInnScreens];
