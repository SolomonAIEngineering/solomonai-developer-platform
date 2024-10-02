"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autoplay = exports.WithSlideNumber = exports.Orientation = exports.Spacing = exports.Sizes = exports.Default = void 0;
const react_1 = require("react");
const embla_carousel_autoplay_1 = __importDefault(require("embla-carousel-autoplay"));
const card_1 = require("@/primitives/card");
const _1 = require(".");
const meta = {
    component: _1.Carousel,
};
exports.default = meta;
exports.Default = {
    render: (args) => (<div className="flex justify-center">
      <_1.Carousel {...args} className="w-full max-w-xs">
        <_1.CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (<_1.CarouselItem key={index}>
              <div className="p-1">
                <card_1.Card>
                  <card_1.CardContent className="flex aspect-[1_/_1] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </card_1.CardContent>
                </card_1.Card>
              </div>
            </_1.CarouselItem>))}
        </_1.CarouselContent>
        <_1.CarouselPrevious />
        <_1.CarouselNext />
      </_1.Carousel>
    </div>),
};
exports.Sizes = {
    render: (args) => (<div className="flex justify-center">
      <_1.Carousel {...args} opts={{
            align: "start",
        }} className="w-full max-w-sm">
        <_1.CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (<_1.CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <card_1.Card>
                  <card_1.CardContent className="flex aspect-[1_/_1] items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </card_1.CardContent>
                </card_1.Card>
              </div>
            </_1.CarouselItem>))}
        </_1.CarouselContent>
        <_1.CarouselPrevious />
        <_1.CarouselNext />
      </_1.Carousel>
    </div>),
};
exports.Spacing = {
    render: (args) => (<div className="flex justify-center">
      <_1.Carousel {...args} className="w-full max-w-sm">
        <_1.CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (<_1.CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <card_1.Card>
                  <card_1.CardContent className="flex aspect-[1_/_1] items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </card_1.CardContent>
                </card_1.Card>
              </div>
            </_1.CarouselItem>))}
        </_1.CarouselContent>
        <_1.CarouselPrevious />
        <_1.CarouselNext />
      </_1.Carousel>
    </div>),
};
exports.Orientation = {
    render: (args) => (<div className="flex justify-center pt-12">
      <_1.Carousel {...args} opts={{
            align: "start",
        }} orientation="vertical" className="w-full max-w-xs">
        <_1.CarouselContent className="-mt-1 h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (<_1.CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <card_1.Card>
                  <card_1.CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </card_1.CardContent>
                </card_1.Card>
              </div>
            </_1.CarouselItem>))}
        </_1.CarouselContent>
        <_1.CarouselPrevious />
        <_1.CarouselNext />
      </_1.Carousel>
    </div>),
};
const WithSlideNumberExample = (props) => {
    const [api, setApi] = (0, react_1.useState)();
    const [current, setCurrent] = (0, react_1.useState)(0);
    const [count, setCount] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (<div>
      <div className="flex justify-center">
        <_1.Carousel {...props} setApi={setApi} className="w-full max-w-xs">
          <_1.CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (<_1.CarouselItem key={index}>
                <card_1.Card>
                  <card_1.CardContent className="flex aspect-[1_/_1] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </card_1.CardContent>
                </card_1.Card>
              </_1.CarouselItem>))}
          </_1.CarouselContent>
          <_1.CarouselPrevious />
          <_1.CarouselNext />
        </_1.Carousel>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>);
};
exports.WithSlideNumber = {
    render: (args) => <WithSlideNumberExample {...args}/>,
};
exports.Autoplay = {
    render: (args) => (<div className="flex justify-center">
      <_1.Carousel {...args} plugins={[(0, embla_carousel_autoplay_1.default)({ delay: 2000, stopOnInteraction: true })]} className="w-full max-w-xs">
        <_1.CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (<_1.CarouselItem key={index}>
              <div className="p-1">
                <card_1.Card>
                  <card_1.CardContent className="flex aspect-[1_/_1] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </card_1.CardContent>
                </card_1.Card>
              </div>
            </_1.CarouselItem>))}
        </_1.CarouselContent>
        <_1.CarouselPrevious />
        <_1.CarouselNext />
      </_1.Carousel>
    </div>),
};
