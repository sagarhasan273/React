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
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="heading">
        <h1>Hello World!</h1>
        <h2 className="text">It is, {this.state.date.toLocaleTimeString(this.props.locale)}</h2>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(<Clocks locale="bn-BD" />);
