import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import IdeaList from './IdeaList';

class App extends Component {
  constructor() {
    super()
    this.state={ text: '', ideas: [] } // { id: 1, title: 'something'}
  }

  handleClick(e) {
    e.preventDefault()
    let newIdea = { id: this.state.ideas.length, title: this.state.text }
    this.setState({ text: '', ideas: [...this.state.ideas, newIdea] })
  }

  handleDelete(id) {
    let ideas = this.state.ideas
    let updatedIdeas = ideas.filter(idea => idea.id !== id )
    this.setState({ ideas: updatedIdeas })
  }

  render() {
    return (
      <div className="App">
        <Form
          setValue={ this.state.text }
          handleChange={ (e) => this.setState({ text: e.target.value })}
          handleClick={ (e) => this.handleClick(e) }
        />
        <IdeaList
          ideas={ this.state.ideas }
          handleDelete={ (id) => this.handleDelete(id) }
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
