import { Briefcase, GraduationCap } from 'lucide-react'
import './Experience.css'

const work = [
  {
    role: 'Fullstack Developer Freelance',
    company: 'Clientes particulares & empresas',
    period: 'Jul. 2025 — presente',
    desc: 'Desarrollo soluciones web para clientes, desde interfaces con React hasta APIs REST, bases de datos y despliegues. Participo en el relevamiento, arquitectura, implementación y publicación de cada producto.',
    tags: ['React', 'Node.js', 'NestJS', 'MongoDB', 'MySQL'],
  },
  {
    role: 'Profesor Universitario de Programación',
    company: 'Digital House — servicios académicos para Universidad de San Andrés (UdeSA)',
    period: 'Jul. 2024 — presente',
    desc: 'Dictado de materias de programación a nivel universitario. Acompañamiento a estudiantes en algoritmos, estructuras de datos, desarrollo de software y resolución de problemas.',
    tags: ['Docencia', 'React', 'Node.js', 'JavaScript', 'Bases de datos'],
  },
  {
    role: 'Instructor Fullstack',
    company: 'Digital House',
    period: 'Ago. 2023 — Jun. 2024',
    desc: 'Dictado de cursos intensivos de desarrollo web fullstack. Enseñanza del stack completo: HTML, CSS, JavaScript, React, Node.js, Express, MySQL y Sequelize. Enfoque en algoritmos, buenas prácticas de programación y resolución de problemas reales.',
    tags: ['Docencia', 'lógica', 'React', 'MySQL', 'Node.js', 'JavaScript'],
  },
  {
    role: 'Fullstack Developer',
    company: 'Telesystem',
    period: 'Feb. 2021 - Jul. 2022',
    desc: 'Desarrollo y mantenimiento de sistemas internos. Trabajo en equipo sobre proyectos de mediana escala, integración con bases de datos y APIs de terceros.',
    tags: ['React', 'Node.js', 'APIs', 'Bases de datos'],
  },
]

const education = [
  {
    title: 'Licenciatura en Informática',
    institution: 'Universidad Nacional de Hurlingham (UNAHUR)',
    period: '2022 - En curso',
    desc: 'Carrera de grado orientada a informática, desarrollo de software, algoritmos, sistemas y arquitectura de aplicaciones.',
  },
  {
    title: 'Tecnicatura Universitaria en Programación',
    institution: 'Universidad Nacional de Hurlingham (UNAHUR)',
    period: '2022 - previsto 2026',
    desc: 'Trayecto técnico compatible con la Licenciatura en Informática y título intermedio. Formación orientada a programación, bases de datos, desarrollo de software y programación orientada a objetos.',
  },
]

function TimelineItem({ icon: Icon, title, sub, period, desc, tags }) {
  return (
    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-icon-wrap">
          <Icon size={14} />
        </div>
        <div className="timeline-line" />
      </div>
      <div className="timeline-body">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{title}</h3>
            <span className="timeline-sub">{sub}</span>
          </div>
          <span className="timeline-period">{period}</span>
        </div>
        <p className="timeline-desc">{desc}</p>
        {tags && (
          <div className="timeline-tags">
            {tags.map(t => <span className="tag" key={t}>{t}</span>)}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" >
      <div className="container">
        <div className="exp-grid">
          <div>
            <p className="section-label">Experiencia</p>
            <h2 className="section-title">Trabajo</h2>
            <div className="timeline">
              {work.map(w => (
                <TimelineItem key={w.company} icon={Briefcase} title={w.role} sub={w.company} period={w.period} desc={w.desc} tags={w.tags} />
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Formación</p>
            <h2 className="section-title">Educación</h2>
            <div className="timeline">
              {education.map(e => (
                <TimelineItem key={e.title} icon={GraduationCap} title={e.title} sub={e.institution} period={e.period} desc={e.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
