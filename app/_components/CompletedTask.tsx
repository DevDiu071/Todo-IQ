"use client";

import React, { useState } from "react";
import cardImg from "@/public/cardImg.png";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import { Task } from "../_lib/types";
import Actions from "./Actions";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import CompletedActions from "./CompletedActions";

interface CompletedTask {
  task: Task;
}

export default function CompletedTask({ task }: CompletedTask) {
  const [actionsOpen, setActionsOpen] = useState<boolean>(false);
  return (
    <div
      onClick={() => setActionsOpen(false)}
      className="border max-w-[370px] relative grid grid-cols-[5fr_1fr] items-center gap-x-4 border-border-color py-1 px-3 rounded-2xl mt-3"
    >
      <PiDotsThreeOutlineLight
        onClick={(e) => {
          e.stopPropagation();
          setActionsOpen(true);
        }}
        className="w-4 h-4 absolute top-0 right-0 mx-2 mb-2 cursor-pointer"
      />
      {actionsOpen && <CompletedActions task={task} taskId={task.id} />}
      <div className="flex items-start gap-x-2">
        <FaRegCircle className="text-2xl text-green-600" />
        <div className="gap-x-12 items-end">
          <div>
            <p className="text-sm mb-1 font-semibold">{task.title}</p>
            <p className="mb-2 text-gray text-xs">
              {task.description.slice(0, 60)}
            </p>
            <p className="text-xs mb-1">
              Status:
              <span className="text-green-600">
                {task.completed && "Completed"}
              </span>
            </p>
            <p className="text-xs">Completed 2 days ago</p>
          </div>
        </div>
      </div>

      <div className="relative aspect-square h-20">
        <Image src={cardImg} alt="card-img" fill className="object-cover" />
      </div>
    </div>
  );
}
