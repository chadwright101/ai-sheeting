import ImageContainer from "@/app/_components/utils/image-container";
import Button from "@/app/_components/button";

import pageData from "@/app/_data/page-data.json";

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
        src="/assets/DSC03266.jpg"
        alt="A&I Sheeting - About Us"
        desktopWidth={1000}
        cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-[230px] object-cover"
        phoneWidth={400}
        tabletWidth={1000}
      />
      <div className=" flex flex-col gap-4">
        {aboutUs.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <Button
        url="/projects"
        cssClasses="place-self-center tabletLarge:place-self-start"
      >
        View Our Projects
      </Button>
    </article>
  );
};

export default AboutUs;
