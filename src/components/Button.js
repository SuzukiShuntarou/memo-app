export function Button({ buttonName, onClick }) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {buttonName}
    </button>
  );
}
