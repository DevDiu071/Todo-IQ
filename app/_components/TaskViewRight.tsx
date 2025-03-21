import React from "react";

import Image from "next/image";
import cardImg from "@/public/cardImg.png";
import EmptyView from "./EmptyView";
import { Task } from "../_lib/types";

interface TaskViewRight {
  task: Task | null;
}

export default function TaskViewRight({ task, tasks }: TaskViewRight) {
  return (
    <div className="border ml-4 mr-6 pr-5 mb-6 border-border-color rounded-xl px-5 py-2 flex flex-col ">
      {task !== null ? (
        <>
          <div className="flex flex-col">
            <div className="flex gap-x-4 items-end">
              <div className="relative aspect-square h-24">
                <Image
                  src={cardImg}
                  fill
                  alt="banner"
                  className="object-cover"
                />
              </div>
              <div className="leading-loose">
                {task?.taskcategories.map((category) => (
                  <p key={category.categoryvalues.value}>
                    {category.categoryvalues.categories?.name}:
                    <span>{category.categoryvalues.value}</span>
                  </p>
                ))}
                <p className="text-xs leading-relaxed text-gray">
                  Created on: {task?.created_at}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray">
              <span className="font-semibold">Task Title: </span>
              {task?.title}
            </p>
            <p className="mt-5 text-sm text-gray">
              <span className="font-semibold">Task description: </span>
              {task?.description}
            </p>
            <ol className="list-decimal list-inside text-sm text-gray mt-5">
              <li>Listen to a podcast or audiobook</li>
              <li>Listen to a podcast or audiobook</li>
              <li>Listen to a podcast or audiobook</li>
              <li>Listen to a podcast or audiobook</li>
              <li>Listen to a podcast or audiobook</li>
            </ol>
          </div>

          <div className="flex items-center gap-x-2 flex-1  justify-end mt-[105px]">
            <button>
              <svg
                className="w-5 h-5 fill-white bg-red p-1 rounded-sm"
                viewBox="0 0 14 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V6C13 4.9 12.1 4 11 4H3C1.9 4 1 4.9 1 6V16ZM13 1H10.5L9.79 0.29C9.61 0.11 9.35 0 9.09 0H4.91C4.65 0 4.39 0.11 4.21 0.29L3.5 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H13C13.55 3 14 2.55 14 2C14 1.45 13.55 1 13 1Z" />
              </svg>
            </button>

            <button>
              <svg
                className="w-5 h-5 fill-white bg-red p-1 rounded-sm"
                viewBox="0 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0.949786C13.296 0.949786 14.496 1.35979 15.477 2.05979L6.343 11.1928C6.24749 11.285 6.17131 11.3954 6.1189 11.5174C6.06649 11.6394 6.0389 11.7706 6.03775 11.9034C6.0366 12.0362 6.0619 12.1678 6.11218 12.2907C6.16246 12.4136 6.23671 12.5253 6.3306 12.6192C6.4245 12.7131 6.53615 12.7873 6.65905 12.8376C6.78194 12.8879 6.91362 12.9132 7.0464 12.912C7.17918 12.9109 7.3104 12.8833 7.4324 12.8309C7.55441 12.7785 7.66475 12.7023 7.757 12.6068L16.891 3.47279C17.6141 4.48782 18.0019 5.70351 18 6.94979V16.9498C18 17.4802 17.7893 17.9889 17.4142 18.364C17.0391 18.7391 16.5304 18.9498 16 18.9498H2C1.46957 18.9498 0.960859 18.7391 0.585786 18.364C0.210714 17.9889 0 17.4802 0 16.9498V2.94979C0 2.41935 0.210714 1.91065 0.585786 1.53557C0.960859 1.1605 1.46957 0.949786 2 0.949786H12ZM18.657 0.292786C18.8445 0.480314 18.9498 0.734622 18.9498 0.999786C18.9498 1.26495 18.8445 1.51926 18.657 1.70679L16.89 3.47279C16.5006 2.9261 16.0227 2.44821 15.476 2.05879L17.242 0.292786C17.4295 0.105315 17.6838 0 17.949 0C18.2142 0 18.4695 0.105315 18.657 0.292786Z" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <EmptyView />
      )}
    </div>
  );
}
