import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this)
    console.log('componente sendo construído');
  }
  handleButtonOne() {
    console.log(this);
    console.log('clicou botão 1');
  }
  render() {
    return (
    <div>
      <button onClick={ this.handleButtonOne }>Botão 1</button>
    </div>
      )
  }
}

export default App;
