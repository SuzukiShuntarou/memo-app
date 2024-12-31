import { useState, useEffect } from "react";
import { Edit } from "./Edit";
import { List } from "./List";
import { create, update, destroy } from "./Database";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedMemo, setSelectedMemo] = useState("");

  useEffect(() => {
    const storageMemos = localStorage.getItem("memos");
    if (storageMemos !== null) {
      setMemos(JSON.parse(storageMemos));
    }
  }, []);

  function handleClickEdit(memo) {
    setIsEdit(!isEdit);
    setSelectedMemo(memo);
  }

  function handleClickCreate() {
    // Edit画面を開いていた時は開いたまま
    if (!isEdit) {
      setIsEdit(!isEdit);
    }
    create({ memos, setMemos, setSelectedMemo });
  }

  return (
    <>
      <div class="container">
        <div class="item">
          <ul>
            <List memos={memos} onClick={handleClickEdit} />
            <li>
              <span onClick={handleClickCreate}>+</span>
            </li>
          </ul>
        </div>
        <div class="item">
          {isEdit ? (
            <Edit
              selectedMemo={selectedMemo}
              setSelectedMemo={setSelectedMemo}
              handleUpdateClick={() =>
                update({ selectedMemo, memos, setMemos })
              }
              handleDeleteClick={() =>
                destroy({ selectedMemo, memos, setMemos, setIsEdit })
              }
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <Initial />
    </>
  );
}

// デバッグ用
function Initial() {
  function handleInitial() {
    // イニシャルデータをセット;
    localStorage.setItem(
      "memos",
      JSON.stringify([
        {
          id: 0,
          title: "タイトル",
          content: "内容",
        },
        {
          id: 1,
          title: "タイトル1",
          content: "内容1",
        },
        {
          id: 2,
          title: "タイトル2",
          content: "内容2",
        },
        {
          id: 3,
          title: "タイトル3",
          content: "内容3",
        },
      ]),
    );
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <form>
        デバッグ用：
        <button
          id="initialDataButton" // id 属性を追加
          name="initialData" // name 属性を追加
          type="submit"
          onClick={handleInitial}
        >
          イニシャルデータをセット
        </button>
      </form>
    </>
  );
}
