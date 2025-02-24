import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function NoTasksView() {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <IoDocumentTextOutline className="w-[100px] h-[100px] text-border-color " />
      <p className="text-sm text-gray">No tasks to display!</p>
    </div>
  );
}
