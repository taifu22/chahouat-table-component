"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ServicesListEmployees = require("./ServicesListEmployees");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Pagination = props => {
  /*here we retrieve the list of employees in order to be able to return an array sorted in relation
  to the number of rows we want per page*/
  //const { users, filteredusers, pageIndex } = useSelector(state => ({ ...state.user }));
  let newData;
  if (props.filteredusers.length > 0) {
    //if the search users input is actived, the newdata contains the value of search data
    newData = (0, _ServicesListEmployees.returnProductsArrays)(props.filteredusers, props.stateValuePageSelect);
  } else {
    newData = (0, _ServicesListEmployees.returnProductsArrays)(props.users, props.stateValuePageSelect);
  }

  //if we are in first page the balise li Previsous is disabled, and if we are in last page the Next <li> are disabled
  const Previous = _react.default.useMemo(() => {
    return {
      isDisabled: props.pageIndex === 0
    };
  }, [props.pageIndex]);
  const Next = _react.default.useMemo(() => {
    return {
      isDisabled: props.pageIndex === newData.length - 1
    };
  }, [props.pageIndex, newData]);

  //function to choose theme css
  function Themecss() {
    if (props.cssThemes == 'theme2') {
      return 'nav-pagination-dark';
    } else if (props.cssThemes == 'theme3') {
      return 'nav-pagination-danger';
    } else {
      return 'nav-pagination-white';
    }
  }
  return !!newData.length && /*#__PURE__*/_react.default.createElement("nav", {
    className: Themecss(),
    "aria-label": "Page navigation example"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "ul-pagination"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "".concat(Previous.isDisabled ? 'disabled-li' : '')
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: e => props.updatePage(e, props.pageIndex - 1)
  }, "Previous")), newData.map((_, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: props.pageIndex == index ? "active-li" : ""
    }, /*#__PURE__*/_react.default.createElement("a", {
      onClick: e => props.updatePage(e, index)
    }, index + 1));
  }), /*#__PURE__*/_react.default.createElement("li", {
    className: "".concat(Next.isDisabled ? 'disabled-li' : '')
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: e => props.updatePage(e, props.pageIndex + 1)
  }, "Next"))));
};
var _default = Pagination;
exports.default = _default;