interface HeaderProps {
  toggleTheme: () => void
  isDarkTheme: boolean
}

function Header({ toggleTheme, isDarkTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="blog-title">iuytresdcvbhnt</h1>
        <div className="nav-container">
          <nav className="nav">
            <a href="/" className="nav-link">Accueil</a>
            <a href="/articles" className="nav-link">Articles</a>
            <a href="/about" className="nav-link">À propos</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme} title="Basculer le thème">
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
