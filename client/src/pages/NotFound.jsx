import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function NotFound() { return <motion.section className="not-found" initial={{opacity:0}} animate={{opacity:1}}><p>404 · Signal lost</p><h1>This page wandered off.</h1><Link className="button" to="/">Return home</Link></motion.section> }
