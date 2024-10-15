"use client";

import { useEffect, useRef } from "react";

interface Props {
  cssClasses?: string;
}

const VideoHero = ({ cssClasses }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const sources = video.querySelectorAll("source");

      sources.forEach((source) => {
        source.setAttribute("src", source.getAttribute("data-src")!);
      });

      video.load();
    }
  }, []);

  return (
    <section className={`${cssClasses}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="w-full h-[485px] tabletLarge:h-[600px] object-cover desktop:max-w-[1400px] mx-auto"
        playsInline
        poster="/assets/videos/ai-sheeting-video-poster.webp"
      >
        <source
          type="video/webm"
          data-src="/assets/videos/ai-sheeting-hero-video.webm"
        />
        <source
          type="video/mp4"
          data-src="/assets/videos/ai-sheeting-hero-video.mp4"
        />
      </video>
    </section>
  );
};

export default VideoHero;
