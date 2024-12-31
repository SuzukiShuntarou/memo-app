import { Button } from "./Button";

export function Edit({
  selectedMemo,
  setSelectedMemo,
  handleUpdateClick,
  handleDeleteClick,
}) {
  function handleChange(event) {
    const inputs = event.target.value.split("\n");
    setSelectedMemo({
      ...selectedMemo,
      title: inputs[0],
      content: inputs.slice(1).join("\n"),
    });
  }

  return (
    <form className="edit-form">
      <textarea
        className="edit-area"
        id={selectedMemo.id}
        name={selectedMemo.title}
        value={`${selectedMemo.title}\n${selectedMemo.content}`}
        onChange={handleChange}
      />
      <div className="edit-btn">
        <Button buttonName="編集" onClick={handleUpdateClick} />
        <Button buttonName="削除" onClick={handleDeleteClick} />
      </div>
    </form>
  );
}
