"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Button from "../button";
import { useGlobalContext } from "../utils/global-context";
import ImageContainer from "../utils/image-container";
import { sendEmail } from "@/app/actions";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  freeQuote?: boolean;
}

const ContactForm = ({ cssClasses, freeQuote }: Props) => {
  const { showName, showMessage, setShowName, setShowMessage } =
    useGlobalContext();
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);

  const pathName = usePathname();

  return (
    <div
      className={classNames(`${cssClasses}`, {
        "tabletLarge:row-span-2": showName,
      })}
    >
      <h5 className={`font-500 text-[24px] ${!freeQuote ? "" : "hidden"}`}>
        Get a quote now!
      </h5>
      <section
        className={`bg-orange -mx-5 py-8 px-8 ${
          !freeQuote ? "mt-12 mb-8" : ""
        } tabletLarge:mx-0`}
      >
        {!showEmailSubmitted ? (
          <form
            action={async (formData) => {
              await sendEmail(formData);
              setShowEmailSubmitted(true);
            }}
            className="flex flex-col gap-8"
          >
            <input type="hidden" name="_gotcha" className="hidden" />
            <input
              type="text"
              name="subject"
              defaultValue={
                pathName === "/"
                  ? "Home page contact form general query"
                  : "Free roof inspection quote query"
              }
              className="hidden"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-500">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="bg-grey placeholder-black/75 border border-black/60 italic px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                />
              </div>
              {!showMessage && !showName ? (
                <Button
                  onClick={() => setShowName(true)}
                  cssClasses="justify-center tablet:w-[135px] tablet:justify-between"
                  form
                  buttonWhite
                >
                  Next
                </Button>
              ) : (
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-500">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Full name"
                    className="bg-grey placeholder-black/75 border border-black/60 italic px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                  />
                </div>
              )}
            </div>
            {!showMessage && showName && (
              <Button
                onClick={() => setShowMessage(true)}
                cssClasses="justify-center tablet:w-[135px] tablet:justify-between"
                form
                buttonWhite
              >
                Next
              </Button>
            )}
            {showMessage && (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-500">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    name="message"
                    placeholder="Type your message here..."
                    className="bg-grey placeholder-black/75 border border-black/60 italic px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                  ></textarea>
                </div>
                <Button
                  cssClasses="justify-center tablet:w-[150px] tablet:justify-between"
                  form
                  buttonWhite
                >
                  Submit
                </Button>
              </>
            )}
          </form>
        ) : (
          <div className="flex flex-col gap-8 py-8">
            <h5 className="font-500 text-white text-heading text-left">
              Thank you for your message!
            </h5>
            <p className="text-white">
              We will get back to you as soon as possible.
            </p>
          </div>
        )}
      </section>
      <ImageContainer
        src="/assets/projects/old-website/20180720_113017.jpg"
        alt="A&I Sheeting - Contact Us"
        width={700}
        height={500}
        tabletLarge={50}
        desktopSmall={40}
        desktop={30}
        cssClasses={classNames(
          `object-cover h-[450px] w-full ${
            freeQuote ? "hidden" : "hidden tabletLarge:block"
          }`,
          {
            "tabletLarge:h-[354px]": showName && !showMessage,
            "tabletLarge:h-[161px]": showMessage && showMessage,
          }
        )}
      />
    </div>
  );
};

export default ContactForm;
