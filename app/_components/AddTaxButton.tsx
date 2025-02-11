"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { useAppState } from "../_context/AppStateContext";

export default function AddTaxButton() {
  const { setOpenTaskInputModal } = useAppState();
  return (
    <button
      onClick={() => setOpenTaskInputModal(true)}
      className="flex items-center gap-x-1"
    >
      <FaPlus className="w-3 h-3 text-gold" />
      <span className="text-gray text-sm">Add task</span>
    </button>
  );
}
