import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "posts")

export function getAllPosts() {
  const files = fs.readdirSync(postsDir)
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "")
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8")
      const { data } = matter(raw)
      return { slug, ...data } as {
        slug: string
        title: string
        date: string
        summary: string
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf-8")
  const { data, content } = matter(raw)
  return { data, content }
}