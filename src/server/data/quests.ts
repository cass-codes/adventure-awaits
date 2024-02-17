import { Quest, QuestStatus } from "../../types/Quest";

const meetBeardedKnightForWork: Quest = {
  name: "meetBeardedKnightForWork",
  status: QuestStatus.notFound,
  displayText: "Meet Kael for work in the morning.",
};
const meetBeardedKnightForAdventure: Quest = {
  name: "meetBeardedKnightForAdventure",
  status: QuestStatus.notFound,
  displayText: "Meet Kael in the morning.",
};
const meetLyraForWork: Quest = {
  name: "meetLyraForWork",
  status: QuestStatus.notFound,
  displayText: "Meet Lyra for work in the morning.",
};
const meetLyraForAdventure: Quest = {
  name: "meetLyraForAdventure",
  status: QuestStatus.notFound,
  displayText: "Meet Lyra in the morning.",
};
const meetLyraForFreshStart: Quest = {
  name: "meetLyraForFreshStart",
  status: QuestStatus.notFound,
  displayText: "Meet Lyra in the morning.",
};
const learnAboutRobberies: Quest = {
  name: "learnAboutRobberies",
  status: QuestStatus.notFound,
  displayText: "Learn about the robberies plaguing the city.",
};
const meetGrizzledManForDisappear: Quest = {
  name: "meetGrizzledManForDisappear",
  status: QuestStatus.notFound,
  displayText: "Meet the tall, grizzled man in the morning.",
};
const meetGrizzledManForAdventure: Quest = {
  name: "meetGrizzledManForAdventure",
  status: QuestStatus.notFound,
  displayText: "Meet the tall, grizzled man in the morning.",
};
const meetGrizzledManForAnswers: Quest = {
  name: "meetGrizzledManForAnswers",
  status: QuestStatus.notFound,
  displayText: "Meet the tall, grizzled man in the morning.",
};
const workWithSomerild: Quest = {
  name: "workWithSomerild",
  status: QuestStatus.notFound,
  displayText: "Work with Somerild in the morning.",
};

export const allQuests: { [key: string]: Quest } = {
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
};
