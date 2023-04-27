/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    const { color, checked, handle } = props;
    this.color = color;
    this.object = checked;
    this.handle = handle;
    this.state = { };
  }

  render() {
    const { searchValue } = this.object.state;
    return (
      <div className={`SearchBox SearchBox-${this.color}`}>
        <input className="SearchBoxInput" value={searchValue} placeholder="Search.." onChange={this.object.handleSearchValue.bind(this.object.handleSearchValue)} />
        <input className="SearchBoxCheckBox" type="checkbox" checked={this.object.isChecked} onChange={this.handle.bind(this.handle)} />
        <label className="SearchBoxLabel">
          Only Show Products in Stock.
        </label>
      </div>
    );
  }
}
