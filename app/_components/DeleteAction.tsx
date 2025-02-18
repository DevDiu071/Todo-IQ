import React from "react";

export default function DeleteAction({ taskId }: { taskId: string }) {
  return (
    <p className="font-semibold cursor-pointer text-gray hover:text-black transition-all">
      Delete
    </p>
  );
}
