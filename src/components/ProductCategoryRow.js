/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
import data from './data';

const array = require('lodash/array');
const filter = require('lodash/collection');

export function RenderData(rendarData, fdata) {
  const elements = [];
  filter.filter(fdata, { category: rendarData }).forEach((item, index) => {
    elements.push(
      <div key={`li${index}`} className="li">
        <span className={`li li-name li-${item.stocked}`}>{item.name} </span>
        <span className="li li-price">{item.price}</span>
      </div>,
    );
  });
  return elements;
}
export default function ProductCategoryRow({ color, checked }) {
  const finalData = !checked.state.isChecked ? data : filter.filter(data, { stocked: true });
  const uniqueCategories = array.uniqBy(finalData, 'category').map((item) => item.category);
  const ele = [];
  uniqueCategories.forEach((categories, index) => {
    ele.push(<div className={categories} key={`c${index}`}>
<div key={`cli${index}`} className={`cli cli-${color}`}>{categories}</div>
        {RenderData(categories, finalData)}
             </div>);
  });
  return (
    <div className="ProductTable">
        {ele}
    </div>
  );
}
