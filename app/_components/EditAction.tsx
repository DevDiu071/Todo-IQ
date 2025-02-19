"use client";

import React from "react";
import { markVital } from "../_lib/actions";
import { useAppState } from "../_context/AppStateContext";

export default function EditAction({ taskId }: { taskId: string }) {
  const { openTaskInputModal, setOpenTaskInputModal, setOpenOverlay } =
    useAppState();

  const handleEdit = function () {
    setOpenOverlay(true);
    setOpenTaskInputModal(true);
  };
  return (
    <p className="font-semibold cursor-pointer text-gray hover:text-black transition-all">
      Edit
    </p>
  );
}
