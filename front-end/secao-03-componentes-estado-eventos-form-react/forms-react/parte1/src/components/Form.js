import React from 'react';
import Input from './Input';

class Form extends React.Component {
  state = {
    moradia: '',
    text: '',
    email: '',
    comments: '',
    marcador: false
  }

  handleChange = ({target}) => {
    console.log(target.name)
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }
  
  render() {

    return (
      <form action="#">
        <select name="moradia" value={this.state.moradia} onChange={this.handleChange}>
          <option value=""></option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Condomínio">Condomínio</option>
          <option value="Empresa">Empresa</option>
        </select>
        <Input name="email" type="email" value={this.state.email} handleChange={this.handleChange}/>
        <Input name="text" type="text" value={this.state.text} handleChange={this.handleChange}/>
        <textarea  name="comments" cols="30" rows="10" value={this.state.comments} onChange={this.handleChange}></textarea>
        <input name="marcador" type="checkbox" value={this.state.marcador} onChange={this.handleChange}></input>
      </form>
    );
  }
}

export default Form;