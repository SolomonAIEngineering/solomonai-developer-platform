"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
const blur_fade_1 = __importDefault(require("@/components/magicui/blur-fade"));
const section_1 = __importDefault(require("@/components/section"));
const carousel_1 = require("@/components/ui/carousel");
const image_1 = __importDefault(require("next/image"));
const md_1 = require("react-icons/md");
const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "YouTube",
    "Instagram",
    "Uber",
    "Spotify",
];
function Component() {
    return (<section_1.default title="Testimonial Highlight" subtitle="What our customers are saying">
      <carousel_1.Carousel>
        <div className="max-w-2xl mx-auto">
          <carousel_1.CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (<carousel_1.CarouselItem key={index}>
                <div className="p-1">
                  <div className=" text-center">
                    <md_1.MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto"/>
                    <blur_fade_1.default delay={0.25} inView>
                      <h4 className="text-1xl font-semibold">
                        There is a lot of exciting stuff going on in the stars
                        above us that make astronomy so much fun. The truth is
                        the universe is a constantly changing, moving, some
                        would say “living” thing because you just never know
                        what you are going to see on any given night of
                        stargazing.
                      </h4>
                    </blur_fade_1.default>
                    <blur_fade_1.default delay={0.25 * 2} inView>
                      <div className="mt-8">
                        <image_1.default width={0} height={40} key={index} src={`https://cdn.magicui.design/companies/${companies[index % companies.length]}.svg`} alt={`${companies[index % companies.length]} Logo`} className="mx-auto w-auto h-[40px] grayscale opacity-30"/>
                      </div>
                    </blur_fade_1.default>
                    <div className="">
                      <blur_fade_1.default delay={0.25 * 3} inView>
                        <h4 className="text-1xl font-semibold my-2">
                          Leslie Alexander
                        </h4>
                      </blur_fade_1.default>
                    </div>
                    <blur_fade_1.default delay={0.25 * 4} inView>
                      <div className=" mb-3">
                        <span className="text-sm text-themeDarkGray">
                          UI Designer
                        </span>
                      </div>
                    </blur_fade_1.default>
                  </div>
                </div>
              </carousel_1.CarouselItem>))}
          </carousel_1.CarouselContent>
        </div>
        <div className="md:block hidden">
          <carousel_1.CarouselPrevious />
          <carousel_1.CarouselNext />
        </div>
      </carousel_1.Carousel>
    </section_1.default>);
}
