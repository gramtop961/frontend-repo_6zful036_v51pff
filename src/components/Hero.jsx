import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_300px_at_50%_-20%,rgba(99,102,241,0.15),transparent),radial-gradient(800px_200px_at_50%_10%,rgba(56,189,248,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/60 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles className="h-3.5 w-3.5" /> New · AI-powered extraction
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Extract meaning from documents in seconds.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              DeepParse reads PDFs, contracts, and reports, then returns clean, structured text you can use anywhere.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#upload" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white shadow hover:bg-black">Try it now</a>
              <a href="#features" className="inline-flex items-center rounded-md px-5 py-3 text-gray-700 hover:bg-gray-900/5">Explore features</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">PDF and text supported. No signup required.</p>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-black/5 bg-white p-4 shadow-xl">
              <img src="/hero-preview.png" alt="DeepParse preview" className="rounded-xl border border-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
