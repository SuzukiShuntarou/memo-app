export function MemoList({ memos, onClick }) {
  return (
    <>
      {memos.map((memo) => (
        <li key={memo.id}>
          <span onClick={() => onClick(memo)}>{memo.title}</span>
        </li>
      ))}
    </>
  );
}
