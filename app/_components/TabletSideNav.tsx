"use client";

import React from "react";
import Link from "next/link";
import { BiTask } from "react-icons/bi";
import Signout from "./Signout";

import clsx from "clsx";
import { usePathname } from "next/navigation";

interface SideNavProps {
  children: React.ReactNode;
}

export default function TabletSideNav() {
  const pathname = usePathname();

  return (
    <div className="bg-red md:hidden -py-2 fixed bottom-0 z-40  left-0 w-full sm:w-[60px] sm:h-screen sm:top-[100px] px-2 rounded-tr-md rounded-rl-md  sm:flex sm:flex-col">
      <ul className="sm:mt-10 flex sm:flex-col justify-center gap-x-5">
        <Link href="/dashboard" className="mt-5">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-3",
              { "bg-white": pathname === "/dashboard" }
            )}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx("w-6 h-6 sm:w-5 sm:h-5", {
                "fill-red": pathname === "/dashboard",
                "fill-white": pathname != "/dashboard",
              })}
            >
              <path d="M13.3333 8V0H24V8H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM13.3333 24V10.6667H24V24H13.3333ZM0 24V16H10.6667V24H0Z" />
            </svg>
          </li>
        </Link>
        <Link href="/vital-task" className="mt-5">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-3",
              { "bg-white": pathname === "/vital-task" }
            )}
          >
            <svg
              viewBox="0 0 8 20"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(" w-6 h-6 sm:w-5 sm:h-5", {
                "fill-red": pathname === "/vital-task",
                "fill-white": pathname != "/vital-task",
              })}
            >
              <path d="M3.875 0C2.84729 0 1.86166 0.408258 1.13496 1.13496C0.408258 1.86166 0 2.84729 0 3.875C0 6.795 1.207 10.427 1.813 12.074C1.96964 12.4942 2.25167 12.8561 2.62086 13.1106C2.99006 13.3651 3.42858 13.5 3.877 13.497C4.781 13.497 5.616 12.955 5.94 12.079C6.546 10.439 7.75 6.825 7.75 3.875C7.75 2.84729 7.34174 1.86166 6.61504 1.13496C5.88834 0.408258 4.90271 0 3.875 0ZM3.876 14.998C3.21269 14.998 2.57655 15.2615 2.10753 15.7305C1.6385 16.1996 1.375 16.8357 1.375 17.499C1.375 18.1623 1.6385 18.7984 2.10753 19.2675C2.57655 19.7365 3.21269 20 3.876 20C4.53931 20 5.17545 19.7365 5.64447 19.2675C6.1135 18.7984 6.377 18.1623 6.377 17.499C6.377 16.8357 6.1135 16.1996 5.64447 15.7305C5.17545 15.2615 4.53931 14.998 3.876 14.998Z" />
            </svg>
          </li>
        </Link>
        <Link href="/my-task" className="mt-5">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-3",
              { "bg-white": pathname === "/my-task" }
            )}
          >
            <BiTask
              className={clsx("text-3xl", {
                "text-red": pathname === "/my-task",
                "text-white": pathname != "/my-task",
              })}
            />
          </li>
        </Link>

        <Link href="/settings" className="mt-5">
          <li
            className={clsx(
              "flex items-center gap-x-2 px-2 py-2 rounded-lg mb-3",
              { "bg-white": pathname === "/settings" }
            )}
          >
            <svg
              className={clsx("w-6 h-6 sm:w-5 sm:h-5", {
                "fill-red": pathname === "/settings",
                "fill-white": pathname != "/settings",
              })}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.71642 24L8.23881 20.16C7.9801 20.06 7.73612 19.94 7.50687 19.8C7.27761 19.66 7.05393 19.51 6.83582 19.35L3.28358 20.85L0 15.15L3.07463 12.81C3.05473 12.67 3.04478 12.5348 3.04478 12.4044V11.5956C3.04478 11.4652 3.05473 11.33 3.07463 11.19L0 8.85L3.28358 3.15L6.83582 4.65C7.05473 4.49 7.28358 4.34 7.52239 4.2C7.76119 4.06 8 3.94 8.23881 3.84L8.71642 0H15.2836L15.7612 3.84C16.0199 3.94 16.2639 4.06 16.4931 4.2C16.7224 4.34 16.9461 4.49 17.1642 4.65L20.7164 3.15L24 8.85L20.9254 11.19C20.9453 11.33 20.9552 11.4652 20.9552 11.5956V12.4044C20.9552 12.5348 20.9353 12.67 20.8955 12.81L23.9701 15.15L20.6866 20.85L17.1642 19.35C16.9453 19.51 16.7164 19.66 16.4776 19.8C16.2388 19.94 16 20.06 15.7612 20.16L15.2836 24H8.71642ZM12.0597 16.2C13.2139 16.2 14.199 15.79 15.0149 14.97C15.8308 14.15 16.2388 13.16 16.2388 12C16.2388 10.84 15.8308 9.85 15.0149 9.03C14.199 8.21 13.2139 7.8 12.0597 7.8C10.8856 7.8 9.89532 8.21 9.08896 9.03C8.28259 9.85 7.8798 10.84 7.8806 12C7.8806 13.16 8.28338 14.15 9.08896 14.97C9.89453 15.79 10.8848 16.2 12.0597 16.2Z" />
            </svg>
          </li>
        </Link>
      </ul>
      <Signout />
    </div>
  );
}
