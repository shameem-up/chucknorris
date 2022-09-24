import React, {Component} from 'react';
import './App.css';
import JokesBox from './JokesBox';


class App extends Component {

  constructor () {
    super();
    this.state = {
      Jokes : {}
    }
  }

  buttonClicked = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resp => resp.json())
    .then(data => this.setState({Jokes : data}))
  }

  render () {
    return (
      <div className="App tc">
            <h1>Welcome to the World of Chuck Norris</h1>
            <h2>Chuck Norris doesnot sleep, he waits</h2>
            <JokesBox 
            joke={this.state.Jokes.value} 
            clicked={this.buttonClicked}
            />
      </div>
    );
  }
}

export default App;
