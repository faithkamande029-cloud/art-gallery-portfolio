import ProjectCard from "./ProjectCard"

const Projects = [
    {
        id: 1,
        title: "Abstract Art",
        description: "Colorful abstract painting",
        image: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Modern Art",
        description: "Metal sculpture piece",
        image: "https://images.unsplash.com/photo-1769515900535-1b0ef123897f?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

function ProjectList() {
    return (
        <div className="project-list">
            {Projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

export default ProjectList;