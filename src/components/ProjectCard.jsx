function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img className="image" src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard