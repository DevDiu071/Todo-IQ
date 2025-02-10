"use client";

import { createContext, useContext, useState } from "react";
import { ContextTypes } from "../_lib/types";

const TasksContext = createContext<ContextTypes | undefined>(undefined);

function AppStateProvider({ children }: ContextTypes) {
  const [openTaskInputModal, setOpenTaskInputModal] = useState<boolean>(false);
  return (
    <TasksContext.Provider value={{ openTaskInputModal }}>
      {children}
    </TasksContext.Provider>
  );
}

const useAppState = () => {
  const context = useContext(TasksContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
};

export { AppStateProvider, useAppState };
