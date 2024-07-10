import { SaveValues, Screen } from "../types/Screen";
import ChoicesContent from "../components/ChoicesContent/ChoicesContent";
import HeaderContent from "../components/HeaderContent";
import MainContent from "../components/MainContent/MainContent";
import { useState } from "react";
import { quit, startScreen, errorScreen } from "../server/basicData";
import { SavingService } from "../server/SavingService/SavingService";
import GlobalActionsHeader from "../components/GlobalActionsHeader";
import { getScreenById, saveGame } from "../server/api-handler";
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

  function setScreenAndGame(screen: Screen, game: Game) {
    if (screen) {
      setScreen(screen);
    } else {
      setScreen(errorScreen);
    }
    if (game) {
      setGame(game);
    }
  }

  function setScreenByIdHandler(screenId: string, saveValues?: SaveValues[]) {
    saveGame(userId, game).then(({ id }) => {
      getScreenById(screenId, id, userId, saveValues)
        .catch(() => {
          setScreen(errorScreen);
        })
        .then((response) => {
          if (response.screen || response.game) {
            setScreenAndGame(response.screen, response.game);
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
      <GlobalActionsHeader
        onFirstScreen={onFirst}
        quitGame={quitGameHandler}
        gameData={game}
      />
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
