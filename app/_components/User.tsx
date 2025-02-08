import React from "react";
import person from "@/public/person.png";
import Image from "next/image";
import { auth } from "../_lib/auth";

export default async function User() {
  const session = await auth();
  return (
    <div className="flex items-center flex-col -mt-[30px]">
      <div className="relative aspect-square h-16">
        <Image
          src={session?.user?.image || person}
          fill
          className="object-cover rounded-full border-2 border-white"
          alt="profile image"
          referrerPolicy="no-referrer"
        />
      </div>
      <h2 className="text-sm mt-2 text-white">
        {session?.user?.name || "DevDiu Jr"}
      </h2>
      <p className="text-xs text-white">
        {session?.user?.email || "devdiu@gmail.com"}
      </p>
    </div>
  );
}
