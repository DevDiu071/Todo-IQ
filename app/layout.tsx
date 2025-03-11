import "@/app/_styles/globals.css";
import SideNav from "@/app/_components/SideNav";
import Header from "@/app/_components/Header";
import User from "./_components/User";
import AddtaxForm from "./_components/AddtaxForm";
import { AppStateProvider, useAppState } from "./_context/AppStateContext";
import Overlay from "./_components/Overlay";
import AddCategoryValueForm from "./_components/AddCategoryValueForm";
import TabletSideNav from "./_components/TabletSideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex relative flex-col bg-body-background">
        <AppStateProvider>
          <AddtaxForm />
          <Overlay />
          <AddCategoryValueForm />
          <Header />
          <main className="md:grid h-[calc(100vh-5rem)] md:relative md:flex-1 md:gap-x-[70px] md:grid-cols-[14rem_1fr] mt-[90px] md:mr-[70px]">
            <SideNav>
              <User />
            </SideNav>
            <TabletSideNav />
            <div className="relative w-[950px] ml-5 sm:ml-[100px] md:ml-[250px]">
              {children}
            </div>
          </main>
        </AppStateProvider>
      </body>
    </html>
  );
}
