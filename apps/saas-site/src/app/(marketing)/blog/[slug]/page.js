"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMetadata = generateMetadata;
exports.default = Blog;
const blog_author_1 = __importDefault(require("@/components/blog-author"));
const cta_1 = __importDefault(require("@/components/sections/cta"));
const blog_1 = require("@/lib/blog");
const config_1 = require("@/lib/config");
const utils_1 = require("@/lib/utils");
const image_1 = __importDefault(require("next/image"));
const navigation_1 = require("next/navigation");
const react_1 = require("react");
async function generateMetadata({ params }) {
  let post = await (0, blog_1.getPost)(params.slug);
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${config_1.siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
async function Blog({ params }) {
  let post = await (0, blog_1.getPost)(params.slug);
  if (!post) {
    (0, navigation_1.notFound)();
  }
  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${config_1.siteConfig.url}${post.metadata.image}`
              : `${config_1.siteConfig.url}/blog/${post.slug}/opengraph-image`,
            url: `${config_1.siteConfig.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: config_1.siteConfig.name,
            },
          }),
        }}
      />
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 space-y-4 my-12">
        <react_1.Suspense
          fallback={
            <div className="mb-8 w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
          }
        >
          {post.metadata.image && (
            <div className="mb-8">
              <image_1.default
                width={1920}
                height={1080}
                src={post.metadata.image}
                alt={post.metadata.title}
                className="w-full h-auto rounded-lg border shadow-md"
              />
            </div>
          )}
        </react_1.Suspense>
        <div className="flex flex-col">
          <h1 className="title font-medium text-3xl tracking-tighter">
            {post.metadata.title}
          </h1>
        </div>
        <div className="flex justify-between items-center text-sm">
          <react_1.Suspense fallback={<p className="h-5" />}>
            <div className="flex items-center space-x-2">
              <time
                dateTime={post.metadata.publishedAt}
                className="text-sm text-gray-500"
              >
                {(0, utils_1.formatDate)(post.metadata.publishedAt)}
              </time>
            </div>
          </react_1.Suspense>
        </div>
        <div className="flex items-center space-x-2">
          <blog_author_1.default
            twitterUsername={post.metadata.author}
            name={post.metadata.author}
            image={"/author.jpg"}
          />
        </div>
        <article
          className="prose dark:prose-invert mx-auto max-w-full"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </div>
      <cta_1.default />
    </section>
  );
}
