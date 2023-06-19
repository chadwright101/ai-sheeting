"use client";

import AboutUs from "@/components/pages/home-page/about-us";
import SloganStamp from "@/components/pages/home-page/slogan-stamp";
import VideoHero from "@/components/pages/home-page/video-hero";
import WhatWeAreAbout from "@/components/pages/home-page/what-we-are-about";

export default function Home() {
  return (
    <>
      <VideoHero cssClasses="-mx-5 tabletLarge:-px-10 -mt-12" />
      <SloganStamp cssClasses="my-10 tabletLarge:my-12" />
      <main className="tabletLarge:grid grid-cols-2 gap-14">
        <WhatWeAreAbout cssClasses="tabletLarge:order-1" />
        <hr className="my-12 text-black tabletLarge:hidden" />
        <AboutUs />
      </main>
    </>
  );
}
