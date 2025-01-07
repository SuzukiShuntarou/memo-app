import { useState, useEffect } from "react";
import { Edit } from "./Edit";
import { MemoList } from "./MemoList";
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
    <div className="container">
      <div className="item">
        <ul>
          <MemoList memos={memos} onClick={handleClickEdit} />
          <li>
            <span onClick={handleClickCreate}>+</span>
          </li>
        </ul>
      </div>
      <div className="item">
        {isEdit && (
          <Edit
            selectedMemo={selectedMemo}
            setSelectedMemo={setSelectedMemo}
            handleUpdateClick={() => update({ selectedMemo, memos, setMemos })}
            handleDeleteClick={() =>
              destroy({ selectedMemo, memos, setMemos, setIsEdit })
            }
          />
        )}
      </div>
    </div>
  );
}
