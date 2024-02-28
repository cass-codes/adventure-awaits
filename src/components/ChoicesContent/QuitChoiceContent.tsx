import { QuitChoiceOption } from "../../types";

function QuitChoiceContent({
  choice,
  onSelect,
}: {
  choice: QuitChoiceOption;
  onSelect: Function;
}) {
  function selectHandler() {
    const screenId =
      typeof choice.screenId === "function"
        ? choice.screenId()
        : choice.screenId;
    onSelect(screenId);
  }

  return <button onClick={selectHandler}>{choice.optionText}</button>;
}

export default QuitChoiceContent;
