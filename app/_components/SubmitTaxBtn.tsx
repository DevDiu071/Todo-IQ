"use client";

import clsx from "clsx";
import React from "react";
import { useFormStatus } from "react-dom";
import { useAppState } from "../_context/AppStateContext";

export default function SubmitTaxBtn() {
  const { edit } = useAppState();
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-gold mx-3 w-min text-white px-6 py-1.5 text-xs rounded-md mt-4",
        { "bg-gold-light": pending }
      )}
    >
      {pending && !edit && "Creating..."}
      {!pending && "Done"}
      {pending && edit && "Updating..."}
    </button>
  );
}
