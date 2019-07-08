webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/search-bar.jsx":
/*!******************************************!*\
  !*** ./components/layout/search-bar.jsx ***!
  \******************************************/
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
/* harmony import */ var _article_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../article-info */ "./components/article-info.jsx");









 // style

var Bar = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "search-bar__Bar",
  componentId: "sc-1mhj9ag-0"
})(["width:100%;max-height:calc(100vh - 60px);box-sizing:border-box;padding:10px;position:fixed;top:60px;right:0;background:white;border:1px solid ", ";border-right:none;border-top:none;transform:translateX(", ");transition:transform 0.5s;@media (min-width:650px){width:80%;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.isOpen ? 0 : '';
});
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "search-bar__StyledForm",
  componentId: "sc-1mhj9ag-1"
})(["width:95%;margin:0 auto;"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "search-bar__StyledInput",
  componentId: "sc-1mhj9ag-2"
})(["border:1px solid ", ";border-radius:10px;padding:7px;outline:none;position:relative;box-sizing:border-box;width:100%;transition:box-shadow 0.2s ease-in;&:focus{box-shadow:", ";}&::placeholder{font-weight:400;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.inputFocusShadow;
});
var Suggestions = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].ul.withConfig({
  displayName: "search-bar__Suggestions",
  componentId: "sc-1mhj9ag-3"
})(["margin:0;margin-top:5px;padding:0;height:calc(100% - 25px);overflow-y:scroll;&::-webkit-scrollbar{width:0px;}"]);
var Suggestion = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].li.withConfig({
  displayName: "search-bar__Suggestion",
  componentId: "sc-1mhj9ag-4"
})(["margin:0;padding:10px 0px 10px 0px;list-style:none;border-bottom:1px solid ", ";&:last-child{border-bottom:none;}"], function (props) {
  return props.theme.shadowColor;
}); // component

var SearchForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchForm, _Component);

  function SearchForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      _this.setState({
        value: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
    });

    _this.state = {
      value: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Bar, {
        isOpen: this.props.isOpen
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledForm, {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledInput, {
        type: "text",
        placeholder: "Search by author or title...",
        value: this.state.value,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestions, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Suggestion, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "author"
      }, "Indrek Lasn"))));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ })

})
//# sourceMappingURL=index.js.77b5acc5b299a8f3e3c2.hot-update.js.map