import React from 'react';
import Idea from './Idea'

const getIdeas = (ideas, handleDelete) => {
  return ideas.map((idea, index) => {
    return (
      <Idea
          key={ index }
          title={ idea.title }
          id={ idea.id }
          handleDelete={ (id) => handleDelete(id) }
      />
    )
  })
}

const IdeaList = ({ ideas, handleDelete }) => {
  return (
    <div className="IdeaList">
      { getIdeas(ideas, handleDelete) }
    </div>
  )
}

export default IdeaList;
