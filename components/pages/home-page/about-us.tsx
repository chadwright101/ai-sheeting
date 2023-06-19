import ImageContainer from "@/components/utils/image-container";

import pageData from "../../../data/page-data.json";

interface Props {
  cssClasses?: string;
}

const {
  homePage: { aboutUs },
} = pageData;

const AboutUs = ({ cssClasses }: Props) => {
  return (
    <article className={`flex flex-col gap-14 ${cssClasses}`}>
      <h2 className="tabletLarge:text-left">About Us</h2>
      <ImageContainer
        src="/DSC03266.jpg"
        alt="A&I Sheeting - About Us"
        width={900}
        height={250}
        cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-[230px] object-cover"
      />
      <div className=" flex flex-col gap-4">
        {aboutUs.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </article>
  );
};

export default AboutUs;
