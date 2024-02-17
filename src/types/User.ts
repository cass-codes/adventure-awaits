import { Quest } from "./Quest";

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
  class?: string;
  stats: {
    goodness: number;
    sneakiness: number;
    cleverness: number;
    brawn: number;
    magic: number;
    charm: number;
  };
  coins: number;
  motivations?: Motivations[];
  relationships: {
    Lyra?: number;
    Hunstan?: number;
    Kael?: number;
    Somerild?: number;
  };
  quests: { [key: string]: Quest };
}
