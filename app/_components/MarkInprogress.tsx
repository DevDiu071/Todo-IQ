"use client";

import React, { useTransition } from "react";
import { finishTask, startTask } from "../_lib/actions";
import Spinner from "./Spinner";

export default function MarkInprogress({ taskId }: { taskId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleStart = function () {
    startTransition(() => startTask(taskId));
  };
  return (
    <p
      onClick={handleStart}
      className="font-semibold flex items-center cursor-pointer text-gray hover:text-black transition-all"
    >
      {isPending ? (
        <>
          <Spinner />
          <span>Start</span>
        </>
      ) : (
        "Start"
      )}
    </p>
  );
}
