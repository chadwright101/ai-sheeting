import Link from "next/link";

import { useGlobalContext } from "../utils/global-context";

import pageData from "../../data/page-data.json";

interface Props {
  cssClasses?: string;
}

const {
  homePage: {
    contactUs: { phone1, phone1Display, phone2, phone2Display, email, address },
  },
} = pageData;

const ContactInfo = ({ cssClasses }: Props) => {
  const {
    showPhone1,
    setShowPhone1,
    showPhone2,
    setShowPhone2,
    showEmail,
    setShowEmail,
  } = useGlobalContext();

  return (
    <div className={`grid gap-10 ${cssClasses}`}>
      <h2 className="tabletLarge:text-left">Contact Us</h2>
      <ul className="flex flex-col gap-7 tabletLarge:gap-4 m-0">
        <li className="grid grid-cols-[110px_1fr]">
          <p className="font-500">Phone:</p>
          {!showPhone1 && (
            <p
              className="italic p-3 -m-3 text-linkBlue tabletLarge:hover:cursor-pointer tabletLarge:hover:text-orange tabletLarge:p-0 tabletLarge:m-0"
              onClick={() => setShowPhone1(true)}
            >
              Show phone number
            </p>
          )}
          {showPhone1 && (
            <Link
              href={`tel:${phone1}`}
              className="p-3 -m-3 tabletLarge:p-0 tabletLarge:m-0"
            >
              {phone1Display}
            </Link>
          )}
        </li>
        <li className="grid grid-cols-[110px_1fr]">
          <p className="font-500">Alt. Phone:</p>
          {!showPhone2 && (
            <p
              className="italic p-3 -m-3 text-linkBlue tabletLarge:hover:cursor-pointer tabletLarge:hover:text-orange tabletLarge:p-0 tabletLarge:m-0"
              onClick={() => setShowPhone2(true)}
            >
              Show phone number
            </p>
          )}
          {showPhone2 && (
            <Link
              href={`tel:${phone2}`}
              className="p-3 -m-3 tabletLarge:p-0 tabletLarge:m-0"
            >
              {phone2Display}
            </Link>
          )}
        </li>

        <li className="grid grid-cols-[110px_1fr]">
          <p className="font-500">Email:</p>
          {!showEmail && (
            <p
              className="italic p-3 -m-3 text-linkBlue tabletLarge:hover:cursor-pointer tabletLarge:hover:text-orange tabletLarge:p-0 tabletLarge:m-0"
              onClick={() => setShowEmail(true)}
            >
              Show email address
            </p>
          )}
          {showEmail && (
            <Link
              href={`mailto:${email}`}
              className="p-3 -m-3 tabletLarge:p-0 tabletLarge:m-0"
            >
              {email}
            </Link>
          )}
        </li>

        <li className="grid grid-cols-[110px_1fr]">
          <p className="font-500">Address:</p>
          <address className="text-left">{address}</address>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
