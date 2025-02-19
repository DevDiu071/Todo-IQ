"use client";

import React, { useTransition } from "react";
import { markVital } from "../_lib/actions";
import Spinner from "./Spinner";

export default function MarkVital({ taskId }: { taskId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleVital = function () {
    startTransition(() => markVital(taskId));
  };
  return (
    <p
      onClick={handleVital}
      className="font-semibold flex items-center cursor-pointer text-gray hover:text-black transition-all"
    >
      {isPending ? (
        <>
          <Spinner />
          <span>Vital</span>
        </>
      ) : (
        "Vital"
      )}
    </p>
  );
}
