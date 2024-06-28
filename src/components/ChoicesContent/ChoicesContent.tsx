import { Key } from "react";
import "./ChoicesContent.css";
import {
  ChoiceInfo,
  EvaluatedChoiceOption,
  SaveValues,
} from "../../types/Screen";
import InputChoiceContent from "./InputChoiceContent";
import ScreenChoiceContent from "./ScreenChoiceContent";
import SaveChoiceContent from "./SaveChoiceContent";
import QuitChoiceContent from "./QuitChoiceContent";

function ChoicesContent(props: {
  choices: ChoiceInfo;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setScreenById: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  quitWithoutSaving: Function;
}) {
  const choicesText = props.choices.text;
  const choicesOptions = props.choices.options;

  function selectScreenHandler(screenId: string) {
    props.setScreenById(screenId);
  }

  function selectInputHandler(
    savePath: string,
    saveValue: string,
    screenId: string
  ) {
    props.setScreenById(screenId, [{ saveValue, savePath }]);
  }

  function selectSaveHandler(saveValues: SaveValues[], screenId: string) {
    props.setScreenById(screenId, saveValues);
  }

  function selectQuitHandler(screenId: string) {
    props.quitWithoutSaving();
    props.setScreenById(screenId);
  }

  function buildChoices() {
    return choicesOptions.map(
      (choice: EvaluatedChoiceOption, index: Key | null | undefined) => {
        if (choice.type === "input") {
          return (
            <div key={index}>
              <InputChoiceContent
                choice={choice}
                onSelect={selectInputHandler}
              />
            </div>
          );
        }
        if (choice.type === "screen") {
          return (
            <div key={index}>
              <ScreenChoiceContent
                choice={choice}
                onSelect={selectScreenHandler}
              />
            </div>
          );
        }
        if (choice.type === "save") {
          return (
            <div key={index}>
              <SaveChoiceContent choice={choice} onSelect={selectSaveHandler} />
            </div>
          );
        }
        if (choice.type === "quit") {
          return (
            <div key={index}>
              <QuitChoiceContent choice={choice} onSelect={selectQuitHandler} />
            </div>
          );
        }
        return <></>;
      }
    );
  }

  return (
    <div>
      <p className="ChoicesPrompt" key="prompt">
        {choicesText}
      </p>
      <div className="ChoicesWrapper" key="choices">
        {buildChoices()}
      </div>
    </div>
  );
}

export default ChoicesContent;
