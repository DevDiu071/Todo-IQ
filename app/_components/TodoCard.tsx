import React from "react";
import cardImg from "@/public/card-image.png";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";

export default function TodoCard() {
  return (
    <div className="border border-border-color py-2 px-3 rounded-2xl mt-3">
      <div className="grid grid-cols-[5fr_1fr] items-center gap-x-6">
        <div className="flex items-start gap-x-2 ">
          <FaRegCircle className="text-2xl text-green-600" />
          <div className="gap-x-12 items-end">
            <div>
              <p className="text-sm mb-2 font-semibold">
                Attend Nischal’s Birthday Party
              </p>
              <p className="mb-3 text-gray text-xs">
                Buy gifts on the way and pick up cake from the bakery. (6 PM |
                Fresh Elements).....
              </p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square h-16">
          <Image src={cardImg} alt="card-img" fill className="object-cover" />
        </div>
      </div>
      <div className="flex ml-5 items-end gap-x-2 text-xs mt-2">
        <p>
          Priority: <span className="text-light-blue">Moderate</span>
        </p>
        <p>
          Status: <span className="text-red">in progress</span>
        </p>
        <p className="text-gray">Created on: 12/02/2025</p>
      </div>
    </div>
  );
}
