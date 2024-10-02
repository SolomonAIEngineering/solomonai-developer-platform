"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturebaseIntegration = void 0;
const react_1 = __importDefault(require("react"));
const script_1 = __importDefault(require("next/script"));
/**
 * Initializes the Featurebase function on the global window object.
 */
const initFeaturebase = () => {
    if (typeof window.Featurebase !== "function") {
        window.Featurebase = function () {
            (window.Featurebase.q = window.Featurebase.q || []).push(arguments);
        };
    }
};
/**
 * Identifies a user with Featurebase.
 *
 * @param organization - The organization's identifier
 * @param user - The user to be identified
 * @param callback - Optional callback function to be called after identification
 */
const identifyUser = (organization, user, callback) => {
    window.Featurebase("identify", {
        organization,
        ...user,
    }, callback);
};
/**
 * A component that integrates Featurebase into a React application.
 *
 * This component loads the Featurebase SDK and identifies the user.
 *
 * @example
 * ```tsx
 * <FeaturebaseIntegration
 *   organization="your-org"
 *   user={{
 *     email: "user@example.com",
 *     name: "John Doe",
 *     id: "123",
 *     profilePicture: "https://example.com/profile.jpg"
 *   }}
 *   onIdentifyComplete={(error) => {
 *     if (error) console.error(error);
 *     else console.log("Identification successful");
 *   }}
 * />
 * ```
 */
const FeaturebaseIntegration = ({ organization, user, onIdentifyComplete, }) => {
    react_1.default.useEffect(() => {
        initFeaturebase();
        identifyUser(organization, user, (err) => {
            if (err) {
                console.error("Featurebase identification failed:", err);
            }
            else {
                console.log("Featurebase identification successful");
            }
            onIdentifyComplete?.(err);
        });
    }, [organization, user, onIdentifyComplete]);
    return (<script_1.default src="https://do.featurebase.app/js/sdk.js" id="featurebase-sdk" strategy="afterInteractive"/>);
};
exports.FeaturebaseIntegration = FeaturebaseIntegration;
