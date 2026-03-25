import { Mail, Github, Linkedin, Send } from 'lucide-react'
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
              ¿Tenés un proyecto<br />en mente?
            </h2>
            <p className="contact-sub">
              Estoy disponible para proyectos freelance, colaboraciones o simplemente charlar sobre tecnología. 
              No dudes en escribirme.
            </p>
            <a href="mailto:palmiernignacio@gmail.com" className="btn btn-primary contact-cta">
              <Send size={15} />
              Escribirme un correo
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
