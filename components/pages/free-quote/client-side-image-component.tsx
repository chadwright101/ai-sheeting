"use client";

import { useGlobalContext } from "@/components/utils/global-context";
import ImageContainer from "@/components/utils/image-container";

import classNames from "classnames";

const ClientSideImageComponent = () => {
  const { showName, showMessage } = useGlobalContext();
  return (
    <ImageContainer
      src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/jt-pics/DJI_0645.jpg"
      alt="A&I Sheeting - Free Roof Inspection Quote"
      width={700}
      height={500}
      smallest={100}
      phone={100}
      tablet={80}
      tabletLarge={50}
      desktopSmall={40}
      desktop={30}
      cssClasses={classNames("object-cover h-[300px] w-full", {
        "tabletLarge:h-[250px]": showName && !showMessage,
        "tabletLarge:hidden": showMessage && showMessage,
      })}
      eager
    />
  );
};

export default ClientSideImageComponent;
