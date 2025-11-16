export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <img src="/logo.svg" alt="DeepParse" className="h-5 w-5" />
          <span>DeepParse © {new Date().getFullYear()}</span>
        </div>
        <div className="text-xs text-gray-500">Built for modern teams who need clean text from messy docs.</div>
      </div>
    </footer>
  )
}
