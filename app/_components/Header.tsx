import React from "react";
import { SlCalender } from "react-icons/sl";
import Image from "next/image";
import bell from "@/public/bell.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-light-gray h-15 fixed top-0 right-0 w-full z-10 flex items-center justify-around shadow-sm py-3">
      <Link href="/">
        <h1 className="text-2xl font-semibold">
          <span className="text-red">Dash</span>board
        </h1>
      </Link>
      <div>
        <input
          type="text"
          placeholder="search your task here"
          className="w-[600px] py-[2px] hidden xs:block px-4 rounded-lg bg-cyan shadow-md placeholder:text-xs placeholder:flex placeholder:items-center"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Image
            src={bell}
            alt="bell icon"
            height={24}
            width={25}
            className="bg-red p-1.5 text-xl rounded-md"
          />
          <SlCalender className="text-2xl p-1.5 text-white bg-red rounded-md" />
        </div>
        <div>
          <p className="text-xs">Tuesday</p>
          <p className="text-xs text-light-blue">28/01/2025</p>
        </div>
      </div>
    </div>
  );
}
