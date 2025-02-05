import React from "react";
import Table from "../_components/Table";

export default function page() {
  return (
    <div className="border-[1.4px] border-border-color rounded-xl py-3 px-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">
          <span className="border-b-2 border-red">Task</span> Categories
        </p>
        <p className="border-b -pb-1">Go back</p>
      </div>
      <button className="text-xs bg-gold mb-6 px-3 py-1.5 rounded-md text-white mt-4 ">
        Add category
      </button>
      <Table />
      <Table />
    </div>
  );
}
