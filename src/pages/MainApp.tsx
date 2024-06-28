import { SaveValues, Screen } from "../types/Screen";
import ChoicesContent from "../components/ChoicesContent/ChoicesContent";
import HeaderContent from "../components/HeaderContent";
import MainContent from "../components/MainContent/MainContent";
import { useState } from "react";
import { quit, startScreen, errorScreen } from "../server/basicData";
import { SavingService } from "../server/SavingService/SavingService";
import GlobalActionsHeader from "../components/GlobalActionsHeader";
import { getScreenById, saveNewGame } from "../server/api-handler";
import { Game } from "../types";

function MainApp() {
  const [screen, setScreen] = useState<Screen>(startScreen);
  const [userId] = useState<string>("123"); // TODO do this when login gets built
  const [game, setGame] = useState<Game>({
    screenId: "0",
    day: 0,
    userId,
  });
  const onFirst = screen._id === "0";

  async function saveIfNecessary() {
    if (!game._id) {
      console.log("game._id not found, creating new game");
      saveNewGame(userId, game).then((newGameId) => {
        console.log("newGameId", newGameId);
        setGame({ ...game, _id: newGameId.id });
        console.log("game after set", game);
      });
    }
  }

  function setScreenByIdHandler(screenId: string, saveValues?: SaveValues[]) {
    saveIfNecessary().then(() => {
      console.log("theoretically saved game", game);
      getScreenById(screenId, game._id as string, userId, saveValues)
        .catch((err) => {
          console.error(`Screen with id ${screenId} not found | ${err}`);
          setScreen(errorScreen);
        })
        .then((screen) => {
          if (!screen) {
            console.error(`Screen with id ${screenId} not found`);
            setScreen(errorScreen);
          } else {
            setScreen(screen);
          }
        });
    });
  }

  function quitGameHandler() {
    setScreen(quit);
  }

  function realQuitGameHandler() {
    SavingService.restartGame();
    setScreen(startScreen);
  }

  return (
    <>
      <GlobalActionsHeader onFirstScreen={onFirst} quitGame={quitGameHandler} />
      <HeaderContent content={screen.header} />
      <MainContent content={screen.main} />
      <ChoicesContent
        choices={screen.choiceInformation}
        setScreenById={setScreenByIdHandler}
        quitWithoutSaving={realQuitGameHandler}
      />
    </>
  );
}

export default MainApp;
