/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: 'bn-BD' };
  }

  FormatTimeString() {
    return this.state.date.toLocaleTimeString(this.state.locale);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleLocale = () => {
    this.setState({
      locale: 'en-US',
    });
  };

  render() {
    return (
      <div>
        <h1>Time is, {this.FormatTimeString()}</h1>
        <Button change={this.handleLocale} />
      </div>
    );
  }
}

export default Clock;
