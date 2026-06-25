import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-badge fade-up">
          <span className="badge-dot" />
          Disponible para oportunidades Frontend y Fullstack
        </div>

        <h1 className="hero-title fade-up delay-1">
          Ignacio<br />
          <em>Nicolás</em> Palmier
        </h1>

        <p className="hero-role fade-up delay-2">
          Fullstack Developer · React / Node.js
        </p>

        <p className="hero-desc fade-up delay-3">
          Desarrollo aplicaciones web modernas con React, Node.js y bases de datos.
          Trabajo desde interfaces claras y responsive hasta APIs, autenticación e integración de servicios.
        </p>

        <div className="hero-actions fade-up delay-4">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <a
            href="/Ignacio-Palmier-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Ver CV
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

      <a href="#projects" className="scroll-hint" aria-label="Scroll down">
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
