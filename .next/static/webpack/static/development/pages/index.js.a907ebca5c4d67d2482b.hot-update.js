webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/card.jsx":
/*!*****************************!*\
  !*** ./components/card.jsx ***!
  \*****************************/
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
/* harmony import */ var _svg_external_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg/external-icon */ "./components/svg/external-icon.jsx");
/* harmony import */ var _svg_done_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/done-icon */ "./components/svg/done-icon.jsx");









 //styles

var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].article.withConfig({
  displayName: "card__StyledCard",
  componentId: "r7j6vi-0"
})(["width:100%;border:1px solid ", ";box-shadow:", ";padding:10px;margin:15px 0px;line-height:1.25em;@media (min-width:450px){width:45%;margin:1%;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.classicShadow;
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "card__ImageWrapper",
  componentId: "r7j6vi-1"
})(["width:100%;overflow:hidden;height:170px;background:rgb(250,250,250) url('https://miro.medium.com/max/1200/1*CFM9_VhPRrGG755enCmClw.jpeg') no-repeat;background-size:cover;"]);
var MetaData = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({
  displayName: "card__MetaData",
  componentId: "r7j6vi-2"
})(["&.category{display:block;margin-bottom:3px;}&.category::before{content:'';display:inline-block;margin-right:3px;width:10px;height:10px;border-radius:50%;background:red;}&.author{color:", ";font-weight:600;margin-right:3px;}&.time{color:rgb(200,200,200);font-size:0.9em;}"], function (props) {
  return props.theme.themeColor;
});
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "card__Actions",
  componentId: "r7j6vi-3"
})(["width:100%;display:flex;justify-content:center;align-items:center;"]);
var Action = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({
  displayName: "card__Action",
  componentId: "r7j6vi-4"
})(["width:50px;height:50px;border:1px solid ", ";border-radius:50%;display:flex;justify-content:center;align-items:center;box-shadow:", ";margin:5px;"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.classicShadow;
});
var actionIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
}; //component

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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledCard, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ImageWrapper, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MetaData, {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MetaData, {
        className: "author"
      }, "Indrek Lasn"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MetaData, {
        className: "time"
      }, "3 min read")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "You can only become a great developer by putting the effort in. Imagine for a moment. You can\u2019t become physically fit by reading a lot about fitness. You..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Actions, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Action, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_svg_done_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: actionIconStyle
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Action, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_svg_external_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: actionIconStyle
      }))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.a907ebca5c4d67d2482b.hot-update.js.map