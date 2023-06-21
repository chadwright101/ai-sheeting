"use client";

import AboutUs from "@/components/pages/home-page/about-us";
import ContactInfo from "@/components/contact/contact-info";
import Gallery from "@/components/pages/home-page/gallery";
import SloganStamp from "@/components/pages/home-page/slogan-stamp";
import VideoHero from "@/components/pages/home-page/video-hero";
import WhatWeAreAbout from "@/components/pages/home-page/what-we-are-about";
import ImageContainer from "@/components/utils/image-container";
import ContactForm from "@/components/contact/contact-form";
import ContactMap from "@/components/contact/contact-map";
import { useContactContext } from "@/components/utils/contact-context";

import classNames from "classnames";

export default function Home() {
  const { showName, setShowName, showMessage, setShowMessage } =
    useContactContext();
  return (
    <>
      <VideoHero cssClasses="-mx-5 tabletLarge:-px-10 -mt-12" />
      <SloganStamp cssClasses="my-10 tabletLarge:my-12" />
      <main className="tabletLarge:grid grid-cols-2 gap-14">
        <WhatWeAreAbout cssClasses="tabletLarge:order-1" />
        <hr className="my-12 text-black tabletLarge:hidden" />
        <div>
          <div
            id="about-us"
            className="relative -top-[125px] tabletLarge:-top-[200px]"
          ></div>
          <AboutUs />
        </div>
        <ImageContainer
          src="/projects/Avenge/DJI_0544.jpg"
          alt="A&I Sheeting - What we're about"
          width={1000}
          height={450}
          cssClasses="my-14 h-[250px] object-cover tablet:h-[300px] tabletLarge:hidden"
        />
      </main>
      <hr className="my-12 text-black tabletLarge:invisible" />
      <div>
        <div
          id="gallery"
          className="relative -top-[125px] tabletLarge:-top-[200px]"
        ></div>
        <Gallery />
      </div>
      <hr className="my-12 text-black tabletLarge:invisible" />
      <div className="mt-12 grid gap-x-10 gap-y-10 tabletLarge:grid-cols-2 tabletLarge:grid-rows-[18rem_1fr]">
        <ContactInfo cssClasses="tabletLarge:mb-auto" />
        <ContactForm
          cssClasses={classNames("", {
            "tabletLarge:row-span-2": showName,
          })}
        />
        <ContactMap cssClasses="w-full h-[280px] phone:h-[325px] tablet:h-[375px] tabletLarge:h-[450px]" />
      </div>
    </>
  );
}
