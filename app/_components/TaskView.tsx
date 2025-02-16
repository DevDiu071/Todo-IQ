"use client";

import React from "react";

import TodoCard from "./TodoCard";
import { TaskView } from "../_lib/types";
import TaskViewRight from "./TaskViewRight";
import { useAppState } from "../_context/AppStateContext";

export default function TaskView({ tasks }: TaskView) {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div className="border border-border-color rounded-xl px-5 py-2">
        <p className="font-semibold">
          <span className="border-b-2 border-red">Vital</span> Tasks
        </p>
        {tasks?.map((task) => (
          <TodoCard task={task} key={task.id} />
        ))}
      </div>
      <TaskViewRight />
    </div>
  );
}
