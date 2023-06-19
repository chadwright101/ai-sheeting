import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import ImageContainer from "@/components/utils/image-container";
import navList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const MobileHeaderBar = ({ cssClasses }: Props) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuToggle(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <>
      <div
        className={`flex justify-between items-center w-full h-[92px] ${cssClasses}`}
      >
        <Link href="/" className="w-[96px] h-[61px]">
          <ImageContainer
            src="/a&i-builder-logo.png"
            alt="A&I Sheeting logo"
            width={110}
            height={75}
            cssClasses="object-cover object-left-bottom w-full h-full"
            eager
          />
          <h6 className="font-Ovo text-[9px] absolute -translate-y-[15px] translate-x-[23.5px]">
            Established 1976
          </h6>
        </Link>
        {!menuToggle && (
          <div
            onClick={() => setMenuToggle(true)}
            className="cursor-pointer p-4 -m-4"
          >
            <Image
              src="/icons/menu.svg"
              alt="Menu icon"
              width={30}
              height={30}
              className=" scale-y-[90%]"
            />
          </div>
        )}
        {menuToggle && (
          <div
            onClick={() => setMenuToggle(false)}
            className="cursor-pointer p-4 -m-4"
          >
            <Image
              src="/icons/close.svg"
              alt="Menu icon"
              width={40}
              height={40}
              className="translate-x-1"
            />
          </div>
        )}
      </div>
      {menuToggle && (
        <nav
          ref={ref}
          className="-mx-5 fixed top-0 h-screen w-full bg-orange phone:w-3/4 tablet:w-3/5 tabletLarge:w-2/5  tabletLarge:hidden"
        >
          <div
            onClick={() => setMenuToggle(false)}
            className="cursor-pointer p-4 -m-4"
          >
            <Image
              src="/icons/close.svg"
              alt="Menu icon"
              width={40}
              height={40}
              className="translate-x-1 absolute right-5 top-6 phone:hidden"
            />
          </div>
          <ul className="list-none mx-0 grid gap-7 mt-10 ml-10">
            {navList.map(({ title, url }, index) => (
              <li key={index} className="text-left max-w-[80%]">
                <Link
                  href={url}
                  className={`text-[20px] p-4 -m-4 ${
                    index === 6
                      ? "font-[600] text-black hover:text-black"
                      : "text-white font-300 hover:text-white"
                  }`}
                  onClick={() => setMenuToggle(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileHeaderBar;
