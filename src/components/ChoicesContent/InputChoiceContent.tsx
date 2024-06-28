import { useRef, useState } from "react";
import { InputChoiceOption } from "../../types";
import "./InputChoiceContent.css";

function InputChoiceContent({
  choice,
  onSelect,
}: {
  choice: InputChoiceOption;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSelect: Function;
}) {
  const [errorState, setErrorState] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function selectHandler(event: any) {
    event.preventDefault();

    const screenId = choice.screenId;

    const enteredInput = inputRef?.current?.value || undefined;
    if (!enteredInput) {
      setErrorState(true);
    }
    const savePath = choice.savePath;
    if (enteredInput && savePath) {
      setErrorState(false);
      onSelect(savePath, enteredInput, screenId);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
