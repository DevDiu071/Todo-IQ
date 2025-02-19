"use client";

import React from "react";
import MarkVitalAction from "./MarkVitalAction";
import EditAction from "./EditAction";
import DeleteAction from "./DeleteAction";
import FinishAction from "./FinishAction";

interface ActionsTypes {
  taskId: string;
}

export default function Actions({ taskId }: ActionsTypes) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col absolute right-[5px] top-0 z-40 text-start text-xs gap-y-3 rounded-md shadow-md bg-white pl-4 pr-7 py-2"
    >
      <MarkVitalAction taskId={taskId} />
      <EditAction taskId={taskId} />
      <DeleteAction taskId={taskId} />
      <FinishAction taskId={taskId} />
    </div>
  );
}
