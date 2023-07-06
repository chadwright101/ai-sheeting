"use client";

import { useGlobalContext } from "./global-context";

interface Props {
  maxLength: number;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  cssClasses?: string;
  buttonWhite?: boolean;
  quotations?: boolean;
  client?: string;
}

const SlicedText = ({
  paragraph1,
  paragraph2,
  paragraph3,
  maxLength,
  cssClasses,
  buttonWhite,
  quotations,
  client,
}: Props) => {
  const { readMore, setReadMore } = useGlobalContext();
  const truncated = paragraph1.slice(0, maxLength) + "...";
  {
    return (
      <>
        <p className={`${cssClasses}`}>
          <span className={quotations ? "" : "hidden"}>&ldquo;</span>
          {!readMore ? truncated : paragraph1}
          <span
            className={`${paragraph2 ? "hidden" : ""} ${
              !quotations ? "hidden" : ""
            }`}
          >
            &rdquo;
          </span>
        </p>
        <p className={`${readMore ? "block" : "hidden"} ${cssClasses}`}>
          {paragraph2}
          <span
            className={`${!paragraph2 ? "hidden" : ""} ${
              !quotations ? "hidden" : ""
            }`}
          >
            &rdquo;
          </span>
        </p>
        <p className={`${readMore ? "block" : "hidden"} ${cssClasses}`}>
          {paragraph3}
          <span
            className={`${!paragraph3 ? "hidden" : ""} ${
              !quotations ? "hidden" : ""
            }`}
          >
            &rdquo;
          </span>
        </p>
        <p
          className={`text-center italic font-[400] tabletLarge:text-left ${
            client && readMore ? "" : "hidden"
          }`}
        >
          {client}
        </p>

        <button
          className={`text-subheading font-500 text-black mt-8 mx-auto px-6 py-2.5 drop-shadow-md hover:text-black text-center rounded-[5px] ${
            readMore ? "hidden" : "block"
          } ${
            buttonWhite
              ? "bg-white tabletLarge:hover:bg-white/80"
              : "bg-orange tabletLarge:hover:bg-orange/80"
          }`}
          onClick={() => setReadMore(true)}
        >
          Read More
        </button>
      </>
    );
  }
};

export default SlicedText;
