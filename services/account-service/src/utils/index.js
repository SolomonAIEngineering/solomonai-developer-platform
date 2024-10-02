function queryResultToPost(result) {
  return {
    slug: result.slug,
    body: result.body,
    author: {
      username: result.username,
      name: result.name,
      email: result.email,
    },
  };
}
export async function listPosts(db) {
  const results = await db
    .prepare(`
		SELECT slug, body, username, name, email
		FROM posts
		INNER JOIN users ON posts.author = users.username
		`)
    .all();
  return results.results.map(queryResultToPost);
}
export async function readPost(db, slug) {
  const result = await db
    .prepare(`
		SELECT slug, body, username, name, email
		FROM posts
		INNER JOIN users ON posts.author = users.username
		WHERE slug = ?1
		`)
    .bind(slug)
    .first();
  return result === null ? null : queryResultToPost(result);
}
export async function upsertPost(db, slug, body) {
  await db
    .prepare(`
		INSERT INTO posts (slug, author, body)
		VALUES (?1, ?2, ?3)
		ON CONFLICT (slug) DO UPDATE SET
			author = ?2,
			body = ?3
		`)
    .bind(slug, "admin", body)
    .run();
}
