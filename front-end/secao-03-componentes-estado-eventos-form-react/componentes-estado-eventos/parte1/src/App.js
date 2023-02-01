import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
      style1: {
        backgroundColor: 'green'
      },
      style2: {
        backgroundColor: 'green'
      },
      style3: {
        backgroundColor: 'green'
      },
    };
  }

  getButtonColor(number) {
    return number % 2 === 0 ? {
      backgroundColor: ''
    } : {
      backgroundColor: 'green'
    }
  }

  handleButtonOne() {
    this.setState((prevState) => ({
      style1: this.getButtonColor(this.state.clicksBtnOne), 
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
  }

  handleButtonTwo() {
    this.setState((prevState) => ({
      style2: this.getButtonColor(this.state.clicksBtnTwo),
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
  }

  handleButtonThree() {
    // Nessa função estamos desestruturando o prevState
    this.setState(({ clicksBtnThree }) => ({
      style3: this.getButtonColor(this.state.clicksBtnThree),
      clicksBtnThree: clicksBtnThree + 1,
    }));
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button
          style={this.state.style1}
          type="button"
          onClick={this.handleButtonOne}
        >
          {`Cliques botão 1: ${clicksBtnOne}`}
        </button>
        <button
          style={this.state.style2}
          type="button"
          onClick={this.handleButtonTwo}
        >
          {`Cliques botão 2: ${clicksBtnTwo}`}
        </button>
        <button
          style={this.state.style3}
          type="button"
          onClick={this.handleButtonThree}
        >
          {`Cliques botão 3: ${clicksBtnThree}`}
        </button>
      </div>
    );
  }

}

export default App;