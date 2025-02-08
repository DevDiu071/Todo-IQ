import React from "react";
import { signoutAction } from "../_lib/actions";

export default function Signout() {
  return (
    <form className="flex flex-1" action={signoutAction}>
      <button className="flex items-center gap-x-2">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white w-4 h-4"
        >
          <path d="M18.6667 6.66667L16.8 8.53333L18.9333 10.6667H8V13.3333H18.9333L16.8 15.4667L18.6667 17.3333L24 12L18.6667 6.66667ZM2.66667 2.66667H12V0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H12V21.3333H2.66667V2.66667Z" />
        </svg>

        <span className="text-white">Logout</span>
      </button>
    </form>
  );
}
