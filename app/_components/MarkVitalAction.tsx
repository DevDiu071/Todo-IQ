"use client";

import React, { useTransition } from "react";
import { markVital, removeVital } from "../_lib/actions";
import Spinner from "./Spinner";

export default function MarkVital({ taskId, task }: { taskId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleVital = function () {
    if (!task.vital) {
      startTransition(() => markVital(taskId));
    } else {
      startTransition(() => removeVital(taskId));
    }
  };
  return (
    <p
      onClick={handleVital}
      className="font-semibold flex items-center cursor-pointer text-gray hover:text-black transition-all"
    >
      {isPending ? (
        <>
          <Spinner />
          <span>{task.vital ? "Remove from vital" : "Vital"}</span>
        </>
      ) : (
        `${task.vital ? "Remove from vital" : "Vital"}`
      )}
    </p>
  );
}
