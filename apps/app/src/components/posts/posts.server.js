"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsServer = PostsServer;
const queries_1 = require("@v1/supabase/queries");
async function PostsServer() {
    const posts = await (0, queries_1.getPostsQuery)();
    return (<div>
      {posts?.map((post) => (<div key={post.id}>{post.title}</div>))}
    </div>);
}
