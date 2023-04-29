import React from 'react';

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }

    increamentCounter = () => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    render() {
      const { counter } = this.state;
      return <OriginalComponent counter={counter} change={this.increamentCounter} />;
    }
  }
  return NewComponent;
};

export default withCounter;
