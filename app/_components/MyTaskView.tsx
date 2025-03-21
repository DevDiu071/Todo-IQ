"use client";

import TodoCard from "./TodoCard";
import { Task, TaskView } from "../_lib/types";
import TaskViewRight from "./TaskViewRight";
import { useAppState } from "../_context/AppStateContext";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function MyTaskView({ tasks }: TaskView) {
  const { myTaskView, setMyTaskView, selectedTaskId, setSelectedTaskId } =
    useAppState();

  const handleClick = function (task: Task) {
    setMyTaskView(task);
    setSelectedTaskId(Number(task.id));
  };
  console.log("MY TASK VIEW******: ", myTaskView);
  console.log(myTaskView === null);

  return (
    <div className="grid -ml-7 sm:grid-cols-2 grid-cols-1 gap-y-4 gap-x-4 h-[calc(100vh-6rem)]">
      <div className="sm:border border-border-color rounded-xl px-5 py-2">
        <p className="font-semibold">
          <span className="border-b-2 border-red">My</span> Tasks
        </p>
        <div className="h-[400px] mt-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {tasks?.map((task) => (
            <TodoCard
              onClickCard={() => handleClick(task)}
              task={task}
              active={Number(task.id) === selectedTaskId}
              className="cursor-pointer"
              key={task.id}
            />
          ))}
        </div>
        {tasks?.length === 0 && (
          <div className="flex flex-col justify-center items-center mt-[100px]">
            <IoDocumentTextOutline className="w-[100px] h-[100px] text-border-color " />
            <p className="text-sm text-gray">No tasks to display!</p>
          </div>
        )}
      </div>
      <TaskViewRight task={myTaskView} tasks={tasks} />
    </div>
  );
}
