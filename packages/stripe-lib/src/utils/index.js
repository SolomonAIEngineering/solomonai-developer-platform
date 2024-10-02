"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTrialEndUnixTimestamp = exports.postData = exports.getErrorRedirect = exports.getStatusRedirect = void 0;
exports.getURL = getURL;
const toastKeyMap = {
    status: ['status', 'status_description'],
    error: ['error', 'error_description'],
};
/**
 * Generates a redirect URL with toast parameters.
 *
 * @param path - The base path for the redirect URL.
 * @param toastType - The type of toast ('status' or 'error').
 * @param toastName - The name or title of the toast message.
 * @param toastDescription - Optional description for the toast message.
 * @param disableButton - Optional flag to disable a button in the UI.
 * @param arbitraryParams - Optional string of additional URL parameters.
 * @returns A formatted redirect URL with toast parameters.
 */
const getToastRedirect = (path, toastType, toastName, toastDescription = '', disableButton = false, arbitraryParams = '') => {
    const [nameKey, descriptionKey] = toastKeyMap[toastType] || [];
    let redirectPath = `${path}?${nameKey}=${encodeURIComponent(toastName)}`;
    if (toastDescription) {
        redirectPath += `&${descriptionKey}=${encodeURIComponent(toastDescription)}`;
    }
    if (disableButton) {
        redirectPath += `&disable_button=true`;
    }
    if (arbitraryParams) {
        redirectPath += `&${arbitraryParams}`;
    }
    return redirectPath;
};
/**
 * Generates a redirect URL with status toast parameters.
 *
 * @param path - The base path for the redirect URL.
 * @param statusName - The name or title of the status message.
 * @param statusDescription - Optional description for the status message.
 * @param disableButton - Optional flag to disable a button in the UI.
 * @param arbitraryParams - Optional string of additional URL parameters.
 * @returns A formatted redirect URL with status toast parameters.
 */
const getStatusRedirect = (path, statusName, statusDescription = '', disableButton = false, arbitraryParams = '') => getToastRedirect(path, 'status', statusName, statusDescription, disableButton, arbitraryParams);
exports.getStatusRedirect = getStatusRedirect;
/**
 * Generates a redirect URL with error toast parameters.
 *
 * @param path - The base path for the redirect URL.
 * @param errorName - The name or title of the error message.
 * @param errorDescription - Optional description for the error message.
 * @param disableButton - Optional flag to disable a button in the UI.
 * @param arbitraryParams - Optional string of additional URL parameters.
 * @returns A formatted redirect URL with error toast parameters.
 */
const getErrorRedirect = (path, errorName, errorDescription = '', disableButton = false, arbitraryParams = '') => getToastRedirect(path, 'error', errorName, errorDescription, disableButton, arbitraryParams);
exports.getErrorRedirect = getErrorRedirect;
/**
 * Constructs a complete URL based on environment variables and the provided path.
 *
 * @param path - Optional path to append to the base URL. Defaults to an empty string.
 * @returns A complete URL string.
 */
function getURL(path = '') {
    // Try to get the site URL from environment variables, trimming any whitespace
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    // If SITE_URL is not set, try to get the Vercel URL (automatically set by Vercel)
    const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL?.trim();
    // Use the first non-empty URL, or default to localhost if none are set
    let baseUrl = siteUrl || vercelUrl || 'localhost:3001';
    // Remove any existing protocol (http:// or https://) from the baseUrl
    baseUrl = baseUrl.replace(/^(https?:\/\/)/, '');
    // Remove any trailing slashes from the base URL
    baseUrl = baseUrl.replace(/\/+$/, '');
    // Add the appropriate protocol only if it's not already present
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
        baseUrl = baseUrl.startsWith('localhost')
            ? `http://${baseUrl}`
            : `https://${baseUrl}`;
    }
    // Remove any leading slashes from the path to avoid double slashes
    const cleanPath = path.replace(/^\/+/, '');
    // If there's a path, append it to the base URL; otherwise, just return the base URL
    return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}
/**
 * Sends a POST request to the specified URL with the provided data.
 *
 * @template T - Type extending Database
 * @param options - An object containing the URL and optional data to send.
 * @param options.url - The URL to send the POST request to.
 * @param options.data - Optional data object containing price information.
 * @returns A promise that resolves with the JSON response from the server.
 */
const postData = async ({ url, data, }) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(data),
    });
    return res.json();
};
exports.postData = postData;
/**
 * Calculates the Unix timestamp for the end of a trial period.
 *
 * @param trialPeriodDays - The number of days for the trial period.
 * @returns The Unix timestamp (in seconds) for the end of the trial period, or undefined if the input is invalid.
 */
const calculateTrialEndUnixTimestamp = (trialPeriodDays) => {
    // Check if trialPeriodDays is null, undefined, or less than 2 days
    if (trialPeriodDays === null ||
        trialPeriodDays === undefined ||
        trialPeriodDays < 2) {
        return undefined;
    }
    const currentDate = new Date(); // Current date and time
    const trialEnd = new Date(currentDate.getTime() + (trialPeriodDays + 1) * 24 * 60 * 60 * 1000); // Add trial days
    return Math.floor(trialEnd.getTime() / 1000); // Convert to Unix timestamp in seconds
};
exports.calculateTrialEndUnixTimestamp = calculateTrialEndUnixTimestamp;
