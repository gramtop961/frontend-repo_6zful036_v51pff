import { Menu, ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold text-gray-900">
            <img src="/logo.svg" alt="DeepParse" className="h-7 w-7" />
            <span>DeepParse</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#upload" className="hover:text-gray-900">Try it</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/test" className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Status
            </a>
            <a href="#upload" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-black">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
