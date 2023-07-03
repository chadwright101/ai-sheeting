import Link from "next/link";
import { Metadata } from "next";

import ImageContainer from "@/components/utils/image-container";

import pageData from "@/data/page-data.json";

const { faqs } = pageData;

export const metadata: Metadata = {
  title: "FAQs - A&I Sheeting",
  openGraph: {
    title: "FAQs - A&I Sheeting",
    url: "https://www.roofrefub.co.za/faqs",
    images: [
      {
        url: "https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/ai-sheeting/projects/avenge-2/DJI_0684.jpg",
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
