import { NavBarType, SiteMeta } from "@/types";

export const siteMeta: SiteMeta = {
  title: "Solomon AI: Developer Platform",
  templateTitle: "Solomon AI",
  description:
    "Providing the right tools for the often overlooked needs of brick-and-mortar businesses and seasonal operations.",
  url: "https://solomon-ai.app",
  links: {
    twitter: "https://twitter.com/solomonai",
    github: "https://github.com/SolomonAIEngineering/solomonai/tree/main",
  },
};

export const navBarItems: NavBarType = [
  {
    title: "Blog",
    href: "https://solomon-ai.app/blog",
    transitionDelay: "150ms",
  },
  {
    title: "Changelog",
    href: "https://solomon-ai.app/changelog",
    transitionDelay: "200ms",
  },
  {
    title: "GitHub",
    href: "https://github.com/SolomonAIEngineering/solomonai/tree/main",
    transitionDelay: "225ms",
  },
];
