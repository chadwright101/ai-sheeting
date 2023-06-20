"use client";

import AboutUs from "@/components/pages/home-page/about-us";
import ContactInfo from "@/components/contact/contact-info";
import Gallery from "@/components/pages/home-page/gallery";
import SloganStamp from "@/components/pages/home-page/slogan-stamp";
import VideoHero from "@/components/pages/home-page/video-hero";
import WhatWeAreAbout from "@/components/pages/home-page/what-we-are-about";
import ImageContainer from "@/components/utils/image-container";
import ContactForm from "@/components/contact/contact-form";

export default function Home() {
  return (
    <>
      <VideoHero cssClasses="-mx-5 tabletLarge:-px-10 -mt-12" />
      <SloganStamp cssClasses="my-10 tabletLarge:my-12" />
      <main className="tabletLarge:grid grid-cols-2 gap-14">
        <WhatWeAreAbout cssClasses="tabletLarge:order-1" />
        <hr className="my-12 text-black tabletLarge:hidden" />
        <AboutUs />
        <ImageContainer
          src="/projects/Avenge/DJI_0544.jpg"
          alt="A&I Sheeting - What we're about"
          width={1000}
          height={450}
          cssClasses="my-14 h-[250px] object-cover tablet:h-[300px] tabletLarge:hidden"
        />
      </main>
      <hr className="my-12 text-black tabletLarge:invisible" />
      <Gallery />
      <hr className="my-12 text-black tabletLarge:invisible" />
      <div className="mt-12">
        <ContactInfo />
        <ContactForm cssClasses="mt-12" />
      </div>
    </>
  );
}
