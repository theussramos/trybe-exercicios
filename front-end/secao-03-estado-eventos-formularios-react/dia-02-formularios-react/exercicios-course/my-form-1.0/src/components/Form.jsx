import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div>
        <h1>Formulário em React!</h1>
        <form className="form">

          <div>
            <label htmlFor="name">
              Nome:<input id='name' name='name' type="text"></input>
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:<input id='email' name='email' type="email" onChange={this.handleChange} value={email}></input>
              <label htmlFor="age">
                Idade:
                <select
                  id="age"
                  name="age"
                  defaultValue="">
                  <option value="">Selecione</option>
                  <option value="adult">Maior que 18</option>
                  <option value="underage">Menor que 18</option>
                </select>
              </label>
              <label htmlFor='anecdote'>
                Anedota:
                <textarea id='anecdote' name='anecdote'></textarea>
              </label>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
