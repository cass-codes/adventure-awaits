export enum Tavern {
  TheRustySword = "The Rusty Sword",
  TheSilverSpoon = "The Silver Spoon",
  SewerWater = "Sewer Water",
}

export enum UserClass {
  Bard = "Bard",
  Fighter = "Fighter",
  Mage = "Mage",
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

export interface Game {
  _id?: string;
  quests?: unknown[];
  userId?: string; // Keeping not required for now
  day?: number;
  screenId?: string;
  character?: Character;
}

export interface Character {
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
  money: {
    gold: number;
    pennies: number;
  };
  // motivations?: Motivations[];
  relationships: {
    Lyra?: number;
    Hunstan?: number;
    Kael?: number;
    Somerild?: number;
    Serena?: number;
    Kiirion?: number;
  };
  quests: unknown[];
  // skills: string[];
  // tavern?: Tavern;
}
