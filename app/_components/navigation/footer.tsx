import Link from "next/link";

import ImageContainer from "@/app/_components/utils/image-container";

import navList from "@/app/_data/navigation-data.json";

interface Props {
  cssClasses?: string;
}

const Footer = ({ cssClasses }: Props) => {
  return (
    <footer className={`${cssClasses} mt-10 mb-4 tabletLarge:mb-12`}>
      <div className="max-w-[1400px] h-full px-5 tabletLarge:px-10 tabletLarge:mx-auto desktop:px-0">
        <div className="grid grid-cols-2 gap-y-4 pt-10 h-[134px] border-t-2 border-black tabletLarge:grid-cols-[1fr_83px_143px] tabletLarge:gap-x-8 tabletLarge:h-[249px]">
          <nav className="hidden tabletLarge:block">
            <ul className="list-none m-0">
              {navList.map(({ title, url }, index) => (
                <li key={index}>
                  <Link
                    href={url}
                    className={`font-300 text-black text-[14px] ${
                      title === "Get A Free Roof Inspection" && "font-[600]"
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h5 className="font-300 text-paragraph w-[150px] text-left mr-auto translate-y-3 tabletLarge:translate-y-0 tabletLarge:mt-auto tabletLarge:row-start-2 tabletLarge:col-span-full tabletLarge:text-center tabletLarge:w-full">
            © A&I Sheeting{" "}
            <Link href="https://www.roofrefurb.co.za">
              <span className="invisible tabletLarge:visible"> | </span>
              www.roofrefurb.co.za
            </Link>
          </h5>
          <div className="w-[87px] h-[68px] ml-auto tabletLarge:mt-auto">
            <ImageContainer
              src="/assets/a&i-normal-logo.png"
              alt="A&I Sheeting logo"
              desktopWidth={150}
              phoneWidth={100}
              tabletWidth={150}
            />
            <h6 className="font-Ovo text-[12px] absolute -translate-x-[2.5px] translate-y-[2px]">
              Established 1976
            </h6>
          </div>
          <ImageContainer
            src="/assets/Since-1976-stamp.png"
            alt="A&I Sheeting since 1976"
            desktopWidth={200}
            pictureCssClasses="hidden tabletLarge:block ml-auto mt-auto drop-shadow-md rotate-[2deg]"
            tabletWidth={200}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
