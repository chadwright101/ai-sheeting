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
          speed: 2000,
          interval: 6500,
          autoplay: true,
          dragMinThreshold: 10,
          gap: "1rem",
          fixedHeight: 600,
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
        ref={(slider) => (slider1.current = slider)}
      >
        {imageList.map((item, index) => (
          <SplideSlide key={index} className="h-full w-full">
            <ImageContainer
              src={item}
              alt={`A&I Sheeting - Project image ${index + 1}`}
              width={900}
              height={500}
              cssClasses="object-cover h-full w-full tabletLarge:cursor-pointer"
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
