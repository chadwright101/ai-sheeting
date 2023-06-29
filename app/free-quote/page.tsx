"use client";

import Head from "next/head";

import ContactForm from "@/components/contact/contact-form";
import ImageContainer from "@/components/utils/image-container";
import { useGlobalContext } from "@/components/utils/global-context";

import classNames from "classnames";

const FreeQuote = () => {
  const { showName, showMessage } = useGlobalContext();
  return (
    <>
      <Head>
        <title>Free Roof Inspection Quote - A&I Sheeting</title>
        <meta
          name="description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta
          name="keywords"
          content="A&I Sheeting, AI sheeting, roof refurbishers, johannesburg, Industrial roofing solutions, roof refurbishment, roof replacement,redesign roof, roofing, insulation, cladding, gutters, Steel box gutters, eave gutters, downpipes, ventilation, asbestos removal, waterproofing, coating systems, Gauteng, South Africa"
        />
        <meta property="og:image" content="" />
        <meta
          property="og:title"
          content="Free Roof Inspection Quote - A&I Sheeting"
        />
        <meta property="og:url" content="https://www.roofrefub.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta
          property="og:site_name"
          content="Free Roof Inspection Quote - A&I Sheeting"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
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
            <ImageContainer
              src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/jt-pics/DJI_0645.jpg"
              alt="A&I Sheeting - Free Roof Inspection Quote"
              width={700}
              height={500}
              smallest={100}
              phone={100}
              tablet={80}
              tabletLarge={50}
              desktopSmall={40}
              desktop={30}
              cssClasses={classNames("object-cover h-[300px] w-full", {
                "tabletLarge:h-[250px]": showName && !showMessage,
                "tabletLarge:hidden": showMessage && showMessage,
              })}
              eager
            />
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
