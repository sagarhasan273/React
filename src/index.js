/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

class Clocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState((state, props) => ({ counter: state.counter + parseInt(props.increament) }));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="heading">
        <h1>Hello World!</h1>
        <h2 className="text">It is, {this.state.counter}</h2>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <div>
    <Clocks increament="1" />
  </div>,
);
