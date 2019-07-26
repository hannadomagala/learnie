webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Card/Card.jsx":
/*!**********************************!*\
  !*** ./components/Card/Card.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CardLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardLayout */ "./components/Card/CardLayout.jsx");
/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageWrapper */ "./components/Card/ImageWrapper.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./components/Card/Header.jsx");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Description */ "./components/Card/Description.jsx");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Actions */ "./components/Card/Actions.jsx");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Action */ "./components/Card/Action.jsx");
/* harmony import */ var _svg_external_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../svg/external-icon */ "./components/svg/external-icon.jsx");
/* harmony import */ var _svg_done_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../svg/done-icon */ "./components/svg/done-icon.jsx");







 //**** COMPONENTS IMPORTS ****








 //**** STYLES ****/

var actionIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
}; //**** COMPONENT ****/

var Card =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Card, _Component);

  function Card(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Card).call(this, props));
    _this.state = {
      articleInfo: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          nocategory = _this$props.nocategory,
          title = _this$props.title,
          category = _this$props.category,
          subcategory = _this$props.subcategory,
          author = _this$props.author,
          time = _this$props.time,
          description = _this$props.description,
          image = _this$props.image;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CardLayout__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ImageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        url: image || 'static/placeholder.jpg'
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        nocategory: nocategory,
        title: title,
        category: category,
        subcategory: subcategory,
        author: author,
        time: time
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_10__["default"], null, description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Actions__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Action__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_svg_done_icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: actionIconStyle
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Action__WEBPACK_IMPORTED_MODULE_12__["default"], {
        href: "https://www.atlassian.com/pl/git/tutorials/cherry-pick",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_svg_external_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: actionIconStyle
      }))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.0f2585aa747ca4a2d627.hot-update.js.map