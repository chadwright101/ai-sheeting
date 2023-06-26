import Link from "next/link";
import { usePathname } from "next/navigation";

import ImageContainer from "@/components/utils/image-container";

import navList from "@/data/navigation-data.json";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const DesktopHeaderBar = ({ cssClasses }: Props) => {
  const pathName = usePathname();
  return (
    <div
      className={`justify-between items-center w-full h-[148px] ${cssClasses}`}
    >
      <Link href="/" className="w-[162px] h-[100px]">
        <ImageContainer
          src="/a&i-builder-logo.png"
          alt="A&I Sheeting logo"
          width={110}
          height={75}
          cssClasses="object-cover object-left-bottom w-full h-full"
          eager
          tabletLarge={30}
          desktopSmall={30}
          desktop={30}
        />
        <h6 className="font-Ovo text-[15px] absolute -translate-y-[23px] translate-x-[40.5px]">
          Established 1976
        </h6>
      </Link>
      <nav className="desktop:translate-x-3">
        <ul className="list-none m-0 flex gap-7 items-end mt-5">
          {navList.map(({ title, url }, index) => (
            <li
              key={index}
              className={`${
                index === 6 &&
                "bg-orange p-4 drop-shadow-sm rounded-[20px_0px_20px_20px] w-[160px] text-center translate-y-[42px]"
              }`}
            >
              <Link
                href={url}
                className={classNames(
                  `text-white ${
                    index === 6 ? "font-500 hover:text-black" : "font-[325]"
                  }`,
                  {
                    "underline underline-offset-8 decoration-2 font-[550] hover:text-white":
                      pathName === url,
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
