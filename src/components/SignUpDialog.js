/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
import React from 'react';
import '../css/WelComeDialog.css';

function FancyBorder({ color, children }) {
  return (
    <div className={`FancyBorder FancyBorder-${color}`}>
      {children}
    </div>
  );
}

function Dialog({ title, message, children }) {
  return (
    <FancyBorder color="aqua">
      <h1>{title}</h1>
      <p>{message}</p>
      {children}
    </FancyBorder>
  );
}

export default class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '' };
  }

  handleChange = (event) => {
    this.setState({ login: event.target.value });
  };

  handleSignUp = () => {
    const { login } = this.state;
    alert(`Welcome aboard, ${login}!`);
  };

  render() {
    const { login } = this.state;
    return (
      <Dialog title="WelCome, " message="Thank you for visiting our spacecraft!">
        <input value={login} onChange={this.handleChange} />
        <br />
        <button onClick={this.handleSignUp}>Sign Up now </button>
      </Dialog>
    );
  }
}
