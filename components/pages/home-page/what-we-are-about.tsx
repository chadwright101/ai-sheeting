import ImageContainer from "@/components/utils/image-container";

import classNames from "classnames";

import pageData from "../../../data/page-data.json";

interface Props {
  cssClasses?: string;
}

const {
  homePage: { whatWeAreAbout },
} = pageData;

const WhatWeAreAbout = ({ cssClasses }: Props) => {
  return (
    <article className={`grid gap-14 ${cssClasses}`}>
      <h2 className="tabletLarge:text-left">What We&apos;re About</h2>
      <ImageContainer
        src="/projects/Avenge/DJI_0544.jpg"
        alt="A&I Sheeting - What we're about"
        width={900}
        height={250}
        cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-[230px] object-cover"
      />
      <ul className="flex flex-wrap gap-y-14 gap-x-8 justify-center mx-auto tabletLarge:gap-y-10 tabletLarge:mx-0 tabletLarge:grid tabletLarge:grid-cols-3 tabletLarge:gap-x-4 desktop:grid-cols-24 desktop:place-items-start">
        {whatWeAreAbout.map(({ iconUrl, title }, index) => (
          <li
            key={index}
            className={classNames(
              "grid gap-5 w-[130px] mx-auto desktop:col-span-6",
              {
                "order-last": [6, 7].includes(index),
                "desktop:col-start-4": index === 4,
                "desktop:col-start-7": index === 6,
              }
            )}
          >
            <ImageContainer
              src={iconUrl}
              alt={`A&I sheeting - ${title}`}
              width={65}
              height={50}
              cssClasses="h-[50px] mx-auto"
            />
            <h4 className="text-center text-subheading font-500">{title}</h4>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default WhatWeAreAbout;
