import { Metadata } from "next";

import ContactForm from "@/components/contact/contact-form";
import ImageContainer from "@/components/utils/image-container";
import ClientSideImageComponent from "@/components/pages/free-quote/client-side-image-component";

export const metadata: Metadata = {
  title: "Free Roof Inspection Quote - A&I Sheeting",
  openGraph: {
    title: "Free Roof Inspection Quote - A&I Sheeting",
    url: "https://www.roofrefub.co.za/free-quote",
    images: [
      {
        url: "https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/old+website/IMG_1151.jpg",
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
            <ContactForm freeQuote cssClasses="" />
            <ClientSideImageComponent />
          </div>
          <ImageContainer
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/old website/IMG_1151.jpg"
            alt="A&I Sheeting - Free Roof Inspection Quote"
            height={900}
            width={750}
            tabletLarge={80}
            desktopSmall={80}
            desktop={80}
            eager
            cssClasses="hidden object-cover h-full w-full tabletLarge:block"
          />
        </div>
      </main>
    </>
  );
};

export default FreeQuote;
