"use client";

import TodoCard from "./TodoCard";
import { Task, TaskView } from "../_lib/types";
import TaskViewRight from "./TaskViewRight";
import { useAppState } from "../_context/AppStateContext";

export default function VitalTaskView({ tasks }: TaskView) {
  const {
    vitalTaskView,
    setVitalTaskView,
    selectedVitalId,
    setSelectedVitalId,
  } = useAppState();

  const handleClick = function (task: Task) {
    setVitalTaskView(task);
    setSelectedVitalId(Number(task.id));
  };

  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div className="border border-border-color rounded-xl px-5 py-2">
        <p className="font-semibold">
          <span className="border-b-2 border-red">Vital</span> Tasks
        </p>
        {tasks?.map((task) => (
          <TodoCard
            onClickCard={() => handleClick(task)}
            task={task}
            active={Number(task.id) === selectedVitalId}
            className="cursor-pointer"
            key={task.id}
          />
        ))}
      </div>
      <TaskViewRight task={vitalTaskView} />
    </div>
  );
}
