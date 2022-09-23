import React, {Component} from 'react';
import './App.css';
import FactsBox from './FactsBox';
import InputBox from './InputBox';

class App extends Component {

  constructor () {
    super();
    this.state = {
      facts : '',
      searchfield : ''
    }
  }

  onInputChange = (event) => {
    this.setState({searchfield : event.target.value})
  }

  buttonClicked = () => {
    fetch(`http://numbersapi.com/${this.state.searchfield}`)
    .then(resp => resp.text())
    .then(data => this.setState({facts : data}))
  }

  render () {
    return (
      <div className="App tc">
            <h1>Welcome to the World of Numbers</h1>
            <h2>Enter a Number</h2>
            <InputBox input={this.onInputChange} buttonClick={this.buttonClicked}/>
            <FactsBox fact={this.state.facts}/>
      </div>
    );
  }
}

export default App;
