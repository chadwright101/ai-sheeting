import Link from "next/link";
import { Metadata } from "next";

import ImageContainer from "@/app/_components/utils/image-container";

import pageData from "@/app/_data/page-data.json";

const { faqs } = pageData;

export const metadata: Metadata = {
  title: "FAQs - A&I Sheeting",
  openGraph: {
    title: "FAQs - A&I Sheeting",
    description:
      "First established in 1976, with a combined in-house experience of over 100 years,  A&I specialises in providing Industrial roofing solutions for Gauteng and beyond. We offer professional assistance in the refurbishment, replacement and redesign of roofing, insulation, cladding, gutters (Steel box gutters and eave gutters), downpipes, ventilation, asbestos removal, waterproofing and coating systems to suit the building as well as its user.",
    type: "website",
    locale: "en_ZA",
    siteName: "A&I Sheeting",
    url: "https://www.roofrefub.co.za/faqs",
    images: [
      {
        url: "/assets/projects/avenge-2/DJI_0684.jpg",
      },
    ],
  },
};

const Faqs = () => {
  return (
    <>
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
          src="/assets/DSC03266.jpg"
          alt="A&I Sheeting - FAQs"
          desktopWidth={800}
          cssClasses="h-full object-cover hidden tabletLarge:block"
          eager
        />
        <hr className="text-black my-10 tabletLarge:hidden" />
        <ul className="list-none m-0 grid gap-10 tabletLarge:col-span-2">
          {faqs.map(({ id, answer, question }, index) => (
            <li key={index}>
              <div
                id={id}
                className="relative -top-[125px] tabletLarge:-top-[175px]"
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
