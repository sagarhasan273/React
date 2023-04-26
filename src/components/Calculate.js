import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { toCelsius, toFahrenheit, tryConvert } from './Converter';
import TemperatureField from './TemperatureField';

export default class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }

  changeHandle = (event) => {
    const scale = event.target.name === 'c' ? 'f' : 'c';
    this.setState({ temperature: event.target.value, scale });
  };

  render() {
    const { temperature, scale } = this.state;
    const celcius = scale === 'c' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureField value={celcius} change={this.changeHandle} scale="c" />
        <TemperatureField value={fahrenheit} change={this.changeHandle} scale="f" />
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}
