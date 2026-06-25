import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import './Contact.css'

const links = [
  {
    label: 'Email',
    value: 'palmiernignacio@gmail.com',
    href: 'mailto:palmiernignacio@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'Palmier-Ignacio',
    href: 'https://github.com/palmier-Ignacio',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'ignacio-palmier',
    href: 'https://www.linkedin.com/in/ignacio-palmier-68b337210',
    icon: Linkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Contacto</p>
        <div className="contact-layout">
          <div className="contact-left">
            <h2 className="section-title contact-title">
              ¿Buscás un desarrollador<br />para tu equipo?
            </h2>

            <p className="contact-sub">
              Estoy disponible para oportunidades Frontend y Fullstack, proyectos freelance
              y colaboraciones. Podés contactarme por correo, LinkedIn o GitHub.
            </p>
            <a href="/Ignacio-Palmier-CV.pd" className="btn btn-primary contact-cta">
              <FileText size={15} />
              Ver CV
            </a>
          </div>
          <div className="contact-links">
            {links.map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" className="contact-link-card">
                <div className="contact-link-icon">
                  <l.icon size={16} />
                </div>
                <div>
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-value">{l.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
