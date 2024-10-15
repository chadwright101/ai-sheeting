import Image from "next/image";

import classNames from "classnames";

import ImageContainer from "@/app/_components/utils/image-container";

import pageData from "@/app/_data/page-data.json";

interface Props {
  cssClasses?: string;
}

const {
  homePage: { whatWeAreAbout },
} = pageData;

const WhatWeAreAbout = ({ cssClasses }: Props) => {
  return (
    <article className={`flex flex-col gap-14 ${cssClasses}`}>
      <h2 className="tabletLarge:text-left">What We&apos;re About</h2>
      <ImageContainer
        src="/assets/projects/avenge-2/DJI_0701.jpg"
        alt="A&I Sheeting - What we're about"
        desktopWidth={800}
        cssClasses="h-[230px] object-cover"
        pictureCssClasses="hidden tabletLarge:block"
        tabletWidth={50}
      />
      <ul className="flex flex-wrap gap-y-14 gap-x-8 justify-center mx-auto tablet:grid grid-cols-4 tabletLarge:gap-y-10 tabletLarge:mx-0 tabletLarge:grid-cols-3 tabletLarge:gap-x-4 desktop:grid-cols-24 desktop:place-items-start">
        {whatWeAreAbout.map(({ iconUrl, title }, index) => (
          <li
            key={index}
            className={classNames(
              "grid gap-5 w-[130px] mx-auto desktop:col-span-6",
              {
                "order-last": [6, 7].includes(index),
                "desktop:col-start-4": index === 4,
                "desktop:col-start-7": index === 6,
                "tablet:col-span-full tabletLarge:col-auto": index === 7,
              }
            )}
          >
            <Image
              src={iconUrl}
              alt={`A&I sheeting - ${title}`}
              width={65}
              height={65}
              className="h-[50px] mx-auto"
            />
            <h4 className="text-center text-subheading font-500">{title}</h4>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default WhatWeAreAbout;
