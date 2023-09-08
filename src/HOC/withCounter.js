import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            counter: 0,
        };

        increment = () => {
            this.setState((state) => ({ counter: state.counter + 1 }));
        };

        render() {
            const { counter } = this.state;
            return <OriginalComponent counter={counter} increment={this.increment} />;
        }
    }
    return NewComponent;
};

export default withCounter;
