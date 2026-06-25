import { ExternalLink} from 'lucide-react'
import './Projects.css'

const projects = [
  {
    name: 'Stylo Space',
    desc: 'Plataforma web de reservas para una barbería. Permite a los clientes elegir servicios, consultar horarios disponibles y reservar turnos. Incluye un panel de administración para gestionar agenda, servicios, precios, disponibilidad y reprogramaciones.',
    url: 'https://stylo-space-barberia.vercel.app/',
    tags: ['React', 'Node.js', 'Express', 'Firebase', 'Brevo'],
    status: 'Live',
  },
  {
    name: 'RepasioAI',
    desc: 'Plataforma de estudio que ayuda a organizar el aprendizaje mediante flashcards generadas con inteligencia artificial. Permite crear mazos, practicar con repetición espaciada y generar preguntas automáticamente.',
    url: 'https://repasioai.vercel.app/',
    tags: ['React', 'NestJS', 'IA API', 'Tailwind CSS'],
    status: 'Live',
  },
  {
    name: 'Metalúrgica Tesei',
    desc: 'Sitio web institucional para una empresa metalúrgica argentina. Incluye presentación de servicios y productos, formulario de contacto y optimización para mejorar su visibilidad en buscadores.',
    url: 'https://www.metalurgicatesei.com.ar/',
    tags: ['Node.js', 'EJS', 'JavaScript', 'SSR', 'SEO'],
    status: 'Live',
  },
  {
    name: 'Listamos',
    desc: 'Aplicación web para crear y compartir listas de compras. Permite que varias personas agreguen productos, marquen compras, dejen comentarios e inviten a otros miembros para colaborar en tiempo real.',
    url: 'https://listamosapp-20362.firebaseapp.com/',
    tags: ['React', 'TypeScript', 'Firebase', 'Firestore', 'PWA'],
    status: 'Building',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Proyectos destacados</p>
        <h2 className="section-title">Productos web que diseñé y desarrollé</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
return (
<article className="project-card">
  <div className="project-card-top">

    <div className="project-header">
      <h3 className="project-name">{p.name}</h3>
      <span className={`project-status project-status--${p.status.toLowerCase()}`}>
        {p.status === 'Live' ? 'En vivo' : 'En evolución'}
      </span>
    </div>

    <p className="project-desc">{p.desc}</p>

  </div>

  <div className="project-footer">
    <div className="project-tags">
      {p.tags.map(tag => (
        <span className="tag" key={tag}>{tag}</span>
      ))}
    </div>

    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
      aria-label={`Ver ${p.name}`}
      title={`Ver ${p.name}`}
    >
      <ExternalLink size={15} />
    </a>
  </div>
</article>

)
}
