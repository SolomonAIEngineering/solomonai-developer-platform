"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogCard;
const utils_1 = require("@/lib/utils");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
function BlogCard({ data, priority, }) {
    return (<link_1.default href={`/blog/${data.slug}`} className="block">
      <div className="bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200">
        {data.image && (<image_1.default className="rounded-t-lg object-cover border" src={data.image} width={1200} height={630} alt={data.title} priority={priority}/>)}
        {!data.image && <div className="bg-gray-200 h-[180px] mb-4 rounded"/>}
        <p className="mb-2">
          <time dateTime={data.publishedAt} className="text-sm text-muted-foreground">
            {(0, utils_1.formatDate)(data.publishedAt)}
          </time>
        </p>
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-foreground mb-4">{data.summary}</p>
      </div>
    </link_1.default>);
}
