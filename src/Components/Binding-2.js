import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Binding2 extends Component {
  state = {
    person: [
      { name: 'Dhanaulti', place: 'Camp-o-royal' },
    ]
  }

  // personStateHandler = () => {
  //   this.setState({
  //     person: [
  //       { name: 'Shivangi Shukla', place: 'My Palace' },
  //       { name: 'Shivangi', place: 'Queens Paradise' }
  //     ]
  //   })
  // }

  onChangeHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, place: event.target.value },
        { name: event.target.value, place: event.target.value }
      ]
    })
  }

  render() {
    return (
      <section id="binding2">
        <div className="container">
          <div className="row binding2">
            <div className="col-sm-6">
              <h1>Welcome to {this.state.person[0].name}</h1>
              <p>This is {this.state.person[0].place} and here only one person is present at a single time, You will go through various tasks and the one who finishes all tasks within time only gets out of this hell.
              </p>
            </div>

            <div className="col-sm-6">
              <input type="text" placeholder="Enter Your Name" onChange={this.onChangeHandler}></input>
              <br /><br />
              <input type="text" placeholder="Enter Your Place" onChange={this.onChangeHandler}></input>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Binding2;