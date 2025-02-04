import React from "react";
import cardImg from "@/public/cardImg.png";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";

export default function CompletedTask() {
  return (
    <div className="border grid grid-cols-[5fr_1fr] items-center gap-x-4 border-border-color py-1 px-3 rounded-2xl mt-3">
      <div className="flex items-start gap-x-2 ">
        <FaRegCircle className="text-2xl text-green-600" />
        <div className="gap-x-12 items-end">
          <div>
            <p className="text-sm mb-1 font-semibold">
              Attend Nischal’s Birthday Party
            </p>
            <p className="mb-2 text-gray text-xs">
              Buy gifts on the way and pick up cake from the bakery. (6 PM |
              Fresh Elements).....
            </p>
            <p className="text-xs mb-1">
              Status: <span className="text-green-600">completed</span>
            </p>
            <p className="text-xs">Completed 2 days ago</p>
          </div>
        </div>
      </div>

      <div className="relative aspect-square h-20">
        <Image src={cardImg} alt="card-img" fill className="object-cover" />
      </div>
    </div>
  );
}
