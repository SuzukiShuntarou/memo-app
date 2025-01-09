import { createContext, useState, useContext } from "react";

const SelectedMemoContext = createContext();

export const SelectedMemoProvider = ({ children }) => {
  const [selectedMemo, setSelectedMemo] = useState("");

  return (
    <SelectedMemoContext.Provider value={{ selectedMemo, setSelectedMemo }}>
      {children}
    </SelectedMemoContext.Provider>
  );
};

export const useSelectedMemo = () => useContext(SelectedMemoContext);
