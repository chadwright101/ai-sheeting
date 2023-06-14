import { ReactNode } from "react";

import Header from "@/components/navigation/header";

import "./globals.css";
import Footer from "@/components/navigation/footer";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
