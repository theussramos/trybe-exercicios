import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.state = {
      numberClicks: 0
    }
  }
  handleButtonOne() {
    this.setState((estadoAnterior, _props) => ({
      numberClicks: estadoAnterior.numberClicks + 1
    }))
  }
  render() {
    console.log(this);
    return (
      <button onClick={ this.handleButtonOne }>{this.state.numberClicks}</button>
      )
  }
}

export default App;
