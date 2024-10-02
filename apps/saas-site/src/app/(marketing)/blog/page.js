"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Blog;
const blog_card_1 = __importDefault(require("@/components/blog-card"));
const blog_1 = require("@/lib/blog");
const config_1 = require("@/lib/config");
const utils_1 = require("@/lib/utils");
exports.metadata = (0, utils_1.constructMetadata)({
    title: "Blog",
    description: `Latest news and updates from ${config_1.siteConfig.name}.`,
});
async function Blog() {
    const allPosts = await (0, blog_1.getBlogPosts)();
    const articles = await Promise.all(allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)));
    return (<>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 mt-24">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Articles
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Latest news and updates from {config_1.siteConfig.name}
          </p>
        </div>
      </div>
      <div className="min-h-[50vh] bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg">
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-2.5 py-10 lg:px-20 lg:grid-cols-3">
          {articles.map((data, idx) => (<blog_card_1.default key={data.slug} data={data} priority={idx <= 1}/>))}
        </div>
      </div>
    </>);
}
