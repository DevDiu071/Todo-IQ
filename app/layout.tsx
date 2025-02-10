import "@/app/_styles/globals.css";
import SideNav from "@/app/_components/SideNav";
import Header from "@/app/_components/Header";
import User from "./_components/User";
import AddtaxForm from "./_components/AddtaxForm";
import { AppStateProvider } from "./_context/AppStateContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex relative flex-col bg-body-background h-screen">
        {/* <div className="bg-overlay absolute top-0 left-0 h-screen w-full z-10"></div> */}
        {/* <AddtaxForm /> */}
        <Header />
        <main className="grid relative flex-1 gap-x-[70px] grid-cols-[14rem_1fr] mt-8 mr-[70px]">
          <AppStateProvider>
            <SideNav>
              <User />
            </SideNav>
            {children}
          </AppStateProvider>
        </main>
      </body>
    </html>
  );
}
