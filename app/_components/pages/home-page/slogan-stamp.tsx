import ImageContainer from "@/app/_components/utils/image-container";

import pageData from "@/app/_data/page-data.json";

interface Props {
  cssClasses?: string;
}

const {
  homePage: { slogan },
} = pageData;

const SloganStamp = ({ cssClasses }: Props) => {
  return (
    <section
      className={`${cssClasses} grid gap-10 place-items-center tabletLarge:grid-cols-[1fr_4fr]`}
    >
      <h3 className="font-300 text-[24px] italic px-16 text-center tabletLarge:text-[30px] tabletLarge:px-0 tabletLarge:order-1">
        <span className="font-[600] text-[40px] pr-1">&ldquo;</span>
        {slogan}
        <span className="font-[600] text-[40px] pl-1 leading-7">&rdquo;</span>
      </h3>
      <ImageContainer
        src="/assets/Since-1976-stamp.png"
        alt="A&I Sheeting since 1976"
        desktopWidth={212}
        cssClasses="rotate-[-4deg] drop-shadow-md tabletLarge:w-[163px] h-auto"
        phoneWidth={250}
        tabletWidth={250}
        eager
      />
    </section>
  );
};

export default SloganStamp;
