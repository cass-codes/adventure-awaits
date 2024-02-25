import { ScreenChoiceOption } from "../../types";

function ScreenChoiceContent({
  choice,
  onSelect,
}: {
  choice: ScreenChoiceOption;
  onSelect: Function;
}) {
  function selectHandler() {
    const screenId =
      typeof choice.screenId === "function"
        ? choice.screenId()
        : choice.screenId;
    onSelect(screenId);
  }

  const screenId =
    typeof choice.screenId === "function" ? choice.screenId() : choice.screenId;

  return (
    <button onClick={selectHandler} id={screenId}>
      {choice.optionText}
    </button>
  );
}

export default ScreenChoiceContent;
