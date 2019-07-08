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
/* harmony import */ var _svg_add_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../svg/add-icon */ "./components/svg/add-icon.jsx");















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
};
var iconButtonStyle = {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center'
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
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_add_icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: iconStyle,
        fill: "black"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_search_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
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

/***/ })

})
//# sourceMappingURL=index.js.b034e83f3b7fb2c897d6.hot-update.js.map