import Head from "next/head";

import Testimonials from "@/components/pages/projects-page/testimonials";
import ProjectsSlider from "@/components/sliders/project-slider";

import pageData from "@/data/page-data.json";

const { projectsPage } = pageData;

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects - A&I Sheeting</title>
        <meta
          name="description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta
          name="keywords"
          content="A&I Sheeting, AI sheeting, roof refurbishers, johannesburg, Industrial roofing solutions, roof refurbishment, roof replacement,redesign roof, roofing, insulation, cladding, gutters, Steel box gutters, eave gutters, downpipes, ventilation, asbestos removal, waterproofing, coating systems, Gauteng, South Africa"
        />
        <meta
          property="og:image"
          content="https://ai-sheeting-git-development-chadwright101.vercel.app/_next/image?url=https%3A%2F%2Fthe-wright-designs-website-images.s3.af-south-1.amazonaws.com%2Fai-sheeting%2Fprojects%2Favenge-2%2FDJI_0684.jpg"
        />
        <meta property="og:title" content="Projects - A&I Sheeting" />
        <meta property="og:url" content="https://www.roofrefub.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta property="og:site_name" content="Projects - A&I Sheeting" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
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
