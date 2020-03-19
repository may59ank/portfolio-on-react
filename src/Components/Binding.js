import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Binding extends Component {
  state = {
    person: [
      { title: 'Mayank Yadav', profile: 'Software Developer' },
      { title: 'Mayank', profile: 'Web Developer' }
    ]
  }

  switchStateHandler = (newName) => {
    this.setState({
      person: [
        { title: newName, profile: 'DevOps' },
        { title: 'Shivangi', profile: 'React Developer' }
      ]
    })
  }

  onChangedHandler = (event) => {
    this.setState({
      person: [
        { title: event.target.value, profile: 'Software Developer' },
        { title: 'Mayank', profile: 'Software Developer' }
      ]
    })
  }

  render() {
    return (
      <section id="binding">
        <div className="container">
          <div className="row">
            <p onClick={this.switchStateHandler.bind(this, 'Harsh')}>My name is {this.state.person[0].title} and I'm a {this.state.person[0].profile}</p>
            <p 
            name={this.state.person[0].title}
            profile={this.state.person[0].profile}
            changed={this.onChangedHandler}></p>

            <input onChange={this.onChangedHandler}></input>
          </div>
        </div>
      </section>
    )
  }
}

export default Binding;