"use client";

import { createContext, useContext, useState } from "react";
import { ContextTypes, TaskInputTypes } from "../_lib/types";

const TasksContext = createContext<TaskInputTypes | null>(null);

function AppStateProvider({ children }: ContextTypes) {
  const [openTaskInputModal, setOpenTaskInputModal] = useState<boolean>(false);
  const [switchCategories, setSwitchCategories] = useState<boolean>(false);
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);
  const [openCategoryItemModal, setOpenCategoryItemModal] =
    useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateOpen, setDateOpen] = useState<boolean>(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState<null | string>(null);

  const handleCategoryItemForm = function () {
    setOpenCategoryItemModal(true);
    setOpenOverlay(true);
  };

  const handleOpenTaskInputModal = function () {
    setOpenTaskInputModal(true);
    setOpenOverlay(true);
  };

  const handleCloseOverlay = function () {
    setOpenOverlay(false);
    setOpenTaskInputModal(false);
    setOpenCategoryItemModal(false);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    } else setSelectedDate(null);
  };

  const handleCheckBox = function (event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSelectedCheckbox(value);
    console.log(value);
  };

  return (
    <TasksContext.Provider
      value={{
        openTaskInputModal,
        setOpenTaskInputModal,
        switchCategories,
        setSwitchCategories,
        openOverlay,
        setOpenOverlay,
        selectedDate,
        setSelectedDate,
        openCategoryItemModal,
        setOpenCategoryItemModal,
        handleCategoryItemForm,
        handleOpenTaskInputModal,
        handleCloseOverlay,
        handleDateChange,
        dateOpen,
        setDateOpen,
        selectedCheckbox,
        setSelectedCheckbox,
        handleCheckBox,
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
