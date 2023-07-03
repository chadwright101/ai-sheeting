"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import classNames from "classnames";

import "@splidejs/react-splide/css/core";
import ImageContainer from "../utils/image-container";

const LightboxSlider = ({ imageList, cssClasses }) => {
  const slider1 = useRef();
  const slider2 = useRef();

  const [toggleLightbox, setToggleLightbox] = useState(false);

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  return (
    <div className={`w-full overflow-hidden ${cssClasses}`}>
      {/* lightbox */}
      <div
        className={classNames(
          "fixed top-0 left-0 w-screen h-full bg-white z-40 place-items-center px-10",
          {
            "hidden ": !toggleLightbox,
            "grid ": toggleLightbox,
          }
        )}
      >
        <Splide
          ref={(slider) => (slider1.current = slider)}
          options={{
            rewind: true,
            type: "fade",
            rewind: true,
            pagination: false,
            speed: 1500,
            interval: 6500,
            autoplay: true,
            dragMinThreshold: { mouse: 50, touch: 150 },
            breakpoints: {
              1050: {
                arrows: false,
              },
            },
          }}
          className="max-w-[350px] phone:max-w-[500px] tablet:max-w-[600px] tabletLarge:max-w-[800px] desktopSmall:max-w-[900px] desktop:max-w-[1200px]"
        >
          <button
            onClick={() => setToggleLightbox(false)}
            className="p-3 -m-3 desktopSmall:p-0 desktopSmall:m-0"
          >
            <Image
              src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/icons/close.svg"
              alt="Close icon"
              width={55}
              height={55}
              className="fixed top-6 right-8 tabletLarge:top-14 tabletLarge:right-16 bg-blue p-2 z-40"
            />
          </button>
          {imageList.map((item, index) => (
            <SplideSlide key={index} className="h-[80vh] flex">
              <ImageContainer
                src={item}
                alt={`A&I Sheeting - Gallery image ${index + 1}`}
                width={1200}
                height={900}
                quality={60}
                cssClasses="object-cover place-self-center"
                smallest={75}
                phone={75}
                tablet={60}
                tabletLarge={55}
                desktopSmall={50}
                desktop={60}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* slider */}
      <Splide
        options={{
          type: "loop",
          pagination: false,
          perPage: 1,
          perMove: 1,
          speed: 1500,
          interval: 6500,
          autoplay: true,
          dragMinThreshold: { mouse: 50, touch: 150 },
          gap: "1rem",
          fixedHeight: 600,
          arrows: true,
          breakpoints: {
            1200: {
              fixedHeight: 550,
            },
            1000: {
              arrows: false,
              fixedHeight: 450,
            },
            800: {
              fixedHeight: 350,
            },
            425: {
              fixedHeight: 325,
            },
          },
        }}
        className="w-full h-[325px] phone:h-[350px] tablet:h-[450px] tabletLarge:h-[550px] desktopSmall:h-[600px]"
        ref={(slider) => (slider2.current = slider)}
      >
        {imageList.map((item, index) => (
          <SplideSlide key={index} className="h-full w-full">
            <ImageContainer
              src={item}
              alt={`A&I Sheeting - Gallery image ${index + 1}`}
              width={900}
              height={500}
              cssClasses="object-cover h-full w-full cursor-pointer"
              onClick={() => (
                slider1.current.go(index), setToggleLightbox(true)
              )}
              smallest={85}
              phone={75}
              tablet={65}
              tabletLarge={50}
              desktopSmall={45}
              desktop={45}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default LightboxSlider;
