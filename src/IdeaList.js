import React from 'react';
import Idea from './Idea'

const getIdeas = (ideas, handleDelete, handleStarred) => {
  return ideas.map((idea, index) => {
    return (
      <Idea
          key={ index }
          title={ idea.title }
          id={ idea.id }
          starred={ idea.starred }
          handleDelete={ handleDelete}
          handleStarred={ handleStarred }
      />
    )
  })
}

const IdeaList = ({ ideas, handleDelete, handleStarred }) => {
  return (
    <div className="IdeaList">
      { getIdeas(ideas, handleDelete, handleStarred) }
    </div>
  )
}

export default IdeaList;
