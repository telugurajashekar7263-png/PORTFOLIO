import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiCode, FiFileText, FiHeart, FiLayers, FiMessageCircle, FiUser } from 'react-icons/fi'
import { Button, ContactForm, ProjectCard, ResumeButton, SectionTitle } from '../components/UI'
import { experiences, projects, skills } from '../data/content'
const title = s => s === 'blogs' ? 'Notes from the build.' : s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
const details = { about: ['I build systems people want to spend time with.', 'I care about the spaces between the pixels: thoughtful interactions, clear language and software that stays fast as it grows.'], education: ['Learning by building.', 'Computer science fundamentals, continued curiosity, and a habit of turning every new idea into something tangible.'], certifications: ['Proof of practice.', 'Selected certifications across cloud infrastructure, modern front-end engineering and product design.'], achievements: ['Small wins, compounding.', 'Open source contributions, competition milestones and shipped products that created genuine value.'], testimonials: ['Kind words from thoughtful people.', 'A few notes from the collaborators, founders and teams I have worked alongside.'], services: ['From first thought to final pixel.', 'Product strategy, design systems, front-end architecture and full-stack development for products in motion.'], resume: ['A concise record of the work.', 'Senior engineer and product builder focused on expressive, dependable web experiences.'] }
export default function DetailPage({ page }) {
  const copy = details[page] || [title(page), 'A focused collection of work, ideas and experience.']
  const icon = page === 'blogs' ? <FiBookOpen /> : page === 'achievements' ? <FiAward /> : page === 'contact' ? <FiMessageCircle /> : <FiUser />
  return <motion.div className="detail-page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .45 }}>
    <section className="page-hero"><span className="page-icon">{icon}</span><p className="eyebrow"><span /> {page}</p><h1>{copy[0]}</h1><p>{copy[1]}</p></section>
    {page === 'projects' && <section className="section"><div className="project-grid">{projects.concat(projects).map((p, i) => <ProjectCard project={{ ...p, number: `0${i + 1}` }} index={i} key={i} />)}</div></section>}
    {page === 'skills' && <section className="section"><div className="skill-cloud large">{skills.concat(skills).map((x, i) => <span key={i}>{x}</span>)}</div></section>}
    {page === 'experience' && <section className="section"><div className="timeline">{experiences.map((item, i) => <div className="timeline-item" key={item.company}><span>{item.period}</span><div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.copy}</p></div><b>0{i + 1}</b></div>)}</div></section>}
    {page === 'education' && <InfoGrid items={['B.Tech, Computer Science', 'Human-centered design', 'Systems & algorithms']} />}
    {page === 'certifications' && <InfoGrid items={['AWS Cloud Practitioner', 'Meta Front-End Developer', 'Google UX Design']} />}
    {page === 'achievements' && <InfoGrid items={['Top 5% LeetCode', 'Open source contributor', 'Hackathon finalist']} />}
    {page === 'blogs' && <InfoGrid items={['Designing for perceived speed', 'The quiet power of design systems', 'Motion as interface language']} />}
    {page === 'testimonials' && <section className="section quote-grid">{['“Satyam brings a rare combination of taste and technical depth.”', '“An exceptional collaborator with an instinct for the essential.”', '“The product felt fast, elegant and unmistakably ours.”'].map((x,i)=><article key={x}><FiHeart/><h3>{x}</h3><p>— Collaborator {i+1}, Product Team</p></article>)}</section>}
    {page === 'services' && <InfoGrid items={['Product direction', 'Experience engineering', 'Design systems']} />}
    {page === 'resume' && <section className="section resume-card"><FiFileText/><h2>Senior Software Engineer</h2><p>Product architecture · Front-end systems · Full-stack delivery</p><ResumeButton /></section>}
    {page === 'contact' && <section className="contact-section compact"><ContactForm /></section>}
    {page === 'about' && <section className="section"><SectionTitle eyebrow="Principles" title="Make it clear. Make it useful. Make it memorable." /><InfoGrid items={['Clarity over cleverness', 'Performance is a feature', 'Details build trust']} /></section>}
  </motion.div>
}
function InfoGrid({ items }) { return <section className="section info-grid">{items.map((item, i) => <article key={item}><span>0{i+1}</span><FiLayers/><h3>{item}</h3><p>Thoughtful foundations, intentional choices, and a continued pursuit of better work.</p><Button secondary>Explore</Button></article>)}</section> }
