import React from 'react'

export default function AddProjectForm() {
  return (
    <form className='new-project'>
        <h2>Add Project</h2>
        <input className='project-title' type="text" placeholder='Project title' />
        <input className="project-description" type="text" placeholder='Description' />
        <button type='submit'>Add Project</button>
    </form>
  );
}
