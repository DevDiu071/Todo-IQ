"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=" bg-blue-100">
      <div className="mx-auto max-w-[500px] mt-[150px] text-center">
        <h1 className="text-3xl font-semibold">Welcome to TodoIQ</h1>
        <p>
          A place for organising and tracking your tasks for maximum
          productivity
        </p>
        <Link
          className="text-sm bg-gold px-6 py-2 text-white rounded-md mt-4 inline-block"
          href="/signin"
        >
          Start tracking
        </Link>
      </div>
    </div>
  );
}
