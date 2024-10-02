"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const accordion_1 = require("./accordion");
const meta = {
    component: () => (<accordion_1.Accordion type="single" collapsible className="w-full max-w-[500px]">
      <accordion_1.AccordionItem value="item-1">
        <accordion_1.AccordionTrigger>Is it accessible?</accordion_1.AccordionTrigger>
        <accordion_1.AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </accordion_1.AccordionContent>
      </accordion_1.AccordionItem>
      <accordion_1.AccordionItem value="item-2">
        <accordion_1.AccordionTrigger>Is it styled?</accordion_1.AccordionTrigger>
        <accordion_1.AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </accordion_1.AccordionContent>
      </accordion_1.AccordionItem>
      <accordion_1.AccordionItem value="item-3">
        <accordion_1.AccordionTrigger>Is it animated?</accordion_1.AccordionTrigger>
        <accordion_1.AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </accordion_1.AccordionContent>
      </accordion_1.AccordionItem>
    </accordion_1.Accordion>),
};
exports.default = meta;
exports.Default = {};
