import { Key, useRef } from "react";
import "./ChoicesContent.css";
import { ChoiceInfo, ChoiceOption } from "../types/Screen";

function ChoicesContent(props: {
  choices: ChoiceInfo;
  setScreenById: Function;
  savingContent: Function;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const choicesText = props.choices.text;
  const choicesOptions = props.choices.options;

  let savePath: string;
  let saveValue: string;

  function selectHandler(event: any) {
    if (savePath) {
      const enteredInput = inputRef?.current?.value || undefined;
      if (enteredInput) {
        props.savingContent(enteredInput, savePath);
        inputRef.current!.value = "";
      } else {
        props.savingContent(saveValue, savePath);
      }
    }
    props.setScreenById(event.target.id);
  }

  function buildChoices() {
    return choicesOptions.map(
      (choice: ChoiceOption, index: Key | null | undefined) => {
        if (choice.type === "input") {
          savePath = choice.savePath;

          return (
            <li key={index}>
              <p>{choice.promptText}</p>
              <input type="text" ref={inputRef} />
              <button onClick={selectHandler} id={choice.screenId}>
                {choice.optionText}
              </button>
            </li>
          );
        }
        if (choice.type === "save") {
          savePath = choice.savePath;
          saveValue = choice.saveValue;
        }
        return (
          <li key={index}>
            <button onClick={selectHandler} id={choice.screenId}>
              {choice.optionText}
            </button>
          </li>
        );
      }
    );
  }

  return (
    <div className="Choices">
      <p>{choicesText}</p>
      <ul className="Choices">{buildChoices()}</ul>
    </div>
  );
}

export default ChoicesContent;
