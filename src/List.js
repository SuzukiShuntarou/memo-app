export function List({ memos, onClick }) {
  return (
    <>
      {memos.map((memo) => (
        <li key={memo.id} tabIndex={0}>
          <span onClick={() => onClick(memo)}>{memo.title}</span>
        </li>
      ))}
    </>
  );
}
