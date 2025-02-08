import React from "react";
import Image from "next/image";
import { signinAction } from "@/app/_lib/actions";

export default function page() {
  return (
    <form
      action={signinAction}
      className="w-[350px] mx-auto bg-white shadow-md p-4 h-min mt-[100px]"
    >
      <h2 className="text-xl text-center font-semibold">
        Signin to start using the App
      </h2>
      <button className="text-sm border-[1.5px] rounded-md border-border-color flex items-center justify-between font-semibold px-4 py-1 shadow-md w-full mt-10">
        <span> Sign with Google</span>
        <div className="relative aspect-square h-8">
          <Image
            src="/google.png"
            fill
            className="object-cover"
            alt="google logo"
          />
        </div>
      </button>
    </form>
  );
}
