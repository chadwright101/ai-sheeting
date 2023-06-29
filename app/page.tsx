"use client";

import Head from "next/head";

import AboutUs from "@/components/pages/home-page/about-us";
import ContactInfo from "@/components/contact/contact-info";
import Gallery from "@/components/pages/home-page/gallery";
import SloganStamp from "@/components/pages/home-page/slogan-stamp";
import VideoHero from "@/components/pages/home-page/video-hero";
import WhatWeAreAbout from "@/components/pages/home-page/what-we-are-about";
import ImageContainer from "@/components/utils/image-container";
import ContactForm from "@/components/contact/contact-form";
import ContactMap from "@/components/contact/contact-map";
import { useGlobalContext } from "@/components/utils/global-context";

import classNames from "classnames";

export default function Home() {
  const { showName } = useGlobalContext();
  return (
    <>
      <Head>
        <title>Home - A&I Sheeting</title>
        <meta
          name="description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta
          name="keywords"
          content="A&I Sheeting, AI sheeting, roof refurbishers, johannesburg, Industrial roofing solutions, roof refurbishment, roof replacement,redesign roof, roofing, insulation, cladding, gutters, Steel box gutters, eave gutters, downpipes, ventilation, asbestos removal, waterproofing, coating systems, Gauteng, South Africa"
        />
        <meta
          property="og:image"
          content="https://ai-sheeting-git-development-chadwright101.vercel.app/_next/image?url=https%3A%2F%2Fthe-wright-designs-website-images.s3.af-south-1.amazonaws.com%2Fai-sheeting%2Fprojects%2Favenge-2%2FDJI_0684.jpg"
        />
        <meta
          property="og:image"
          content="https://ai-sheeting-git-development-chadwright101.vercel.app/_next/image?url=https%3A%2F%2Fthe-wright-designs-website-images.s3.af-south-1.amazonaws.com%2Fai-sheeting%2Fprojects%2Fdiesel-road%2FDJI_0636.jpg"
        />
        <meta
          property="og:image"
          content="https://ai-sheeting-git-development-chadwright101.vercel.app/_next/image?url=https%3A%2F%2Fthe-wright-designs-website-images.s3.af-south-1.amazonaws.com%2Fai-sheeting%2Fprojects%2Fjt-pics%2FDJI_0645.jpg"
        />
        <meta property="og:title" content="Home - A&I Sheeting" />
        <meta property="og:url" content="https://www.roofrefub.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta property="og:site_name" content="Home - A&I Sheeting" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
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
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/avenge-2/DJI_0701.jpg"
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
      <div>
        <div
          id="contact"
          className="relative -top-[125px] tabletLarge:-top-[200px]"
        ></div>
        <div className="mt-12 grid gap-x-10 gap-y-10 tabletLarge:grid-cols-2 tabletLarge:grid-rows-[17.90rem_1fr]">
          <ContactInfo cssClasses="tabletLarge:mb-auto" />
          <ContactForm
            cssClasses={classNames("", {
              "tabletLarge:row-span-2": showName,
            })}
          />
          <ContactMap cssClasses="w-full h-[280px] phone:h-[325px] tablet:h-[375px] tabletLarge:h-[450px]" />
        </div>
      </div>
    </>
  );
}
