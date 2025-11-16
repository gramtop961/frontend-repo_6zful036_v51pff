import { useState } from 'react'

export default function Uploader() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onUpload = async (e) => {
    e.preventDefault()
    setError('')
    setResult(null)

    if (!file) {
      setError('Please select a PDF or text file')
      return
    }

    const form = new FormData()
    form.append('file', file)

    try {
      setLoading(true)
      const res = await fetch(`${backend}/api/extract`, {
        method: 'POST',
        body: form
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({ detail: 'Upload failed' }))
        throw new Error(data.detail || 'Extraction failed')
      }

      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="upload" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Try DeepParse</h2>
          <p className="mt-1 text-sm text-gray-600">Upload a PDF or text file and see the extracted text instantly.</p>

          <form onSubmit={onUpload} className="mt-6 space-y-4">
            <input
              type="file"
              accept=".pdf,.txt,.md,.csv,.log,text/plain,application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 file:mr-4 file:rounded-md file:border-0 file:bg-gray-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-black"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black disabled:opacity-60"
            >
              {loading ? 'Extracting…' : 'Extract'}
            </button>
          </form>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</div>
          )}

          {result && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Result</h3>
                <span className="text-xs text-gray-500">{result.characters} characters</span>
              </div>
              <div className="mt-2 max-h-96 overflow-auto rounded-md border border-black/5 bg-gray-50 p-4 text-sm whitespace-pre-wrap">
                {result.preview}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
