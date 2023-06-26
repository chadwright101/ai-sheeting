import { ReactNode } from "react";

import Header from "@/components/navigation/header";

import "./globals.css";
import Footer from "@/components/navigation/footer";
import { GlobalContextProvider } from "@/components/utils/global-context";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-5 max-w-[1400px] tabletLarge:mx-10 desktop:mx-auto">
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
