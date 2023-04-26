/* eslint-disable react/prefer-stateless-function */
import React from 'react';

function FancyBorder({ color, children }) {
  return (
    <div className={`FancyBorder fancyBorder+${color}`}>
      {children}
    </div>
  );
}

export default class WelcomeDialog extends React.Component {
  render() {
    return (
      <FancyBorder color="red">
        <h1>
          Welcome,
        </h1>
        <p>
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
}
