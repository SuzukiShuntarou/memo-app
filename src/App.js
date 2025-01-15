import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { MemoEdit } from "./components/MemoEdit";
import { MemoList } from "./components/MemoList";
import { create, update, destroy } from "./Database";
import { useLogin } from "./hooks/login-hooks";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedMemo, setSelectedMemo] = useState("");
  const { isLogin, handleLogin } = useLogin();

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
          {isLogin && (
            <li>
              <span onClick={handleClickCreate}>+</span>
            </li>
          )}
        </ul>
      </div>
      <div className="item">
        {isEdit && (
          <MemoEdit
            selectedMemo={selectedMemo}
            setSelectedMemo={setSelectedMemo}
            handleUpdateClick={() => update({ selectedMemo, memos, setMemos })}
            handleDeleteClick={() =>
              destroy({ selectedMemo, memos, setMemos, setIsEdit })
            }
          />
        )}
      </div>
      <div className="item">
        <div className="login-btn">
          <Button
            buttonName={isLogin ? "ログアウト" : "ログイン"}
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}
