import React from "react";

export default function AddtaxForm() {
  return (
    <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[600px] rounded-md bg-white">
      <div className="flex justify-between items-center">
        <button className="font-semibold">
          <span className="border-b-2 border-gold">Add new</span> task
        </button>
        <p>Go back</p>
      </div>
      <form className=" mt-5">
        <div className="border-[1.5px] p-3 rounded-sm border-border-color flex flex-col">
          <label className="text-sm mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="border-[1.5px] focus:outline-none border-border-color bg-body-background py-[2px] w-[70%] px-2 rounded-md"
          />
          <label className="text-sm mb-1 mt-2  font-semibold">Date</label>
          <input
            type="text"
            className="border-[1.5px] focus:outline-none w-[70%] border-border-color bg-body-background py-[2px] px-2 rounded-md"
          />
          <p className="font-semibold mt-2">Priority</p>
          <div className="flex items-center gap-x-8 mt-2">
            <div className="flex items-center gap-x-2">
              <p className="text-gray">Extreme</p>
              <div>
                <input
                  type="checkbox"
                  className="align-middle w-4 h-4 inline-block"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <label className="text-gray">Moderate</label>
              <div>
                <input
                  type="checkbox"
                  className="align-middle w-4 h-4 inline-block"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <label className="text-gray">Low</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="align-middle w-4 h-4 inline-block"
                />
              </div>
            </div>
          </div>
          <p className="font-semibold mt-2">Task description</p>
          <div className="grid grid-cols-[3fr_1fr] gap-x-6 mt-2">
            <textarea
              rows={4}
              className="rounded-md border-[1.5px] placeholder:text-sm py-2 px-3 border-border-color resize-none"
              placeholder="Start writing here..."
            ></textarea>
            <div className="border-[1.5px] p-3 border-border-color rounded-md flex items-center text-center justify-center">
              <div>
                <p>Image upload</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-gold mx-3 w-min text-white px-6 py-1.5 text-xs rounded-md mt-4">
          Done
        </button>
      </form>
    </div>
  );
}
