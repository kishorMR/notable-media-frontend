import './Navbar.css';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Notable<span className="logo-accent">Media</span></span>
        <ul className="navbar-links">
          <li><button onClick={() => scrollTo('home')}>Home</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="navbar-contact" onClick={() => scrollTo('contact')}>
          Contact Us
        </button>
      </div>
    </nav>
  );
}
