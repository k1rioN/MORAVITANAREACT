import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const onLoad = () => setLoading(false)
    window.addEventListener('load', onLoad)
    const t = setTimeout(() => setLoading(false), 1200)
    return () => { window.removeEventListener('load', onLoad); clearTimeout(t) }
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Preloader show={loading} />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
