import { ReactNode } from "react";
import { Metadata } from "next";

import Header from "@/app/_components/navigation/header";

import "./globals.css";
import Footer from "@/app/_components/navigation/footer";
import { GlobalContextProvider } from "@/app/_components/utils/global-context";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roofrefurb.co.za"),
  description:
    "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
  keywords:
    "A&I Sheeting, AI sheeting, roof refurbishers, johannesburg, Industrial roofing solutions, roof refurbishment, roof replacement,redesign roof, roofing, insulation, cladding, gutters, Steel box gutters, eave gutters, downpipes, ventilation, asbestos removal, waterproofing, coating systems, Gauteng, South Africa",
};

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
