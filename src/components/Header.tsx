function Header() {
  const base = import.meta.env.BASE_URL
  
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="blog-title">iuytresdcvbhnt</h1>
        <nav className="nav">
          <a href={base} className="nav-link">Accueil</a>
          <a href={`${base}articles`} className="nav-link">Articles</a>
          <a href={`${base}about`} className="nav-link">À propos</a>
          <a href={`${base}contact`} className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
