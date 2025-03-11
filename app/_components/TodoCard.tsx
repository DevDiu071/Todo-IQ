"use client";

import React, { useState } from "react";
import cardImg from "@/public/card-image.png";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import clsx from "clsx";
import { Task } from "../_lib/types";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import Actions from "./Actions";

interface TodoCard {
  task: Task;
  onClickCard?: () => void;
  active?: boolean;
  className?: string;
}

export default function TodoCard({
  task,
  onClickCard = () => {},
  active,
  className,
}: TodoCard) {
  const [actionsOpen, setActionsOpen] = useState<boolean>(false);

  const status = task.taskcategories.find(
    (cat) => cat.categoryvalues.categories.name === "Status"
  )?.categoryvalues.value;

  return (
    <div
      onClick={() => {
        onClickCard();
        setActionsOpen(false);
      }}
      className={clsx(
        `border max-w-[370px] sm:max-w-[400px] mb-2 relative border-border-color py-2 px-3 rounded-2xl mt-1 ${className}`,
        {
          "bg-active-card": active,
        }
      )}
    >
      <PiDotsThreeOutlineLight
        onClick={(e) => {
          e.stopPropagation();
          setActionsOpen(true);
        }}
        className="w-4 h-4 absolute top-0 right-0 mx-2 mt-1 cursor-pointer"
      />
      {actionsOpen && <Actions task={task} taskId={task.id} />}
      <div className="">
        <div className="grid sm:grid-cols-[5fr_1fr] grid-cols-[2fr_70px] items-center gap-x-6">
          <div className="flex w-full items-start ">
            <FaRegCircle
              className={clsx("text-sm text-green-600", {
                "text-red": status === "Not started",
                "text-green-600": status === "Completed",
                "text-blue-700": status === "In progress",
              })}
            />
            <div className="gap-x-12 items-end">
              <div>
                <p className="sm:text-sm text-xl mb-2 font-semibold">
                  {task.title}
                </p>
                <p className="mb-3 text-lg text-gray sm:text-xs">
                  {task.description.slice(0, 40)}
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square h-16 sm:h-16 mt-6">
            <Image src={cardImg} alt="card-img" fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-wrap ml-2 sm:ml-5 items-end gap-x-2 text-xs mt-2">
          {task.taskcategories.map((category) => (
            <p
              className="text-lg sm:text-xs"
              key={category.categoryvalues.value}
            >
              {category.categoryvalues.categories?.name}:
              <span
                className={clsx("ml-[3px] font-semibold", {
                  "text-red":
                    category.categoryvalues.value === "Not started" ||
                    category.categoryvalues.value === "Extreme",
                  "text-light-blue":
                    category.categoryvalues.value === "Moderate",
                })}
              >
                {category.categoryvalues.value}
              </span>
            </p>
          ))}
          <p className="text-gray sm:text-sm text-lg">Due Date: {task.date}</p>
        </div>
      </div>
    </div>
  );
}
