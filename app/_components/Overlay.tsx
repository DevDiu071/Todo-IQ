"use client";

import React from "react";
import { useAppState } from "../_context/AppStateContext";

export default function Overlay() {
  const { openTaskInputModal, setOpenTaskInputModal } = useAppState();
  return (
    <>
      {openTaskInputModal && (
        <div
          onClick={() => setOpenTaskInputModal(false)}
          className="bg-overlay absolute top-0 left-0 right-0 h-screen w-full z-10"
        ></div>
      )}
    </>
  );
}
