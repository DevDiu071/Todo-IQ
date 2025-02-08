import React from "react";

export default function AddtaxForm() {
  return (
    <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[600px] bg-white">
      <div className="flex justify-between items-center">
        <button>Add new task</button>
        <p>Go back</p>
      </div>
      <form className="flex flex-col mt-5">
        <label className="text-sm mb-1 font-semibold">Title</label>
        <input
          type="text"
          className="border-[1.5px] focus:outline-none border-border-color bg-body-background py-[2px] px-2 rounded-md"
        />
        <label className="text-sm mb-1 mt-2  font-semibold">Date</label>
        <input
          type="text"
          className="border-[1.5px] focus:outline-none border-border-color bg-body-background py-[2px] px-2 rounded-md"
        />
        <p>Priority</p>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <p>Moderate</p>
            <input type="checkbox" className="align-middle" />
          </div>
          <div className="flex gap-x-2">
            <label>Moderate</label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center gap-x-2">
            <label>Moderate</label>
            <input type="checkbox" />
          </div>
        </div>
      </form>
    </div>
  );
}
