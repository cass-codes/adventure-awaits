import { SaveChoiceOption } from "../../types";

function SaveChoiceContent({
  choice,
  onSelect,
}: {
  choice: SaveChoiceOption;
  onSelect: Function;
}) {
  function selectHandler() {
    const screenId =
      typeof choice.screenId === "function"
        ? choice.screenId()
        : choice.screenId;
    onSelect(choice.saveValues, screenId);
  }

  return <button onClick={selectHandler}>{choice.optionText}</button>;
}

export default SaveChoiceContent;
