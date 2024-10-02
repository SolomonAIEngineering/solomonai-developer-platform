"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntercomScript = void 0;
const react_1 = __importDefault(require("react"));
const script_1 = __importDefault(require("next/script"));
/**
 * A component that initializes Intercom settings using Next.js Script component.
 *
 * This component should be placed in your layout file or any other file that's
 * rendered on every page where you want Intercom to be available.
 *
 * @component
 * @param {IntercomScriptProps} props - The props for the component.
 * @returns {JSX.Element} A Next.js Script component that initializes Intercom.
 *
 * @example
 * ```tsx
 * import { IntercomScript } from '@/lib/IntercomScript';
 *
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       {children}
 *       <IntercomScript appId="your-intercom-app-id" />
 *     </>
 *   );
 * }
 * ```
 */
const IntercomScript = ({ appId }) => (
  <script_1.default
    strategy="afterInteractive"
    id="intercom-settings"
    dangerouslySetInnerHTML={{
      __html: `
        window.intercomSettings = {
          api_base: "https://api-iam.intercom.io",
          app_id: "${appId}",
        };
      `,
    }}
  />
);
exports.IntercomScript = IntercomScript;
