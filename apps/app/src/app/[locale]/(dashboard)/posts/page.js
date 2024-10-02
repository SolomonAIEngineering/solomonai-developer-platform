"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Page;
const posts_loading_1 = require("@/components/posts/posts.loading");
const posts_server_1 = require("@/components/posts/posts.server");
const react_1 = require("react");
exports.metadata = {
    title: "Posts",
};
function Page() {
    return (<react_1.Suspense fallback={<posts_loading_1.PostsLoading />}>
      <posts_server_1.PostsServer />
    </react_1.Suspense>);
}
