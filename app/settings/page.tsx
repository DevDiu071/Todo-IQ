import React from "react";
import Image from "next/image";
import personImage from "@/public/person.png";

export default function page() {
  return (
    <div className="border-[1.5px] py-2 px-4 border-border-color rounded-xl">
      <div className="flex justify-between">
        <p className="text-md font-semibold">
          <span className="border-b-2 border-red">Account</span> Information
        </p>
        <span className="border-b">Go Back</span>
      </div>
      <div className="flex items-center gap-x-2 mt-6">
        <div className="relative aspect-square h-16">
          <Image
            src={personImage}
            fill
            className="object-cover"
            alt="profile image"
          />
        </div>
        <div>
          <p className="text-sm font-semibold">DevDiu Jr</p>
          <p className="text-xs">devdiu@gmail.com</p>
        </div>
      </div>
      <form className=" border-[1.5px] border-border-color p-4 rounded-lg mt-6 ">
        <div className="flex flex-col max-w-[550px]">
          <label className="text-sm mb-1 font-semibold">First Name</label>
          <input
            type="text"
            className="border-[1.5px] focus:outline-none border-border-color bg-body-background py-[2px] px-2 rounded-md"
          />
          <label className="text-sm mb-1 mt-2  font-semibold">Last Name</label>
          <input
            type="text"
            className="border-[1.5px] focus:outline-none border-border-color bg-body-background py-[2px] px-2 rounded-md"
          />
          <label className="text-sm mb-1 mt-2 font-semibold">
            Email Address
          </label>
          <input
            type="text"
            className="border-[1.5px] border-border-color focus:outline-none bg-body-background py-[2px] px-2 rounded-md"
          />
          <label className="text-sm mb-1 mt-2 focus:outline-none font-semibold">
            Contact Number
          </label>
          <input
            type="text"
            className="border-[1.5px] border-border-color focus:outline-none bg-body-background py-[2px] px-2 rounded-md"
          />
        </div>
        <div className="flex items-center gap-x-2 mt-4">
          <button className="text-xs bg-gold text-white px-5 py-[6px] rounded-md">
            Update Info
          </button>
          <button className="text-xs bg-gold text-white px-5 py-[6px] rounded-md">
            Change password
          </button>
        </div>
      </form>
    </div>
  );
}
