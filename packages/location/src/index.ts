import { headers } from "next/headers";

import countries from "./countries.json";
import flags from "./country-flag";
import { EU_COUNTRY_CODES } from "./eu-countries";
import timezones from "./timezones.json";

export function getCountryCode() {
  return headers().get("x-vercel-ip-country") || "US";
}

export function getTimezone() {
  return headers().get("x-vercel-ip-timezone") || "Europe/Berlin";
}

export function getTimezones() {
  return timezones;
}

export function getCountryInfo() {
  const country = getCountryCode();

  const countryInfo = countries.find((x) => x.cca2 === country);

  const currencyCode =
    countryInfo?.currencies && Object.keys(countryInfo.currencies)[0];
  const currency =
    currencyCode &&
    countryInfo?.currencies &&
    currencyCode in countryInfo.currencies
      ? countryInfo.currencies[
          currencyCode as keyof typeof countryInfo.currencies
        ]
      : undefined;
  const languages =
    countryInfo && Object.values(countryInfo.languages).join(", ");

  return {
    currencyCode,
    currency,
    languages,
  };
}

export function isEU() {
  const countryCode = headers().get("x-vercel-ip-country");

  if (countryCode && EU_COUNTRY_CODES.includes(countryCode)) {
    return true;
  }

  return false;
}

export function getCountry() {
  const country = getCountryCode();

  return flags[country as keyof typeof flags];
}
