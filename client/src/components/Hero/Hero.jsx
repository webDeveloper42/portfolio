import useTypewriter from '../../hooks/useTypewriter.js';
import './Hero.css';

function Hero({ profile, stats }) {
  const { displayed, done } = useTypewriter(profile?.name ?? '');

  return (
    <section className="hero">
      <div className="hero__identity">
        <p className="hero__label">{profile?.title}</p>
        <h1 className={`hero__name${done ? ' hero__name--done' : ''}`}>
          {displayed}
        </h1>
        <p className="hero__tagline">{profile?.tagline}</p>
        <a className="hero__email" href={`mailto:${profile?.email}`}>
          {profile?.email}
        </a>
      </div>

      <div className="hero__stats">
        {stats.map(({ value, label }) => (
          <div key={label} className="hero__stat">
            <span className="hero__stat-value">{value}</span>
            <span className="hero__stat-label">{label}</span>
          </div>
        ))}
      </div>

      <p className="hero__interests">{profile?.jobInterests}</p>
    </section>
  );
}

export default Hero;
