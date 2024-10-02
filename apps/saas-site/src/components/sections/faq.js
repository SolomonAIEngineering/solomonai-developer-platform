"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FAQ;
const section_1 = __importDefault(require("@/components/section"));
const accordion_1 = require("@/components/ui/accordion");
const config_1 = require("@/lib/config");
function FAQ() {
    return (<section_1.default title="FAQ" subtitle="Frequently asked questions">
      <div className="mx-auto my-12 md:max-w-[800px]">
        <accordion_1.Accordion type="single" collapsible className="flex w-full flex-col items-center justify-center space-y-2">
          {config_1.siteConfig.faqs.map((faq, idx) => (<accordion_1.AccordionItem key={idx} value={faq.question} className="w-full border rounded-lg overflow-hidden">
              <accordion_1.AccordionTrigger className="px-4">
                {faq.question}
              </accordion_1.AccordionTrigger>
              <accordion_1.AccordionContent className="px-4">{faq.answer}</accordion_1.AccordionContent>
            </accordion_1.AccordionItem>))}
        </accordion_1.Accordion>
      </div>
      <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
        Still have questions? Email us at{" "}
        <a href={`mailto:${config_1.siteConfig.links.email}`} className="underline">
          {config_1.siteConfig.links.email}
        </a>
      </h4>
    </section_1.default>);
}
