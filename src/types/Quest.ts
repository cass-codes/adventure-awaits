export enum QuestStatus {
  notFound = "not found",
  active = "active",
  completed = "completed",
  failed = "failed",
}

export interface Quest {
  name: string;
  status: QuestStatus;
  displayText: string;
  screenId: string;
}
