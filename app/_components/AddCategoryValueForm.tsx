"use client";

import React from "react";
import { useAppState } from "../_context/AppStateContext";

export default function AddCategoryValueForm() {
  const { openCategoryItemModal } = useAppState();
  return (
    <>
      {openCategoryItemModal && (
        <form className="p-8 rounded-sm absolute top-1/2 left-1/2 w-[600px] bg-white z-20 transform -translate-x-1/2 -translate-y-1/2 mt-3">
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-sm">
              <span className="border-b-2 border-red mr-1">Add</span>
              Task Priority
            </p>
            <p className="border-b -pb-1 cursor-pointer">Go back</p>
          </div>

          <div className="border-[1.5px] p-3 rounded-sm flex flex-col border-border-color">
            <label className="text-sm mb-1 mt-2  font-semibold">
              Task Priority Title
            </label>
            <input
              type="text"
              className="border-[1.5px] focus:outline-none w-[70%] border-border-color bg-body-background py-[2px] px-2 rounded-md"
            />
            <div className="flex items-center gap-x-1 mt-4 mb-[120px]">
              <button className="bg-gold text-white px-7 py-1 text-xs rounded-md">
                Create
              </button>
              <button className="bg-gold text-white px-7 py-1 text-xs rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
