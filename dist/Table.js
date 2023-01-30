"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Inputsearch = _interopRequireDefault(require("./FormInputs/Inputsearch"));
var _Pagination = _interopRequireDefault(require("./Pagination"));
var _ServicesListEmployees = require("./services/ServicesListEmployees");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function EmployeeList(props) {
  //useState for store the select number of line to view the list of employes on page (managed by component Pagination)
  // you can have 10 line (employe) each page or 5 or 15
  const [stateValuePage, setStateValuePage] = (0, _react.useState)(props.valueSelect1);
  let newdataEmployees;

  //condition for return either filteredusers (if you have search with input), or the complete list of users
  if (props.dataEmployees.filteredusers.length > 0) {
    //here we return a newdata users with the pagination with 9, or 10 or 15 line (employee), if the input search is active
    newdataEmployees = (0, _ServicesListEmployees.returnProductsArrays)(props.dataEmployees.filteredusers, stateValuePage);
  } else {
    //if the user search input is not active we return the complete list of users with pagination
    newdataEmployees = (0, _ServicesListEmployees.returnProductsArrays)(props.dataEmployees.users, stateValuePage);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "div-employeeList"
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
  }, /*#__PURE__*/_react.default.createElement("b", null, "Go To Home")), /*#__PURE__*/_react.default.createElement(_Inputsearch.default, {
    updatePage: props.updatePage,
    data: props.dataEmployees,
    dataEmployeesFiltered: props.dataEmployeesFiltered
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "div-table"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "responsive-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "First Name"), /*#__PURE__*/_react.default.createElement("th", null, "Last Name"), /*#__PURE__*/_react.default.createElement("th", null, "Start Date"), /*#__PURE__*/_react.default.createElement("th", null, "Departement"), /*#__PURE__*/_react.default.createElement("th", null, "Date of Birth"), /*#__PURE__*/_react.default.createElement("th", null, "Street"), /*#__PURE__*/_react.default.createElement("th", null, "City"), /*#__PURE__*/_react.default.createElement("th", null, "State"), /*#__PURE__*/_react.default.createElement("th", null, "Zip Code"))), /*#__PURE__*/_react.default.createElement("tbody", null, newdataEmployees[0].length ? newdataEmployees[props.dataEmployees.pageIndex].map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: 'key' + index
    }, /*#__PURE__*/_react.default.createElement("td", null, item.firstname), /*#__PURE__*/_react.default.createElement("td", null, item.lastname), /*#__PURE__*/_react.default.createElement("td", null, item.dateOfStart), /*#__PURE__*/_react.default.createElement("td", null, item.departement), /*#__PURE__*/_react.default.createElement("td", null, item.dateOfBirth), /*#__PURE__*/_react.default.createElement("td", null, item.street), /*#__PURE__*/_react.default.createElement("td", null, item.city), /*#__PURE__*/_react.default.createElement("td", null, item.state), /*#__PURE__*/_react.default.createElement("td", null, item.zipCode));
  }) : 'la liste est vide'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "div-pagination"
  }, /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pageIndex: props.dataEmployees.pageIndex,
    users: props.dataEmployees.users,
    filteredusers: props.dataEmployees.filteredusers,
    updatePage: props.updatePage,
    stateValuePageSelect: stateValuePage
  })));
}
var _default = EmployeeList;
exports.default = _default;