/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/button-has-type */
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

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['apple', 'banana', 'orange'],
    };
  }

  addItem = () => {
    const newItem = 'pear';
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <div>
    <MyComponent />
  </div>,
);
