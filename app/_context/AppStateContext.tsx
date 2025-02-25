"use client";

import { createContext, useContext, useState } from "react";
import { ContextTypes, Task, TaskInputTypes } from "../_lib/types";

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
  const [vitalTaskView, setVitalTaskView] = useState<Task | null>(null);
  const [myTaskView, setMyTaskView] = useState<Task | null>(null);
  const [selectedVitalId, setSelectedVitalId] = useState<number | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const [id, setId] = useState<number | "">("");
  const [num, setNum] = useState<string>("");

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
        vitalTaskView,
        setVitalTaskView,
        myTaskView,
        setMyTaskView,
        selectedTaskId,
        setSelectedTaskId,
        selectedVitalId,
        setSelectedVitalId,
        title,
        setTitle,
        description,
        setDescription,
        edit,
        setEdit,
        setId,
        id,
        num,
        setNum,
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
