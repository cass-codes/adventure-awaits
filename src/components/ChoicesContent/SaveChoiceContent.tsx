import { SaveChoiceOption } from "../../types";

function SaveChoiceContent({
  choice,
  onSelect,
}: {
  choice: SaveChoiceOption;
  onSelect: Function;
}) {
  const screenId =
    typeof choice.screenId === "function" ? choice.screenId() : choice.screenId;

  function selectHandler() {
    onSelect(choice.saveValues, choice.screenId);
  }

  return (
    <button onClick={selectHandler} id={screenId}>
      {choice.optionText}
    </button>
  );
}

export default SaveChoiceContent;
