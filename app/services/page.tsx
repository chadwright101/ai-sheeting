import Head from "next/head";
import Link from "next/link";

import ImageContainer from "@/components/utils/image-container";

import pageData from "../../data/page-data.json";

const {
  servicesPage: { technologies, guide, articles },
} = pageData;

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - A&I Sheeting</title>
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
        <meta property="og:title" content="Services - A&I Sheeting" />
        <meta property="og:url" content="https://www.roofrefub.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta property="og:site_name" content="Services - A&I Sheeting" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
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
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/118/DJI_0496.jpg"
            alt="A&I Sheeting - State of the Art Technologies"
            width={1200}
            height={750}
            cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-full object-cover my-10 tabletLarge:m-0"
            smallest={90}
            phone={90}
            tablet={90}
            tabletLarge={50}
            desktopSmall={40}
            desktop={40}
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
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/brackenfell-jt-ross-ct/IMG_2162.jpg"
            alt="A&I Sheeting - Product/Service Guide"
            width={1200}
            height={750}
            cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-full object-cover mt-10 tabletLarge:m-0"
            smallest={90}
            phone={90}
            tablet={90}
            tabletLarge={50}
            desktopSmall={40}
            desktop={40}
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
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/diesel-road/DJI_0636.jpg"
          alt="A&I Sheeting - Articles"
          width={1200}
          height={750}
          cssClasses="hidden tablet:block tablet:h-[300px] object-cover my-10 tablet:m-0"
          tabletLarge={65}
          desktopSmall={60}
          desktop={55}
        />
      </div>
    </>
  );
};

export default Services;
