"use client";

import { createContext, useContext, useState } from "react";
import { ContextTypes, TaskInputTypes } from "../_lib/types";

const TasksContext = createContext<TaskInputTypes | null>(null);

function AppStateProvider({ children }: ContextTypes) {
  const [openTaskInputModal, setOpenTaskInputModal] = useState<boolean>(false);
  const [switchCategories, setSwitchCategories] = useState<boolean>(false);
  return (
    <TasksContext.Provider
      value={{
        openTaskInputModal,
        setOpenTaskInputModal,
        switchCategories,
        setSwitchCategories,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

const useAppState = () => {
  const context = useContext(TasksContext);
  if (context === null) throw new Error("Context was used outside provider");
  return context;
};

export { AppStateProvider, useAppState };
