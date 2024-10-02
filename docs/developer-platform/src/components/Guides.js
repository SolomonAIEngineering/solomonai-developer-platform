"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guides = Guides;
const Button_1 = require("@/components/Button");
const Heading_1 = require("@/components/Heading");
const guides = [
  {
    href: "/authentication",
    name: "Authentication",
    description: "Learn how to authenticate your API requests.",
  },
  {
    href: "/pagination",
    name: "Pagination",
    description: "Understand how to work with paginated responses.",
  },
  {
    href: "/errors",
    name: "Errors",
    description:
      "Read about the different types of errors returned by the API.",
  },
  {
    href: "/webhooks",
    name: "Webhooks",
    description:
      "Learn how to programmatically configure webhooks for your app.",
  },
  {
    href: "/use-cases/medical-practices",
    name: "Guide - Medical Practices",
    description:
      "Learn about the different tools we provide medical practices available in the API.",
  },
];
function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading_1.Heading level={2} id="guides">
        Guides
      </Heading_1.Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button_1.Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button_1.Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
