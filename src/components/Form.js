/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-array-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Form extends React.Component {
  state = {
    text: 'JavaScript',
    textarea: 'JavaScript is a popular Web Language.',
    selectValue: ['coconut'],
    isChecked: false,
  };

  output = '';

  changeHandling = (event) => {
    console.log(event.target.name);
    if (event.target.name.toString() === 'selectValue') {
      const array = this.state.selectValue;
      array.push(event.target.value);
      this.setState({
        [event.target.name]: array,
      });
    } else {
      const { target } = event;
      const { name, value, type } = event.target;
      const val = type === 'checkbox' ? target.checked : value;
      console.log(val);
      this.setState({
        [name]: val,
      });
    }

    this.output = event.target.value;
  };

  submitted = (event) => {
    event.preventDefault();
    const { selectValue } = this.state;
    console.log(selectValue);
  };

  render() {
    const {
      text, textarea, selectValue, isChecked,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.submitted}>
          <label>
            Name:
            <input type="text" name="text" value={text} onChange={this.changeHandling} />
          </label>
          <br />
          <br />
          <label>
            Text Area:
            <textarea type="textarea" name="textarea" value={textarea} onChange={this.changeHandling} />
          </label>
          <br />
          <br />
          <label>
            Pick your fevorite flavor: <br />
            <select name="selectValue" onChange={this.changeHandling} multiple value={selectValue}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            <input type="checkbox" name="isChecked" checked={isChecked} onChange={this.changeHandling} />
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
        <br />
        <br />
        <br />
        <div>{this.output}</div>
      </div>
    );
  }
}
