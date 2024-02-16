import { Screen } from "../types/Screen";
import { screens } from "./data/screens";

export function getScreenById(screenId: string) {
  return screens.find((screen: Screen) => screen._id === screenId);
}
