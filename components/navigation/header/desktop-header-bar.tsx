"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ImageContainer from "@/components/utils/image-container";
import useScrollPosition from "@/components/utils/scroll-position";

import navList from "@/data/navigation-data.json";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const DesktopHeaderBar = ({ cssClasses }: Props) => {
  const scrollPosition = useScrollPosition();
  const pathName = usePathname();
  return (
    <div
      className={`justify-between items-center w-full ease-in-out duration-500 ${
        scrollPosition > 0 ? "h-[85px]" : "h-[148px]"
      } ${cssClasses}`}
    >
      <Link
        href="/"
        className={`ease-in-out duration-500 ${
          scrollPosition > 0 ? "w-[80px] h-auto" : "w-[162px] h-auto"
        }`}
      >
        <ImageContainer
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/a&i-builder-logo.png"
          alt="A&I Sheeting logo"
          width={110}
          height={75}
          cssClasses="w-full h-full"
          eager
          tabletLarge={30}
          desktopSmall={30}
          desktop={30}
        />
        <h6
          className={`font-Ovo absolute ease-in-out duration-500  ${
            scrollPosition > 0
              ? "text-[7.5px] -translate-y-[12.5px] translate-x-[21px]"
              : "text-[15px] -translate-y-[23px] translate-x-[40.5px]"
          }`}
        >
          Established 1976
        </h6>
      </Link>
      <nav className="desktop:translate-x-3">
        <ul
          className={`list-none m-0 flex gap-7 items-end ease-in-out duration-500 ${
            scrollPosition > 0 ? "-mt-7" : "mt-4"
          }`}
        >
          {navList.map(({ title, url }, index) => (
            <li
              key={index}
              className={`${
                title === "Get A Free Roof Inspection" &&
                "bg-orange p-4 drop-shadow-sm rounded-[20px_0px_20px_20px] w-[160px] text-center translate-y-[42px]"
              }`}
            >
              <Link
                href={url}
                className={classNames(
                  `text-white ${
                    title === "Get A Free Roof Inspection"
                      ? "font-500 p-2 -m-2 hover:text-black"
                      : "font-[325]"
                  }`,
                  {
                    "underline underline-offset-8 decoration-2 font-[550] hover:text-white":
                      pathName === url && pathName !== "/free-quote",
                  }
                )}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeaderBar;
