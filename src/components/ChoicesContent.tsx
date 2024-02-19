import { Key, useRef } from "react";
import "./ChoicesContent.css";
import { ChoiceInfo, ChoiceOption } from "../types/Screen";

function ChoicesContent(props: {
  choices: ChoiceInfo;
  setScreenById: Function;
  savingContent: Function;
  quitWithoutSaving: Function;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const choicesText = props.choices.text;
  const choicesOptions = props.choices.options;

  function selectHandler(event: any) {
    const chosenId = event.target.id;
    const chosenOption = choicesOptions.find((option) => {
      return option.screenId === chosenId;
    });
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
      (choice: ChoiceOption, index: Key | null | undefined) => {
        if (choice.type === "input") {
          return (
            <>
              <input type="text" ref={inputRef} />
              <button onClick={selectHandler} id={choice.screenId}>
                {choice.optionText}
              </button>
            </>
          );
        }
        return (
          <button onClick={selectHandler} id={choice.screenId}>
            {choice.optionText}
          </button>
        );
      }
    );
  }

  return (
    <div>
      <p className="ChoicesPrompt">{choicesText}</p>
      <div className="ChoicesWrapper">{buildChoices()}</div>
    </div>
  );
}

export default ChoicesContent;
