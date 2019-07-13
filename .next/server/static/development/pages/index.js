module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/article-info.jsx":
/*!*************************************!*\
  !*** ./components/article-info.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 //styles

var ArticleInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "article-info__ArticleInfo",
  componentId: "rhf9rc-0"
})(["&.category{display:block;margin-bottom:3px;}&.category::before{content:'';display:inline-block;margin-right:3px;width:10px;height:10px;border-radius:50%;background:red;}&.author{color:", ";font-weight:600;margin-right:3px;}&.time{color:rgb(200,200,200);font-size:0.9em;}"], function (props) {
  return props.theme.themeColor;
});
/* harmony default export */ __webpack_exports__["default"] = (ArticleInfo);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _article_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-info */ "./components/article-info.jsx");
/* harmony import */ var _svg_external_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/external-icon */ "./components/svg/external-icon.jsx");
/* harmony import */ var _svg_done_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/done-icon */ "./components/svg/done-icon.jsx");










 //styles

var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.article.withConfig({
  displayName: "card__StyledCard",
  componentId: "r7j6vi-0"
})(["width:100%;box-sizing:border-box;border:1px solid ", ";box-shadow:", ";padding:20px;margin:15px 5px;line-height:1.25em;@media (min-width:500px){width:calc(50% - 10px);}@media (min-width:1100px){width:calc(33% - 10px);}@media (min-width:1450px){width:calc(25% - 10px);}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.classicShadow;
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "card__ImageWrapper",
  componentId: "r7j6vi-1"
})(["width:100%;overflow:hidden;height:170px;background:url('https://miro.medium.com/max/1200/1*CFM9_VhPRrGG755enCmClw.jpeg') center center / cover no-repeat rgb(250,250,250);"]);
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "card__Actions",
  componentId: "r7j6vi-2"
})(["width:100%;display:flex;justify-content:center;align-items:center;"]);
var Action = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.span.withConfig({
  displayName: "card__Action",
  componentId: "r7j6vi-3"
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
      var noCategory = this.props.nocategory;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledCard, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ImageWrapper, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "The Secret to Being a Top Developer Is Building Things! Here\u2019s a List of Fun Apps to Build!"), !noCategory && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "category"
      }, "JavaScript > OOP"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "author"
      }, "Indrek Lasn"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_article_info__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "time"
      }, "3 min read")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "You can only become a great developer by putting the effort in. Imagine for a moment. You can\u2019t become physically fit by reading a lot about fitness. You..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Actions, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Action, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_svg_done_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: actionIconStyle
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Action, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_svg_external_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: actionIconStyle
      }))));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/cards-wrapper.jsx":
/*!**************************************!*\
  !*** ./components/cards-wrapper.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cards-wrapper__CardsWrapper",
  componentId: "sc-9jshft-0"
})(["width:100%;display:flex;flex-wrap:wrap;justify-content:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (CardsWrapper);

/***/ }),

/***/ "./components/layout/add-bar.jsx":
/*!***************************************!*\
  !*** ./components/layout/add-bar.jsx ***!
  \***************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _svg_add_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../svg/add-icon */ "./components/svg/add-icon.jsx");









 // ***** STYLES *****

