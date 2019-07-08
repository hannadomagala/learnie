webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/header/header.jsx":
/*!*********************************************!*\
  !*** ./components/layout/header/header.jsx ***!
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
/* harmony import */ var _search_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-bar */ "./components/layout/header/search-bar.jsx");
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hamburger */ "./components/layout/header/hamburger.jsx");
/* harmony import */ var _svg_Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../svg/Logo */ "./components/svg/Logo.jsx");
/* harmony import */ var _svg_search_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../svg/search-icon */ "./components/svg/search-icon.jsx");
/* harmony import */ var _svg_settings_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../svg/settings-icon */ "./components/svg/settings-icon.jsx");














 // style

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].header.withConfig({
  displayName: "header__StyledHeader",
  componentId: "razhe7-0"
})(["width:100%;box-sizing:border-box;background-color:white;height:60px;padding:0px 20px;border-bottom:1px solid ", ";box-shadow:", ";display:flex;justify-content:space-between;align-items:center;position:fixed;top:0;z-index:1;"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.classicShadow;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Wrapper",
  componentId: "razhe7-1"
})(["display:flex;justify-content:space-between;align-items:center;position:relative;"]);
var iconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
};
var logoStyle = {
  width: '110px',
  height: 'auto'
}; // component

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleHamburgerClick", function (e) {
      _this.props.onHamburgerClick(!_this.props.isOpen);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledHeader, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_Logo__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: logoStyle,
        fill: this.props.theme.themeColor
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_search_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: iconStyle,
        fill: "black"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_settings_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: iconStyle,
        fill: "black"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_hamburger__WEBPACK_IMPORTED_MODULE_10__["default"], {
        fill: "black",
        something: "blah",
        onClick: this.handleHamburgerClick,
        isOpen: this.props.isOpen
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/svg/settings-icon.jsx":
/*!******************************************!*\
  !*** ./components/svg/settings-icon.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SettingsIcon = function SettingsIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.fill,
    viewBox: "0 0 268.765 268.765"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Settings"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    style: "fill-rule:evenodd;clip-rule:evenodd;",
    d: "M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617\r c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133\r c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529\r c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08\r c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574\r c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214\r c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597\r c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415\r c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508\r c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167\r c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817\r c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572\r c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213\r c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043\r c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491\r c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824\r C179.418,159.385,159.312,179.491,134.595,179.491z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsIcon);

/***/ })

})
//# sourceMappingURL=index.js.030d60b9b957fae23699.hot-update.js.map