"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownToHTML = markdownToHTML;
exports.getPost = getPost;
exports.getBlogPosts = getBlogPosts;
const config_1 = require("@/lib/config");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rehype_pretty_code_1 = __importDefault(require("rehype-pretty-code"));
const rehype_stringify_1 = __importDefault(require("rehype-stringify"));
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const remark_parse_1 = __importDefault(require("remark-parse"));
const remark_rehype_1 = __importDefault(require("remark-rehype"));
const unified_1 = require("unified");
function parseFrontmatter(fileContent) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match[1];
    let content = fileContent.replace(frontmatterRegex, "").trim();
    let frontMatterLines = frontMatterBlock.trim().split("\n");
    let metadata = {};
    frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(": ");
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
        metadata[key.trim()] = value;
    });
    return { data: metadata, content };
}
function getMDXFiles(dir) {
    return fs_1.default.readdirSync(dir).filter((file) => path_1.default.extname(file) === ".mdx");
}
async function markdownToHTML(markdown) {
    const p = await (0, unified_1.unified)()
        .use(remark_parse_1.default)
        .use(remark_gfm_1.default)
        .use(remark_rehype_1.default)
        .use(rehype_pretty_code_1.default, {
        // https://rehype-pretty.pages.dev/#usage
        theme: {
            light: "min-light",
            dark: "min-dark",
        },
        keepBackground: false,
    })
        .use(rehype_stringify_1.default)
        .process(markdown);
    return p.toString();
}
async function getPost(slug) {
    const filePath = path_1.default.join("content", `${slug}.mdx`);
    const source = fs_1.default.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = parseFrontmatter(source);
    const content = await markdownToHTML(rawContent);
    const defaultImage = `${config_1.siteConfig.url}/og?title=${encodeURIComponent(metadata.title)}`;
    return {
        source: content,
        metadata: {
            ...metadata,
            image: metadata.image || defaultImage,
        },
        slug,
    };
}
async function getAllPosts(dir) {
    const mdxFiles = getMDXFiles(dir);
    return Promise.all(mdxFiles.map(async (file) => {
        const slug = path_1.default.basename(file, path_1.default.extname(file));
        const { metadata, source } = await getPost(slug);
        return {
            ...metadata,
            slug,
            source,
        };
    }));
}
async function getBlogPosts() {
    return getAllPosts(path_1.default.join(process.cwd(), "content"));
}
