import { Splide, SplideSlide } from "@splidejs/react-splide";

import SlicedText from "../../utils/sliced-text";

import pageData from "../../../data/page-data.json";

import "@splidejs/react-splide/css/core";

interface Props {
  cssClasses?: string;
}

const {
  projectsPage: { testimonials },
} = pageData;

const Testimonials = ({ cssClasses }: Props) => {
  return (
    <article className={`${cssClasses}`}>
      <h2 className="tabletLarge:text-left">Testimonials</h2>
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 7500,
          pauseOnFocus: true,
        }}
        className="pt-10 pb-7 mt-10 -mx-5 bg-orange"
      >
        {testimonials.map(
          ({ title, paragraph1, paragraph2, paragraph3, client }, index) => (
            <SplideSlide key={index}>
              <div className="mx-8">
                <h6 className="text-center mb-8 tabletLarge:text-left">
                  {title}
                </h6>
                <div className="tabletLarge:hidden">
                  <SlicedText
                    maxLength={300}
                    paragraph1={paragraph1}
                    paragraph2={paragraph2}
                    client={client}
                    cssClasses="text-center mb-4"
                    buttonWhite
                    quotations
                  />
                </div>
                <div className="hidden tabletLarge:block">
                  <p className="mb-4">
                    <span>&ldquo;</span>
                    {paragraph1}
                    <span className={paragraph2 ? "hidden" : ""}>&rdquo;</span>
                  </p>
                  <p className="mb-4">
                    {paragraph2}
                    <span className={!paragraph2 ? "hidden" : ""}>&rdquo;</span>
                  </p>
                  <p>
                    {paragraph3}
                    <span className={!paragraph3 ? "hidden" : ""}>&rdquo;</span>
                  </p>
                  <p className="text-left italic font-[400] mt-4">{client}</p>
                </div>
              </div>
            </SplideSlide>
          )
        )}
      </Splide>
    </article>
  );
};

export default Testimonials;
