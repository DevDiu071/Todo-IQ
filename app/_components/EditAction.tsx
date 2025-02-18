import React from "react";
import { markVital } from "../_lib/actions";

export default function EditAction({ taskId }) {
  return (
    <p className="font-semibold cursor-pointer text-gray hover:text-black transition-all">
      Edit
    </p>
  );
}
