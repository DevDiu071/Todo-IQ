"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { useAppState } from "../_context/AppStateContext";

export default function CategoryItemBtn() {
  const { handleCategoryItemForm } = useAppState();
  return (
    <button
      onClick={handleCategoryItemForm}
      className=" text-gray flex gap-x-1 items-center"
    >
      <FaPlus className="w-3 h-3 text-gold" />
      <span className="text-xs">Add task status</span>
    </button>
  );
}
