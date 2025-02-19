"use client";

import React, { useTransition } from "react";
import { deleteTask } from "../_lib/actions";
import Spinner from "./Spinner";

export default function DeleteAction({ taskId }: { taskId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = function () {
    startTransition(() => deleteTask(taskId));
    console.log(taskId);
  };
  return (
    <p
      onClick={handleDelete}
      className="font-semibold flex items-center cursor-pointer text-gray hover:text-black transition-all"
    >
      {isPending ? (
        <>
          <Spinner />
          <span>Delete</span>
        </>
      ) : (
        "Delete"
      )}
    </p>
  );
}
