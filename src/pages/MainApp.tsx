import { PictureMain, Screen } from "../types/Screen";
import ChoicesContent from "../components/ChoicesContent";
import HeaderContent from "../components/HeaderContent";
import MainContent from "../components/MainContent";
import { useState } from "react";
import { quit, startScreen } from "../server/data/screens";
import { getScreenById } from "../server/ScreenHandler";
import { SavingService } from "../server/SavingService/SavingService";
import { unfurlObjects, unfurlString } from "../server/unfurlObjects";
import GlobalActionsHeader from "../components/GlobalActionsHeader";

function MainApp() {
  const [screen, setScreen] = useState<Screen>(startScreen);
  const onFirst = screen._id === "0";

  function setScreenByIdHandler(screenId: string) {
    const newScreen = getScreenById(screenId);
    if (!newScreen) {
      throw new Error(`Screen with id ${screenId} not found`);
    }
    setScreen(newScreen);
  }

  function savingContentHandler(input: string, savePath: string) {
    SavingService.saveContent(input, savePath);
  }

  function saveGameHandler() {
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
    return SavingService.loadUser();
  }

  function realQuitGameHandler() {
    SavingService.restartGame();
    setScreen(startScreen);
  }

  const header = unfurlString(screen.header);
  const main = screen.main.map((content) => {
    if (typeof content === "string") {
      return unfurlString(content);
    } else {
      // type is PictureMain
      return {
        ...content,
        sideText: unfurlString(content.sideText),
        alt: unfurlString(content.alt),
      } as PictureMain;
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
