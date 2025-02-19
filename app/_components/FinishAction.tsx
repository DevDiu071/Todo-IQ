"use client";

import React, { useTransition } from "react";
import { finishTask } from "../_lib/actions";
import Spinner from "./Spinner";

export default function FinishAction({ taskId }: { taskId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleFinish = function () {
    startTransition(() => finishTask(taskId));
  };
  return (
    <p
      onClick={handleFinish}
      className="font-semibold flex items-center cursor-pointer text-gray hover:text-black transition-all"
    >
      {isPending ? (
        <>
          <Spinner />
          <span>Finish</span>
        </>
      ) : (
        "Finish"
      )}
    </p>
  );
}
