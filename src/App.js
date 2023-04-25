/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: true };
  }

  handleSubmit(id) {
    console.log(id);
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  }

  render() {
    const { isToggled } = this.state;
    return (
      <button type="button" onClick={this.handleSubmit.bind(this, 'hello')}>
        {isToggled ? 'On' : 'Off'}
      </button>
    );
  }
}

export default App;
