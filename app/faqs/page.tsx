import Link from "next/link";
import Head from "next/head";

import ImageContainer from "@/components/utils/image-container";

import { faqs } from "@/data/page-data.json";

const Faqs = () => {
  return (
    <>
      <Head>
        <title>FAQs - A&I Sheeting</title>
        <meta
          name="description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta
          name="keywords"
          content="A&I Sheeting, AI sheeting, roof refurbishers, johannesburg, Industrial roofing solutions, roof refurbishment, roof replacement,redesign roof, roofing, insulation, cladding, gutters, Steel box gutters, eave gutters, downpipes, ventilation, asbestos removal, waterproofing, coating systems, Gauteng, South Africa"
        />
        <meta property="og:image" content="" />
        <meta property="og:title" content="FAQs - A&I Sheeting" />
        <meta property="og:url" content="https://www.roofrefub.co.za" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user."
        />
        <meta property="og:site_name" content="FAQs - A&I Sheeting" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
      </Head>
      <h1 className="mb-10 tabletLarge:text-left">FAQs</h1>
      <main className="tabletLarge:grid grid-cols-2 gap-x-14 gap-y-20">
        <ul className="grid gap-8 tabletLarge:gap-4">
          {faqs.map(({ question, url }, index) => (
            <li key={index}>
              <Link
                href={url}
                className="p-4 -m-4 tabletLarge:m-0 tabletLarge:p-0"
              >
                {question}
              </Link>
            </li>
          ))}
        </ul>
        <ImageContainer
          src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/DSC03266.jpg"
          alt="A&I Sheeting - FAQs"
          width={1000}
          height={450}
          cssClasses="h-full object-cover hidden tabletLarge:block"
          smallest={90}
          phone={90}
          tablet={90}
          tabletLarge={50}
          desktopSmall={50}
          desktop={40}
          eager
        />
        <hr className="text-black my-10 tabletLarge:hidden" />
        <ul className="list-none m-0 grid gap-10 tabletLarge:col-span-2">
          {faqs.map(({ id, answer, question }, index) => (
            <li key={index}>
              <div
                id={id}
                className="relative -top-[125px] tabletLarge:-top-[200px]"
              ></div>
              <h6 className="mb-4 underline underline-offset-[6px]">
                {question}
              </h6>
              <p>{answer}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Faqs;
