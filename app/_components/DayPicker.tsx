"use client";

import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppState } from "../_context/AppStateContext";
import { LuCalendarDays } from "react-icons/lu";

export default function Daypicker() {
  const { selectedDate, handleDateChange, dateOpen, setDateOpen } =
    useAppState();
  const selectedDateString =
    selectedDate instanceof Date
      ? selectedDate.toISOString().split("T").at(0)
      : selectedDate;
  const selectedDateObject = selectedDateString
    ? new Date(selectedDateString)
    : null;

  return (
    <div>
      <div className="flex flex-col">
        <label className="text-sm mb-1 mt-2  font-semibold">Due Date</label>
        <div className="flex items-center border-[1.5px] border-border-color w-[70%] rounded-md justify-between px-2">
          <input
            type="text"
            readOnly
            required
            name="date"
            value={selectedDateString || ""}
            className="border-[1.5px] focus:outline-none  border-none bg-body-background py-[2px] px-2"
          />
          <LuCalendarDays
            className="text-xl text-gray cursor-pointer"
            onClick={() => setDateOpen((open) => !open)}
          />
        </div>
      </div>
      {dateOpen && (
        <div className="absolute mt-1">
          <DatePicker
            selected={selectedDateObject}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            id="date"
            inline
            onSelect={() => setDateOpen(false)}
            onClickOutside={() => setDateOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
