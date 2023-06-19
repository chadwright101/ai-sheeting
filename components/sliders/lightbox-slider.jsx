import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import classNames from "classnames";

import "@splidejs/react-splide/css/core";
import ImageContainer from "../utils/image-container";

const LightboxSlider = ({
  imageList,
  singleImageFast,
  singleImageMedium,
  singleImageSlow,
}) => {
  const slider1 = useRef();
  const slider2 = useRef();

  const [toggleLightbox, setToggleLightbox] = useState(false);

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  return (
    <>
      {/* lightbox */}
      <div
        className={classNames(
          "fixed top-0 left-0 w-screen h-full bg-darkBeige z-40 place-items-center px-10",
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
            speed: 2000,
            interval: 6500,
            autoplay: true,
            dragMinThreshold: { touch: 2000, mouse: 0 },
            breakpoints: {
              900: {
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
              src="/icons/close.svg"
              alt="Close icon"
              width={45}
              height={45}
              className="fixed top-6 right-8 tabletLarge:top-14 tabletLarge:right-16 bg-darkBeige/75 z-40"
            />
          </button>
          {imageList.map(({ url }, index) => (
            <SplideSlide key={index} className="h-[80vh] flex">
              <ImageContainer
                src={url}
                alt={`Luna Blue Off-grid Guesthouse - Image ${index + 1}`}
                width={1200}
                height={900}
                quality={60}
                cssClasses="object-cover place-self-center"
                smallest={60}
                phone={60}
                tablet={50}
                tabletLarge={45}
                desktopSmall={40}
                desktop={50}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* slider */}
      {singleImageFast ? (
        <Splide
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
            perPage: 1,
            speed: 2000,
            interval: 5000,
            autoplay: true,
            dragMinThreshold: { touch: 2000, mouse: 0 },
            fixedHeight: 500,
            arrows: true,
            breakpoints: {
              1100: {
                perPage: 1,
              },
              900: {
                arrows: false,
                fixedHeight: 400,
              },
              650: {
                fixedHeight: 300,
              },
              425: {
                fixedHeight: 275,
              },
            },
          }}
          className="h-[275px] phone:h-[300px] tablet:h-[400px] tabletLarge:h-[500px]"
          ref={(slider) => (slider2.current = slider)}
        >
          {imageList.map(({ url }, index) => (
            <SplideSlide key={index} className="h-full w-full">
              <ImageContainer
                src={url}
                alt={`Luna Blue Off-grid Guesthouse - Image ${index + 1}`}
                width={900}
                height={500}
                cssClasses="object-cover h-full w-full cursor-pointer"
                onClick={() => (
                  slider1.current.go(index), setToggleLightbox(true)
                )}
                eager={index < 2 ? true : false}
                smallest={85}
                phone={55}
                tablet={45}
                tabletLarge={40}
                desktopSmall={35}
                desktop={35}
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : singleImageMedium ? (
        <Splide
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
            perPage: 1,
            speed: 2000,
            interval: 6000,
            autoplay: true,
            dragMinThreshold: { touch: 2000, mouse: 0 },
            fixedHeight: 500,
            arrows: true,
            breakpoints: {
              1100: {
                perPage: 1,
              },
              900: {
                arrows: false,
                fixedHeight: 400,
              },
              650: {
                fixedHeight: 300,
              },
              425: {
                fixedHeight: 275,
              },
            },
          }}
          className="h-[275px] phone:h-[300px] tablet:h-[400px] tabletLarge:h-[500px]"
          ref={(slider) => (slider2.current = slider)}
        >
          {imageList.map(({ url }, index) => (
            <SplideSlide key={index} className="h-full w-full">
              <ImageContainer
                src={url}
                alt={`Luna Blue Off-grid Guesthouse - Image ${index + 1}`}
                width={900}
                height={500}
                cssClasses="object-cover h-full w-full cursor-pointer"
                onClick={() => (
                  slider1.current.go(index), setToggleLightbox(true)
                )}
                eager={index < 2 ? true : false}
                smallest={85}
                phone={55}
                tablet={45}
                tabletLarge={35}
                desktopSmall={30}
                desktop={25}
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : singleImageSlow ? (
        <Splide
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
            perPage: 1,
            speed: 2000,
            interval: 7000,
            autoplay: true,
            dragMinThreshold: { touch: 2000, mouse: 0 },
            fixedHeight: 500,
            arrows: true,
            breakpoints: {
              1100: {
                perPage: 1,
              },
              900: {
                arrows: false,
                fixedHeight: 400,
              },
              650: {
                fixedHeight: 300,
              },
              425: {
                fixedHeight: 275,
              },
            },
          }}
          className="h-[275px] phone:h-[300px] tablet:h-[400px] tabletLarge:h-[500px]"
          ref={(slider) => (slider2.current = slider)}
        >
          {imageList.map(({ url }, index) => (
            <SplideSlide key={index} className="h-full w-full">
              <ImageContainer
                src={url}
                alt={`Luna Blue Off-grid Guesthouse - Image ${index + 1}`}
                width={900}
                height={500}
                cssClasses="object-cover h-full w-full cursor-pointer"
                onClick={() => (
                  slider1.current.go(index), setToggleLightbox(true)
                )}
                eager={index < 2 ? true : false}
                smallest={85}
                phone={55}
                tablet={45}
                tabletLarge={35}
                desktopSmall={30}
                desktop={25}
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <Splide
          options={{
            type: "loop",
            rewind: true,
            pagination: false,
            perPage: 2,
            perMove: 1,
            speed: 2000,
            interval: 6500,
            autoplay: true,
            dragMinThreshold: { touch: 2000, mouse: 0 },
            gap: "1rem",
            fixedHeight: 500,
            arrows: true,
            breakpoints: {
              1100: {
                perPage: 1,
              },
              900: {
                arrows: false,
                fixedHeight: 400,
              },
              650: {
                fixedHeight: 300,
              },
              425: {
                fixedHeight: 275,
              },
            },
          }}
          className="h-[275px] phone:h-[300px] tablet:h-[400px] tabletLarge:h-[500px]"
          ref={(slider) => (slider2.current = slider)}
        >
          {imageList.map(({ url }, index) => (
            <SplideSlide key={index} className="h-full w-full">
              <ImageContainer
                src={url}
                alt={`Luna Blue Off-grid Guesthouse - Image ${index + 1}`}
                width={900}
                height={500}
                cssClasses="object-cover h-full w-full cursor-pointer"
                onClick={() => (
                  slider1.current.go(index), setToggleLightbox(true)
                )}
                eager={index < 2 ? true : false}
                smallest={85}
                phone={50}
                tablet={45}
                tabletLarge={40}
                desktopSmall={35}
                desktop={25}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </>
  );
};

export default LightboxSlider;
