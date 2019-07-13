webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _svg_add_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../svg/add-icon */ "./components/svg/add-icon.jsx");









 // ***** STYLES *****

var Bar = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "add-bar__Bar",
  componentId: "byktuc-0"
})(["width:100%;box-sizing:border-box;padding:10px;position:fixed;top:60px;right:0;background:white;border:1px solid ", ";border-right:none;border-top:none;transform:translateX(", ");transition:transform 0.5s;@media (min-width:600px){width:60%;}@media (min-width:800px){width:50%;}@media (min-width:1100px){width:40%;}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.isOpen ? '0' : '100%';
});
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "add-bar__StyledForm",
  componentId: "byktuc-1"
})(["width:95%;margin:0 auto;display:flex;justify-content:space-between;align-items:center;& > div{display:inline-block;width:85%;}"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
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
var StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].select.withConfig({
  displayName: "add-bar__StyledSelect",
  componentId: "byktuc-3"
})(["border:1px solid ", ";border-radius:10px;padding:7px;width:45%;display:block;outline:none;margin:10px 0;position:relative;&:focus{box-shadow:", ";}"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.inputFocusShadow;
});
var SubmitInput = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "add-bar__SubmitInput",
  componentId: "byktuc-4"
})(["width:50px;height:50px;border:1px solid ", ";border-radius:50%;box-shadow:", ";margin:5px;background:white;outline:none;"], function (props) {
  return props.theme.shadowColor;
}, function (props) {
  return props.theme.classicShadow;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "add-bar__Wrapper",
  componentId: "byktuc-5"
})(["display:flex;justify-content:space-between;align-items:center;"]);
var CategoryColor = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "add-bar__CategoryColor",
  componentId: "byktuc-6"
})(["display:block;margin:4px;width:20px;height:20px;border-radius:50%;background:red;"]);
var AddCategory = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
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

/***/ })

})
//# sourceMappingURL=index.js.d3b60bd4499e464d67ec.hot-update.js.map