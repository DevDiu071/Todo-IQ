"use client";
import React from "react";
import { useAppState } from "../_context/AppStateContext";
import Daypicker from "./DayPicker";
import { createTask, editTask } from "../_lib/actions";
import SubmitTaxBtn from "./SubmitTaxBtn";

export default function AddtaxForm() {
  const {
    openTaskInputModal,
    handleCheckBox,
    selectedCheckbox,
    setOpenTaskInputModal,
    setOpenOverlay,
    title,
    setTitle,
    description,
    setDescription,
    setSelectedDate,
    setSelectedCheckbox,
    edit,
    setEdit,
    id,
  } = useAppState();

  return (
    <>
      {openTaskInputModal && (
        <div className="absolute sm:top-1/2 top-[300px] left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[390px] sm:w-[600px] rounded-md bg-white">
          <div className="flex justify-between items-center">
            <button className="font-semibold">
              <span className="border-b-2 border-gold">Add new</span> task
            </button>
            <p>Go back</p>
          </div>
          <form
            action={async (formdata) => {
              if (!edit) {
                await createTask(formdata);
                setOpenTaskInputModal(false);
                setOpenOverlay(false);
                setTitle("");
                setDescription("");
                setSelectedDate(null);
                setSelectedCheckbox("");
              } else {
                await editTask(formdata);
                setOpenTaskInputModal(false);
                setOpenOverlay(false);
                setEdit(false);
                setTitle("");
                setDescription("");
                setSelectedDate(null);
                setSelectedCheckbox("");
              }
            }}
            className=" mt-5"
          >
            <div className="border-[1.5px] p-3 rounded-sm border-border-color flex flex-col">
              <label className="text-sm mb-1 font-semibold">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(title);
                }}
                className="border-[1.5px] focus:outline-none border-border-color bg-body-background py-[2px] w-[70%] px-2 rounded-md"
              />
              <input type="hidden" name="id" value={id} />

              <Daypicker />
              <p className="font-semibold mt-2">Priority</p>
              <div className="flex items-center gap-x-8 mt-2">
                <div className="flex items-center gap-x-2">
                  <p className="text-gray">Extreme</p>
                  <div>
                    <input
                      type="checkbox"
                      name="priority"
                      checked={selectedCheckbox === "Extreme"}
                      onChange={handleCheckBox}
                      value="Extreme"
                      className="align-middle w-4 h-4 inline-block"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <label className="text-gray">Moderate</label>
                  <div>
                    <input
                      type="checkbox"
                      name="priority"
                      onChange={handleCheckBox}
                      checked={selectedCheckbox === "Moderate"}
                      value="Moderate"
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
                      name="priority"
                      value="low"
                      checked={selectedCheckbox === "low"}
                      onChange={handleCheckBox}
                      className="align-middle w-4 h-4 inline-block"
                    />
                  </div>
                </div>
              </div>
              <p className="font-semibold mt-2">Task description</p>
              <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-x-6 mt-2">
                <textarea
                  rows={4}
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
            <SubmitTaxBtn />
          </form>
        </div>
      )}
    </>
  );
}
