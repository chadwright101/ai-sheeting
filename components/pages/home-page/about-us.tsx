import Image from "next/image";

import Button from "@/components/button";

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
      <Image
        src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/DSC03266.jpg"
        alt="A&I Sheeting - About Us"
        width={1000}
        height={450}
        className="h-[250px] tablet:h-[300px] tabletLarge:h-[230px] object-cover"
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
