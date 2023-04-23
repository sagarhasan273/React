/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['apple', 'banana', 'orange'],
    };
  }

  addItem = () => {
    // const newItem = 'pear';
    this.state.items.push('pear');

    this.setState({
      items: this.state.items,
    });
  };

  render() {
    let index = 0;
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={index++}>{item}</li>
          ))}
        </ul>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

export default MyComponent;
