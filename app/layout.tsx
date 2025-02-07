"use client";

import "@/app/_styles/globals.css";
import SideNav from "@/app/_components/SideNav";
import Header from "@/app/_components/Header";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomepage = pathname === "/" || pathname === "/signin";

  return (
    <html lang="en">
      <body className="flex flex-col bg-body-background h-screen">
        {!isHomepage && <Header />}
        <div
          className={clsx("grid relative flex-1 gap-x-[70px]", {
            "grid-cols-[14rem_1fr] mt-8 mr-[70px]": !isHomepage,
          })}
        >
          {!isHomepage && <SideNav />}
          {children}
        </div>
      </body>
    </html>
  );
}
