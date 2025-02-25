"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

export default function UpdateInfoBtn() {
  const { pending } = useFormStatus();
  return (
    <button className="text-xs bg-gold text-white px-5 py-[6px] rounded-md">
      {pending ? "Updating..." : "Update Info"}
    </button>
  );
}
