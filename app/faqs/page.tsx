import Link from "next/link";

import ImageContainer from "@/components/utils/image-container";

import { faqs } from "@/data/page-data.json";

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
          src="/DSC03266.jpg"
          alt="A&I Sheeting - About Us"
          width={1000}
          height={450}
          cssClasses="h-full object-cover hidden tabletLarge:block"
          smallest={90}
          phone={90}
          tablet={90}
          tabletLarge={50}
          desktopSmall={50}
          desktop={40}
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
