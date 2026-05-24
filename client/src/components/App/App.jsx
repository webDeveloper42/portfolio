import { useMemo, useState } from 'react';
import Project from '../../models/Project.js';
import ui from '../../i18n/ui.js';
import { getPortfolioData } from '../../data/portfolio.js';
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
  const t = ui[lang];
  const { profile, projects } = useMemo(() => {
    const data = getPortfolioData(lang);
    return {
      profile: data.profile,
      projects: Project.fromArray(data.projects),
    };
  }, [lang]);

  return (
    <div className="page">
      <Navbar lang={lang} onLangChange={setLang} />
      <Hero profile={profile} stats={t.stats} />
      <Projects projects={projects} t={t} />
    </div>
  );
}

export default App;
