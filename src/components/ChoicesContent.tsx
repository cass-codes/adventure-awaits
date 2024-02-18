import { Key, useRef } from "react";
import "./ChoicesContent.css";
import { ChoiceInfo, ChoiceOption } from "../types/Screen";
import { evaluateConditionalScreenOption } from "../server/unfurlObjects";

// TODO fix alignment of choices when there is a single choice

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
      if (option.type === "conditionalScreen") {
        return (
          option.trueScreenId === chosenId || option.falseScreenId === chosenId
        );
      }
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
              console.log("saving", saveValue, savePath);
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
            <div className="InputChoice" key={index}>
              <input type="text" ref={inputRef} />
              <button onClick={selectHandler} id={choice.screenId}>
                {choice.optionText}
              </button>
            </div>
          );
        }
        if (choice.type === "conditionalScreen") {
          const screenId = evaluateConditionalScreenOption(choice);
          return (
            <div className="Choices" key={index}>
              <button onClick={selectHandler} id={screenId}>
                {choice.optionText}
              </button>
            </div>
          );
        }
        return (
          <div className="Choices" key={index}>
            <button onClick={selectHandler} id={choice.screenId}>
              {choice.optionText}
            </button>
          </div>
        );
      }
    );
  }

  return (
    <div>
      <p className="ChoicesPrompt">{choicesText}</p>
      <div>{buildChoices()}</div>
    </div>
  );
}

export default ChoicesContent;
