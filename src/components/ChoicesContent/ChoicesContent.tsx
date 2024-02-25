import { Key } from "react";
import "./ChoicesContent.css";
import {
  ChoiceInfo,
  ChoiceOption,
  EvaluatedChoiceOption,
} from "../../types/Screen";
import InputChoiceContent from "./InputChoiceContent";
import ScreenChoiceContent from "./ScreenChoiceContent";
import SaveChoiceContent from "./SaveChoiceContent";
import QuitChoiceContent from "./QuitChoiceContent";

function ChoicesContent(props: {
  choices: ChoiceInfo;
  setScreenById: Function;
  savingContent: Function;
  quitWithoutSaving: Function;
}) {
  const choicesText = props.choices.text;
  const choicesOptions =
    typeof props.choices.options === "function"
      ? props.choices.options()
      : props.choices.options;

  function selectScreenHandler(screenId: string) {
    props.setScreenById(screenId);
  }

  function selectInputHandler(
    savePath: string,
    saveValue: string,
    screenId: string
  ) {
    props.savingContent(saveValue, savePath);
    props.setScreenById(screenId);
  }

  function selectSaveHandler(
    saveValues: { savePath: string; saveValue: string }[],
    screenId: string
  ) {
    saveValues.forEach(
      ({ savePath, saveValue }: { savePath: string; saveValue: string }) => {
        if (savePath) {
          props.savingContent(saveValue, savePath);
        }
      }
    );
    props.setScreenById(screenId);
  }

  function selectQuitHandler(screenId: string) {
    props.quitWithoutSaving();
    props.setScreenById(screenId);
  }

  function buildChoices() {
    return choicesOptions.map(
      (_choice: ChoiceOption, index: Key | null | undefined) => {
        let choice: EvaluatedChoiceOption =
          typeof _choice === "function" ? _choice() : _choice;

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