var Bar = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "add-bar__Bar",
  componentId: "byktuc-0"
})(["width:100%;box-sizing:border-box;padding:10px;position:fixed;top:60px;right:0;background:white;border:1px solid ", ";border-right:none;border-top:none;transform:translateX(", ");transition:transform 0.5s;@media (min-width:600px){width:60%;}@media (min-width:800px){width:50%;}@media (min-width:1100px){width:40%;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.isOpen ? '0' : '100%';
});
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.form.withConfig({
  displayName: "add-bar__StyledForm",
  componentId: "byktuc-1"
})(["width:95%;margin:0 auto;display:flex;justify-content:space-between;align-items:center;& > div{display:inline-block;width:85%;}"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.input.withConfig({
  displayName: "add-bar__StyledInput",
  componentId: "byktuc-2"
})(["border:1px solid ", ";border-radius:10px;padding:", ";margin:10px 0;outline:none;box-sizing:border-box;width:", ";transition:box-shadow 0.2s ease-in;&:focus{box-shadow:", ";}&::placeholder{font-weight:400;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.thick ? '9px' : '7px';
}, function (props) {
  return props.wide ? '100%' : '45%';
}, function (props) {
  return props.theme.inputFocusShadow;
});
var StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.select.withConfig({
  displayName: "add-bar__StyledSelect",
  componentId: "byktuc-3"
})(["border:1px solid ", ";border-radius:10px;padding:7px;width:45%;display:block;outline:none;margin:10px 0;position:relative;&:focus{box-shadow:", ";}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.inputFocusShadow;
});
var SubmitInput = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.input.withConfig({
  displayName: "add-bar__SubmitInput",
  componentId: "byktuc-4"
})(["width:50px;height:50px;border:1px solid ", ";border-radius:50%;box-shadow:", ";margin:5px;background:white;outline:none;"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.classicShadow;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "add-bar__Wrapper",
  componentId: "byktuc-5"
})(["display:flex;justify-content:space-between;align-items:center;"]);
var CategoryColor = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.span.withConfig({
  displayName: "add-bar__CategoryColor",
  componentId: "byktuc-6"
})(["display:block;margin:4px;width:20px;height:20px;border-radius:50%;background:red;"]);
var AddCategory = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.button.withConfig({
  displayName: "add-bar__AddCategory",
  componentId: "byktuc-7"
})(["background:none;display:inline-block;border:none;margin:0 auto;"]);
var actionIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
};
var positionIcon = {
  position: 'absolute',
  left: '10px',
  top: '10px'
}; // ***** COMPONENT *****

var AddBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddBar, _Component);

  function AddBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddBar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      _this.setState({
        value: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      console.log('Wysłane');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCategoryChange", function (e) {
      console.log(e.target.value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onNewSubcategoryClick", function (e) {
      _this.setState({
        isNewSubcategoryOpen: !_this.state.isNewSubcategoryOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onNewCategoryClick", function (e) {
      _this.setState({
        isNewCategoryOpen: !_this.state.isNewCategoryOpen
      });
    });

    _this.state = {
      value: '',
      isNewCategoryOpen: false,
      isNewSubcategoryOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddBar, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isNewSubcategoryOpen = _this$state.isNewSubcategoryOpen,
          isNewCategoryOpen = _this$state.isNewCategoryOpen;
      var subcategoryChoice = null;
      var categoryChoice = null;

      if (isNewSubcategoryOpen || isNewCategoryOpen) {
        subcategoryChoice = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledInput, {
          type: "text",
          name: "subcategory-choice",
          placeholder: "New subcategory name...",
          thick: true
        });
      } else {
        subcategoryChoice = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledSelect, {
          name: "subcategory-choice"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "OOP"
        }, "Object Oriented Programming"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "OOP"
        }, "Object Oriented Programming"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "OOP"
        }, "Object Oriented Programming"));
      }

      if (isNewCategoryOpen) {
        categoryChoice = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledInput, {
          type: "text",
          name: "category-choice",
          placeholder: "New category name...",
          thick: true
        });
      } else {
        categoryChoice = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledSelect, {
          name: "category-choice",
          onChange: this.handleCategoryChange
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "Javascript"
        }, "Javascript"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "CSS"
        }, "CSS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "HTML"
        }, "HTML"));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Bar, {
        isOpen: this.props.isOpen
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledForm, {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledInput, {
        type: "text",
        placeholder: "URL goes here https://...",
        value: this.state.value,
        onChange: this.handleChange,
        wide: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CategoryColor, null), categoryChoice, subcategoryChoice), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AddCategory, {
        onClick: this.onNewCategoryClick
      }, "+ ", isNewCategoryOpen ? 'Existing category' : 'New category'), !isNewCategoryOpen && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AddCategory, {
        onClick: this.onNewSubcategoryClick
      }, "+", ' ', isNewSubcategoryOpen ? 'Existing subcategory' : 'New subcategory'))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        style: {
          position: 'relative',
          display: 'inline-block'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubmitInput, {
        type: "submit",
        value: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_add_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: actionIconStyle,
        positionicon: positionIcon
      }))));
    }
  }]);

  return AddBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddBar);

/***/ }),

