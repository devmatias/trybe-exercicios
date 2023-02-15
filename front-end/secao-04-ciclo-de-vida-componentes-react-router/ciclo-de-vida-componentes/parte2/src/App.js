import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: undefined,
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    this.setState(
      { loading: true },
      async () => {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        console.log(data)
        this.setState({
          user: data.results[0],
          loading: false,
        })
      }
    )
  }

  renderUser = (user) => {
    console.log(user)
    const { name, email, gender, location } = user;
    return (
      <div>
        <p>Nome: {name.first}</p>
        <p>Sobrenome: {name.last}</p>
        <p>Sexo: {gender}</p>
        <p>Email: {email}</p>
        <p>Endereço: {location.street.name} - {location.city} - {location.state}</p>
      </div>
    )
  }

  render() {
    const { user, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
          {
            loading
              ? loadingElement
              : this.renderUser(user)
          }
      </div>
    );
  }
}

export default App;
