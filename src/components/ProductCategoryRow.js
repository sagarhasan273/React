/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
import data from './data';

const array = require('lodash/array');
const filter = require('lodash/collection');

let ele = [];

function isSubsequence(str1, str2) {
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
  }
  return false;
}

export function RenderDataList(rendarData, fdata) {
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

export function RenderData(color, checked, cate, nam) {
  let result = null;
  if (cate || nam) {
    result = data.filter((item) => {
      return isSubsequence(cate, item.category) || isSubsequence(nam, item.name);
    });
  } else {
    result = data;
  }
  ele = [];
  const finalData = !checked.state.isChecked ? result : filter.filter(result, { stocked: true });
  const uniqueCategories = array.uniqBy(finalData, 'category').map((item) => item.category);
  uniqueCategories.forEach((categories, index) => {
    ele.push(<div className={categories} key={`c${index}`}>
<div key={`cli${index}`} className={`cli cli-${color}`}>{categories}</div>
        {RenderDataList(categories, finalData)}
             </div>);
  });
}

export default function ProductCategoryRow({ color, checked }) {
  RenderData(color, checked, checked.state.searchValue, checked.state.searchValue);
  return (
    <div className="ProductTable">
        {ele}
    </div>
  );
}
