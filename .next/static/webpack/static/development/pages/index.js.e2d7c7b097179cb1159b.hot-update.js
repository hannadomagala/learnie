webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Card/Header.jsx":
/*!************************************!*\
  !*** ./components/Card/Header.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ArticleInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ArticleInfo */ "./components/ArticleInfo.jsx");


 // **** STYLES ****

var StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Header__StyledHeading",
  componentId: "sc-1szjfru-0"
})(["min-height:35px;margin:15px 0 10px 0;display:flex;align-items:center;line-height:1.3em;"]);

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeading, null, props.title), !props.nocategory && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ArticleInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: props.category.color,
    className: "category"
  }, props.category.name, " > ", props.subcategory), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ArticleInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "author"
  }, props.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ArticleInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "time"
  }, props.time, " min"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.e2d7c7b097179cb1159b.hot-update.js.map