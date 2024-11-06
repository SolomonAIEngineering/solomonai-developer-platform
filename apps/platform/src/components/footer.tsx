import { default as Link, default as NextLink } from "next/link";
import Discord from "./icons/discoord";
import Github from "./icons/github";
import Twitter from "./icons/twitter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex h-14 w-full max-w-screen-xl items-end justify-between px-4 sm:px-6 md:flex-row lg:px-8">
      <div className="flex flex-col space-y-2 py-4">
        <div className="flex space-x-5">
          <NextLink
            href="https://twitter.com/solomonai"
            className="text-scale-900 hover:text-scale-1200 transition"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="hover:text-brand-500 h-7 w-7" />
          </NextLink>

          <NextLink
            href="https://github.com/SolomonAIEngineering/solomonai/tree/main"
            className="text-scale-900 hover:text-scale-1200 transition"
          >
            <span className="sr-only">GitHub</span>
            <Github className="hover:text-brand-500 h-6 w-6" />
          </NextLink>
        </div>
        <span className="flex flex-col gap-1 md:flex-row">
          <small className="small">&copy; {currentYear} Solomon AI</small>
          <small className="small">All rights reserved.</small>
        </span>
      </div>
      {/* <div className="py-4">
        <small className="small">
          <span className="text-green-500 font-bold">Solomon AI</span>  |{" "}
          <Link href="/https://solomon-ai.app">Platform </Link>{" "}
        </small>
      </div> */}
      <div className="hidden gap-x-2.5 py-4 md:flex md:flex-row">
        <NextLink href="https://solomon-ai.app/privacy">
          <small className="small">Privacy policy</small>
        </NextLink>
        <span className="text-black">·</span>
        <NextLink href="https://solomon-ai.app/terms-of-service">
          <small className="small">Terms of service</small>
        </NextLink>
      </div>
    </footer>
  );
};

export default Footer;
