import { getAllPosts } from "@/lib/posts"

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold text-gray-900 mb-10">Posts</h1>
      <div className="divide-y divide-gray-100">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block py-6 group"
          >
            <p className="text-sm text-gray-400 mb-1">{post.date}</p>
            <h2 className="text-base font-medium text-gray-900 group-hover:text-blue-600 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">{post.summary}</p>
          </a>
        ))}
      </div>
    </main>
  )
}