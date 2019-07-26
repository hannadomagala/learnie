webpackHotUpdate("static\\development\\pages\\javascript.js",{

/***/ "./components/layout/Menu/Category.jsx":
/*!*********************************************!*\
  !*** ./components/layout/Menu/Category.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./List */ "./components/layout/Menu/List.jsx");
/* harmony import */ var _CategoryName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CategoryName */ "./components/layout/Menu/CategoryName.jsx");
/* harmony import */ var _Subcategory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Subcategory */ "./components/layout/Menu/Subcategory.jsx");












 // *** STYLES ****

var StyledCategory = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].li.withConfig({
  displayName: "Category__StyledCategory",
  componentId: "lqupxu-0"
})(["border-bottom:1px ", " solid;margin:0;padding:15px;list-style:none;font-weight:600;"], function (props) {
  return props.theme.shadowColor;
});
var SubcategoryList = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_List__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "Category__SubcategoryList",
  componentId: "lqupxu-1"
})(["max-height:", ";transition:max-height 0.5s;overflow:hidden;"], function (props) {
  return props.isOpen ? '100vh' : '0';
}); // **** COMPONENT ****

var Category =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Category, _Component);

  function Category(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Category);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Category).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleNameClick", function (e) {
      _this.setState({
        isCategoryOpen: !_this.state.isCategoryOpen
      });
    });

    _this.state = {
      isCategoryOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Category, [{
    key: "render",
    value: function render() {
      // TODO:
      // Add id-key to Subcategory list
      var subcategories = this.props.subcategories.map(function (subcategory) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Subcategory__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: subcategory._id
        }, subcategory.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledCategory, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CategoryName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: this.props.color,
        onClick: this.handleNameClick
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubcategoryList, {
        isOpen: this.state.isCategoryOpen
      }, subcategories));
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ })

})
//# sourceMappingURL=javascript.js.cdcd8eae5d7d6ff66498.hot-update.js.map