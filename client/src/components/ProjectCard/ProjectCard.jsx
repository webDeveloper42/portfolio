import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <li className="project-card" onClick={() => project.open()}>
      <img
        className="project-card__image"
        src={project.img}
        alt={project.imgAlt}
      />
      <div className="project-card__body">
        <h2 className="project-card__title">{project.title}</h2>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ProjectCard;
