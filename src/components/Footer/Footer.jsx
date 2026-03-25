import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-name">Ignacio Nicolás Palmier</span>
        <span className="footer-copy">
          Hecho con React · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
