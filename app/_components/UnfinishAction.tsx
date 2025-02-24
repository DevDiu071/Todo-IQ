"use client";

import React, { useTransition } from "react";
import { finishTask, unfinishTask } from "../_lib/actions";
import Spinner from "./Spinner";

export default function UnfinishAction({ taskId }: { taskId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleunfinish = function () {
    startTransition(() => unfinishTask(taskId));
  };
  return (
    <p
      onClick={handleunfinish}
      className="font-semibold flex items-center cursor-pointer text-gray hover:text-black transition-all"
    >
      {isPending ? (
        <>
          <Spinner />
          <span>Remove from completed</span>
        </>
      ) : (
        "Remove from completed"
      )}
    </p>
  );
}
