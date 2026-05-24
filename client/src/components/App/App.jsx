import { useState, useEffect } from 'react';
import { apiService } from '../../services/ApiService.js';
import Project from '../../models/Project.js';
import ui from '../../i18n/ui.js';
import Navbar from '../Navbar/Navbar.jsx';
import Hero from '../Hero/Hero.jsx';
import Projects from '../Projects/Projects.jsx';
import './App.css';

const SUPPORTED_LANGS = ['en', 'es', 'ja'];

function getInitialLang() {
  const browser = navigator.language.slice(0, 2);
  return SUPPORTED_LANGS.includes(browser) ? browser : 'en';
}

function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const t = ui[lang];

  useEffect(() => {
    setLoading(true);
    setError(null);

    Promise.all([apiService.getProfile(lang), apiService.getProjects(lang)])
      .then(([profileData, projectsData]) => {
        setProfile(profileData);
        setProjects(Project.fromArray(projectsData));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [lang]);

  return (
    <div className="page">
      <Navbar lang={lang} onLangChange={setLang} />

      {loading && (
        <div className="page__status">
          <span className="page__status-text">{t.loading}</span>
        </div>
      )}

      {error && !loading && (
        <div className="page__status page__status--error">
          <span className="page__status-text">{error}</span>
        </div>
      )}

      {!loading && !error && (
        <>
          <Hero profile={profile} stats={t.stats} />
          <Projects projects={projects} t={t} />
        </>
      )}
    </div>
  );
}

export default App;
