/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class App extends React.Component {
  handleSubmit() {
    // event.preventDefault();
    // Handle form submission logic here
    console.log('called handleSubmit');
  }

  render() {
    return (
      <a href="#" onClick={this.handleSubmit}>Click me</a>
    );
  }
}

export default App;
