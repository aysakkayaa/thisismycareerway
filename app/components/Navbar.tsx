export default function Navbar() {
    return (
      <nav className="border-b border-gray-100 py-4">
        <div className="max-w-2xl mx-auto px-4 flex justify-between items-center">
          <a href="/" className="font-semibold text-gray-900 text-sm">
            thisismycareerway
          </a>
          <div className="flex gap-6">
            <a href="/blog" className="text-sm text-gray-500 hover:text-gray-900">Yazılar</a>
            <a href="/hakkinda" className="text-sm text-gray-500 hover:text-gray-900">Hakkında</a>
          </div>
        </div>
      </nav>
    )
  }