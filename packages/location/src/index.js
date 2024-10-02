"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryCode = getCountryCode;
exports.getTimezone = getTimezone;
exports.getTimezones = getTimezones;
exports.getCountryInfo = getCountryInfo;
exports.isEU = isEU;
exports.getCountry = getCountry;
const headers_1 = require("next/headers");
const countries_json_1 = __importDefault(require("./countries.json"));
const country_flag_1 = __importDefault(require("./country-flag"));
const eu_countries_1 = require("./eu-countries");
const timezones_json_1 = __importDefault(require("./timezones.json"));
function getCountryCode() {
    return (0, headers_1.headers)().get('x-vercel-ip-country') || 'US';
}
function getTimezone() {
    return (0, headers_1.headers)().get('x-vercel-ip-timezone') || 'Europe/Berlin';
}
function getTimezones() {
    return timezones_json_1.default;
}
function getCountryInfo() {
    const country = getCountryCode();
    const countryInfo = countries_json_1.default.find((x) => x.cca2 === country);
    const currencyCode = countryInfo && Object.keys(countryInfo.currencies)?.at(0);
    const currency = countryInfo?.currencies[currencyCode];
    const languages = countryInfo && Object.values(countryInfo.languages).join(', ');
    return {
        currencyCode,
        currency,
        languages,
    };
}
function isEU() {
    const countryCode = (0, headers_1.headers)().get('x-vercel-ip-country');
    if (countryCode && eu_countries_1.EU_COUNTRY_CODES.includes(countryCode)) {
        return true;
    }
    return false;
}
function getCountry() {
    const country = getCountryCode();
    return country_flag_1.default[country];
}
