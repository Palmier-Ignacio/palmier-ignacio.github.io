import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-badge fade-up">
          <span className="badge-dot" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="hero-title fade-up delay-1">
          Ignacio<br />
          <em>Nicolás</em> Palmier
        </h1>

        <p className="hero-role fade-up delay-2">
          Fullstack Developer
        </p>

        <p className="hero-desc fade-up delay-3">
          Construyo productos digitales de punta a punta: desde la base de datos hasta la interfaz.
          Apasionado por el código limpio, la buena arquitectura y enseñar lo que sé.
        </p>

        <div className="hero-actions fade-up delay-4">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-outline">
            Contactarme
          </a>
        </div>

        <div className="hero-socials fade-up delay-5">
          <a href="https://github.com/palmier-Ignacio" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ignacio-palmier-68b337210" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:palmiernignacio@gmail.com" className="social-link" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
