import { Metadata } from "next";

import ContactForm from "@/app/_components/contact/contact-form";
import ImageContainer from "@/app/_components/utils/image-container";
import ClientSideImageComponent from "@/app/_components/pages/free-quote/client-side-image-component";

export const metadata: Metadata = {
  title: "Free Roof Inspection Quote - A&I Sheeting",
  openGraph: {
    title: "Free Roof Inspection Quote - A&I Sheeting",
    description:
      "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
    type: "website",
    locale: "en_ZA",
    siteName: "A&I Sheeting",
    url: "https://www.roofrefub.co.za/free-quote",
    images: [
      {
        url: "/assets/projects/old+website/IMG_1151.jpg",
      },
    ],
  },
};

const FreeQuote = () => {
  return (
    <>
      <main>
        <h1 className="mb-10 tabletLarge:text-left">
          Free Roof Inspection Quote
        </h1>
        <div className="grid gap-x-14 tabletLarge:grid-cols-2">
          <div className="flex flex-col gap-y-10">
            <p className="italic">
              Please fill in the form below and we&apos;ll get back to you about
              your Free Roof Inspection...
            </p>
            <ContactForm freeQuote />
            <ClientSideImageComponent />
          </div>
          <ImageContainer
            src="/assets/projects/old-website/IMG_1151.jpg"
            alt="A&I Sheeting - Free Roof Inspection Quote"
            desktopWidth={750}
            tabletWidth={750}
            eager
            cssClasses="hidden object-cover h-full w-full tabletLarge:block"
          />
        </div>
      </main>
    </>
  );
};

export default FreeQuote;
