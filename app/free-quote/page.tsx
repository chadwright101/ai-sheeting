"use client";

import { useContext } from "react";

import ContactForm from "@/components/contact/contact-form";
import ImageContainer from "@/components/utils/image-container";
import { useGlobalContext } from "@/components/utils/global-context";

import classNames from "classnames";

const FreeQuote = () => {
  const { showName, showMessage } = useGlobalContext();
  return (
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
            src="/projects/Diesel road/DJI_0625.jpg"
            alt="A&I Sheeting - Contact Us"
            width={700}
            height={500}
            cssClasses={classNames("object-cover h-[300px] w-full", {
              "tabletLarge:h-[250px]": showName && !showMessage,
              "tabletLarge:hidden": showMessage && showMessage,
            })}
          />
        </div>
        <ImageContainer
          src="/projects/118/DJI_0467.jpg"
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
  );
};

export default FreeQuote;
