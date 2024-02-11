"use client";

import Link from "next/link";
import { useState } from "react";

import { useGlobalContext } from "../utils/global-context";

import pageData from "../../data/page-data.json";
import { showEmailAddress, showPhoneNumbers } from "@/app/actions";

interface Props {
  cssClasses?: string;
}

const {
  homePage: {
    contactUs: { address },
  },
} = pageData;

const ContactInfo = ({ cssClasses }: Props) => {
  const [showPhone1, setShowPhone1] = useState("");
  const [showPhone2, setShowPhone2] = useState("");
  const [showEmail, setShowEmail] = useState("");

  return (
    <div className={`grid gap-10 ${cssClasses}`}>
      <h2 className="tabletLarge:text-left">Contact Us</h2>
      <ul className="flex flex-col gap-7 tabletLarge:gap-4 m-0">
        <li className="grid grid-cols-[110px_1fr]">
          <p className="font-500">Phone:</p>
          {!showPhone1 ? (
            <p
              className="italic p-3 -m-3 text-linkBlue tabletLarge:hover:cursor-pointer tabletLarge:hover:text-orange tabletLarge:p-0 tabletLarge:m-0"
              onClick={async () => {
                const data = await showPhoneNumbers();
                setShowPhone1(data.phone1);
              }}
            >
              Show phone number
            </p>
          ) : (
            <Link
              href={`tel:${showPhone1}`}
              className="p-3 -m-3 tabletLarge:p-0 tabletLarge:m-0"
            >
              {showPhone1}
            </Link>
          )}
        </li>
        <li className="grid grid-cols-[110px_1fr]">
          <p className="font-500">Alt. Phone:</p>
          {!showPhone2 ? (
            <p
              className="italic p-3 -m-3 text-linkBlue tabletLarge:hover:cursor-pointer tabletLarge:hover:text-orange tabletLarge:p-0 tabletLarge:m-0"
              onClick={async () => {
                const data = await showPhoneNumbers();
                setShowPhone2(data.phone2);
              }}
            >
              Show phone number
            </p>
          ) : (
            <Link
              href={`tel:${showPhone2}`}
              className="p-3 -m-3 tabletLarge:p-0 tabletLarge:m-0"
            >
              {showPhone2}
            </Link>
          )}
        </li>

        <li className="grid grid-cols-[110px_1fr]">
          <p className="font-500">Email:</p>
          {!showEmail ? (
            <p
              className="italic p-3 -m-3 text-linkBlue tabletLarge:hover:cursor-pointer tabletLarge:hover:text-orange tabletLarge:p-0 tabletLarge:m-0"
              onClick={async () => {
                const email = await showEmailAddress();
                setShowEmail(email);
              }}
            >
              Show email address
            </p>
          ) : (
            <Link
              href={`mailto:${showEmail}`}
              className="p-3 -m-3 tabletLarge:p-0 tabletLarge:m-0"
            >
              {showEmail}
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
