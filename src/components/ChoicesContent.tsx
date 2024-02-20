import { Key, useRef } from "react";
import "./ChoicesContent.css";
import {
  ChoiceInfo,
  ChoiceOption,
  EvaluatedChoiceOption,
} from "../types/Screen";

function ChoicesContent(props: {
  choices: ChoiceInfo;
  setScreenById: Function;
  savingContent: Function;
  quitWithoutSaving: Function;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const choicesText = props.choices.text;
  const choicesOptions =
    typeof props.choices.options === "function"
      ? props.choices.options()
      : props.choices.options;

  function selectHandler(event: any) {
    const chosenId = event.target.id;
    const _chosenOption = choicesOptions.find((opt: ChoiceOption) => {
      const option = typeof opt === "function" ? opt() : opt;
      const screenId =
        typeof option.screenId === "function"
          ? option.screenId()
          : option.screenId;
      return screenId === chosenId;
    });
    const chosenOption =
      typeof _chosenOption === "function" ? _chosenOption() : _chosenOption;
    if (!chosenOption) {
      throw new Error("No option found for id: " + chosenId);
    }
    if (chosenOption.type === "quit") {
      props.quitWithoutSaving();
    }
    if (chosenOption.type === "save") {
      if (chosenOption && chosenOption.type === "save") {
        const saveValues = chosenOption.saveValues;
        saveValues.forEach(
          ({
            savePath,
            saveValue,
          }: {
            savePath: string;
            saveValue: string;
          }) => {
            if (savePath) {
              props.savingContent(saveValue, savePath);
            }
          }
        );
      }
    } else if (chosenOption.type === "input") {
      const enteredInput = inputRef?.current?.value || undefined;
      const savePath = chosenOption.savePath;
      if (enteredInput && savePath) {
        props.savingContent(enteredInput, savePath);
        inputRef.current!.value = "";
      }
    }
    props.setScreenById(event.target.id);
  }

  function buildChoices() {
    return choicesOptions.map(
      (_choice: ChoiceOption, index: Key | null | undefined) => {
        let choice: EvaluatedChoiceOption =
          typeof _choice === "function" ? _choice() : _choice;

        const screenId =
          typeof choice.screenId === "function"
            ? choice.screenId()
            : choice.screenId;

        if (choice.type === "input") {
          return (
            <>
              <input key="one" type="text" ref={inputRef} />
              <button key="two" onClick={selectHandler} id={screenId}>
                {choice.optionText}
              </button>
            </>
          );
        }
        return (
          <button key={index} onClick={selectHandler} id={screenId}>
            {choice.optionText}
          </button>
        );
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
