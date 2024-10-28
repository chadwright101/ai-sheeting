"use server";

import data from "@/app/_data/page-data.json";

export async function showEmailAddress() {
  return data.homePage.contactUs.email;
}

export async function showPhoneNumbers() {
  return {
    phone1: data.homePage.contactUs.phone1,
    phone2: data.homePage.contactUs.phone2,
  };
}

export async function getConfigData() {
  return {
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
      from: process.env.SMTP_SEND_FROM,
      to: process.env.SMTP_SEND_TO,
      secure: process.env.SMTP_SECURE,
      requireTls: process.env.SMTP_REQUIRE_TLS,
    },
    bearerToken: process.env.BEARER_TOKEN,
    apiEndpoint: process.env.API_ENDPOINT,
  };
}
