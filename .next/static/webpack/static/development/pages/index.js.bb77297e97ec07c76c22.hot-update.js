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
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hamburger */ "./components/layout/header/hamburger.jsx");
/* harmony import */ var _svg_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../svg/Logo */ "./components/svg/Logo.jsx");
/* harmony import */ var _svg_search_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../svg/search-icon */ "./components/svg/search-icon.jsx");
/* harmony import */ var _svg_settings_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../svg/settings-icon */ "./components/svg/settings-icon.jsx");
/* harmony import */ var _svg_add_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../svg/add-icon */ "./components/svg/add-icon.jsx");














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
  width: '20px',
  height: '20px',
  padding: '10px',
  cursor: 'pointer'
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
      _this.props.onHamburgerClick(!_this.props.isMenuOpen);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledHeader, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: logoStyle,
        fill: this.props.theme.themeColor
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_add_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: iconStyle,
        fill: "black"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_search_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: iconStyle,
        fill: "black"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_settings_icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: iconStyle,
        fill: "black"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_hamburger__WEBPACK_IMPORTED_MODULE_9__["default"], {
        fill: "black",
        onClick: this.handleHamburgerClick,
        isMenuOpen: this.props.isMenuOpen
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/header/search-bar.jsx":
false,

/***/ "./components/layout/main-layout.jsx":
/*!*******************************************!*\
  !*** ./components/layout/main-layout.jsx ***!
  \*******************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header */ "./components/layout/header/header.jsx");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ "./components/layout/menu.jsx");
/* harmony import */ var _search_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-bar */ "./components/layout/search-bar.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");










function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  body {\n    @import url('https://fonts.googleapis.com/css?family=Muli:400,500,600&display=swap&subset=latin-ext');\n    font-family: 'Muli', sans-serif;\n    font-size: 13px;\n    color: rgb(40, 40, 40);\n  }\n\n  h2 {\n    margin: 14px 0px;\n    display: inline-block;\n    font-weight: 600;\n  }\n\n  h3 {\n    margin: 7px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var theme = {
  shadowColor: 'rgba(0, 0, 0, 0.04)',
  classicShadow: '3px 3px 10px rgba(0, 0, 0, 0.02)',
  inputFocusShadow: '0px 0px 5px rgb(150, 206, 180, .15)',
  themeColor: 'rgb(150, 206, 180)'
};
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["createGlobalStyle"])(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].main.withConfig({
  displayName: "main-layout__Content",
  componentId: "v54g5c-0"
})(["padding:20px;margin-top:40px;@media (min-width:900px){margin-left:30%;}@media (min-width:1050px){margin-left:25%;}@media (min-width:1300px){margin-left:17%;}"]);

var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHamburgerClick", function (boolean) {
      _this.setState({
        isMenuOpen: boolean
      });
    });

    _this.state = {
      isMenuOpen: false,
      isSearchOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_12__["ThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(GlobalStyles, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_header_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        theme: theme,
        onHamburgerClick: this.onHamburgerClick,
        isMenuOpen: this.state.isMenuOpen
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isOpen: this.state.isMenuOpen
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_search_bar__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Content, {
        theme: theme
      }, this.props.children)));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

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
})(["width:70%;height:calc(100vh - 60px);padding:10px;position:absolute;top:60px;right:0;background:white;border:1px solid ", ";border-right:none;border-top:none;"], function (props) {
  return props.theme.shadowColor;
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
})(["margin:0;padding:0;"]);
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Bar, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledForm, {
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
      }, "Indrek Lasn"))));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ })

})
//# sourceMappingURL=index.js.bb77297e97ec07c76c22.hot-update.js.map