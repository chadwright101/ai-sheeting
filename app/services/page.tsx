import Link from "next/link";

import ImageContainer from "@/components/utils/image-container";

import pageData from "../../data/page-data.json";

const {
  servicesPage: { technologies, guide, articles },
} = pageData;

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
            src="/projects/Douglasdale Shopping Centre/DJI_0334.jpg"
            alt="A&I Sheeting - About Us"
            width={1200}
            height={750}
            cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-full object-cover my-10 tabletLarge:m-0"
            smallest={90}
            phone={90}
            tablet={90}
            tabletLarge={75}
            desktopSmall={75}
            desktop={60}
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
            src="/projects/Soweto/DJI_0703.jpg"
            alt="A&I Sheeting - About Us"
            width={1200}
            height={750}
            cssClasses="h-[250px] tablet:h-[300px] tabletLarge:h-full object-cover mt-10 tabletLarge:m-0"
            smallest={90}
            phone={90}
            tablet={90}
            tabletLarge={75}
            desktopSmall={75}
            desktop={60}
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
          src="/projects/JT pics/DJI_0645.jpg"
          alt="A&I Sheeting - About Us"
          width={1200}
          height={750}
          cssClasses="hidden tablet:block tablet:h-[300px] object-cover my-10 tablet:m-0"
          tabletLarge={75}
          desktopSmall={75}
          desktop={60}
        />
      </div>
    </>
  );
};

export default Services;
