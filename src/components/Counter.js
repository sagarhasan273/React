import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

increament = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
};

    render() {
        const { render } = this.props;
        const { count } = this.state;
        return render(count, this.increament);
    }
}
