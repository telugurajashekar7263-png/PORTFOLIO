import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMoon, FiSun } from 'react-icons/fi'
import Lenis from 'lenis'

const nav = ['About', 'Experience', 'Projects', 'Skills', 'Blogs', 'Contact']

export function AmbientBackground() { return <div className="ambient" aria-hidden="true"><i /><i /><i /><b /></div> }
export function LoadingScreen({ visible }) { return <motion.div className="loading-screen" initial={false} animate={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}><span>SA</span><p>Preparing the experience</p></motion.div> }
export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { damping: 22, stiffness: 250 }), sy = useSpring(y, { damping: 22, stiffness: 250 })
  useEffect(() => { const fn = e => { x.set(e.clientX); y.set(e.clientY) }; addEventListener('pointermove', fn); return () => removeEventListener('pointermove', fn) }, [x, y])
  return <motion.div className="cursor" style={{ x: sx, y: sy }} />
}
export function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { const lenis = new Lenis({ lerp: .09, smoothWheel: true }); let id; const loop = t => { lenis.raf(t); id = requestAnimationFrame(loop) }; id = requestAnimationFrame(loop); return () => { cancelAnimationFrame(id); lenis.destroy() } }, [])
  return <header className="nav-wrap"><nav className="nav"><Link className="brand" to="/">SA<span>.</span></Link><div className="nav-links">{nav.map(item => <NavLink key={item} to={`/${item.toLowerCase()}`}>{item}</NavLink>)}</div><div className="nav-actions"><button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <FiSun /> : <FiMoon />}</button><Link className="nav-cta" to="/contact">Let’s talk <FiArrowUpRight /></Link></div></nav></header>
}
export function SocialDock() { return <aside className="social-dock"><a href="https://github.com" aria-label="GitHub"><FiGithub /></a><a href="https://linkedin.com" aria-label="LinkedIn"><FiLinkedin /></a><a href="mailto:hello@example.com" aria-label="Email"><FiMail /></a></aside> }
export function Footer() { return <footer><p>© 2026 Satyam A. Crafted with curiosity.</p><p>Available for select collaborations <span className="online" /></p></footer> }
