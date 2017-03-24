import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import IdeaList from './IdeaList';

class App extends Component {
  constructor() {
    super()
    this.state={ text: '', ideas: [], showStarred: false } // { id: 1, title: 'something'}
  }

  handleClick(e) {
    e.preventDefault()
    let newIdea = { id: this.state.ideas.length, title: this.state.text, starred: false }
    this.setState({ text: '', ideas: [...this.state.ideas, newIdea] })
  }

  handleDelete(id) {
    let ideas = this.state.ideas
    let updatedIdeas = ideas.filter(idea => idea.id !== id )
    this.setState({ ideas: updatedIdeas })
  }

  handleStarred(id) {
    let ideas = this.state.ideas.map(idea => {
      console.log(idea);
      if(idea.id === id) {
       idea.starred = !idea.starred;
      }
      return idea;
    })
    this.setState({ideas})
  }

  toggleStarred() {
    this.setState({ showStarred: !this.state.showStarred });
  }

  filterIdeas() {
    if(this.state.showStarred) {
      return  this.state.ideas.filter((idea)=> {
        return idea.starred
      })
    }
    return this.state.ideas;
  }

  render() {
    return (
      <div className="App">
        <Form
          setValue={ this.state.text }
          handleChange={ (e) => this.setState({ text: e.target.value })}
          handleClick={ (e) => this.handleClick(e) }
        />
        <button onClick={ () => this.toggleStarred() }>
          { this.state.showStarred ? 'Show All' : 'Show Starred' }
        </button>
        <IdeaList
          ideas={ this.filterIdeas() }
          handleDelete={ (id) => this.handleDelete(id) }
          handleStarred={ (id) => this.handleStarred(id) }
        />
      </div>
    );
  }
}

export default App;

// App
// Form
// IdeaList
// Idea
//  - Button?
//  - Input?
