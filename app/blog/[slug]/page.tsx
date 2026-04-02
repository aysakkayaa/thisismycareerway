import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { MDXRemote } from "next-mdx-remote/rsc"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { data, content } = getPostBySlug(slug)

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <a href="/blog" className="text-sm text-gray-400 hover:text-gray-600 mb-8 block">
        ← Posts
      </a>
      <p className="text-sm text-gray-400 mb-2">{data.date}</p>
      <h1 className="text-2xl font-semibold text-gray-900 mb-10">
        {data.title}
      </h1>
      <article className="prose prose-gray max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  )
}