import React from 'react'

export default function AddProjectForm({ addProject }) {
    const handleSubmit = (e) => {
        e.preventDefault(); 

        addProject({
            id: Date.now(),
            title: "New Project",
            description: "Example",
            image: "https://via.placeholder.com/300"
        })
    };

    return (
    <form className='new-project' onSubmit={handleSubmit}>
        <h2>Add Project</h2>
        <input className='project-title' type="text" placeholder='Project title' />
        <input className="project-description" type="text" placeholder='Description' />
        <button type='submit'>Add Project</button>
    </form>
  );
}
