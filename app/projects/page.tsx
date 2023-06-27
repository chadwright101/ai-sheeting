import Testimonials from "@/components/pages/projects-page/testimonials";
import ProjectsSlider from "@/components/sliders/project-slider";

import { projectsPage } from "@/data/page-data.json";

const Projects = () => {
  return (
    <main>
      <h1 className="mb-10">Projects</h1>
      <ProjectsSlider
        sliderData={projectsPage.slider}
        cssClasses="tabletLarge:grid grid-cols-2 gap-x-14"
      />
      <hr className="my-14 tabletLarge:hidden" />
      <Testimonials cssClasses="tabletLarge:mt-28" />
    </main>
  );
};

export default Projects;
