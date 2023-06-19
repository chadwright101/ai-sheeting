import Link from "next/link";

import ImageContainer from "@/components/utils/image-container";

import navList from "@/data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const DesktopHeaderBar = ({ cssClasses }: Props) => {
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
                className={`text-white ${
                  index === 6 ? "font-500 hover:text-black" : "font-[325]"
                }`}
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
