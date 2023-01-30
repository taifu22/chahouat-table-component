"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnProductsArrays = void 0;
require("core-js/modules/es.parse-int.js");
/*function to be able to create from a single table, several with maximum 9 indexes, concerning the pagination,
so to view 9 or 10 or 15 employes per page in our EmployeeList component*/
const returnProductsArrays = (items, number) => {
  let TwoDimensionalArray = [];
  let remainder = items.length % parseInt(number);
  let i = 0;
  while (i < items.length - remainder) {
    let array = items.slice(i, i + parseInt(number));
    TwoDimensionalArray.push(array);
    i += parseInt(number);
  }
  const array = items.slice(i);
  TwoDimensionalArray.push(array);
  //if the last array empty we will delete it
  if (TwoDimensionalArray[TwoDimensionalArray.length - 1].length === 0) {
    TwoDimensionalArray.pop();
  }
  return TwoDimensionalArray;
};
exports.returnProductsArrays = returnProductsArrays;