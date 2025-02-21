"use client";

import React from "react";
import { useAppState } from "../_context/AppStateContext";
import { Task } from "../_lib/types";

export default function EditAction({ task }: { taskId: string; task: Task }) {
  const {
    setOpenTaskInputModal,
    setOpenOverlay,
    setTitle,
    setDescription,
    setSelectedCheckbox,
    setSelectedDate,
    setEdit,
    setId,
    id,
  } = useAppState();

  const handleEdit = function () {
    setOpenOverlay(true);
    setOpenTaskInputModal(true);
    setTitle(task.title);
    setDescription(task.description);
    const priority = task.taskcategories.find(
      (category) => category.categoryvalues.categories.name === "Priority"
    );
    if (priority) {
      setSelectedCheckbox(priority.categoryvalues.value);
    }
    setSelectedDate(new Date(task.date));
    setEdit(true);
    setId(Number(task.id));
    console.log("IDIDIDIDIDI state: ", id);
    console.log("IDIDIDIDIDI id: ", task.id);
  };
  return (
    <p
      onClick={handleEdit}
      className="font-semibold cursor-pointer text-gray hover:text-black transition-all"
    >
      Edit
    </p>
  );
}
