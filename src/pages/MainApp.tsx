import { MainContentProps, PictureMain, Screen } from "../types/Screen";
import ChoicesContent from "../components/ChoicesContent/ChoicesContent";
import HeaderContent from "../components/HeaderContent";
import MainContent from "../components/MainContent/MainContent";
import { useState } from "react";
import { quit, startScreen, errorScreen } from "../server/data/screens";
import { SavingService } from "../server/SavingService/SavingService";
import { unfurlObjects, unfurlString } from "../server/unfurlObjects";
import GlobalActionsHeader from "../components/GlobalActionsHeader";
import { getScreenById } from "../server/api-handler";

function MainApp() {
  const [screen, setScreen] = useState<Screen>(startScreen);
  const onFirst = screen._id === "0";

  function setScreenByIdHandler(screenId: string) {
    getScreenById(screenId).then((res) => {
      const screen = res.data;
      if (!screen) {
        console.error(`Screen with id ${screenId} not found`);
        saveGameHandler();
        setScreen(errorScreen);
      }
      setScreen(screen);
    });
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
  const main: MainContentProps = screen.main
    .map((_content) => {
      const content = typeof _content === "function" ? _content() : _content;
      if (typeof content === "string") {
        return unfurlString(content);
      } else {
        // type is PictureMain
        return {
          ...content,
          sideText: content.sideText.map(unfurlString),
          alt: unfurlString(content.alt),
        } as PictureMain;
      }
    })
    .flat();
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
        savingContent={SavingService.saveContent}
        quitWithoutSaving={realQuitGameHandler}
      />
    </>
  );
}

export default MainApp;
