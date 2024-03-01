import { Screen } from "../../../../types";

const meetKaelForAdventure: Screen = {
  _id: "meetKaelForAdventure",
  header: "Belenham",
  main: [
    `You see Kael heading towards The Rusty Sword shortly after you step outside. 
    They idle up to you, giving you a friendly wave.`,
    {
      url: "Kael.png",
      alt: "Kael",
      side: "right",
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
            savePath: "User.quests.meetBeardedKnightForAdventure.status",
            saveValue: "completed",
          },
          { savePath: "User.relationships.Kael", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "No",
        screenId: "noTournament",
        saveValues: [
          {
            savePath: "User.quests.meetBeardedKnightForAdventure.status",
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
    {
      url: "Kael.png",
      alt: "Kael",
      side: "right",
      sideText: [
        `That's alright. We'll be around if you change your mind. 
      We're going to head out soon. If you change your mind, I'm staying at The 
      Rusty Sword, you can find me there.`,
      ],
    },
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

const joinTournament: Screen = {
  _id: "joinTournament",
  header: "Belenham",
  main: [
    `You agree to join Kael and their troupe in the tournament. 
    They seem pleased and lead you into the marketplace where the rest of their troupe is gathered around
    a small booth.`,
    `Some older people in armor are standing around the booth, calling out to passersby. 
    They seem to be trying to convince people to join the tournament.`,
    `You meet up with Kaels troupe as a young woman in leather armor is just starting to sign her name on a piece of parchment.`,
    {
      url: "Kael.png",
      alt: "Kael",
      side: "right",
      sideText: [
        `This is %%{User.name}, they're going to join us in the tournament. They're the one that won the arm wrestling
        contest last night! `,
      ],
    },
    `The group turns to great you and you feel a little overwhelmed by the attention.`,
    `You're the fourth member of this group and you barely have time to get everyone's names before
    it's time to sign your name on the parchment.`,
    `You sign, relieved, to be moving in a direction, and turn your attention back to the group. They're
    chatting happily with each other. The woman in leather armor turns to you and sticks out her hand in greeting.`,
    {
      url: "Somerild.png",
      alt: "Somerild",
      side: "left",
      sideText: [
        `I'm Somerild. I'm glad to have you on board! We were thinking we'd be disqualified without a fourth
        member, you really saved the day!`,
      ],
    },
    `You shake her hand and the final member of the group turns to you. He's a tall warrior-looking person with hair
    graying at the temples.`,
    {
      url: "Kiirion.png",
      alt: "Kiirion",
      side: "right",
      sideText: [`It's Kiirion.`],
    },
    `He nods at you and turns back to a small book he's pulled out of a bag at his side.`,
    `Kael nudges you, grinning.`,
    {
      url: "Kael.png",
      alt: "Kael",
      side: "right",
      sideText: [
        `Don't worry about Ki, it's a wonder you got two words from him.`,
        `I was thinking we could train a little before the tournament starts. Or do you feel ready?`,
      ],
    },
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "save",
        optionText: "I was born ready",
        screenId: "headToTournament",
        saveValues: [
          { savePath: "User.relationships.Kael", saveValue: "++" },
          { savePath: "User.relationships.Somerild", saveValue: "++" },
          { savePath: "User.relationships.Kiirion", saveValue: "0.5" },
          { savePath: "User.stats.brawn", saveValue: "++" },
        ],
      },
      {
        type: "save",
        optionText: "Let's train",
        screenId: "trainBeforeTournament",
        saveValues: [
          { savePath: "User.relationships.Kael", saveValue: "++" },
          { savePath: "User.relationships.Somerild", saveValue: "++" },
          { savePath: "User.relationships.Kiirion", saveValue: "0.5" },
        ],
      },
    ],
  },
};

const trainBeforeTournament: Screen = {
  _id: "trainBeforeTournament",
  header: "Belenham",
  main: [
    `You agree to train with Kael and the others. They take you to a small, 
    quiet area of the marketplace and you spend the next hour or so practicing 
    with your weapons and discussing strategy.`,
    `You feel a little more confident after the training and the group seems 
    to be in good spirits as you head back to the tournament area.`,
    `You realize that Kael is very good with an axe, both wielding and throwing it.`,
    `Somerlid is quick and agile, her preferred weapon being daggers. `,
    `Kiirion seems to be good at everything, from breaking boards with his fists to firing his longbow with deadly accuracy.`,
    `You're sweaty and elated by the end of the training and you feel ready to take on the tournament.`,
  ],
  choiceInformation: {
    text: "",
    options: [
      {
        type: "screen",
        optionText: "Head to the tournament",
        screenId: "headToTournament",
      },
    ],
  },
};

export const screens = [
  meetKaelForAdventure,
  noTournament,
  joinTournament,
  trainBeforeTournament,
];
