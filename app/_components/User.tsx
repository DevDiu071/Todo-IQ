import React from "react";
import person from "@/public/person.png";
import Image from "next/image";

export default function User() {
  return (
    <div className="flex items-center flex-col -mt-[25px]">
      <Image src={person} className="h-[50px] w-[50px]" alt="profile image" />
      <h2 className="text-sm mt-2 text-white">DevDiu Jr</h2>
      <p className="text-xs text-white">devdiu@gmail.com</p>
    </div>
  );
}