/***/ "./components/layout/header/hamburger.jsx":
/*!************************************************!*\
  !*** ./components/layout/header/hamburger.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "hamburger__Wrapper",
  componentId: "ku7bpk-0"
})(["width:40px;height:40px;display:flex;justify-content:center;align-items:center;cursor:pointer;@media (min-width:900px){display:none;}"]);
var StyledHamburger = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "hamburger__StyledHamburger",
  componentId: "ku7bpk-1"
})(["height:4px;width:25px;background-color:", ";border-radius:5px;position:relative;@media (min-width:900px){display:none;}&::after,&::before{content:'';height:4px;width:25px;background-color:", ";border-radius:5px;position:absolute;}&::before{top:", "px;transform:rotate(", "deg);transition:0.2s;}&::after{top:", "px;transform:rotate(", "deg);transition:0.2s;}"], function (props) {
  return props.isMenuOpen ? 'white' : props.fill;
}, function (props) {
  return props.fill;
}, function (props) {
  return props.isMenuOpen ? 0 : -7;
}, function (props) {
  return props.isMenuOpen ? 45 : 0;
}, function (props) {
  return props.isMenuOpen ? 0 : 7;
}, function (props) {
  return props.isMenuOpen ? -45 : 0;
});

var Hamburger = function Hamburger(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHamburger, {
    fill: props.fill,
    isMenuOpen: props.isMenuOpen
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hamburger */ "./components/layout/header/hamburger.jsx");
/* harmony import */ var _svg_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../svg/Logo */ "./components/svg/Logo.jsx");
/* harmony import */ var _svg_search_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../svg/search-icon */ "./components/svg/search-icon.jsx");
/* harmony import */ var _svg_settings_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../svg/settings-icon */ "./components/svg/settings-icon.jsx");
/* harmony import */ var _svg_add_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../svg/add-icon */ "./components/svg/add-icon.jsx");














 // style

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.header.withConfig({
  displayName: "header__StyledHeader",
  componentId: "razhe7-0"
})(["width:100%;box-sizing:border-box;background-color:white;height:60px;padding:0px 20px;border-bottom:1px solid ", ";box-shadow:", ";display:flex;justify-content:space-between;align-items:center;position:fixed;top:0;z-index:1;"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.classicShadow;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchClick", function (e) {
      _this.props.onSearchClick(!_this.props.isSearchOpen);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleAddClick", function (e) {
      _this.props.onAddClick(!_this.props.isAddOpen);
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
        fill: "black",
        onClick: this.handleAddClick
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_search_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: iconStyle,
        fill: "black",
        onClick: this.handleSearchClick
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header */ "./components/layout/header/header.jsx");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ "./components/layout/menu.jsx");
/* harmony import */ var _search_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-bar */ "./components/layout/search-bar.jsx");
/* harmony import */ var _add_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-bar */ "./components/layout/add-bar.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);










