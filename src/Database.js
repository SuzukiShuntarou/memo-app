function storeLocalStorage(updatedMemos) {
  localStorage.setItem("memos", JSON.stringify(updatedMemos));
}

export function create({ memos, setMemos, setSelectedMemo }) {
  const newMemo = {
    id: crypto.randomUUID(),
    title: "新規メモ",
    content: "",
  };
  const updatedMemos = [...memos, newMemo];
  setMemos(updatedMemos);
  storeLocalStorage(updatedMemos);

  setSelectedMemo(newMemo);
}

export function update({ selectedMemo, memos, setMemos }) {
  const updatedMemos = memos.map((memo) =>
    memo.id === selectedMemo.id
      ? { ...memo, title: selectedMemo.title, content: selectedMemo.content }
      : memo,
  );
  setMemos(updatedMemos);
  storeLocalStorage(updatedMemos);
}

export function destroy({ selectedMemo, memos, setMemos, setIsEdit }) {
  const updatedMemos = memos.filter((memo) => memo.id !== selectedMemo.id);
  setMemos(updatedMemos);
  storeLocalStorage(updatedMemos);

  setIsEdit(false);
}
