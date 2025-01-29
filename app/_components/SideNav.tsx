"use client";

import React from "react";
import Link from "next/link";
import { BiTask } from "react-icons/bi";
import User from "./User";
import Signout from "./Signout";

import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-red  px-4 rounded-tr-md rounded-rl-md flex flex-col">
      <User />
      <ul className="mt-10">
        <Link href="/dashboard" className="mt-8">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-2",
              { "bg-white": pathname === "/dashboard" }
            )}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(" w-4 h-4", {
                "fill-red": pathname === "/dashboard",
                "fill-white": pathname != "/dashboard",
              })}
            >
              <path d="M13.3333 8V0H24V8H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM13.3333 24V10.6667H24V24H13.3333ZM0 24V16H10.6667V24H0Z" />
            </svg>

            <span
              className={clsx("text-sm", {
                "text-red": pathname === "/dashboard",
                "text-white": pathname != "/dashboard",
              })}
            >
              Dashboard
            </span>
          </li>
        </Link>
        <Link href="/vital-task" className="mt-8">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-2",
              { "bg-white": pathname === "/vital-task" }
            )}
          >
            <svg
              viewBox="0 0 8 20"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(" w-4 h-4", {
                "fill-red": pathname === "/vital-task",
                "fill-white": pathname != "/vital-task",
              })}
            >
              <path d="M3.875 0C2.84729 0 1.86166 0.408258 1.13496 1.13496C0.408258 1.86166 0 2.84729 0 3.875C0 6.795 1.207 10.427 1.813 12.074C1.96964 12.4942 2.25167 12.8561 2.62086 13.1106C2.99006 13.3651 3.42858 13.5 3.877 13.497C4.781 13.497 5.616 12.955 5.94 12.079C6.546 10.439 7.75 6.825 7.75 3.875C7.75 2.84729 7.34174 1.86166 6.61504 1.13496C5.88834 0.408258 4.90271 0 3.875 0ZM3.876 14.998C3.21269 14.998 2.57655 15.2615 2.10753 15.7305C1.6385 16.1996 1.375 16.8357 1.375 17.499C1.375 18.1623 1.6385 18.7984 2.10753 19.2675C2.57655 19.7365 3.21269 20 3.876 20C4.53931 20 5.17545 19.7365 5.64447 19.2675C6.1135 18.7984 6.377 18.1623 6.377 17.499C6.377 16.8357 6.1135 16.1996 5.64447 15.7305C5.17545 15.2615 4.53931 14.998 3.876 14.998Z" />
            </svg>

            <span
              className={clsx("text-sm", {
                "text-red": pathname === "/vital-task",
                "text-white": pathname != "/vital-task",
              })}
            >
              Vital task
            </span>
          </li>
        </Link>
        <Link href="/my-task" className="mt-8">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-2",
              { "bg-white": pathname === "/my-task" }
            )}
          >
            <BiTask
              className={clsx("text-xl", {
                "text-red": pathname === "/my-task",
                "text-white": pathname != "/my-task",
              })}
            />

            <span
              className={clsx("text-sm", {
                "text-red": pathname === "/my-task",
                "text-white": pathname != "/my-task",
              })}
            >
              My task
            </span>
          </li>
        </Link>
        <Link href="/categories" className="mt-8">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-2",
              { "bg-white": pathname === "/categories" }
            )}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx("w-4 h-4", {
                "fill-red": pathname === "/categories",
                "fill-white": pathname != "/categories",
              })}
            >
              <path d="M9.65329 19.7143H24V21.4286H9.65329V19.7143ZM2.65414 20.5714L0.0102479 22.7829L1.45517 24L5.55423 20.5714L1.45517 17.1429L0 18.3514L2.65414 20.5714ZM9.65329 11.1429H24V12.8571H9.65329V11.1429ZM2.65414 12L0.0102479 14.2114L1.45517 15.4286L5.55423 12L1.45517 8.57143L0 9.78L2.65414 12ZM9.65329 2.57143H24V4.28571H9.65329V2.57143ZM2.65414 3.42857L0.0102479 5.64L1.45517 6.85714L5.55423 3.42857L1.45517 0L0 1.20857L2.65414 3.42857Z" />
            </svg>

            <span
              className={clsx("text-sm", {
                "text-red": pathname === "/categories",
                "text-white": pathname != "/categories",
              })}
            >
              Categories
            </span>
          </li>
        </Link>
      </ul>
      <Signout />
    </div>
  );
}
