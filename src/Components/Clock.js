/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: 'bn-BD' };
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
    console.log('Clock rendered');
    const { date, locale } = this.state;
    return (
      <div>
        <h1>Time is, {date.toLocaleTimeString(locale)}</h1>
        <Button change={this.handleLocale} />
      </div>
    );
  }
}

export default Clock;
