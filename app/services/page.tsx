import Link from "next/link";
import { Metadata } from "next";

import ImageContainer from "@/app/_components/utils/image-container";

import pageData from "@/app/_data/page-data.json";

const {
  servicesPage: { technologies, guide, articles },
} = pageData;

export const metadata: Metadata = {
  title: "Services - A&I Sheeting",
  openGraph: {
    title: "Services - A&I Sheeting",
    description:
      "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
    type: "website",
    locale: "en_ZA",
    siteName: "A&I Sheeting",
    url: "https://www.roofrefub.co.za/services",
    images: [
      {
        url: "/assets/projects/avenge-2/DJI_0684.jpg",
      },
    ],
  },
};

const Services = () => {
  return (
    <>
      <main>
        <h1 className="mb-10">Services</h1>
        <div className="tabletLarge:grid grid-cols-2 gap-x-14 gap-y-10">
          <article>
            <h3 className="text-center tabletLarge:text-left">
              State of the Art Technologies
            </h3>
            <p className="mt-10 mb-4">{technologies.paragraph1}</p>
            <ul>
              {technologies.list.map((item, index) => (
                <li key={index} className="text-left">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <ImageContainer
            src="/assets/projects/118/DJI_0496.jpg"
            alt="A&I Sheeting - State of the Art Technologies"
            desktopWidth={1200}
            cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-full object-cover my-10 tabletLarge:m-0"
            phoneWidth={425}
            tabletWidth={800}
            eager
          />
          <p className="col-span-2">{technologies.paragraph2}</p>
        </div>
        <hr className="text-black my-10 tabletLarge:hidden" />
        <div className="mb-16 tabletLarge:grid grid-cols-2 gap-x-14 gap-y-10 tabletLarge:mb-28 tabletLarge:mt-10">
          <article className="order-1">
            <h3 className="text-center tabletLarge:text-left tabletLarge:mb-10">
              Product/Service Guide:
            </h3>
            <ul className="my-10 tabletLarge:my-0">
              {guide.map((item, index) => (
                <li key={index} className="text-left">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <ImageContainer
            src="/assets/projects/brackenfell-jt-ross-ct/IMG_2162.jpg"
            alt="A&I Sheeting - Product/Service Guide"
            desktopWidth={1200}
            cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-full object-cover mt-10 tabletLarge:m-0"
            phoneWidth={425}
            tabletWidth={800}
          />
        </div>
      </main>
      <div className="tablet:grid grid-cols-[1fr_2fr] gap-x-14 gap-y-1">
        <article>
          <h2 className="tablet:text-left">Articles</h2>
          <ul className="grid gap-8 mt-10 tablet:my-10">
            {articles.map(({ title, url }, index) => (
              <li key={index} className="text-left">
                <Link
                  href={url}
                  target="_blank"
                  className="text-subheading p-4 -m-4 hover:text-linkBlue tabletLarge:hover:text-orange"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <ImageContainer
          src="/assets/projects/diesel-road/DJI_0636.jpg"
          alt="A&I Sheeting - Articles"
          desktopWidth={1200}
          cssClasses="hidden tablet:block tablet:h-[300px] object-cover my-10 tablet:m-0"
          tabletWidth={800}
        />
      </div>
    </>
  );
};

export default Services;
