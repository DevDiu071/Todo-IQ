import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import SideNav from "@/app/_components/SideNav";
import Header from "@/app/_components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <div className="grid grid-cols-[14rem_1fr] flex-1 gap-x-[70px] mt-8 mr-[70px]">
          <SideNav />
          {children}
        </div>
      </body>
    </html>
  );
}
