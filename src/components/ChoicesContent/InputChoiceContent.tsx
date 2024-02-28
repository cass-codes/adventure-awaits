import { useRef, useState } from "react";
import { InputChoiceOption } from "../../types";
import "./InputChoiceContent.css";

function InputChoiceContent({
  choice,
  onSelect,
}: {
  choice: InputChoiceOption;
  onSelect: Function;
}) {
  const [errorState, setErrorState] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function selectHandler(event: any) {
    event.preventDefault();

    const screenId =
      typeof choice.screenId === "function"
        ? choice.screenId()
        : choice.screenId;

    const enteredInput = inputRef?.current?.value || undefined;
    if (!enteredInput) {
      setErrorState(true);
    }
    const savePath = choice.savePath;
    if (enteredInput && savePath) {
      setErrorState(false);
      onSelect(savePath, enteredInput, screenId);
      inputRef.current!.value = "";
    }
  }

  return (
    <form key="zero" onSubmit={selectHandler}>
      <div className="InputForm">
        <input key="one" type="text" ref={inputRef} />
        <button type="submit" key="two">
          {choice.optionText}
        </button>
        {errorState && (
          <p className="InputChoice" key="three">
            Please enter a value to continue
          </p>
        )}
      </div>
    </form>
  );
}

export default InputChoiceContent;
