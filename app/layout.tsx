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
    <html
      lang="en"
      title="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
    >
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
