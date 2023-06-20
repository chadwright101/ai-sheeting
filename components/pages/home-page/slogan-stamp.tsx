import ImageContainer from "@/components/utils/image-container";

import pageData from "../../../data/page-data.json";

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
        <span className="font-[600] text-[40px] pr-1">&quot;</span>
        {slogan}
        <span className="font-[600] text-[40px] pl-1 leading-7">&quot;</span>
      </h3>
      <ImageContainer
        src="/Since-1976-stamp.png"
        alt="A&I Sheeting since 1976"
        width={212}
        height={212}
        cssClasses="rotate-[-4deg] drop-shadow-md tabletLarge:w-[163px] h-auto"
      />
    </section>
  );
};

export default SloganStamp;
