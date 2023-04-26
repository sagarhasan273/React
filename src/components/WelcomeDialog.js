/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../css/WelComeDialog.css';

function FancyBorder({ color, children }) {
  return (
    <div className={`FancyBorder FancyBorder-${color}`}>
      {children}
    </div>
  );
}

function Dialog({ title, message }) {
  return (
    <FancyBorder color="aqua">
      <h1>{title}</h1>
      <p>{message}</p>
    </FancyBorder>
  );
}

export default class WelcomeDialog extends React.Component {
  render() {
    return (
      <Dialog title="WelCome, " message="Thank you for visiting our spacecraft!" />
    );
  }
}
