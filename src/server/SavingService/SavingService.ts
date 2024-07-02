import { Character } from "../../types/User";

export let user: Character = {
  quests: [],
  money: {
    gold: 10,
    pennies: 0,
  },
  stats: {
    goodness: 0,
    sneakiness: 0,
    cleverness: 0,
    brawn: 0,
    magic: 0,
    charm: 0,
  },
  relationships: [],
  // skills: [],
};

export class SavingService {
  static loadUser() {
    return user;
  }

  static restartGame() {
    user = {
      quests: [],
      money: { gold: 10, pennies: 0 },
      stats: {
        goodness: 0,
        sneakiness: 0,
        cleverness: 0,
        brawn: 0,
        magic: 0,
        charm: 0,
      },
      relationships: [],
      // skills: [],
    };
  }
}
