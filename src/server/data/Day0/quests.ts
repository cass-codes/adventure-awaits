import { Quest, QuestStatus } from "../../../types/Quest";

const meetBeardedKnightForWork: Quest = {
  name: "meetBeardedKnightForWork",
  status: QuestStatus.notFound,
  displayText: "Meet Kael for work in the morning.",
  screenId: "meetKaelForWork",
};
const meetBeardedKnightForAdventure: Quest = {
  name: "meetBeardedKnightForAdventure",
  status: QuestStatus.notFound,
  displayText: "Meet Kael in the morning.",
  screenId: "meetKaelForAdventure",
};
const meetLyraForWork: Quest = {
  name: "meetLyraForWork",
  status: QuestStatus.notFound,
  displayText: "Meet Lyra for work in the morning.",
  screenId: "meetLyraForWork",
};
const meetLyraForAdventure: Quest = {
  name: "meetLyraForAdventure",
  status: QuestStatus.notFound,
  displayText: "Meet Lyra in the morning.",
  screenId: "meetLyraForAdventure",
};
const meetLyraForFreshStart: Quest = {
  name: "meetLyraForFreshStart",
  status: QuestStatus.notFound,
  displayText: "Meet Lyra in the morning.",
  screenId: "meetLyraForFreshStart",
};
const learnAboutRobberies: Quest = {
  name: "learnAboutRobberies",
  status: QuestStatus.notFound,
  displayText: "Learn about the robberies plaguing the city.",
  screenId: "learnAboutRobberies",
};
const meetGrizzledManForDisappear: Quest = {
  name: "meetGrizzledManForDisappear",
  status: QuestStatus.notFound,
  displayText: "Meet the tall, grizzled man in the morning.",
  screenId: "meetHunstanForDisappear",
};
const meetGrizzledManForAdventure: Quest = {
  name: "meetGrizzledManForAdventure",
  status: QuestStatus.notFound,
  displayText: "Meet the tall, grizzled man in the morning.",
  screenId: "meetHunstanForAdventure",
};
const meetGrizzledManForAnswers: Quest = {
  name: "meetGrizzledManForAnswers",
  status: QuestStatus.notFound,
  displayText: "Meet the tall, grizzled man in the morning.",
  screenId: "meetHunstanForAnswers",
};
const workWithSomerild: Quest = {
  name: "workWithSomerild",
  status: QuestStatus.notFound,
  displayText: "Work with Somerild in the morning.",
  screenId: "workWithSomerild",
};
const meetSerenaForLute: Quest = {
  name: "meetSerenaForLute",
  status: QuestStatus.notFound,
  displayText: "Meet Serena's friend who makes lutes in the morning.",
  screenId: "meetSerenaForLute",
};
const meetSerenaForWork: Quest = {
  name: "meetSerenaForWork",
  status: QuestStatus.notFound,
  displayText: "Meet Serena in the morning.",
  screenId: "meetSerenaForWork",
};

// longer quests
const findTroupeWithSerena: Quest = {
  name: "findTroupeWithSerena",
  status: QuestStatus.notFound,
  displayText: "Work with Serena to find a bard troupe to join.",
  screenId: "findTroupeWithSerena",
};
const findATroupeToJoin: Quest = {
  name: "findATroupeToJoin",
  status: QuestStatus.notFound,
  displayText: "Find a bard troupe to join.",
  screenId: "findATroupeToJoin",
};

export const dayZeroQuests: { [key: string]: Quest } = {
  [meetLyraForWork.name]: meetLyraForWork,
  [meetLyraForAdventure.name]: meetLyraForAdventure,
  [meetLyraForFreshStart.name]: meetLyraForFreshStart,
  [learnAboutRobberies.name]: learnAboutRobberies,
  [meetGrizzledManForDisappear.name]: meetGrizzledManForDisappear,
  [meetGrizzledManForAdventure.name]: meetGrizzledManForAdventure,
  [meetGrizzledManForAnswers.name]: meetGrizzledManForAnswers,
  [meetBeardedKnightForWork.name]: meetBeardedKnightForWork,
  [meetBeardedKnightForAdventure.name]: meetBeardedKnightForAdventure,
  [workWithSomerild.name]: workWithSomerild,
  [meetSerenaForLute.name]: meetSerenaForLute,
  [meetSerenaForWork.name]: meetSerenaForWork,
  [findTroupeWithSerena.name]: findTroupeWithSerena,
  [findATroupeToJoin.name]: findATroupeToJoin,
};
