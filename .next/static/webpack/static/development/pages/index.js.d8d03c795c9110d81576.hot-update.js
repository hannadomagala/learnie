webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/AddBar/AddBar.jsx":
/*!*********************************************!*\
  !*** ./components/layout/AddBar/AddBar.jsx ***!
  \*********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var toasted_notes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! toasted-notes */ "./node_modules/toasted-notes/lib/index.js");
/* harmony import */ var toasted_notes_src_styles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! toasted-notes/src/styles.css */ "./node_modules/toasted-notes/src/styles.css");
/* harmony import */ var toasted_notes_src_styles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(toasted_notes_src_styles_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _svg_add_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../svg/add-icon */ "./components/svg/add-icon.jsx");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Bar */ "./components/layout/Bar.jsx");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Form */ "./components/layout/AddBar/Form.jsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Input */ "./components/layout/AddBar/Input.jsx");
/* harmony import */ var _Form_Select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Form/Select */ "./components/layout/Form/Select.jsx");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Wrapper */ "./components/layout/AddBar/Wrapper.jsx");
/* harmony import */ var _SubmitInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SubmitInput */ "./components/layout/AddBar/SubmitInput.jsx");
/* harmony import */ var _CategoryColor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../CategoryColor */ "./components/CategoryColor.jsx");
/* harmony import */ var _AddCategory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AddCategory */ "./components/layout/AddBar/AddCategory.jsx");
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Notification/Notification */ "./components/layout/Notification/Notification.jsx");
/* harmony import */ var _helpers_getRandomColor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/getRandomColor */ "./components/layout/AddBar/helpers/getRandomColor.js");
/* harmony import */ var _helpers_getAlias__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/getAlias */ "./components/layout/AddBar/helpers/getAlias.js");












 // **** COMPONENTS IMPORTS ****










 // **** HELPERS *****/


 // ***** STYLES *****

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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AddBar, _Component);

  function AddBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddBar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentDidMount", function () {
      // if categories got loaded before component did mount
      // set initial category to first one loaded from server
      if (_this.props.categories[0]) {
        _this.setState({
          categoryValue: _this.props.categories[0],
          categoryColor: _this.props.categories[0].color,
          subcategories: _this.props.categories[0].subcategories,
          subcategoryValue: _this.props.categories[0].subcategories[0].name
        });
      } else {
        _this.setState({
          categoryValue: {}
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentDidUpdate", function (prevProps) {
      // if categories get loaded from server after componentDidMount
      // set initial category to first one loaded from server
      if (_this.props.categories !== prevProps.categories) {
        _this.setState({
          categoryValue: _this.props.categories[0],
          categoryColor: _this.props.categories[0].color,
          subcategories: _this.props.categories[0].subcategories,
          subcategoryValue: _this.props.categories[0].subcategories[0].name
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this$state, categoryValue, subcategoryValue, urlValue, categoryColor, newCategoryValue, isNewCategoryOpen, isNewSubcategoryOpen, articleBody, _ref2, data, subcategoryBody, _ref3, _data, updatedCategory, categoryBody, newCategory, _articleBody, _ref4, _data2;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // TODO
                // validation
                // userID from server
                // create request body to add new article to mongoDB

                _this$state = _this.state, categoryValue = _this$state.categoryValue, subcategoryValue = _this$state.subcategoryValue, urlValue = _this$state.urlValue, categoryColor = _this$state.categoryColor, newCategoryValue = _this$state.newCategoryValue, isNewCategoryOpen = _this$state.isNewCategoryOpen, isNewSubcategoryOpen = _this$state.isNewSubcategoryOpen;
                articleBody = {
                  url: urlValue,
                  user: '5d3771a273caf9266425905b',
                  category: categoryValue._id,
                  subcategory: subcategoryValue
                }; // if we're not creating new subcategory or category
                // then add new article to db

                if (!(!isNewCategoryOpen && !isNewSubcategoryOpen)) {
                  _context.next = 19;
                  break;
                }

                _context.prev = 4;
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/api/articles', articleBody);

              case 7:
                _ref2 = _context.sent;
                data = _ref2.data;
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  title: data.title,
                  color: data.category.color,
                  category: data.category.name,
                  action: "success"
                }), {
                  position: 'bottom-right'
                }); // clean up after article is added

                _this.props.onAddFormSubmit();

                _this.setState({
                  urlValue: '',
                  isNewCategoryOpen: 'true'
                });

                return _context.abrupt("return");

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](4);
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  action: "error"
                }), {
                  position: 'bottom-right'
                });
                return _context.abrupt("return");

              case 19:
                if (!(isNewSubcategoryOpen && !isNewCategoryOpen)) {
                  _context.next = 40;
                  break;
                }

                subcategoryBody = {
                  subcategory: {
                    name: subcategoryValue,
                    alias: Object(_helpers_getAlias__WEBPACK_IMPORTED_MODULE_24__["default"])(subcategoryValue)
                  }
                };
                _context.prev = 21;
                _context.next = 24;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/api/articles', articleBody);

              case 24:
                _ref3 = _context.sent;
                _data = _ref3.data;
                _context.next = 28;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.put("/api/categories/".concat(categoryValue._id), subcategoryBody);

              case 28:
                updatedCategory = _context.sent;
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  subcategory: _data.subcategory,
                  color: _data.category.color,
                  category: _data.category.name,
                  action: "newSubcategory"
                }), {
                  position: 'bottom-right'
                });
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  title: _data.title,
                  color: _data.category.color,
                  category: _data.category.name,
                  action: "success"
                }), {
                  position: 'bottom-right'
                }); // clean up after article is added

                _this.props.onAddFormSubmit();

                _this.setState({
                  categoryValue: _this.props.categories[0],
                  categoryColor: _this.props.categories[0].color,
                  subcategories: _this.props.categories[0].subcategories,
                  subcategoryValue: _this.props.categories[0].subcategories[0].name,
                  newCategoryValue: '',
                  isNewCategoryOpen: false,
                  isNewSubcategoryOpen: false,
                  urlValue: ''
                });

                return _context.abrupt("return");

              case 36:
                _context.prev = 36;
                _context.t1 = _context["catch"](21);
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  action: "error"
                }), {
                  position: 'bottom-right'
                });
                return _context.abrupt("return");

              case 40:
                if (!isNewCategoryOpen) {
                  _context.next = 62;
                  break;
                }

                // save new category to database
                categoryBody = {
                  name: newCategoryValue,
                  alias: Object(_helpers_getAlias__WEBPACK_IMPORTED_MODULE_24__["default"])(newCategoryValue),
                  color: categoryColor,
                  subcategory: {
                    name: subcategoryValue,
                    alias: Object(_helpers_getAlias__WEBPACK_IMPORTED_MODULE_24__["default"])(subcategoryValue)
                  },
                  userID: '5d3771a273caf9266425905b'
                };
                _context.prev = 42;
                _context.next = 45;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/api/categories/', categoryBody);

              case 45:
                newCategory = _context.sent;
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  color: newCategory.data.color,
                  category: newCategory.data.name,
                  action: "newCategory"
                }), {
                  position: 'bottom-right'
                });
                _articleBody = {
                  url: urlValue,
                  user: '5d3771a273caf9266425905b',
                  category: newCategory.data._id,
                  subcategory: subcategoryValue
                };
                _context.next = 50;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/api/articles', _articleBody);

              case 50:
                _ref4 = _context.sent;
                _data2 = _ref4.data;
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  title: _data2.title,
                  color: _data2.category.color,
                  category: _data2.category.name,
                  action: "success"
                }), {
                  position: 'bottom-right'
                }); // clean up after article is added

                _this.props.onAddFormSubmit();

                _this.setState({
                  categoryValue: _this.props.categories[0],
                  categoryColor: _this.props.categories[0].color,
                  subcategories: _this.props.categories[0].subcategories,
                  subcategoryValue: _this.props.categories[0].subcategories[0].name,
                  newCategoryValue: '',
                  isNewCategoryOpen: false,
                  isNewSubcategoryOpen: false,
                  urlValue: ''
                });

                return _context.abrupt("return");

              case 58:
                _context.prev = 58;
                _context.t2 = _context["catch"](42);
                toasted_notes__WEBPACK_IMPORTED_MODULE_11__["default"].notify(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notification_Notification__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  action: "error"
                }), {
                  position: 'bottom-right'
                });
                return _context.abrupt("return");

              case 62:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 15], [21, 36], [42, 58]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleUrlChange", function (e) {
      _this.setState({
        urlValue: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleCategoryChange", function (e) {
      // find current category object by id given in select value
      var categories = _this.props.categories;
      var currentCategory = categories.find(function (category) {
        return category._id === e.target.value;
      }); // if we're not going to add new subcategory then make first one default

      if (!_this.state.isNewSubcategoryOpen) {
        _this.setState({
          categoryValue: currentCategory,
          categoryColor: currentCategory.color,
          subcategories: currentCategory.subcategories,
          subcategoryValue: currentCategory.subcategories[0].name
        }); // if we're going to add new subcategory then do not change its value

      } else {
        _this.setState({
          categoryValue: currentCategory,
          categoryColor: currentCategory.color,
          subcategories: currentCategory.subcategories
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubcategoryChange", function (e) {
      _this.setState({
        subcategoryValue: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleNewCategoryChange", function (e) {
      _this.setState({
        newCategoryValue: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onNewSubcategoryClick", function (e) {
      if (_this.state.isNewSubcategoryOpen) {
        _this.setState({
          //state when subcategory is going to return to select
          isNewSubcategoryOpen: !_this.state.isNewSubcategoryOpen,
          subcategoryValue: _this.props.categories[0].subcategories[0].name
        });
      } else {
        _this.setState({
          // state when subcategory is going to be an input
          isNewSubcategoryOpen: !_this.state.isNewSubcategoryOpen,
          subcategoryValue: ''
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onNewCategoryClick", function (e) {
      if (_this.state.isNewCategoryOpen) {
        // state when category is going to return to select
        _this.setState({
          isNewCategoryOpen: !_this.state.isNewCategoryOpen,
          categoryColor: _this.props.categories[0].color,
          newCategoryValue: ''
        });
      } else {
        // state when category is going to be an input
        _this.setState({
          isNewCategoryOpen: !_this.state.isNewCategoryOpen,
          categoryColor: Object(_helpers_getRandomColor__WEBPACK_IMPORTED_MODULE_23__["default"])(),
          newCategoryValue: '',
          subcategoryValue: ''
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onCategoryColorClick", function (e) {
      if (_this.state.isNewCategoryOpen) {
        _this.setState({
          categoryColor: Object(_helpers_getRandomColor__WEBPACK_IMPORTED_MODULE_23__["default"])()
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getCategoryChoice", function (isNewCategoryOpen) {
      // if we're going to add new category make category-choice an input
      if (isNewCategoryOpen) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
          type: "text",
          name: "category-choice",
          placeholder: "New category name...",
          value: _this.state.newCategoryValue,
          onChange: _this.handleNewCategoryChange,
          thick: true
        }); // if we're not going to add new category than make category-choice a select
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Form_Select__WEBPACK_IMPORTED_MODULE_17__["default"], {
          name: "category-choice",
          onChange: _this.handleCategoryChange
        }, _this.props.categories.map(function (category) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            value: category._id,
            key: category._id
          }, category.name);
        }));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getSubcategoryChoice", function (isNewSubcategoryOpen, isNewCategoryOpen) {
      // if we're going to add new subcategory || category make subcategory-choice an input
      if (isNewSubcategoryOpen || isNewCategoryOpen) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
          type: "text",
          name: "subcategory-choice",
          placeholder: "New subcategory name...",
          value: _this.state.subcategoryValue,
          onChange: _this.handleSubcategoryChange,
          thick: true
        }); // if we're not going to add new category than make category-choice a select
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Form_Select__WEBPACK_IMPORTED_MODULE_17__["default"], {
          name: "subcategory-choice",
          onChange: _this.handleSubcategoryChange
        }, _this.state.subcategories.map(function (subcategory) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            value: subcategory.name,
            key: subcategory._id
          }, subcategory.name);
        }));
      }
    });

    _this.state = {
      categoryValue: null,
      newCategoryValue: '',
      subcategoryValue: '',
      urlValue: '',
      subcategories: [],
      categoryColor: '',
      isNewCategoryOpen: false,
      isNewSubcategoryOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddBar, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          isNewSubcategoryOpen = _this$state2.isNewSubcategoryOpen,
          isNewCategoryOpen = _this$state2.isNewCategoryOpen,
          categoryValue = _this$state2.categoryValue,
          categoryColor = _this$state2.categoryColor;
      var categoryChoice = this.getCategoryChoice(isNewCategoryOpen);
      var subcategoryChoice = this.getSubcategoryChoice(isNewSubcategoryOpen, isNewCategoryOpen);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Bar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isOpen: this.props.isOpen
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "text",
        name: "url",
        placeholder: "URL goes here https://...",
        value: this.state.urlValue,
        onChange: this.handleUrlChange,
        wide: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_CategoryColor__WEBPACK_IMPORTED_MODULE_20__["default"], {
        color: categoryColor,
        onClick: this.onCategoryColorClick,
        switchmode: isNewCategoryOpen
      }), categoryChoice, subcategoryChoice), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_AddCategory__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: this.onNewCategoryClick
      }, isNewCategoryOpen ? '< Existing category' : '+ New category'), !isNewCategoryOpen && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_AddCategory__WEBPACK_IMPORTED_MODULE_21__["default"], {
        onClick: this.onNewSubcategoryClick
      }, isNewSubcategoryOpen ? '< Existing subcategory' : '+ New subcategory'))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        style: {
          position: 'relative',
          display: 'inline-block'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SubmitInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        type: "submit",
        value: ""
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_svg_add_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: actionIconStyle,
        positionicon: positionIcon
      }))));
    }
  }]);

  return AddBar;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddBar);

/***/ })

})
//# sourceMappingURL=index.js.d8d03c795c9110d81576.hot-update.js.map