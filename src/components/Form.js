/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Form extends React.Component {
  state = {
    text: 'JavaScript',
    textarea: 'JavaScript is a popular Web Language.',
  };

  output = '';

  changeHandling = (event) => {
    this.setState({
      [event.target.type]: event.target.value,
    });
    this.output = event.target.value;
  };

  submitted = (e) => {
    e.preventDefault();
    console.log('event fire');
  };

  render() {
    const { text, textarea } = this.state;
    return (
      <div>
        <form onSubmit={this.submitted}>
          <label>
            Name:
            <input type="text" value={text} onChange={this.changeHandling} />
          </label>
          <br />
          <br />
          <label>
            Text Area:
            <textarea type="textarea" value={textarea} onChange={this.changeHandling} />
          </label>
          <br />
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
