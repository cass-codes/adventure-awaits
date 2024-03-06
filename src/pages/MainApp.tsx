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
  saveGame,
} from "../server/api-handler";
import { User } from "../types";

function MainApp() {
  const [screen, setScreen] = useState<Screen>(startScreen);
  const [gameId, setGameId] = useState<string>("");
  const onFirst = screen._id === "0";

  function setScreenByIdHandler(screenId: string) {
    getScreenById(screenId)
      .then((screen) => {
        if (!screen) {
          console.error(`Screen with id ${screenId} not found`);
          saveGameHandler();
          setScreen(errorScreen);
        }
        setScreen(screen);
      })
      .catch((err) => {
        console.error(`Screen with id ${screenId} not found | ${err}`);
        saveGameHandler();
        setScreen(errorScreen);
      });
  }

  function saveGameHandler() {
    saveGame(screen._id, gameId).then((gameId) => {
      SavingService.setGameId(gameId);
      setGameId(gameId);
    });
    SavingService.saveGame(screen._id);
  }

  function loadGameHandler() {
    const { screenId } = SavingService.loadGame();
    setScreenByIdHandler(screenId);
  }

  function quitGameHandler() {
    saveGameHandler();
    setScreen(quit);
  }

  function loadUserHandler() {
    loadUser().then((user: User) => {
      return user;
    });
    return SavingService.loadUser();
  }

  function realQuitGameHandler() {
    SavingService.restartGame();
    setScreen(startScreen);
  }

  function savingContentHandler(value: string, objectPath: string) {
    saveContent(value, objectPath).then((user) => {
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
