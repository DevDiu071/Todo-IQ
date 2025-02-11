"use client";

import React from "react";
import { useAppState } from "../_context/AppStateContext";

export default function CreatecategoriesForm() {
  const { setSwitchCategories } = useAppState();
  return (
    <form className="flex flex-col mt-3">
      <label className="text-sm mb-1 mt-2  font-semibold">Category name</label>
      <input
        type="text"
        className="border-[1.5px] focus:outline-none w-[60%] border-border-color bg-body-background py-[2px] px-2 rounded-md"
      />
      <div className="flex items-center gap-x-1 mt-4">
        <button className="bg-gold text-white px-7 py-1 text-xs rounded-md">
          Create
        </button>
        <button
          onClick={() => setSwitchCategories(false)}
          className="bg-gold text-white px-7 py-1 text-xs rounded-md"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
