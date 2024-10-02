"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sitemap;
const blog_1 = require("@/lib/blog");
const headers_1 = require("next/headers");
async function sitemap() {
    const allPosts = await (0, blog_1.getBlogPosts)();
    const headersList = (0, headers_1.headers)();
    let domain = headersList.get("host");
    let protocol = "https";
    return [
        {
            url: `${protocol}://${domain}`,
            lastModified: new Date(),
        },
        ...allPosts.map((post) => ({
            url: `${protocol}://${domain}/blog/${post.slug}`,
            lastModified: new Date(),
        })),
    ];
}
