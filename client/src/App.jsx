import { Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { Navbar, Footer, AmbientBackground, Cursor, SocialDock, LoadingScreen } from './components/Chrome'

const Home = lazy(() => import('./pages/Home'))
const DetailPage = lazy(() => import('./pages/DetailPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const routes = ['about', 'experience', 'education', 'skills', 'projects', 'certifications', 'achievements', 'blogs', 'testimonials', 'services', 'resume', 'contact']

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 850)
    const update = () => setProgress(Math.min(100, (scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)) * 100))
    addEventListener('scroll', update, { passive: true }); update()
    return () => { clearTimeout(timer); removeEventListener('scroll', update) }
  }, [])

  return <>
    <LoadingScreen visible={loading} />
    <AmbientBackground />
    <Cursor />
    <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
    <Navbar />
    <main>
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="page-loader"><span /></div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            {routes.map((route) => <Route key={route} path={`/${route}`} element={<DetailPage page={route} />} />)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </main>
    <SocialDock />
    <button className="back-top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><FiArrowUp /></button>
    <Footer />
  </>
}
export default App
