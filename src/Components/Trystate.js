import React, {Component} from 'react';

class Trystate extends Component {
    state = {
        para: 'Hello World!'
    }

    stateHandler = () => {
        this.setState({
            para: 'Hello Duniya!'
        })
    }

    render() {
        return(
            <div>
                <p>{this.state.para}</p>
                <button onClick={this.stateHandler}>Click here</button>
            </div>
        )
    }
}

export default Trystate;