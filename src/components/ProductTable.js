import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    const { checked } = props;
    this.isChecked = checked;
    this.state = { };
  }

  render() {
    return (
      <ProductCategoryRow color="turquoise" checked={this.isChecked} />
    );
  }
}
