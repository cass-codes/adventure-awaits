import { Screen } from "../../../../types";

const meetKaelForAdventure: Screen = {
  _id: "meetKaelForAdventure",
  header: "The Rusty Sword",
  main: [
    `You see Kael heading towards The Rusty Sword shortly after you step outside. 
    They idle up to you, giving you a friendly wave.`,
    {
      url: "Kael.png",
      alt: "Kael",
      side: "left",
      sideText: [
        `Good morning! Last night you seemed keen on proving yourself. 
      I know of a tournament happening in town today. My troupe and I were going
      to enter but we need one more person and I think you'd be a good fit.
      What do you say?`,
      ],
    },
  ],
  choiceInformation: {
    text: "Do you join the tournament with Kael and their group?",
    options: [
      {
        type: "save",
        optionText: "Yes",
        screenId: "joinTournament",
        saveValues: [
          {
            savePath: "User.quests.meetBeardedKnightForAdventure",
            saveValue: "completed",
          },
          { savePath: "User.quests", saveValue: "enterTournamentWithKael" },
          { savePath: "User.relationships.Kael", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "No",
        screenId: "noTournament",
        saveValues: [
          {
            savePath: "User.quests.meetBeardedKnightForAdventure",
            saveValue: "completed",
          },
        ],
      },
    ],
  },
};

const noTournament: Screen = {
  _id: "noTournament",
  header: "The Rusty Sword",
  main: [
    `You decline Kael's offer. They seem a little disappointed but understanding.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Head out",
        screenId: "headOut",
      },
    ],
  },
};

export const screens = [meetKaelForAdventure, noTournament];
