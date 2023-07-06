"use client";

import { useEffect, useRef, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import ImageContainer from "../utils/image-container";

import "@splidejs/splide/css";

const ThumbnailSlider = ({ imageList, cssClasses }) => {
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    slider1.current.go(index);
    setActiveIndex(index);
  };
  return (
    <div className={`w-full overflow-hidden ${cssClasses}`}>
      {/* slider */}
      <Splide
        options={{
          type: "slide",
          pagination: false,
          speed: 1500,
          interval: 6500,
          dragMinThreshold: { mouse: 50, touch: 150 },
          gap: "1rem",
          arrows: false,
          fixedHeight: 600,
          drag: false,
          breakpoints: {
            1200: {
              fixedHeight: 550,
            },
            1050: {
              fixedHeight: 450,
            },
          },
        }}
        className="w-full h-[525px] desktopSmall:h-[550px]"
        ref={(slider) => (slider1.current = slider)}
      >
        {imageList.map((item, index) => (
          <SplideSlide key={index} className="h-full w-full">
            <ImageContainer
              src={item}
              alt={`A&I Sheeting - Gallery image ${index + 1}`}
              width={900}
              height={500}
              cssClasses="object-cover h-full w-full"
              onClick={() => slider1.current.go(index)}
              smallest={85}
              phone={70}
              tablet={65}
              tabletLarge={75}
              desktopSmall={75}
              desktop={75}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* thumbs */}
      <Splide
        options={{
          type: "slide",
          pagination: false,
          fixedWidth: 190,
          fixedHeight: 110,
          drag: false,
          cover: true,
          focus: "center",
          arrows: false,
          snap: true,
          dragMinThreshold: { mouse: 50, touch: 150 },
        }}
        ref={(slider) => (slider2.current = slider)}
        className="hidden tabletLarge:block"
      >
        {imageList.map((item, index) => (
          <SplideSlide key={index} className="h-[110px]">
            <div className="w-full bg-white h-full flex justify-center overflow-hidden">
              <ImageContainer
                src={item}
                alt={`A&I Sheeting - Gallery thumbnail image ${index + 1}`}
                width={200}
                height={200}
                cssClasses={`object-cover h-full w-full cursor-pointer px-1 pt-2 hover:scale-95 duration-300 ease-in-out ${
                  index !== activeIndex ? "opacity-60" : ""
                }`}
                quality={40}
                tabletLarge={12.5}
                desktopSmall={12.5}
                desktop={12.5}
                onClick={() => handleSlideChange(index)}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ThumbnailSlider;