function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  body {\n    @import url('https://fonts.googleapis.com/css?family=Muli:400,500,600&display=swap&subset=latin-ext');\n    font-family: 'Muli', sans-serif;\n    font-size: 13px;\n    color: rgb(40, 40, 40);\n  }\n\n  h2 {\n    margin: 14px 0px;\n    display: inline-block;\n    font-weight: 600;\n  }\n\n  h3 {\n    margin: 7px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 //style

var theme = {
  shadowColor: 'rgba(0, 0, 0, 0.08)',
  classicShadow: '3px 3px 10px rgba(0, 0, 0, 0.03)',
  inputFocusShadow: '0px 0px 5px rgb(150, 206, 180, .15)',
  themeColor: 'rgb(150, 206, 180)'
};
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_13__["createGlobalStyle"])(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.main.withConfig({
  displayName: "main-layout__Content",
  componentId: "v54g5c-0"
})(["padding:20px;margin-top:40px;@media (min-width:900px){margin-left:30%;}@media (min-width:1050px){margin-left:25%;}@media (min-width:1300px){margin-left:17%;}"]); //component

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
        isMenuOpen: boolean,
        isSearchOpen: false,
        isAddOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSearchClick", function (boolean) {
      _this.setState({
        isSearchOpen: boolean,
        isMenuOpen: false,
        isAddOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onAddClick", function (boolean) {
      _this.setState({
        isAddOpen: boolean,
        isMenuOpen: false,
        isSearchOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onContentClick", function (boolean) {
      _this.setState({
        isSearchOpen: false,
        isMenuOpen: false,
        isAddOpen: false
      });
    });

    _this.state = {
      isMenuOpen: false,
      isSearchOpen: false,
      isAddOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_13__["ThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(GlobalStyles, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_header_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        theme: theme,
        onHamburgerClick: this.onHamburgerClick,
        onSearchClick: this.onSearchClick,
        onAddClick: this.onAddClick,
        isMenuOpen: this.state.isMenuOpen,
        isSearchOpen: this.state.isSearchOpen,
        isAddOpen: this.state.isAddOpen
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isOpen: this.state.isMenuOpen
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_search_bar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        isOpen: this.state.isSearchOpen
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_add_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isOpen: this.state.isAddOpen
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Content, {
        theme: theme,
        onClick: this.onContentClick
      }, this.props.children)));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/menu.jsx":
/*!************************************!*\
  !*** ./components/layout/menu.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

 // ***** STYLES *****

var StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "menu__StyledMenu",
  componentId: "sc-7spn6p-0"
})(["position:fixed;top:0;width:100%;height:calc(100vh - 60px);margin-top:60px;background:white;box-sizing:border-box;font-size:1.2em;transform:translateX(", ");transition:transform 0.3s linear;overflow-y:scroll;&::-webkit-scrollbar{width:0px;}@media (min-width:400px){width:70%;transform:translateX(", ");}@media (min-width:600px){width:40%;transform:translateX(", ");}@media (min-width:900px){width:30%;transform:translateX(0);}@media (min-width:1050px){width:25%;transform:translateX(0);}@media (min-width:1300px){width:17%;transform:translateX(0);}"], function (props) {
  return props.isOpen ? 0 : '100vw';
}, function (props) {
  return props.isOpen ? '30vw' : '100vw';
}, function (props) {
  return props.isOpen ? '60vw' : '100vw';
});
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "menu__CategoryList",
  componentId: "sc-7spn6p-1"
})(["margin:0;padding:0;"]);
var Category = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "menu__Category",
  componentId: "sc-7spn6p-2"
})(["border-bottom:1px ", " solid;margin:0;padding:15px;list-style:none;font-weight:600;&::before{content:'';display:inline-block;margin-right:7px;width:10px;height:10px;border-radius:50%;background:", ";}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.color;
});
var SubcategoryList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "menu__SubcategoryList",
  componentId: "sc-7spn6p-3"
})(["margin:0;padding:0;"]);
var Subcategory = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "menu__Subcategory",
  componentId: "sc-7spn6p-4"
})(["margin:0;padding:10px;list-style:none;font-weight:500;line-height:1.2em;&:first-child{margin-top:10px;}"]); // ***** COMPONENT *****

var Menu = function Menu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenu, {
    isOpen: props.isOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryList, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
    color: 'red'
  }, "JavaScript", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubcategoryList, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subcategory, null, "Object Oriented Programing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subcategory, null, "Prototypes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subcategory, null, "Various"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
    color: 'lightblue'
  }, "React", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubcategoryList, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subcategory, null, "Hooks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subcategory, null, "State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subcategory, null, "Styled Components"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
    color: 'yellow'
  }, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
    color: 'violet'
  }, "Interviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
    color: 'pink'
  }, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, null, "CSS")));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _article_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../article-info */ "./components/article-info.jsx");









 // style

var Bar = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "search-bar__Bar",
  componentId: "sc-1mhj9ag-0"
})(["width:100%;height:calc(100vh - 60px);box-sizing:border-box;padding:10px;position:fixed;top:60px;right:0;background:white;border:1px solid ", ";border-right:none;border-top:none;transform:translateX(", ");transition:transform 0.5s;@media (min-width:600px){width:60%;}@media (min-width:800px){width:50%;}@media (min-width:1100px){width:40%;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.isOpen ? 0 : '100%';
});
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.form.withConfig({
  displayName: "search-bar__StyledForm",
  componentId: "sc-1mhj9ag-1"
})(["width:95%;margin:0 auto;"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.input.withConfig({
  displayName: "search-bar__StyledInput",
  componentId: "sc-1mhj9ag-2"
})(["border:1px solid ", ";border-radius:10px;padding:7px;outline:none;position:relative;box-sizing:border-box;width:100%;transition:box-shadow 0.2s ease-in;&:focus{box-shadow:", ";}&::placeholder{font-weight:400;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.inputFocusShadow;
});
var Suggestions = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.ul.withConfig({
  displayName: "search-bar__Suggestions",
  componentId: "sc-1mhj9ag-3"
})(["margin:0;margin-top:5px;padding:0;height:calc(100% - 25px);overflow-y:scroll;&::-webkit-scrollbar{width:0px;}"]);
var Suggestion = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.li.withConfig({
  displayName: "search-bar__Suggestion",
  componentId: "sc-1mhj9ag-4"
})(["margin:0;padding:10px 0px 10px 0px;list-style:none;border-bottom:1px solid ", ";&:last-child{border-bottom:none;}"], function (props) {
  return props.theme.shadowColor;
}); // component

var SearchBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchBar, _Component);

  function SearchBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchBar).call(this, props));

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Bar, {
        isOpen: this.props.isOpen
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledForm, {
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
      }, "Indrek Lasn"))));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/maybe.jsx":
