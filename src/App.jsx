import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Uploader from './components/Uploader'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Uploader />
      </main>
      <Footer />
    </div>
  )
}

export default App
