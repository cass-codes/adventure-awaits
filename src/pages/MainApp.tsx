import { MainContentProps, Screen } from "../types/Screen";
import ChoicesContent from "../components/ChoicesContent/ChoicesContent";
import HeaderContent from "../components/HeaderContent";
import MainContent from "../components/MainContent/MainContent";
import { useState } from "react";
import { quit, startScreen, errorScreen } from "../server/basicData";
import { SavingService } from "../server/SavingService/SavingService";
import { unfurlObjects, unfurlString } from "../server/unfurlObjects";
import GlobalActionsHeader from "../components/GlobalActionsHeader";
import {
  getScreenById,
  loadUser,
  saveContent,
  // saveGame,
} from "../server/api-handler";
import { User } from "../types";

async function loadGameId(): Promise<string> {
  const gameId = await SavingService.loadGameId();
  return gameId;
}

function MainApp() {
  const [screen, setScreen] = useState<Screen>(startScreen);
  const [gameId, setGameId] = useState<string>("");
  const onFirst = screen._id === "0";

  if (gameId === "") {
    loadGameId().then((gameId) => {
      setGameId(gameId);
    });
  }

  function setScreenByIdHandler(screenId: string) {
    getScreenById(screenId)
      .then((screen) => {
        if (!screen) {
          console.error(`Screen with id ${screenId} not found`);
          // saveGameHandler();
          setScreen(errorScreen);
        }
        setScreen(screen);
      })
      .catch((err) => {
        console.error(`Screen with id ${screenId} not found | ${err}`);
        // saveGameHandler();
        setScreen(errorScreen);
      });
  }

  function saveGameHandler() {
    // saveGame(screen._id, gameId).then((gameId) => {
    //   setGameId(gameId);
    // });
  }

  function loadGameHandler() {
    const { screenId } = SavingService.loadGame();
    setScreenByIdHandler(screenId);
  }

  function quitGameHandler() {
    setScreen(quit);
  }

  function loadUserHandler() {
    loadUser(gameId).then((user: User) => {
      return user;
    });
    return SavingService.loadUser();
  }

  function realQuitGameHandler() {
    SavingService.restartGame();
    setScreen(startScreen);
  }

  async function savingContentHandler(value: string, objectPath: string) {
    if (gameId === "") {
      await saveGameHandler();
    }
    saveContent(value, objectPath, gameId, screen._id).then((user) => {
      SavingService.setUser(user);
    });
  }

  const header = unfurlString(screen.header);
  const main: MainContentProps = screen.main.map((content) => {
    if (typeof content === "string") {
      return unfurlString(content);
    } else {
      // type is PictureMain
      return {
        ...content,
        sideText: content.sideText.map(unfurlString),
        alt: unfurlString(content.alt),
      };
    }
  });
  const choiceInformation = unfurlObjects(screen.choiceInformation);

  return (
    <>
      <GlobalActionsHeader
        onFirstScreen={onFirst}
        saveGame={saveGameHandler}
        loadGame={loadGameHandler}
        quitGame={quitGameHandler}
        loadUser={loadUserHandler}
      />
      <HeaderContent content={header} />
      <MainContent content={main} />
      <ChoicesContent
        choices={choiceInformation}
        setScreenById={setScreenByIdHandler}
        savingContent={savingContentHandler}
        quitWithoutSaving={realQuitGameHandler}
      />
    </>
  );
}

export default MainApp;
