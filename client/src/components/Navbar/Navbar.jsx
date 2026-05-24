import './Navbar.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ja', label: 'JA' },
];

function Navbar({ lang, onLangChange }) {
  return (
    <nav className="navbar">
      <ul className="navbar__lang-list">
        {LANGUAGES.map(({ code, label }) => (
          <li key={code} className="navbar__lang-item">
            <button
              className={`navbar__lang-btn${lang === code ? ' navbar__lang-btn--active' : ''}`}
              onClick={() => onLangChange(code)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
