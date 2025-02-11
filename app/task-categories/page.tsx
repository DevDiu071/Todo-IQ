"use client";

import React from "react";
import TableList from "../_components/TableList";
import { useAppState } from "../_context/AppStateContext";
import CreatecategoriesForm from "../_components/CreatecategoriesForm";

export default function Page() {
  const { switchCategories, setSwitchCategories } = useAppState();
  return (
    <div className="border-[1.4px] border-border-color rounded-xl py-3 px-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">
          <span className="border-b-2 border-red">
            {!switchCategories ? "Task " : "Create "}
          </span>
          Categories
        </p>
        <p
          onClick={() => setSwitchCategories(false)}
          className="border-b -pb-1 cursor-pointer"
        >
          Go back
        </p>
      </div>
      {!switchCategories && (
        <button
          onClick={() => setSwitchCategories(true)}
          className="text-xs bg-gold mb-6 px-3 py-1.5 rounded-md text-white mt-4 "
        >
          Add Category
        </button>
      )}

      {!switchCategories ? <TableList /> : <CreatecategoriesForm />}
    </div>
  );
}
