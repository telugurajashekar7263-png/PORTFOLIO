import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiArrowDown, FiCode, FiGithub, FiGlobe, FiLayers } from 'react-icons/fi'
import { SectionTitle, Button, ProjectCard, Reveal, StatCard, ContactForm } from '../components/UI'
import { projects, skills, experiences } from '../data/content'

export default function Home() {
  const hero = useRef()
  useLayoutEffect(() => { const ctx = gsap.context(() => { gsap.from('.hero-word', { yPercent: 110, duration: 1.1, stagger: .1, ease: 'power4.out', delay: .9 }); gsap.to('.orb', { y: -24, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' }) }, hero); return () => ctx.revert() }, [])
  return <div ref={hero}>
    <section className="hero"><div className="eyebrow"><span /> Independent digital builder</div><h1><span className="clip"><i className="hero-word">I design</i></span><span className="clip"><i className="hero-word gradient-text">meaningful</i></span><span className="clip"><i className="hero-word">digital systems.</i></span></h1><p>I’m Satyam, a product-minded engineer building expressive, high-performing experiences for people and businesses with momentum.</p><div className="hero-actions"><Button>Explore my work</Button><Button secondary href="#contact">Start a conversation</Button></div><div className="hero-meta"><span>Scroll to discover <FiArrowDown /></span><span>Based in India · Working globally</span></div><div className="orb">✦</div></section>
    <section className="intro grid-section"><Reveal><p className="kicker">A bit about me</p><h2>Equal parts <em>engineering</em> rigor and creative instinct.</h2></Reveal><Reveal className="intro-copy"><p>I translate complex requirements into interfaces that feel inevitable. Every detail—from the first pixel to the last millisecond—has a reason to exist.</p><a href="/about">More about my approach →</a></Reveal></section>
    <section id="projects" className="section"><SectionTitle eyebrow="Selected work" title="Built to be felt." copy="A selection of products, platforms and experiments where craft meets measurable impact." /><div className="project-grid">{projects.map((project, i) => <ProjectCard project={project} index={i} key={project.title} />)}</div><Reveal className="center"><Button secondary href="/projects">See all projects</Button></Reveal></section>
    <section className="section skills-section"><SectionTitle eyebrow="Toolbox" title="Fluent in the details." /><div className="skill-cloud">{skills.map((skill, i) => <Reveal key={skill}><span style={{ '--delay': `${i * 45}ms` }}>{skill}</span></Reveal>)}</div></section>
    <section className="section experience-preview"><SectionTitle eyebrow="The journey" title="Working at the edge of product and possibility." /><div className="timeline">{experiences.map((item, i) => <Reveal className="timeline-item" key={item.company}><span>{item.period}</span><div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.copy}</p></div><b>0{i + 1}</b></Reveal>)}</div></section>
    <section className="section stats"><StatCard icon={<FiGithub />} value="98+" label="GitHub repositories" /><StatCard icon={<FiCode />} value="400+" label="Problems solved" /><StatCard icon={<FiGlobe />} value="12" label="Products shipped" /><StatCard icon={<FiLayers />} value="5 yrs" label="Building on the web" /></section>
    <section id="contact" className="contact-section"><Reveal><p className="kicker">Have a project in mind?</p><h2>Let’s make something <em>unforgettable.</em></h2><p>For thoughtful products, interesting problems, and teams that care about the craft.</p></Reveal><Reveal><ContactForm /></Reveal></section>
  </div>
}
