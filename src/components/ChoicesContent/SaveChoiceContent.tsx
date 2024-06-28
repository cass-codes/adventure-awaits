import { SaveChoiceOption } from "../../types";

function SaveChoiceContent({
  choice,
  onSelect,
}: {
  choice: SaveChoiceOption;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSelect: Function;
}) {
  function selectHandler() {
    const screenId = choice.screenId;
    onSelect(choice.saveValues, screenId);
  }

  return <button onClick={selectHandler}>{choice.optionText}</button>;
}

export default SaveChoiceContent;
