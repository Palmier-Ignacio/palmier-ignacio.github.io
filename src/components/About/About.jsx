import { MapPin, GraduationCap, Code2 } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Sobre mí</p>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title about-title">
              Desarrollo, enseño<br />y sigo aprendiendo.
            </h2>
            <p>
              Soy Fullstack Developer con experiencia en el desarrollo de aplicaciones web completas,
              desde APIs robustas con Node.js y NestJS hasta interfaces modernas con React.
              Me interesa construir soluciones que realmente funcionen, sean mantenibles y aporten valor real.
            </p>
            <p>
              Además de desarrollar, trabajo como docente universitario de programación en la Universidad
              de San Andrés (UDESA), lo que me mantiene en contacto constante con lo esencial del oficio
              y me permite explicar bien lo que hago.
            </p>
            <p>
              Tengo experiencia trabajando en equipo en entornos de empresa, en modo freelance y en proyectos personales.
              Me siento cómodo en todo el ciclo de desarrollo.
            </p>
          </div>

          <div className="about-meta">
            <div className="meta-card">
              <div className="meta-item">
                <MapPin size={15} className="meta-icon" />
                <div>
                  <span className="meta-label">Ubicación</span>
                  <span className="meta-value">Buenos Aires, Argentina</span>
                </div>
              </div>
              <div className="meta-item">
                <GraduationCap size={15} className="meta-icon" />
                <div>
                  <span className="meta-label">Educación</span>
                  <span className="meta-value">Tec. en Programación + Lic. en Informática</span>
                </div>
              </div>
              <div className="meta-item">
                <Code2 size={15} className="meta-icon" />
                <div>
                  <span className="meta-label">Rol actual</span>
                  <span className="meta-value">Dev Fullstack Freelancer · Docente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
