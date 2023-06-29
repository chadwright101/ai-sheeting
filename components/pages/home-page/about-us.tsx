import ImageContainer from "@/components/utils/image-container";

import pageData from "../../../data/page-data.json";
import Button from "@/components/button";

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
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/DSC03266.jpg"
        alt="A&I Sheeting - About Us"
        width={1000}
        height={450}
        cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-[230px] object-cover"
        smallest={100}
        phone={100}
        tablet={100}
        tabletLarge={50}
        desktopSmall={40}
        desktop={30}
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
