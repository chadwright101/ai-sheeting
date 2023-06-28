import { useEffect, useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";
import ImageContainer from "../utils/image-container";

const ThumbnailSlider = ({ imageList, cssClasses }) => {
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  return (
    <div className={`w-full overflow-hidden ${cssClasses}`}>
      {/* slider */}
      <Splide
        options={{
          type: "slide",
          pagination: false,
          speed: 1500,
          interval: 6500,
          autoplay: true,
          dragMinThreshold: { mouse: 50, touch: 200 },
          gap: "1rem",
          fixedHeight: 600,
          breakpoints: {
            1200: {
              fixedHeight: 550,
            },
            1050: {
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
        className="w-full h-[325px] phone:h-[350px] tablet:h-[450px] tabletLarge:h-[525px] desktopSmall:h-[550px]"
        ref={(slider) => (slider1.current = slider)}
      >
        <div className="splide__arrows splide__arrows--ltr">
          <button
            className="splide__arrow splide__arrow--prev"
            type="button"
            aria-label="Previous slide"
            aria-controls="splide02-track"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="35"
              height="35"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
          <button
            className="splide__arrow splide__arrow--next"
            type="button"
            aria-label="Next slide"
            aria-controls="splide02-track"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="35"
              height="35"
              focusable="false"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
        </div>
        {imageList.map((item, index) => (
          <SplideSlide key={index} className="h-full w-full">
            <ImageContainer
              src={item}
              alt={`A&I Sheeting - Project image ${index + 1}`}
              width={900}
              height={500}
              cssClasses="object-cover h-full w-full"
              onClick={() => slider1.current.go(index)}
              eager={index < 2 ? true : false}
              smallest={85}
              phone={70}
              tablet={65}
              tabletLarge={60}
              desktopSmall={55}
              desktop={45}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* thumbs */}
      <Splide
        options={{
          type: "slide",
          rewind: true,
          pagination: false,
          fixedWidth: 190,
          fixedHeight: 110,
          cover: true,
          focus: "center",
          arrows: false,
          snap: true,
          dragMinThreshold: { mouse: 50, touch: 200 },
        }}
        ref={(slider) => (slider2.current = slider)}
        className="hidden tabletLarge:block"
      >
        {imageList.map((item, index) => (
          <SplideSlide key={index} className="h-[110px]">
            <div className="w-full bg-white h-full flex justify-center overflow-hidden">
              <ImageContainer
                src={item}
                alt={`A&I Sheeting - Project image ${index + 1}`}
                width={200}
                height={200}
                cssClasses="object-cover h-full w-full cursor-pointer px-1 pt-2"
                quality={30}
                tabletLarge={7.5}
                desktopSmall={7.5}
                desktop={7.5}
                onClick={() => slider1.current.go(index)}
                loading={index < 1 ? "eager" : "lazy"}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ThumbnailSlider;
