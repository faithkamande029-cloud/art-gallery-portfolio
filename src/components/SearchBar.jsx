import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <input className="form-section"
       type="text" 
       placeholder='Search projects... '
       onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
