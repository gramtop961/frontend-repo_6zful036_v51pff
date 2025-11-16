import { FileText, ScanLine, Wand2, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: FileText,
    title: 'PDF & Text Support',
    desc: 'Upload PDFs or plain text and get clean, readable output instantly.'
  },
  {
    icon: ScanLine,
    title: 'Smart Parsing',
    desc: 'Extract paragraphs while preserving reading order and spacing.'
  },
  {
    icon: Wand2,
    title: 'Zero Setup',
    desc: 'No templates or training required. It just works for common docs.'
  },
  {
    icon: ShieldCheck,
    title: 'Private by Design',
    desc: 'Your files stay secure. We only process what you upload during the session.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
