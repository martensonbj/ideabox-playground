import React from 'react';

const Idea = ({ title, id, handleDelete, handleStarred, starred }) => {
  const starClass = starred ? 'active' : ''
  return (
    <div className="Idea">
      <p>{title}</p>
      <button onClick={ () => handleDelete(id) }>Delete</button>
      <button className={ starClass } onClick={ () => handleStarred(id) }>Star</button>
    </div>
  )
}

export default Idea;
