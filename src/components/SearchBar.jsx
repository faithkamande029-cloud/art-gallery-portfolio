import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <input className="form-section"
       type="text" 
       placeholder='Search projects... '
       omhange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
