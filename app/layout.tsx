import "@/app/_styles/globals.css";
import SideNav from "@/app/_components/SideNav";
import Header from "@/app/_components/Header";
import User from "./_components/User";
import AddtaxForm from "./_components/AddtaxForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex relative flex-col bg-body-background h-screen">
        <div className="bg-overlay absolute top-0 left-0 h-screen w-full z-10"></div>
        <AddtaxForm />
        <Header />
        <div className="grid relative flex-1 gap-x-[70px] grid-cols-[14rem_1fr] mt-8 mr-[70px]">
          <SideNav>
            <User />
          </SideNav>
          {children}
        </div>
      </body>
    </html>
  );
}
