webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/header/hamburger.jsx":
/*!************************************************!*\
  !*** ./components/layout/header/hamburger.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "hamburger__Wrapper",
  componentId: "ku7bpk-0"
})(["margin:10px;margin-right:0;width:40px;height:40px;display:flex;justify-content:center;align-items:center;cursor:pointer;"]);
var StyledHamburger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "hamburger__StyledHamburger",
  componentId: "ku7bpk-1"
})(["height:4px;width:25px;background-color:", ";border-radius:5px;position:relative;@media (min-width:900px){display:none;}&::after,&::before{content:'';height:4px;width:25px;background-color:", ";border-radius:5px;position:absolute;}&::before{top:", "px;transform:rotate(", "deg);transition:0.2s;}&::after{top:", "px;transform:rotate(", "deg);transition:0.2s;}"], function (props) {
  return props.isOpen ? 'white' : props.fill;
}, function (props) {
  return props.fill;
}, function (props) {
  return props.isOpen ? 0 : -7;
}, function (props) {
  return props.isOpen ? 45 : 0;
}, function (props) {
  return props.isOpen ? 0 : 7;
}, function (props) {
  return props.isOpen ? -45 : 0;
});

var Hamburger = function Hamburger(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHamburger, {
    fill: props.fill,
    isOpen: props.isOpen
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ })

})
//# sourceMappingURL=index.js.aa74a0786b7a28b3f94e.hot-update.js.map