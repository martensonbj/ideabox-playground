import React from 'react';

const Idea = ({ title, id, handleDelete }) => {
  return (
    <div className="Idea">
      <p>{title}</p>
      <button onClick={ () => handleDelete(id) }>Delete</button>
    </div>
  )
}

export default Idea;
