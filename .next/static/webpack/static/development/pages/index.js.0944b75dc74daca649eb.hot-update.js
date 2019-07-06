webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/menu.jsx":
/*!************************************!*\
  !*** ./components/layout/menu.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "menu__StyledMenu",
  componentId: "sc-7spn6p-0"
})(["position:fixed;top:0;width:100%;height:auto;margin-top:60px;background:white;box-sizing:border-box;font-size:1.2em;transform:translateX(", ");transition:transform 0.3s linear;"], function (props) {
  return props.isOpen ? '0' : '100vw';
});
var Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "menu__Category",
  componentId: "sc-7spn6p-1"
})(["border-bottom:1px ", " solid;margin:0;padding:15px;list-style:none;&::before{content:'';display:inline-block;margin-right:7px;width:10px;height:10px;border-radius:50%;background:red;}"], function (props) {
  return props.theme.shadowColor;
});

var Menu = function Menu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenu, {
    isOpen: props.isOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "React"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS")));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.0944b75dc74daca649eb.hot-update.js.map