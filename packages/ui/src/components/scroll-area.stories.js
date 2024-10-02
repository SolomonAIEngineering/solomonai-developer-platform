"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalScrolling = exports.Default = void 0;
const separator_1 = require("@/primitives/separator");
const _1 = require(".");
const meta = {
    component: _1.ScrollArea,
    argTypes: {
        asChild: { control: { disable: true } },
    },
};
exports.default = meta;
const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${String(a.length - i)}`);
exports.Default = {
    render: (args) => (<_1.ScrollArea {...args} className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (<>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <separator_1.Separator className="my-2"/>
          </>))}
      </div>
    </_1.ScrollArea>),
};
const works = [
    {
        artist: "Ornella Binni",
        art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
];
exports.HorizontalScrolling = {
    render: (args) => (<_1.ScrollArea {...args} className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (<figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img src={artwork.art} alt={`By ${artwork.artist}`} className="aspect-[3/4] size-fit object-cover" width={300} height={400}/>
            </div>
            <figcaption className="pt-2 text-xs text-gray-11">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>))}
      </div>
      <_1.ScrollBar orientation="horizontal"/>
    </_1.ScrollArea>),
};