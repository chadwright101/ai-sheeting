"use client";

import { useGlobalContext } from "@/app/_components/utils/global-context";
import ImageContainer from "@/app/_components/utils/image-container";

import classNames from "classnames";

const ClientSideImageComponent = () => {
  const { showName, showMessage } = useGlobalContext();
  return (
    <ImageContainer
      src="/assets/projects/jt-pics/DJI_0645.jpg"
      alt="A&I Sheeting - Free Roof Inspection Quote"
      desktopWidth={700}
      phoneWidth={400}
      tabletWidth={750}
      cssClasses={classNames("object-cover h-[300px] w-full", {
        "tabletLarge:h-[250px]": showName && !showMessage,
        "tabletLarge:hidden": showMessage && showMessage,
      })}
      eager
    />
  );
};

export default ClientSideImageComponent;
