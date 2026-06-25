import './Stack.css'

const categories = [
  {
    label: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vite', 'Tailwind', 'Bootstrap'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
  },
  {
    label: 'Bases de datos y Servicios',
    items: ['MySQL', 'MongoDB', 'Firebase', 'Firestore', 'Firebase Auth'],
  },
  {
    label: 'Deploy',
    items: ['Vercel', 'Render', 'Firebase Hosting', 'Railway', 'GitHub Pages'],
  },
  {
    label: 'Herramientas',
    items: ['Git', 'GitHub', 'Postman', 'Figma'],
  },
  {
    label: 'Prácticas',
    items: ['Responsive Design', 'SSR', 'SEO técnico', 'Clean Code', 'MVC', 'Scrum', 'PWA'],
  },
]

export default function Stack() {
  return (
    <section id="stack" >
      <div className="container">
        <p className="section-label">Tecnologías</p>
        <h2 className="section-title">Mi stack</h2>

        <div className="stack-grid">
          {categories.map(cat => (
            <div key={cat.label} className="stack-category">
              <h3 className="stack-cat-label">{cat.label}</h3>
              <div className="stack-tags">
                {cat.items.map(item => (
                  <span className="stack-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="stack-note">
          Entre otras tecnologías · Siempre aprendiendo nuevas herramientas según el proyecto.
        </p>
      </div>
    </section>
  )
}
