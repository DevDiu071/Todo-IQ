"use client";

import React from "react";
import MarkVitalAction from "./MarkVitalAction";
import EditAction from "./EditAction";
import DeleteAction from "./DeleteAction";
import FinishAction from "./FinishAction";
import MarkInprogress from "./MarkInprogress";

interface ActionsTypes {
  taskId: string;
}

export default function Actions({ taskId, task }: ActionsTypes) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col absolute right-[5px] top-0 z-10 text-start text-xs gap-y-2 rounded-md shadow-md bg-white pl-4 pr-7 py-2"
    >
      <MarkVitalAction taskId={taskId} task={task} />
      <EditAction task={task} taskId={taskId} />
      <DeleteAction taskId={taskId} />
      <MarkInprogress taskId={taskId} />
      <FinishAction taskId={taskId} />
    </div>
  );
}
