import ThumbnailSlider from "@/components/sliders/thumbnail-slider";
import LightboxSlider from "@/components/sliders/lightbox-slider";

import pageData from "../../../data/page-data.json";

interface Props {
  cssClasses?: string;
}

const {
  homePage: { gallery },
} = pageData;

const Gallery = ({ cssClasses }: Props) => {
  return (
    <section className={`grid gap-14 ${cssClasses}`}>
      <h2 className="tabletLarge:text-left">Gallery</h2>
      <ThumbnailSlider
        imageList={gallery}
        cssClasses="hidden tabletLarge:block"
      />
      <LightboxSlider imageList={gallery} cssClasses="tabletLarge:hidden" />
    </section>
  );
};

export default Gallery;
