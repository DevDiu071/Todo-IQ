import "@/app/_styles/globals.css";
import SideNav from "@/app/_components/SideNav";
import Header from "@/app/_components/Header";
import User from "./_components/User";
import AddtaxForm from "./_components/AddtaxForm";
import { AppStateProvider, useAppState } from "./_context/AppStateContext";
import Overlay from "./_components/Overlay";
import AddCategoryValueForm from "./_components/AddCategoryValueForm";

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
          <main className="grid h-[calc(100vh-5rem)] relative flex-1 gap-x-[70px] grid-cols-[14rem_1fr] mt-[90px] mr-[70px]">
            <SideNav>
              <User />
            </SideNav>
            <div className="relative w-[950px] ml-[250px]">{children}</div>
          </main>
        </AppStateProvider>
      </body>
    </html>
  );
}
