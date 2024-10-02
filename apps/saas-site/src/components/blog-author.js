"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Author;
const utils_1 = require("@/lib/utils");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
function Author({ name, image, twitterUsername, updatedAt, imageOnly, }) {
    if (imageOnly) {
        return (<image_1.default src={image} alt={name} width={36} height={36} className="rounded-full transition-all group-hover:brightness-90"/>);
    }
    if (updatedAt) {
        return (<div className="flex items-center space-x-3">
        <image_1.default src={image} alt={name} width={36} height={36} className="rounded-full"/>
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">Written by {name}</p>
          <time dateTime={updatedAt} className="text-sm font-light text-gray-400">
            Last updated {(0, utils_1.formatDate)(updatedAt)}
          </time>
        </div>
      </div>);
    }
    return (<link_1.default href={`https://twitter.com/${twitterUsername}`} className="group flex items-center space-x-3" target="_blank" rel="noopener noreferrer">
      <image_1.default src={image} alt={name} width={40} height={40} className="rounded-full transition-all group-hover:brightness-90"/>
      <div className="flex flex-col">
        <p className="font-semibold text-gray-700">{name}</p>
        <p className="text-sm text-gray-500">@{twitterUsername}</p>
      </div>
    </link_1.default>);
}
