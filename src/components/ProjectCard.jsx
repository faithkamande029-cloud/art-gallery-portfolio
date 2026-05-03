function ProjectCard({ project }) {
    return (
        <div className="project-card" onClick={() => console.log(project)}>
            <img className="image" src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard