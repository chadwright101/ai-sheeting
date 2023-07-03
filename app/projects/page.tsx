import { Metadata } from "next";

import Testimonials from "@/components/pages/projects-page/testimonials";
import ProjectsSlider from "@/components/sliders/project-slider";

import pageData from "@/data/page-data.json";

const { projectsPage } = pageData;

export const metadata: Metadata = {
  title: "Projects - A&I Sheeting",
  openGraph: {
    title: "Projects - A&I Sheeting",
    description:
      "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
    type: "website",
    locale: "en_ZA",
    siteName: "A&I Sheeting",
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
