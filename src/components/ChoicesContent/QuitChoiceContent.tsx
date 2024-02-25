import { QuitChoiceOption } from "../../types";

function QuitChoiceContent({
  choice,
  onSelect,
}: {
  choice: QuitChoiceOption;
  onSelect: Function;
}) {
  const screenId =
    typeof choice.screenId === "function" ? choice.screenId() : choice.screenId;

  function selectHandler() {
    onSelect(screenId);
  }

  return (
    <button onClick={selectHandler} id={screenId}>
      {choice.optionText}
    </button>
  );
}

export default QuitChoiceContent;
