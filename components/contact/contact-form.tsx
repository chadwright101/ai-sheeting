import { useState } from "react";
import Button from "../button";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className={`${cssClasses}`}>
      <p className="mb-6 italic">
        Please fill out the form below and we&apos;ll get back to you ASAP...
      </p>
      <section className="bg-orange -mx-5 py-14 px-8 tabletLarge:mx-0">
        <form action="" method="POST" className="flex flex-col gap-8">
          <input type="hidden" name="_gotcha" className="hidden" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-500">
                Email:
              </label>
              <input
                type="text"
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
                  placeholder="Type your message
        here..."
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
      </section>
    </div>
  );
};

export default ContactForm;
