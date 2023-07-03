import { lazy, Suspense } from "react";
import { Metadata } from "next";

import AboutUs from "@/components/pages/home-page/about-us";
import ContactInfo from "@/components/contact/contact-info";
import Gallery from "@/components/pages/home-page/gallery";
import SloganStamp from "@/components/pages/home-page/slogan-stamp";
import VideoHero from "@/components/pages/home-page/video-hero";
import WhatWeAreAbout from "@/components/pages/home-page/what-we-are-about";
import ImageContainer from "@/components/utils/image-container";
import ContactForm from "@/components/contact/contact-form";

const LazyContactMap = lazy(() => import("@/components/contact/contact-map"));

export const metadata: Metadata = {
  title: "Home - A&I Sheeting",
  openGraph: {
    title: "Home - A&I Sheeting",
    url: "https://www.roofrefub.co.za",
    images: [
      {
        url: "https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/avenge-2/DJI_0684.jpg",
      },
      {
        url: "https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/diesel-road/DJI_0636.jpg",
      },
      {
        url: "https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/jt-pics/DJI_0645.jpg",
      },
    ],
  },
};

export default function Home() {
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
          <ContactForm />
          <Suspense
            fallback={
              <div className="border-2 border-black text-[30px] grid place-items-center py-16 w-full h-full">
                Map loading...
              </div>
            }
          >
            <LazyContactMap cssClasses="w-full h-[280px] phone:h-[325px] tablet:h-[375px] tabletLarge:h-[450px]" />
          </Suspense>
        </div>
      </div>
    </>
  );
}
