"use client";

import { useEffect, useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import ImageContainer from "../utils/image-container";

import "@splidejs/splide/css";

const ProjectsSlider = ({ sliderData, cssClasses }) => {
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  return (
    <div className={`w-full ${cssClasses}`}>
      {/* slider */}
      <Splide
        options={{
          type: "loop",
          pagination: false,
          speed: 1500,
          interval: 10000,
          autoplay: true,
          dragMinThreshold: { mouse: 50, touch: 150 },
          pauseOnFocus: true,
          gap: "1rem",
        }}
        className="w-full"
        ref={(slider) => (slider1.current = slider)}
      >
        {sliderData.map(({ imageUrl }, index) => (
          <SplideSlide key={index} className="w-full">
            <ImageContainer
              src={imageUrl}
              alt={`A&I Sheeting - Project image ${index + 1}`}
              width={900}
              height={500}
              cssClasses="object-cover w-full h-[275px] phone:h-[300px] tablet:h-[375px] tabletLarge:h-[400px] desktopSmall:h-[425px] desktop:h-[450px]"
              eager={index < 1 ? true : false}
              smallest={100}
              phone={90}
              tablet={85}
              tabletLarge={50}
              desktopSmall={55}
              desktop={50}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* project info */}
      <Splide
        options={{
          type: "loop",
          pagination: false,
          arrows: false,
          snap: true,
          drag: false,
        }}
        ref={(slider) => (slider2.current = slider)}
      >
        {sliderData.map(
          ({ title, paragraph1, paragraph2, paragraph3 }, index) => (
            <SplideSlide key={index} className="h-full w-full">
              <article className="grid gap-4">
                <h4 className="text-center tabletLarge:text-left">{title}</h4>
                <p>{paragraph1}</p>
                <p>{paragraph2 && paragraph2}</p>
                <p>{paragraph3 && paragraph3}</p>
              </article>
            </SplideSlide>
          )
        )}
      </Splide>
    </div>
  );
};

export default ProjectsSlider;
