webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/Menu/Menu.jsx":
/*!*****************************************!*\
  !*** ./components/layout/Menu/Menu.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ "./components/layout/Menu/List.jsx");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category */ "./components/layout/Menu/Category.jsx");
/* harmony import */ var _MenuLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuLayout */ "./components/layout/Menu/MenuLayout.jsx");
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Welcome */ "./components/layout/Menu/Welcome.jsx");

 // **** COMPONENTS IMPORTS****




 // ***** COMPONENT *****

var Menu = function Menu(props) {
  var categories = props.categories;
  var categoriesToShow = categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: category.color,
      name: category.name,
      subcategories: category.subcategories,
      key: category._id
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: props.isOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Welcome__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Hi, Hanna!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], null, categoriesToShow));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.16b8dbb20680e379c3c4.hot-update.js.map