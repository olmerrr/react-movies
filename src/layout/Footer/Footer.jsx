import './Footer.css';
 
export function Footer() {
  return (
    
    <footer className="page-footer">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Yaroslav Dombrovskiy
      <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
      </div>
    </div>
  </footer>
        
  )
}
