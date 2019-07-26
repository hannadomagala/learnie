webpackHotUpdate("static\\development\\pages\\javascript.js",{

/***/ "./components/layout/MainLayout.jsx":
/*!******************************************!*\
  !*** ./components/layout/MainLayout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Header/Header */ "./components/layout/Header/Header.jsx");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Menu/Menu */ "./components/layout/Menu/Menu.jsx");
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SearchBar/SearchBar */ "./components/layout/SearchBar/SearchBar.jsx");
/* harmony import */ var _AddBar_AddBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AddBar/AddBar */ "./components/layout/AddBar/AddBar.jsx");












function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  body {\n    @import url('https://fonts.googleapis.com/css?family=Muli:400,500,600&display=swap&subset=latin-ext');\n    font-family: 'Muli', sans-serif;\n    font-size: 13px;\n    color: rgb(40, 40, 40);\n  }\n\n  h2 {\n    margin: 14px 0px;\n    display: inline-block;\n    font-weight: 600;\n  }\n\n  h3 {\n    margin: 7px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // **** COMPONENTS IMPORTS ****




 // **** STYLES ****

var theme = {
  shadowColor: 'rgba(0, 0, 0, 0.08)',
  classicShadow: '3px 3px 10px rgba(0, 0, 0, 0.03)',
  inputFocusShadow: '0px 0px 5px rgb(150, 206, 180, .15)',
  themeColor: 'rgb(150, 206, 180)'
};
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["createGlobalStyle"])(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].main.withConfig({
  displayName: "MainLayout__Content",
  componentId: "sc-1keg51l-0"
})(["padding:20px;margin-top:40px;@media (min-width:900px){margin-left:30%;}@media (min-width:1050px){margin-left:25%;}@media (min-width:1300px){margin-left:17%;}"]); //component

var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Layout, _Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentDidMount",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('/api/categories');

            case 2:
              result = _context.sent;

              _this.setState({
                categories: result.data
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onHamburgerClick", function (boolean) {
      _this.setState({
        isMenuOpen: boolean,
        isSearchOpen: false,
        isAddOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSearchClick", function (boolean) {
      _this.setState({
        isSearchOpen: boolean,
        isMenuOpen: false,
        isAddOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onAddClick", function (boolean) {
      _this.setState({
        isAddOpen: boolean,
        isMenuOpen: false,
        isSearchOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onContentClick", function (boolean) {
      _this.setState({
        isSearchOpen: false,
        isMenuOpen: false,
        isAddOpen: false
      });
    });

    _this.state = {
      isMenuOpen: false,
      isSearchOpen: false,
      isAddOpen: false,
      categories: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(GlobalStyles, null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        theme: theme,
        onHamburgerClick: this.onHamburgerClick,
        onSearchClick: this.onSearchClick,
        onAddClick: this.onAddClick,
        isMenuOpen: this.state.isMenuOpen,
        isSearchOpen: this.state.isSearchOpen,
        isAddOpen: this.state.isAddOpen
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isOpen: this.state.isMenuOpen
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        isOpen: this.state.isSearchOpen
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_AddBar_AddBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
        isOpen: this.state.isAddOpen
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Content, {
        theme: theme,
        onClick: this.onContentClick
      }, this.props.children)));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=javascript.js.2bf1f81ed4e9ef549968.hot-update.js.map