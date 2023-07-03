import { Metadata } from "next";

import Testimonials from "@/components/pages/projects-page/testimonials";
import ProjectsSlider from "@/components/sliders/project-slider";

import pageData from "@/data/page-data.json";

const { projectsPage } = pageData;

export const metadata: Metadata = {
  title: "Projects - A&I Sheeting",
  openGraph: {
    title: "Projects - A&I Sheeting",
    url: "https://www.roofrefub.co.za/projects",
    images: [
      {
        url: "https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/avenge-2/DJI_0684.jpg",
      },
    ],
  },
};

const Projects = () => {
  return (
    <>
      <main>
        <h1 className="mb-10">Projects</h1>
        <ProjectsSlider
          sliderData={projectsPage.slider}
          cssClasses="tabletLarge:grid grid-cols-2 gap-x-14"
        />
        <hr className="my-14 tabletLarge:hidden" />
        <Testimonials cssClasses="tabletLarge:mt-28" />
      </main>
    </>
  );
};

export default Projects;
