"use client";

import React from "react";
import MarkVitalAction from "./MarkVitalAction";
import EditAction from "./EditAction";
import DeleteAction from "./DeleteAction";
import FinishAction from "./FinishAction";
import UnfinishAction from "./UnfinishAction";

interface ActionsTypes {
  taskId: string;
}

export default function CompletedActions({ taskId, task }: ActionsTypes) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col absolute right-[5px] top-0 z-10 text-start text-xs gap-y-3 rounded-md shadow-md bg-white pl-4 pr-7 py-2"
    >
      <UnfinishAction taskId={taskId} />
      <DeleteAction taskId={taskId} />
    </div>
  );
}
