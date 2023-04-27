import React from 'react';
import '../css/style.css';
import ProductTable from './ProductTable';
import SearchBox from './SearchBox';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    const { color } = props;
    this.color = color;
    // eslint-disable-next-line react/no-unused-state
    this.state = { isChecked: false };
  }

  handleCheckBoxValue = (event) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ isChecked: event.target.checked });
  };

  render() {
    return (
      <div className={`FilterableProductTable FilterableProductTable-${this.color}`}>
        <SearchBox color="blue" checked={this} handle={this.handleCheckBoxValue} />
        <ProductTable color="green" checked={this} />
      </div>
    );
  }
}
