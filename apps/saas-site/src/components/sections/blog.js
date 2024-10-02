"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogSection;
const blog_card_1 = __importDefault(require("@/components/blog-card"));
const section_1 = __importDefault(require("@/components/section"));
const blog_1 = require("@/lib/blog");
async function BlogSection() {
    const allPosts = await (0, blog_1.getBlogPosts)();
    const articles = await Promise.all(allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)));
    return (<section_1.default title="Blog" subtitle="Latest Articles">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((data, idx) => (<blog_card_1.default key={data.slug} data={data} priority={idx <= 1}/>))}
      </div>
    </section_1.default>);
}
