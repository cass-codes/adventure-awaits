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
    if (event.target.getAttribute("choice-type") === "quit") {
      props.quitWithoutSaving();
    }
    const savePath = event.target.getAttribute("save-path");
    const saveValue = event.target.getAttribute("save-value");
    if (savePath) {
      const enteredInput = inputRef?.current?.value || undefined;
      if (enteredInput) {
        props.savingContent(enteredInput, savePath);
        inputRef.current!.value = "";
      } else {
        console.log("saving", saveValue, savePath);
        props.savingContent(saveValue, savePath);
      }
    }
    props.setScreenById(event.target.id);
  }

  function buildChoices() {
    return choicesOptions.map(
      (choice: ChoiceOption, index: Key | null | undefined) => {
        if (choice.type === "input") {
          return (
            <li key={index}>
              <p>{choice.promptText}</p>
              <input type="text" ref={inputRef} />
              <button
                onClick={selectHandler}
                id={choice.screenId}
                save-path={choice.savePath}
              >
                {choice.optionText}
              </button>
            </li>
          );
        }
        return (
          <li key={index}>
            <button
              onClick={selectHandler}
              choice-type={choice.type}
              id={choice.screenId}
              save-path={choice.type === "save" ? choice.savePath : undefined}
              save-value={choice.type === "save" ? choice.saveValue : undefined}
            >
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
