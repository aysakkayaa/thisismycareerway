export default function PostPage({ params }: { params: { slug: string } }) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16">
        <p className="text-sm text-gray-400 mb-4">/{params.slug}</p>
        <h1 className="text-2xl font-semibold text-gray-900">Yazı başlığı gelecek</h1>
      </main>
    )
  }
  