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
      <body className="flex relative flex-col bg-body-background h-screen">
        <AppStateProvider>
          <AddtaxForm />
          <Overlay />
          <AddCategoryValueForm />
          <Header />
          <main className="grid relative flex-1 gap-x-[70px] grid-cols-[14rem_1fr] mt-8 mr-[70px]">
            <SideNav>
              <User />
            </SideNav>
            {children}
          </main>
        </AppStateProvider>
      </body>
    </html>
  );
}
