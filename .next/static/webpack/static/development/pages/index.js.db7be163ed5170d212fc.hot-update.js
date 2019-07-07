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









var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].article.withConfig({
  displayName: "card__StyledCard",
  componentId: "r7j6vi-0"
})(["width:90%;border:1px solid ", ";box-shadow:", ";padding:10px;margin:15px 0px;line-height:1.25em;&:first-child{margin-top:5px;}"], function (props) {
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
})(["width:100%;display:flex;justify-content:center;"]);

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
      }, "3 min read")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "You can only become a great developer by putting the effort in. Imagine for a moment. You can\u2019t become physically fit by reading a lot about fitness. You..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Actions, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_svg_external_icon__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "jeszcze"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "co\u015B")));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/svg/external-icon.jsx":
/*!******************************************!*\
  !*** ./components/svg/external-icon.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ExternalIcon = function ExternalIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.fill,
    viewBox: "0 0 250.313 250.313"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361\r c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414\r c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418\r h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563\r c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542\r c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13\r c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57\r C397.709,293.209,395.519,292.354,392.857,292.354z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424\r c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067\r c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852\r s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426\r c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ })

})
//# sourceMappingURL=index.js.db7be163ed5170d212fc.hot-update.js.map