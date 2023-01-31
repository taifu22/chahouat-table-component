"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
var _Inputsearch = _interopRequireDefault(require("./components/Inputsearch"));
var _Pagination = _interopRequireDefault(require("./components/Pagination"));
var _ServicesListEmployees = require("./components/ServicesListEmployees");
require("./styles/style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Table(props) {
  //useState for store the select number of line to view the list of employes on page (managed by component Pagination)
  // you can have 10 line (employe) each page or 5 or 15
  const [stateValuePage, setStateValuePage] = (0, _react.useState)(props.valueSelect1);
  let newdataEmployees;

  //condition for return either filteredusers (if you have search with input), or the complete list of users
  if (props.dataEmployeeFiltered.length > 0) {
    //here we return a newdata users with the pagination with 9, or 10 or 15 line (employee), if the input search is active
    newdataEmployees = (0, _ServicesListEmployees.returnProductsArrays)(props.dataEmployeeFiltered, stateValuePage);
  } else {
    //if the user search input is not active we return the complete list of users with pagination
    newdataEmployees = (0, _ServicesListEmployees.returnProductsArrays)(props.dataEmployees, stateValuePage);
  }

  //function to iterate on the object containing the values of each employee
  function forEmployee(item, index) {
    const array = [];
    for (let item1 of Object.getOwnPropertyNames(item)) {
      const item2 = item[item1];
      array.push(item2);
    }
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: 'tr' + index
    }, array.map(data => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: 'td' + index + data
      }, data);
    }));
  }

  //function to choose theme css
  function Themecss() {
    if (props.cssThemes == 'theme2') {
      return 'div-employeeList-dark';
    } else if (props.cssThemes == 'theme3') {
      return 'div-employeeList-danger';
    } else {
      return 'div-employeeList-white';
    }
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: Themecss()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "div-search"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "div-select"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Show "), /*#__PURE__*/_react.default.createElement("select", {
    onChange: e => {
      setStateValuePage(e.target.value);
      props.updatePage(e, 0);
    },
    id: "country",
    name: "country"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: props.valueSelect1
  }, props.valueSelect1), /*#__PURE__*/_react.default.createElement("option", {
    value: props.valueSelect2
  }, props.valueSelect2), /*#__PURE__*/_react.default.createElement("option", {
    value: props.valueSelect3
  }, props.valueSelect3)), /*#__PURE__*/_react.default.createElement("p", null, "entries")), /*#__PURE__*/_react.default.createElement("p", {
    onClick: () => props.changePage(),
    className: "p-go-home",
    role: 'button'
  }, /*#__PURE__*/_react.default.createElement("b", null, props.pBack)), /*#__PURE__*/_react.default.createElement(_Inputsearch.default, {
    updatePage: props.updatePage,
    data: props.dataEmployees,
    dataEmployeesFiltered: props.setDataEmployeesFiltered
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "div-table"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "responsive-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, props.arrayValuesTh.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: 'th' + index
    }, item);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, newdataEmployees.length ? newdataEmployees[props.pageIndex].map((item, index) => {
    return forEmployee(item, index);
  }) : /*#__PURE__*/_react.default.createElement("p", {
    className: "p-empty-list"
  }, "la liste est vide")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "div-pagination"
  }, /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pageIndex: props.pageIndex,
    users: props.dataEmployees,
    filteredusers: props.dataEmployeeFiltered,
    updatePage: props.updatePage,
    stateValuePageSelect: stateValuePage
  })));
}
var _default = Table;
exports.default = _default;