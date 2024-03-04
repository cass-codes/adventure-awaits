import { ScreenChoiceOption } from "../../types";

function ScreenChoiceContent({
  choice,
  onSelect,
}: {
  choice: ScreenChoiceOption;
  onSelect: Function;
}) {
  function selectHandler() {
    const screenId = choice.screenId;
    onSelect(screenId);
  }

  const screenId = choice.screenId;

  return (
    <button onClick={selectHandler} id={screenId}>
      {choice.optionText}
    </button>
  );
}

export default ScreenChoiceContent;
