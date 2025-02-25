"use client";

import React, { useState } from "react";
import { useAppState } from "../_context/AppStateContext";

export default function ClientInput({ contact }) {
  const { num, setNum } = useAppState();
  return (
    <input
      type="text"
      name="contact"
      onChange={(e) => setNum(e.target.value)}
      value={contact || num}
      disabled={contact !== ""}
      placeholder="Enter contact number"
      className="border-[1.5px] border-border-color focus:outline-none bg-body-background py-[2px] px-2 rounded-md"
    />
  );
}