/*!******************************!*\
  !*** ./components/maybe.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.jsx");
/* harmony import */ var _section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-header */ "./components/section-header.jsx");
/* harmony import */ var _cards_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards-wrapper */ "./components/cards-wrapper.jsx");





var Maybe = function Maybe(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Maybe today?"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Maybe);

/***/ }),

/***/ "./components/section-header.jsx":
/*!***************************************!*\
  !*** ./components/section-header.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/stats.jsx":
/*!******************************!*\
  !*** ./components/stats.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-header */ "./components/section-header.jsx");



var Stats = function Stats(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_section_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Hi, Hanna!"
  }), "Stats goes here");
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ }),

/***/ "./components/svg/Logo.jsx":
/*!*********************************!*\
  !*** ./components/svg/Logo.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Logo = function Logo(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#000' : _ref$fill,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 362.000000 73.000000' : _ref$viewBox,
      _ref$preserveAspectRa = _ref.preserveAspectRatio,
      preserveAspectRatio = _ref$preserveAspectRa === void 0 ? 'xMidYMid meet' : _ref$preserveAspectRa;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    className: "svg-icon ".concat(className || ''),
    preserveAspectRatio: preserveAspectRatio
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(0.000000,73.000000) scale(0.100000,-0.100000)",
    fill: fill,
    stroke: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M842 704 c-13 -9 -78 -36 -145 -61 -247 -91 -237 -74 -237 -397 l0\r\n-246 28 0 c18 0 30 7 37 22 8 16 41 32 131 62 77 26 138 54 167 76 l46 35 1\r\n263 c0 144 -1 262 -3 262 -1 0 -13 -7 -25 -16z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2 450 l3 -263 47 -33 c26 -18 92 -47 145 -64 110 -37 153 -58 153\r\n-77 0 -8 12 -13 31 -13 l30 0 -3 254 -3 255 -34 35 c-22 23 -61 45 -105 62\r\n-71 27 -230 90 -254 101 -10 4 -12 -48 -10 -257z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3082 641 c-9 -5 -12 -25 -10 -57 l3 -49 55 0 55 0 3 49 c4 56 -5 66\r\n-58 66 -19 0 -41 -4 -48 -9z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1120 350 l0 -281 158 3 157 3 0 50 0 50 -97 3 -98 3 -2 222 -3 222\r\n-57 3 -58 3 0 -281z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1560 468 c-18 -13 -42 -34 -52 -48 -26 -36 -41 -137 -29 -209 19\r\n-115 61 -146 191 -144 47 1 99 6 115 11 26 7 30 13 33 49 l3 41 -101 -1 c-90\r\n-2 -103 0 -116 17 -30 42 -21 46 107 46 l121 0 -3 83 c-5 94 -28 139 -85 163\r\n-54 22 -145 18 -184 -8z m148 -95 c6 -9 12 -25 12 -35 0 -16 -9 -18 -65 -18\r\n-56 0 -65 2 -65 18 0 21 19 47 40 55 23 9 64 -2 78 -20z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1975 485 c-5 -2 -22 -6 -37 -9 -25 -6 -28 -11 -28 -46 l0 -39 98 -3\r\nc96 -3 97 -3 100 -29 3 -25 1 -26 -69 -33 -113 -10 -159 -47 -159 -128 0 -109\r\n74 -156 202 -125 31 8 61 10 65 6 4 -4 28 -9 53 -11 l45 -3 3 41 c2 27 -2 45\r\n-13 54 -12 10 -15 36 -15 134 0 133 -7 153 -60 181 -26 13 -154 20 -185 10z\r\nm133 -277 l-3 -43 -50 0 -50 0 0 35 c0 36 16 47 78 49 27 1 28 -1 25 -41z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2333 483 c-10 -3 -13 -55 -13 -209 l0 -205 58 3 57 3 3 136 3 137\r\n57 14 57 14 6 49 c4 28 3 54 -2 59 -5 5 -30 0 -61 -13 l-53 -22 -14 20 c-13\r\n20 -65 28 -98 14z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2632 477 c-9 -11 -12 -67 -10 -208 l3 -194 58 -3 57 -3 0 150 c0\r\n141 1 151 20 161 12 6 35 10 53 8 48 -5 57 -32 57 -185 l0 -133 55 0 55 0 -1\r\n153 c0 175 -9 211 -59 245 -31 21 -42 23 -95 18 -71 -8 -77 -8 -136 0 -33 4\r\n-48 2 -57 -9z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3082 482 c-9 -7 -12 -55 -10 -208 l3 -199 55 0 55 0 3 199 c3 219 4\r\n216 -58 216 -19 0 -41 -4 -48 -8z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3354 472 c-71 -45 -104 -145 -85 -261 19 -115 60 -146 191 -144 47\r\n1 99 6 115 10 26 8 30 15 33 50 l3 41 -101 -1 c-90 -2 -103 0 -116 17 -30 42\r\n-21 46 106 46 l120 0 0 73 c0 129 -44 180 -163 185 -58 2 -78 -1 -103 -16z\r\nm136 -92 c11 -11 20 -29 20 -40 0 -18 -7 -20 -65 -20 -56 0 -65 2 -65 18 0 53\r\n72 80 110 42z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/svg/add-icon.jsx":
/*!*************************************!*\
  !*** ./components/svg/add-icon.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var DoneIcon = function DoneIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.onClick,
    style: props.positionicon
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.fill,
    viewBox: "0 0 491.86 491.86"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69\r C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69\r s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (DoneIcon);

/***/ }),

