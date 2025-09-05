
// components/Header.jsx
import './Header.css'; // или добавьте стили в App.css

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="header-logo">
          <span className="logo-icon">🚀</span>
          LearnApp
        </a>
        
        <nav className="header-nav">
          <a href="#courses" className="nav-link">Курсы</a>
          <a href="#about" className="nav-link">О нас</a>
          <a href="#contact" className="nav-link">Контакты</a>
          <button className="cta-button">Начать учиться</button>
        </nav>
      </div>
    </header>
  );
}