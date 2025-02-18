import React from "react";
import { markVital } from "../_lib/actions";

export default function MarkVital({ taskId }: { taskId: string }) {
  return (
    <p
      onClick={() => markVital(taskId)}
      className="font-semibold cursor-pointer text-gray hover:text-black transition-all"
    >
      Vital
    </p>
  );
}