/***/ "./components/svg/done-icon.jsx":
/*!**************************************!*\
  !*** ./components/svg/done-icon.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var DoneIcon = function DoneIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.fill,
    viewBox: "0 0 26 26"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DoneIcon);

/***/ }),

/***/ "./components/svg/external-icon.jsx":
/*!******************************************!*\
  !*** ./components/svg/external-icon.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ExternalIcon = function ExternalIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.fill,
    viewBox: "0 0 511.626 511.627"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361\r c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414\r c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418\r h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563\r c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542\r c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13\r c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57\r C397.709,293.209,395.519,292.354,392.857,292.354z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424\r c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067\r c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852\r s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426\r c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ExternalIcon);

/***/ }),

/***/ "./components/svg/search-icon.jsx":
/*!****************************************!*\
  !*** ./components/svg/search-icon.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SearchIcon = function SearchIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: props.onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.fill,
    viewBox: "0 0 250.313 250.313"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76\r c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911\r c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38\r c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146\r c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236\r C170.146,140.044,140.043,170.146,102.911,170.146z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ }),

/***/ "./components/svg/settings-icon.jsx":
/*!******************************************!*\
  !*** ./components/svg/settings-icon.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
    d: "M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617\r c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133\r c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529\r c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08\r c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574\r c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214\r c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597\r c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415\r c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508\r c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167\r c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817\r c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572\r c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213\r c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043\r c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491\r c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824\r C179.418,159.385,159.312,179.491,134.595,179.491z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsIcon);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/main-layout */ "./components/layout/main-layout.jsx");
/* harmony import */ var _components_stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stats */ "./components/stats.jsx");
/* harmony import */ var _components_maybe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/maybe */ "./components/maybe.jsx");











var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_main_layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_stats__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_maybe__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hanna\Desktop\projekty\learnie\learnie-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map