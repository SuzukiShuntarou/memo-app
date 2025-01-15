import { Button } from "./Button";
import { useLogin } from "../hooks/login-hooks";

export function MemoEdit({
  selectedMemo,
  setSelectedMemo,
  handleUpdateClick,
  handleDeleteClick,
}) {
  const { isLogin } = useLogin();

  function handleChange(event) {
    if (isLogin) {
      const inputs = event.target.value.split("\n");
      setSelectedMemo({
        ...selectedMemo,
        title: inputs[0],
        content: inputs.slice(1).join("\n"),
      });
    }
  }

  return (
    <form className="edit-form">
      <textarea
        className="edit-area"
        name="editarea"
        value={`${selectedMemo.title}\n${selectedMemo.content}`}
        onChange={handleChange}
      />
      {isLogin && (
        <div className="edit-btn">
          <Button buttonName="編集" onClick={handleUpdateClick} />
          <Button buttonName="削除" onClick={handleDeleteClick} />
        </div>
      )}
    </form>
  );
}
