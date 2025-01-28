"use client";

import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  return <div className=" bg-blue-100">HOME</div>;
}
