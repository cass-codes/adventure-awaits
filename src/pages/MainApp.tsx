import { Screen } from "../types/Screen";
import ChoicesContent from "../components/ChoicesContent";
import HeaderContent from "../components/HeaderContent";
import MainContent from "../components/MainContent";
import { useState } from "react";
import { startScreen } from "../server/screens";
import { getScreenById } from "../server/ScreenHandler";
import { SavingService } from "../server/SavingService/SavingService";
import { unfurlObjects, unfurlString } from "../server/unfurlObjects";

function MainApp() {
  const [screen, setScreen] = useState<Screen>(startScreen);

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

  const header = unfurlString(screen.header);
  const main = unfurlString(screen.main);
  const choiceInformation = unfurlObjects(screen.choiceInformation);

  return (
    <>
      <HeaderContent content={header} />
      <MainContent content={main} />
      <ChoicesContent
        choices={choiceInformation}
        setScreenById={setScreenByIdHandler}
        savingContent={savingContentHandler}
      />
    </>
  );
}

export default MainApp;
