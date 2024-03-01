import { Quest } from "./Quest";

export enum Tavern {
  TheRustySword = "The Rusty Sword",
  TheSilverSpoon = "The Silver Spoon",
  SewerWater = "Sewer Water",
}

export enum UserClass {
  bard = "Bard",
  fighter = "Fighter",
  mage = "Mage",
}

export enum Motivations {
  money = "money",
  power = "power",
  knowledge = "knowledge",
  safety = "safety",
  revenge = "revenge",
  adventure = "adventure",
}

export enum Relationship {
  Lyra = "Lyra",
  Hunstan = "Hunstan",
  Kael = "Kael",
  Somerild = "Somerild",
  Serena = "Serena",
  Kiirion = "Kiirion",
}

export enum Stat {
  goodness = "goodness",
  sneakiness = "sneakiness",
  cleverness = "cleverness",
  brawn = "brawn",
  magic = "magic",
  charm = "charm",
}

export interface User {
  name?: string;
  class?: UserClass;
  stats: {
    goodness: number;
    sneakiness: number;
    cleverness: number;
    brawn: number;
    magic: number;
    charm: number;
  };
  coins: number;
  pennies: number;
  motivations?: Motivations[];
  relationships: {
    Lyra?: number;
    Hunstan?: number;
    Kael?: number;
    Somerild?: number;
    Serena?: number;
    Kiirion?: number;
  };
  quests: { [key: string]: Quest };
  skills: string[];
  tavern?: Tavern;
}
