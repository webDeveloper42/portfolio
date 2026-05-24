import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import './Projects.css';

function Projects({ projects, t }) {
  return (
    <section className="projects">
      <div className="projects__header">
        <h2 className="projects__heading">{t.ventures}</h2>
        <p className="projects__subheading">{t.venturesSubheading}</p>
      </div>
      <ul className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
