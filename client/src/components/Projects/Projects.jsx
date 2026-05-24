import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import './Projects.css';

function Projects({ projects, t }) {
  const listClassName = `projects__list${
    projects.length === 1 ? ' projects__list--single' : ''
  }`;

  return (
    <section className="projects">
      <div className="projects__header">
        <h2 className="projects__heading">{t.ventures}</h2>
        <p className="projects__subheading">{t.venturesSubheading}</p>
      </div>
      <ul className={listClassName}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
