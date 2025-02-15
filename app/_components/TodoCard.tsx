import React from "react";
import cardImg from "@/public/card-image.png";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import clsx from "clsx";
import { Task } from "../_lib/types";

interface TodoCard {
  task: Task;
}

export default function TodoCard({ task }: TodoCard) {
  return (
    <div className="border border-border-color py-2 px-3 rounded-2xl mt-3">
      <div className="grid grid-cols-[5fr_1fr] items-center gap-x-6">
        <div className="flex items-start gap-x-2 ">
          <FaRegCircle
            className={clsx("text-sm text-green-600", {
              "text-red": task.status === "Not started",
              "text-green-600": task.status === "Completed",
              "text-blue-700": task.status === "In progress",
            })}
          />
          <div className="gap-x-12 items-end">
            <div>
              <p className="text-sm mb-2 font-semibold">{task.title}</p>
              <p className="mb-3 text-gray text-xs">{task.description}</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square h-16">
          <Image src={cardImg} alt="card-img" fill className="object-cover" />
        </div>
      </div>
      <div className="flex ml-5 items-end gap-x-2 text-xs mt-2">
        <p>
          Priority: <span className="text-light-blue">{task.priority}</span>
        </p>
        <p>
          Status:
          <span
            className={clsx("text-red ml-[3px] font-semibold", {
              "text-red": task.status === "Not started",
            })}
          >
            {task.status}
          </span>
        </p>
        <p className="text-gray">Due Date: {task.date}</p>
      </div>
    </div>
  );
}
