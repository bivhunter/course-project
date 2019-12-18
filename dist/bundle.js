/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ButtonComponent.js":
/*!*******************************************!*\
  !*** ./src/components/ButtonComponent.js ***!
  \*******************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eventService.js */ "./src/services/eventService.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _templates_button_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/button-template.js */ "./src/templates/button-template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ButtonComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonComponent, _Component);

  function ButtonComponent(props) {
    _classCallCheck(this, ButtonComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonComponent).call(this, props));
  }

  _createClass(ButtonComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_button_template_js__WEBPACK_IMPORTED_MODULE_2__["buttonTemplate"];
      this.render();
      this.setDataAttribute();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {}
  }, {
    key: "setDataAttribute",
    value: function setDataAttribute() {
      this.dataset.text = this.props.title;
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this);
      var button = document.createElement('button'); //console.log(this.props)

      button.classList.add(this.props.classStyle);
      button.textContent = this.props.title;
      this.shadowRoot.appendChild(button);
    }
  }]);

  return ButtonComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_1__["Component"]);
customElements.define("my-component-button", ButtonComponent);

/***/ }),

/***/ "./src/components/Component.js":
/*!*************************************!*\
  !*** ./src/components/Component.js ***!
  \*************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "default template";
var Component =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Component, _HTMLElement);

  function Component(props) {
    var _this;

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this));

    _this.attachShadow({
      mode: 'open'
    }); //this.template = template;


    _this.actionService = props.actionService;
    _this.eventService = props.eventService;
    _this.anchor = props.anchor;
    _this.props = props;

    _this.onInit(); //this.state = props.state;
    //this.props.anchor.appendChild(this);
    // this.render();


    return _this;
  }

  _createClass(Component, [{
    key: "connectedCallback",
    value: function connectedCallback() {// this.render();
      //this.addListeners();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      console.log('init ', this);
    }
  }, {
    key: "sendState",
    value: function sendState(componentList, state) {
      componentList.forEach(function (component) {
        return component.state = state;
      });
    }
    /*set styleUrl(url) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('type', 'text/css');
        linkElem.setAttribute('href', url);
        this.shadowRoot.append(linkElem);
        this._style = linkElem;
    }
      get style() {
        return this._style;
    }
    */

  }, {
    key: "state",
    set: function set(value) {
      this._state = _objectSpread({}, value);
      this.props.state = this._state;
      this.render();
    },
    get: function get() {
      return this._state;
    }
  }, {
    key: "props",
    set: function set(value) {
      this._props = _objectSpread({}, this.props, {}, value); // console.log(this, this._props);
    },
    get: function get() {
      return this._props;
    }
  }, {
    key: "template",
    set: function set(template) {
      this._template = template.content.cloneNode(true); // console.log('template', this._template, template )

      this.shadowRoot.appendChild(this._template);
    },
    get: function get() {
      return this._template;
    }
  }]);

  return Component;
}(_wrapNativeSuper(HTMLElement)); //customElements.define('my-component-task-list', Component);

/***/ }),

/***/ "./src/components/CounterComponent.js":
/*!********************************************!*\
  !*** ./src/components/CounterComponent.js ***!
  \********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eventService.js */ "./src/services/eventService.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _templates_counter_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/counter-template.js */ "./src/templates/counter-template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CounterComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CounterComponent, _Component);

  function CounterComponent(props) {
    _classCallCheck(this, CounterComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CounterComponent).call(this, props));
  }

  _createClass(CounterComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_counter_template_js__WEBPACK_IMPORTED_MODULE_2__["counterTemplate"];
      this.render();
      this.applyChanges();
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this);
      this.allTasks = this.shadowRoot.querySelector('.all-tasks');
      this.completedTasks = this.shadowRoot.querySelector('.completed-tasks');
      this.notCompletedTasks = this.shadowRoot.querySelector('.not-completed-tasks');
    }
  }, {
    key: "applyChanges",
    value: function applyChanges() {
      console.log(this.props);
      this.allTasks.textContent = this.props.state.countTasks.all;
      this.completedTasks.textContent = this.props.state.countTasks.completed;
      this.notCompletedTasks.textContent = this.props.state.countTasks.notCompleted;
    }
  }, {
    key: "state",
    set: function set(value) {
      this.props = _objectSpread({}, this.props, {
        state: value
      });
      this._state = _objectSpread({}, value);
      this.applyChanges();
    },
    get: function get() {
      return this._state;
    }
  }]);

  return CounterComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_1__["Component"]);
customElements.define('my-component-counter', CounterComponent);

/***/ }),

/***/ "./src/components/FilterComponent.js":
/*!*******************************************!*\
  !*** ./src/components/FilterComponent.js ***!
  \*******************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonComponent.js */ "./src/components/ButtonComponent.js");
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/eventService.js */ "./src/services/eventService.js");
/* harmony import */ var _templates_filter_template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/filter-template.js */ "./src/templates/filter-template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FilterComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(FilterComponent, _Component);

  function FilterComponent(props) {
    _classCallCheck(this, FilterComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilterComponent).call(this, props));
  }

  _createClass(FilterComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {}
  }, {
    key: "onInit",
    value: function onInit() {
      this.template = _templates_filter_template_js__WEBPACK_IMPORTED_MODULE_3__["filterTemplate"];
      this.render(); //this.addListeners();
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this);
      this.allButtonWrapper = this.shadowRoot.querySelector('.all-wrapper');
      this.doneButtonWrapper = this.shadowRoot.querySelector('.done-wrapper');
      this.notDoneButtonWrapper = this.shadowRoot.querySelector('.not-done-wrapper');
      this.allTasks = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]({
        title: 'All',
        classStyle: "all-filter-button",
        anchor: this.allButtonWrapper
      });
      this.doneTasks = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]({
        title: 'Done',
        classStyle: "done-filter-button",
        anchor: this.doneButtonWrapper
      });
      this.notDoneTasks = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]({
        title: 'Not Done',
        classStyle: "not-done-filter-button",
        anchor: this.notDoneButtonWrapper
      });
      this.addButtonListeners();
    }
  }, {
    key: "addButtonListeners",
    value: function addButtonListeners() {
      var _this = this;

      this.allTasks.addEventListener('click', function (event) {
        _this.actionService.dispatch("allFilter", _this.props);
      });
      this.doneTasks.addEventListener('click', function (event) {
        _this.actionService.dispatch("doneFilter", _this.props);
      });
      this.notDoneTasks.addEventListener('click', function (event) {
        _this.actionService.dispatch("notDoneFilter", _this.props);
      });
    }
  }, {
    key: "state",
    set: function set(value) {
      this.props.state = _objectSpread({}, value);
    },
    get: function get() {
      return this._state;
    }
  }]);

  return FilterComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);
customElements.define("my-component-filter", FilterComponent);

/***/ }),

/***/ "./src/components/InputComponent.js":
/*!******************************************!*\
  !*** ./src/components/InputComponent.js ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonComponent.js */ "./src/components/ButtonComponent.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _templates_input_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/input-template.js */ "./src/templates/input-template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var InputComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(InputComponent, _Component);

  function InputComponent(props) {
    _classCallCheck(this, InputComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputComponent).call(this, props));
  }

  _createClass(InputComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_input_template_js__WEBPACK_IMPORTED_MODULE_2__["inputTemplate"];
      this.render();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {//  this.addListeners();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.button.addEventListener('click', function (event) {
        _this.addTask();
      });
      this.textarea.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
          _this.addTask();
        }
      });
    }
  }, {
    key: "addTask",
    value: function addTask() {
      if (!this.textarea.value) {
        return;
      }

      this.props.actionService.dispatch('addTask', this.textarea.value); //eventBus.publish('addTask', this.textarea.value );

      this.textarea.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this);
      this.textarea = this.shadowRoot.querySelector('textarea');
      var buttonWrapper = this.shadowRoot.querySelector('.right-column');
      this.button = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]({
        title: 'Add task',
        anchor: buttonWrapper,
        classStyle: 'add-button'
      });
      this.addListeners();
    }
  }]);

  return InputComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_1__["Component"]);
customElements.define('my-component-input', InputComponent);

/***/ }),

/***/ "./src/components/LoginComponent.js":
/*!******************************************!*\
  !*** ./src/components/LoginComponent.js ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _templates_login_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/login-template.js */ "./src/templates/login-template.js");
/* harmony import */ var _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonComponent.js */ "./src/components/ButtonComponent.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var LoginComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginComponent, _Component);

  function LoginComponent(props) {
    _classCallCheck(this, LoginComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginComponent).call(this, props));
  }

  _createClass(LoginComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_login_template_js__WEBPACK_IMPORTED_MODULE_1__["loginTemplate"];
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this);
      this.emailInput = this.shadowRoot.querySelector('input[name="email"]');
      this.passwordInput = this.shadowRoot.querySelector('input[name="password"]');
      this.formElement = this.shadowRoot.querySelector('[name="login"]');
      var inButtonWrapper = this.shadowRoot.querySelector('.in-button');
      var outButtonWrapper = this.shadowRoot.querySelector('.up-button');
      this.submitButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]({
        title: 'Sign In',
        classStyle: "submit-button",
        anchor: inButtonWrapper
      });
      this.registerButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]({
        title: 'Sign Up',
        classStyle: "submit-button",
        anchor: outButtonWrapper
      });
      this.addButtonListeners();
    }
  }, {
    key: "addButtonListeners",
    value: function addButtonListeners() {
      var _this = this;

      this.submitButton.addEventListener('click', function () {
        _this.actionService.dispatch('signIn', {
          email: _this.emailInput.value,
          password: _this.passwordInput.value
        });
      });
      this.registerButton.addEventListener('click', function () {
        if (!_this.registerMode) {
          _this.userNameInput = _this.shadowRoot.querySelector('input[name="username"]');

          _this.userNameInput.classList.toggle('hide');

          var label = _this.shadowRoot.querySelector('.username');

          label.classList.toggle('hide');
          _this.registerMode = true;
        } else {
          _this.actionService.dispatch('signUp', {
            email: _this.emailInput.value,
            password: _this.passwordInput.value,
            username: _this.userNameInput.value
          });
        }
      });
    }
  }]);

  return LoginComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);
customElements.define("my-component-login", LoginComponent);

/***/ }),

/***/ "./src/components/TaskComponent.js":
/*!*****************************************!*\
  !*** ./src/components/TaskComponent.js ***!
  \*****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonComponent.js */ "./src/components/ButtonComponent.js");
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventService.js */ "./src/services/eventService.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _templates_task_template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/task-template.js */ "./src/templates/task-template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TaskComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TaskComponent, _Component);

  function TaskComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TaskComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TaskComponent).call(this, props));
  }

  _createClass(TaskComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_task_template_js__WEBPACK_IMPORTED_MODULE_3__["taskTemplate"];
      this.render();
      this.setDataAttribute();
    }
  }, {
    key: "setDataAttribute",
    value: function setDataAttribute() {
      this.dataset._id = this.props.task._id;
      this.dataset.completed = this.props.task.completed;
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.addEventListener('mouseover', function () {
        _this.renderButton();

        _this.addButtonListeners();
      });
      this.addEventListener('mouseout', this.removeButton.bind(this));
      this.addEventListener('click', function (event) {
        return _this.clickListener(event);
      });
    }
  }, {
    key: "clickListener",
    value: function clickListener(event) {
      if (event.composedPath()[0].tagName === "BUTTON") {
        return;
      }

      this.actionService.dispatch("startEditTask", this.props.task);
    }
  }, {
    key: "addButtonListeners",
    value: function addButtonListeners() {
      var _this2 = this;

      this.deleteButton.addEventListener('click', function (event) {
        console.log(_this2.props);

        _this2.actionService.dispatch("deletedTask", _this2.props.task._id);
      });
      this.doneButton.addEventListener('click', function (event) {
        _this2.actionService.dispatch("doneTask", _this2.props.task);
      });
    }
  }, {
    key: "removeButton",
    value: function removeButton() {
      this.deleteButtonWrapper.removeChild(this.deleteButton);
      this.doneButtonWrapper.removeChild(this.doneButton);
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this);
      this.shadowRoot.querySelector('p').textContent = this.props.task.text;
      this.addListeners(); // this.leftColumn = this.shadowRoot.querySelector('.left-column');
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      this.doneButtonWrapper = this.shadowRoot.querySelector('.done-button-wrapper');
      this.deleteButtonWrapper = this.shadowRoot.querySelector('.delete-button-wrapper');
      this.deleteButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]({
        title: 'Delete',
        classStyle: "delete-button",
        anchor: this.deleteButtonWrapper
      });

      if (this.props.task.completed) {
        this.doneButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]({
          title: 'Not todo',
          classStyle: 'not-todo-button',
          anchor: this.doneButtonWrapper
        });
      } else {
        this.doneButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]({
          title: 'Todo',
          classStyle: 'todo-button',
          anchor: this.doneButtonWrapper
        });
      }
    }
  }]);

  return TaskComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_2__["Component"]);
customElements.define("my-component-task", TaskComponent);

/***/ }),

/***/ "./src/components/TaskListComponent.js":
/*!*********************************************!*\
  !*** ./src/components/TaskListComponent.js ***!
  \*********************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _TaskComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskComponent.js */ "./src/components/TaskComponent.js");
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventService.js */ "./src/services/eventService.js");
/* harmony import */ var _textAreaComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textAreaComponent.js */ "./src/components/textAreaComponent.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _templates_task_list_template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/task-list-template.js */ "./src/templates/task-list-template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TaskListComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TaskListComponent, _Component);

  function TaskListComponent(props) {
    _classCallCheck(this, TaskListComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TaskListComponent).call(this, props)); //this.template = template;
  }

  _createClass(TaskListComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_task_list_template_js__WEBPACK_IMPORTED_MODULE_4__["taskListTemplate"];
      console.log(this.props, 'tasklist props');
      this.render();
      /*this.attachShadow({mode: 'open'});
      this.addListeners();*/
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.addEventListener('click', this.clickListener.bind(this));
      /* eventBus.subscribe('responseSuccessful', (data) => {
           this.props.taskList = data;
           this.renderList();
       });*/

      _services_eventService_js__WEBPACK_IMPORTED_MODULE_1__["eventBus"].subscribe('cancelEditing', function (task) {
        _this.editingLi.innerHTML = "";

        _this.editingLi.appendChild(new _TaskComponent_js__WEBPACK_IMPORTED_MODULE_0__["TaskComponent"]({
          task: task
        }));
      });
    }
  }, {
    key: "clickListener",
    value: function clickListener(event) {
      var _this2 = this;

      //console.log(event.target);
      //console.log(event.currentTarget);
      var targetList = event.composedPath();

      if (targetList[0].tagName === "BUTTON") {
        return;
      }

      var taskComponent = targetList.find(function (item) {
        return item.tagName === "MY-COMPONENT-TASK";
      });

      if (!taskComponent) {
        return;
      }

      this.editingLi = targetList.find(function (item) {
        return item.tagName === "LI";
      });
      this.textArea = new _textAreaComponent_js__WEBPACK_IMPORTED_MODULE_2__["TextAreaComponent"]({
        task: taskComponent.props.task
      });
      requestAnimationFrame(function () {
        _this2.editingLi.replaceChild(_this2.textArea, taskComponent);
      });
      this.textArea.focus();
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this);
      this.ul = this.shadowRoot.querySelector('ul');
      this.renderList();
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this3 = this;

      //console.log(this.shadowRoot)
      this.ul.innerHTML = '';
      this.props.state.todoView.forEach(function (task) {
        _this3.addTask(task);
      });
    }
  }, {
    key: "addTask",
    value: function addTask(task) {
      var li = document.createElement('li');

      if (task.editing) {
        var taskComponent = new _textAreaComponent_js__WEBPACK_IMPORTED_MODULE_2__["TextAreaComponent"](_objectSpread({}, this.props, {
          anchor: li,
          task: task
        }));
      } else {
        var _taskComponent = new _TaskComponent_js__WEBPACK_IMPORTED_MODULE_0__["TaskComponent"](_objectSpread({}, this.props, {
          anchor: li,
          task: task
        }));
      }

      this.ul.appendChild(li);
    }
  }]);

  return TaskListComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_3__["Component"]);
customElements.define('my-component-task-list', TaskListComponent);

/***/ }),

/***/ "./src/components/TodoComponent.js":
/*!*****************************************!*\
  !*** ./src/components/TodoComponent.js ***!
  \*****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eventService.js */ "./src/services/eventService.js");
/* harmony import */ var _TaskListComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListComponent.js */ "./src/components/TaskListComponent.js");
/* harmony import */ var _InputComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputComponent.js */ "./src/components/InputComponent.js");
/* harmony import */ var _FilterComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterComponent.js */ "./src/components/FilterComponent.js");
/* harmony import */ var _CounterComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CounterComponent.js */ "./src/components/CounterComponent.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _templates_todo_template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/todo-template.js */ "./src/templates/todo-template.js");
/* harmony import */ var _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonComponent.js */ "./src/components/ButtonComponent.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var TodoComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TodoComponent, _Component);

  function TodoComponent(props) {
    _classCallCheck(this, TodoComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoComponent).call(this, props));
  }

  _createClass(TodoComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_todo_template_js__WEBPACK_IMPORTED_MODULE_6__["todoTemplate"];
      console.log('initTodoComponent');
      this.actionService.dispatch('initTodoComponent'); //this.render();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {// addEventListener();
    }
  }, {
    key: "render",
    value: function render() {
      this.anchor.appendChild(this); // const leftColumn = this.shadowRoot.querySelector('.left-column');

      var rightColumn = this.shadowRoot.querySelector('.right-column');
      var todoListWrapper = this.shadowRoot.querySelector('.todo-list-wrapper');
      var inputWrapper = this.shadowRoot.querySelector('.input-wrapper');
      var filterWrapper = this.shadowRoot.querySelector('.filter-wrapper');
      var signOutWrapper = this.shadowRoot.querySelector('.sign-out-wrapper'); //console.log(this.shadowRoot);

      var input = new _InputComponent_js__WEBPACK_IMPORTED_MODULE_2__["InputComponent"](_objectSpread({}, this.props, {
        anchor: inputWrapper
      }));
      this.taskList = new _TaskListComponent_js__WEBPACK_IMPORTED_MODULE_1__["TaskListComponent"](_objectSpread({}, this.props, {
        anchor: todoListWrapper
      }));
      this.filter = new _FilterComponent_js__WEBPACK_IMPORTED_MODULE_3__["FilterComponent"](_objectSpread({}, this.props, {
        anchor: filterWrapper
      }));
      this.counter = new _CounterComponent_js__WEBPACK_IMPORTED_MODULE_4__["CounterComponent"](_objectSpread({}, this.props, {
        anchor: rightColumn
      }));
      this.signOutButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]({
        title: 'Sign Out',
        classStyle: "sign-out-button",
        anchor: signOutWrapper
      });
      this.addListeners();
    }
  }, {
    key: "applyChanges",
    value: function applyChanges(state) {
      if (!this.isInit) {
        this.isInit = true;
        this.render();
      }

      this.taskList.state = _objectSpread({}, state);
      this.filter.state = _objectSpread({}, state);
      this.counter.state = _objectSpread({}, state);
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.signOutButton.addEventListener('click', function () {
        _this.actionService.dispatch('signOut');
      });
    }
  }, {
    key: "state",
    set: function set(value) {
      this._state = _objectSpread({}, value);
      this.props.state = this._state;
      this.applyChanges(value);
    }
  }]);

  return TodoComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_5__["Component"]);
customElements.define('my-component-todo', TodoComponent);

/***/ }),

/***/ "./src/components/textAreaComponent.js":
/*!*********************************************!*\
  !*** ./src/components/textAreaComponent.js ***!
  \*********************************************/
/*! exports provided: TextAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaComponent", function() { return TextAreaComponent; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ "./src/components/Component.js");
/* harmony import */ var _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonComponent.js */ "./src/components/ButtonComponent.js");
/* harmony import */ var _templates_textarea_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/textarea-template.js */ "./src/templates/textarea-template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TextAreaComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TextAreaComponent, _Component);

  function TextAreaComponent(props) {
    _classCallCheck(this, TextAreaComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextAreaComponent).call(this, props));
  }

  _createClass(TextAreaComponent, [{
    key: "onInit",
    value: function onInit() {
      this.template = _templates_textarea_template_js__WEBPACK_IMPORTED_MODULE_2__["textareaTemplate"];
      this.render();
      this.setDataAttribute();
    }
  }, {
    key: "setDataAttribute",
    value: function setDataAttribute() {
      this.dataset._id = this.props.task._id;
      this.dataset.completed = this.props.task.completed;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.anchor.appendChild(this);
      this.textarea = this.shadowRoot.querySelector('textarea');
      this.textarea.value = this.props.task.text;
      setTimeout(function () {
        _this.textarea.focus();
      }, 0);
      this.saveButtonWrapper = this.shadowRoot.querySelector('.save-button-wrapper');
      this.cancelButtonWrapper = this.shadowRoot.querySelector('.cancel-button-wrapper');
      this.renderButton();
      this.addButtonListeners();
      this.addListeners();
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      this.saveButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]({
        title: 'Save',
        classStyle: 'save-button',
        anchor: this.saveButtonWrapper
      });
      this.cancelButton = new _ButtonComponent_js__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]({
        title: 'Cancel',
        classStyle: 'cancel-button',
        anchor: this.cancelButtonWrapper
      });
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this2 = this;

      this.addEventListener('mouseleave', function (e) {
        _this2.actionService.dispatch("endEditTask", _this2.props.task);
      });
      this.textarea.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
          event.preventDefault();

          _this2.actionService.dispatch("endEditTask", _objectSpread({}, _this2.props.task, {
            title: _this2.textarea.value
          }));
        }
      });
    }
  }, {
    key: "addButtonListeners",
    value: function addButtonListeners() {
      var _this3 = this;

      this.saveButton.addEventListener('click', function (event) {
        _this3.actionService.dispatch("endEditTask", _objectSpread({}, _this3.props.task, {
          title: _this3.textarea.value
        }));
      });
      this.cancelButton.addEventListener('click', function (event) {
        _this3.actionService.dispatch("endEditTask", _this3.props.task);
      });
    }
  }]);

  return TextAreaComponent;
}(_Component_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);
customElements.define("my-component-textarea", TextAreaComponent);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_CounterService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/CounterService.js */ "./src/services/CounterService.js");
/* harmony import */ var _components_TaskComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TaskComponent.js */ "./src/components/TaskComponent.js");
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/eventService.js */ "./src/services/eventService.js");
/* harmony import */ var _components_TodoComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TodoComponent.js */ "./src/components/TodoComponent.js");
/* harmony import */ var _services_requestService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/requestService.js */ "./src/services/requestService.js");
/* harmony import */ var _services_actionService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/actionService.js */ "./src/services/actionService.js");
/* harmony import */ var _store_reducers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducers.js */ "./src/store/reducers.js");
/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store.js */ "./src/store/store.js");
/* harmony import */ var _services_routeService_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/routeService.js */ "./src/services/routeService.js");







 //import styles from "./css/TaskList.css";


var url = 'https://todo-app-back.herokuapp.com';
var requestService = new _services_requestService_js__WEBPACK_IMPORTED_MODULE_4__["RequestService"](url);
var eventService = new _services_eventService_js__WEBPACK_IMPORTED_MODULE_2__["EventService"]();
var application = document.getElementById('app');
var reducers = Object(_store_reducers_js__WEBPACK_IMPORTED_MODULE_6__["createReducers"])();
var store = new _store_store_js__WEBPACK_IMPORTED_MODULE_7__["Store"]({
  reducers: reducers,
  eventService: eventService
});
var actionService = new _services_actionService_js__WEBPACK_IMPORTED_MODULE_5__["ActionServices"]({
  requestService: requestService,
  store: store
});
window.addEventListener('hashchange ', function (e) {
  alert('hashchange');
});
var router = new _services_routeService_js__WEBPACK_IMPORTED_MODULE_8__["RouteService"]({
  actionService: actionService,
  eventService: eventService,
  requestService: requestService,
  anchor: application,
  state: {
    route: 'todo'
  }
});

window.onpopstate = function (state) {
  return console.log(state);
};
/*
const todoComponent = new TodoComponent({
    eventService,
    actionService,
    anchor: div,
    state: {
        todoView: [{
            title: 'No tasks'
        }],
        countTasks: {all: 0, completed: 0, notCompleted: 0},
    },
});
*/
//const div = document.createElement('div');
//div.appendChild(todoComponent);

/*
const generateId = () => String(Math.round(Date.now() * Math.random()));



const todo1 = new TaskComponent({
    name: 'todo1',
    id: generateId(),
});

const todo2 = document.createElement('my-component-task');
todo2.props = {
    name: 'todo2',
    id: generateId(),
};

div.appendChild(todo1);
div.appendChild(todo2);
*/

/*dataService.getData()
    .then((data) => {
        console.log(data);
    });*/

/*

setTimeout(() => {
    todo2.remove();
}, 3000);
*/

/***/ }),

/***/ "./src/services/CounterService.js":
/*!****************************************!*\
  !*** ./src/services/CounterService.js ***!
  \****************************************/
/*! exports provided: counterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterService", function() { return counterService; });
/* harmony import */ var _eventService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventService.js */ "./src/services/eventService.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CounterService =
/*#__PURE__*/
function () {
  function CounterService() {
    _classCallCheck(this, CounterService);

    this.onInit();
  }

  _createClass(CounterService, [{
    key: "onInit",
    value: function onInit() {
      this.addListeners();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      _eventService_js__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe("changedData", function (data) {
        var res = _this.countTasks(data);

        _eventService_js__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish('countedTasks', res);
      });
    }
  }, {
    key: "countTasks",
    value: function countTasks(taskList) {
      var doneNum = 0,
          notDoneNum = 0;
      console.log(taskList);
      taskList.forEach(function (item) {
        if (item.completed) {
          doneNum++;
        } else {
          notDoneNum++;
        }
      });
      return {
        allNum: taskList.length,
        doneNum: doneNum,
        notDoneNum: notDoneNum
      };
    }
  }]);

  return CounterService;
}();

var counterService = new CounterService();

/***/ }),

/***/ "./src/services/actionService.js":
/*!***************************************!*\
  !*** ./src/services/actionService.js ***!
  \***************************************/
/*! exports provided: ActionServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionServices", function() { return ActionServices; });
/* harmony import */ var _eventService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventService.js */ "./src/services/eventService.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var ActionServices =
/*#__PURE__*/
function () {
  function ActionServices(props) {
    _classCallCheck(this, ActionServices);

    this.store = props.store;
    this.requestService = props.requestService; //this.eventService = props.eventService;

    this.initHandlers();
    this.onInit();
  }

  _createClass(ActionServices, [{
    key: "onInit",
    value: function onInit() {
      console.log('init actionService');
      this.dispatch('initApplication', '');
    }
  }, {
    key: "initHandlers",
    value: function initHandlers() {
      var _this = this;

      this.handlers = {
        'addTask': function addTask(text) {
          return _this.addTask({
            text: text,
            completed: false
          });
        },
        'initTodoComponent': function initTodoComponent() {
          return _this.getTaskList();
        },
        'applicationInit': function applicationInit() {
          return _this.checkAuthorization();
        },
        'deletedTask': function deletedTask(id) {
          return _this.deleteTask(id);
        },
        'doneTask': function doneTask(task) {
          return _this.changeTask(_objectSpread({}, task, {
            completed: !task.completed
          }));
        },
        'startEditTask': function startEditTask(task) {
          return _this.changeTaskLocal(_objectSpread({}, task, {
            editing: true
          }));
        },

        /*'cancelEditTask': (task) => {
            delete task.editing;
            this.changeTaskLocal({...task});
        },*/
        'endEditTask': function endEditTask(task) {
          delete task.editing;

          _this.changeTaskLocal(_objectSpread({}, task));
        },
        'allFilter': function allFilter() {
          return _this.tasksFilter('allTasks');
        },
        'doneFilter': function doneFilter() {
          return _this.tasksFilter('doneTasks');
        },
        'notDoneFilter': function notDoneFilter() {
          return _this.tasksFilter('notDoneTasks');
        },
        'signIn': function signIn(data) {
          return _this.signIn(data);
        },
        'signOut': function signOut() {
          return _this.signOut();
        },
        'signUp': function signUp(data) {
          return _this.signUp(data);
        }
      };
    }
  }, {
    key: "dispatch",
    value: function dispatch(action, payload) {
      if (this.handlers[action]) {
        var start = performance.now(); // console.log('dispatch actionService', action, payload);

        this.handlers[action](payload);
        console.log('handlers', performance.now() - start);
      }
    }
  }, {
    key: "checkAuthorization",
    value: function checkAuthorization() {}
  }, {
    key: "getTaskList",
    value: function getTaskList() {
      var _this2 = this;

      //console.log('getTaskList')
      this.requestService.get().then(function (data) {
        return _this2.store.dispatch('INIT_TODO', data);
      });
    }
  }, {
    key: "addTask",
    value: function addTask(task) {
      var _this3 = this;

      this.requestService.post(task).then(function (data) {
        _this3.store.dispatch('ADD_TODO', data);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      var _this4 = this;

      this.requestService["delete"](id).then(function () {
        return _this4.store.dispatch('DELETE_TODO', id);
      });
    }
  }, {
    key: "changeTask",
    value: function changeTask(task) {
      var _this5 = this;

      console.log('changeTask', task);
      this.requestService.put(task).then(function (task) {
        return _this5.store.dispatch('CHANGE_TODO', task);
      });
    }
  }, {
    key: "changeTaskLocal",
    value: function changeTaskLocal(task) {
      this.store.dispatch('CHANGE_TODO', task);
    }
  }, {
    key: "tasksFilter",
    value: function tasksFilter(method) {
      this.store.dispatch('FILTER', method);
    }
  }, {
    key: "signIn",
    value: function signIn(data) {
      var _this6 = this;

      this.requestService.signIn(data).then(function (res) {
        localStorage.setItem('token', res.token);
        _this6.requestService.token = res.token;

        _this6.store.dispatch('SIGN_IN', res.token);

        console.log(res.token);
      })["catch"](function (error) {
        return console.log(error);
      });
      console.log(data);
    }
  }, {
    key: "signOut",
    value: function signOut() {
      localStorage.removeItem('token');
      this.store.dispatch('SIGN_OUT');
    }
  }, {
    key: "signUp",
    value: function signUp(data) {
      var _this7 = this;

      console.log(data);
      this.requestService.signUp(data).then(function (res) {
        localStorage.setItem('token', res.token);
        _this7.requestService.token = res.token;

        _this7.store.dispatch('SIGN_IN', res.token);

        console.log(res.error);
      })["catch"](function (error) {
        return error.then(function (res) {
          return console.log(res.error);
        });
      });
    }
  }]);

  return ActionServices;
}();

/***/ }),

/***/ "./src/services/eventService.js":
/*!**************************************!*\
  !*** ./src/services/eventService.js ***!
  \**************************************/
/*! exports provided: EventService, eventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventBus", function() { return eventBus; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventService =
/*#__PURE__*/
function () {
  function EventService() {
    _classCallCheck(this, EventService);

    this.channels = {};
  }

  _createClass(EventService, [{
    key: "subscribe",
    value: function subscribe(channel, fn) {
      if (!this.channels[channel]) {
        this.channels[channel] = [];
      }

      this.channels[channel].push(fn);
    }
  }, {
    key: "unSubscribe",
    value: function unSubscribe(channel, fn) {
      if (!this.channels[channel]) {
        return;
      }

      this.channels[channel] = this.channels[channel].filter(function (item) {
        return item !== fn;
      });
    }
  }, {
    key: "publish",
    value: function publish(channel, message) {
      if (!this.channels[channel] || !this.channels[channel].length) {
        return;
      }

      this.channels[channel].forEach(function (item) {
        item(message);
      });
    }
  }]);

  return EventService;
}();
var eventBus = new EventService();

/***/ }),

/***/ "./src/services/requestService.js":
/*!****************************************!*\
  !*** ./src/services/requestService.js ***!
  \****************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RequestService =
/*#__PURE__*/
function () {
  function RequestService(url) {
    _classCallCheck(this, RequestService);

    this.url = url;
    this.token = localStorage.getItem('token');
    console.log('init requestService');
  }

  _createClass(RequestService, [{
    key: "checkAuthorization",
    value: function checkAuthorization(token) {
      return fetch("".concat(this.url, "/me"), {
        method: 'GET',
        headers: {
          'Authorization': token
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("File not found");
        }

        return response.json();
      });
    }
  }, {
    key: "post",
    value: function post(task) {
      console.log(task, 'task', this.token);
      return fetch("".concat(this.url, "/todos"), {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'Authorization': this.token
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("File not found");
        }

        return response.json();
      });
    }
  }, {
    key: "get",
    value: function get() {
      //console.log(this.token);
      return fetch("".concat(this.url, "/todos"), {
        method: 'GET',
        headers: {
          'Authorization': this.token
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("File not found");
        }

        return response.json();
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return fetch("".concat(this.url, "/todos/").concat(id), {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'Authorization': this.token
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("File not found");
        }
      });
    }
  }, {
    key: "put",
    value: function put(task) {
      return fetch("".concat(this.url, "/todos/").concat(task._id), {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'Authorization': this.token
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("File not found");
        }

        return response.json();
      });
    }
  }, {
    key: "signIn",
    value: function signIn(data) {
      return fetch("".concat(this.url, "/login"), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("File not found");
        }

        return response.json();
      });
    }
  }, {
    key: "signUp",
    value: function signUp(data) {
      return fetch("".concat(this.url, "/register"), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(function (response) {
        if (!response.ok) {
          throw response.json();
        }

        return response.json();
      });
    }
  }]);

  return RequestService;
}();

/***/ }),

/***/ "./src/services/routeService.js":
/*!**************************************!*\
  !*** ./src/services/routeService.js ***!
  \**************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _components_TodoComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TodoComponent.js */ "./src/components/TodoComponent.js");
/* harmony import */ var _components_LoginComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LoginComponent.js */ "./src/components/LoginComponent.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var routerConfig = {
  'login': {
    url: 'todo-app/login',
    component: _components_LoginComponent_js__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    route: 'login'
  },
  'todo': {
    url: 'todo-app',
    component: _components_TodoComponent_js__WEBPACK_IMPORTED_MODULE_0__["TodoComponent"],
    route: 'todo'
  }
};
var RouteService =
/*#__PURE__*/
function () {
  function RouteService(props) {
    _classCallCheck(this, RouteService);

    this.props = props;
    this.requestService = props.requestService;
    this.actionService = props.actionService;
    this.anchor = props.anchor;
    this.routerConfig = routerConfig;
    this.eventService = props.eventService;
    this.state = props.state;
    this.onInit();
    this.addListeners();
  }

  _createClass(RouteService, [{
    key: "onInit",
    value: function onInit() {
      var _this = this;

      this.requestService.checkAuthorization(localStorage.getItem('token')).then(function (res) {
        console.log(res);

        _this.changeRoute('todo');
      })["catch"](function (error) {
        console.log(error);

        _this.changeRoute('login');
      });
    }
  }, {
    key: "changeRoute",
    value: function changeRoute(route) {
      this.currentRoute = this.routerConfig[route];

      if (!this.currentRoute) {
        return;
      }

      if (!this.currentComponent) {
        console.log(this.currentRoute.component);
        this.currentComponent = new this.currentRoute.component(this.props);
      } else {
        this.anchor.innerHTML = '';
        this.currentComponent = new this.currentRoute.component(this.props);
      } //window.history.pushState(this.currentRoute.route, '', this.currentRoute.url);

    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this2 = this;

      this.eventService.subscribe('stateChanged', function (state) {
        _this2.state = state;

        if (state.route === _this2.currentRoute.route) {
          _this2.currentComponent.state = _objectSpread({}, state);
        } else {
          _this2.changeRoute(state.route);
        }
      });
    }
  }, {
    key: "state",
    set: function set(value) {
      this._state = _objectSpread({}, this.state, {}, value);
    },
    get: function get() {
      return this._state;
    }
  }]);

  return RouteService;
}();

/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/*! exports provided: createReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return createReducers; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createReducers() {
  return {
    'INIT_TODO': function INIT_TODO(payLoad, state) {
      return _objectSpread({}, state, {
        todoList: _toConsumableArray(payLoad),
        todoView: _toConsumableArray(payLoad),
        filterMethod: "allTasks",
        countTasks: calculateTasks(_toConsumableArray(payLoad)),
        route: 'todo'
      });
    },
    'ADD_TODO': function ADD_TODO(payLoad, state) {
      var todoList = [payLoad].concat(_toConsumableArray(state.todoList));
      return _objectSpread({}, state, {
        todoList: todoList,
        todoView: applyFilter(todoList, state.filterMethod),
        countTasks: calculateTasks(todoList)
      });
    },
    'DELETE_TODO': function DELETE_TODO(payLoad, state) {
      var todoList = _toConsumableArray(state.todoList.filter(function (item) {
        return item._id !== payLoad;
      }));

      return _objectSpread({}, state, {
        todoList: todoList,
        todoView: applyFilter(todoList, state.filterMethod),
        countTasks: calculateTasks(todoList)
      });
    },
    'CHANGE_TODO': function CHANGE_TODO(payload, state) {
      var todoList = _toConsumableArray(state.todoList.map(function (item) {
        if (item._id === payload._id) {
          return payload;
        }

        return item;
      }));

      return _objectSpread({}, state, {
        todoList: todoList,
        todoView: applyFilter(todoList, state.filterMethod),
        countTasks: calculateTasks(todoList)
      });
    },
    'FILTER': function FILTER(method, state) {
      return _objectSpread({}, state, {
        filterMethod: method,
        todoView: applyFilter(state.todoList, method)
      });
    },
    'SIGN_IN': function SIGN_IN(token, state) {
      return _objectSpread({}, state, {
        token: token,
        route: 'todo'
      });
    },
    'SIGN_OUT': function SIGN_OUT(payload, sate) {
      return _objectSpread({}, sate, {
        route: 'login'
      });
    }
  };
}

function applyFilter(todoList, method) {
  switch (method) {
    case 'allTasks':
      return _toConsumableArray(todoList);
      break;

    case 'doneTasks':
      return _toConsumableArray(todoList.filter(function (item) {
        return item.completed;
      }));
      break;

    case 'notDoneTasks':
      return _toConsumableArray(todoList.filter(function (item) {
        return !item.completed;
      }));
      break;
  }
}

function calculateTasks(taskList) {
  var allTasksNumber = taskList.length;
  var doneTasksNumber = 0;
  var notDoneTasksNumber = 0;
  taskList.forEach(function (task) {
    if (task.completed) {
      doneTasksNumber++;
    } else {
      notDoneTasksNumber++;
    }
  });
  return {
    all: allTasksNumber,
    completed: doneTasksNumber,
    notCompleted: notDoneTasksNumber
  };
}

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var _services_eventService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eventService.js */ "./src/services/eventService.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Store =
/*#__PURE__*/
function () {
  function Store(props) {
    _classCallCheck(this, Store);

    this.reducers = props.reducers;
    this.eventService = props.eventService;
    this.state = {
      todoList: [],
      todoView: []
    };
  }

  _createClass(Store, [{
    key: "dispatch",
    value: function dispatch(actionType, payload) {
      if (this.reducers[actionType]) {
        this.state = this.reducers[actionType](payload, this.state);
      }

      console.log(this.state);
      this.eventService.publish('stateChanged', this.state);
    }
  }]);

  return Store;
}();

/***/ }),

/***/ "./src/templates/button-template.js":
/*!******************************************!*\
  !*** ./src/templates/button-template.js ***!
  \******************************************/
/*! exports provided: buttonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonTemplate", function() { return buttonTemplate; });
var buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = "\n\t<style>\n\tbutton{\n    transition-duration: 0.6s;\n    cursor: pointer;\n}\n.delete-button, .cancel-button, .not-done-filter-button{\n    background-color: white;\n    color: black;\n    border: 2px solid red; \n}\n\n.delete-button:hover, .cancel-button:hover, .not-done-filter-button:hover {\n    background-color: red; \n    color: white;\n}\n\n.not-todo-button, .all-filter-button{\n    background-color: white;\n    color: black;\n    border: 2px solid blue; \n}\n\n.not-todo-button:hover, .all-filter-button:hover {\n    background-color: blue; \n    color: white;\n}\n\n\n\n.todo-button, .save-button, .add-button, .done-filter-button{\n    background-color: white;\n    color: black;\n    border: 2px solid green; \n}\n\n.todo-button:hover, .save-button:hover, .add-button:hover, .done-filter-button:hover {\n    background-color: green; \n    color: white;\n}\n\n.submit-button{\n    font-size: 20px;\n    height: 40px;\n    box-sizing: border-box;\n    padding: 0 20px 0 20px;\n    display: block;\n    margin: 30px auto 10px auto; \n    border: 3px #B99E7E groove;\n    border-radius: 4px;\n    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n    background-color: white;\n    color: #715636;\n    color: #715636;\n    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n}\n\n.submit-button:hover {\n    background-color: #B99E7E; \n    color: white;\n}\n\t</style>\n\t\n";

/***/ }),

/***/ "./src/templates/counter-template.js":
/*!*******************************************!*\
  !*** ./src/templates/counter-template.js ***!
  \*******************************************/
/*! exports provided: counterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterTemplate", function() { return counterTemplate; });
var counterTemplate = document.createElement('template');
counterTemplate.innerHTML = "\n<style>\n    td {\n        padding: 10px;\n    }\n</style>\n<div>\n    <table>\n    \t<tr>\n    \t\t<td>All tasks</td>\n    \t\t<td class=\"all-tasks\"></td>\n    \t</tr>\n    \t<tr>\n    \t\t<td>Completed tasks</td>\n    \t\t<td class=\"completed-tasks\"></td>\n    \t</tr>\n    \t<tr>\n    \t\t<td>Not completed tasks</td>\n    \t\t<td class=\"not-completed-tasks\"></td>\n    \t</tr>\n        \n\t</table>\n</div>    \n";

/***/ }),

/***/ "./src/templates/filter-template.js":
/*!******************************************!*\
  !*** ./src/templates/filter-template.js ***!
  \******************************************/
/*! exports provided: filterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate", function() { return filterTemplate; });
var filterTemplate = document.createElement('template');
filterTemplate.innerHTML = "\n    <style>\n    td {\n        outline: blue 1px groove;\n    }\n</style>\n    <div class=\"wrapper\">\n        <h2>Filter Tasks</h2>\n        <table>\n            <tr>\n                <td class=\"all-wrapper\"></td>\n                <td class=\"done-wrapper\"></td>\n                <td class=\"not-done-wrapper\"></td>\n            </tr>    \n        </table>    \n    </div>    \n";

/***/ }),

/***/ "./src/templates/input-template.js":
/*!*****************************************!*\
  !*** ./src/templates/input-template.js ***!
  \*****************************************/
/*! exports provided: inputTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTemplate", function() { return inputTemplate; });
var inputTemplate = document.createElement('template');
inputTemplate.innerHTML = "\n<style>\n    \n    .wrapper{\n     height: 60px;\n     margin: 10px 0 10px 0;\n     \n    }\n    \n    .left-column{\n        width: 80%;\n        float: left;\n        border: 3px #B99E7E groove;  \n        box-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n        background: #FFE4C4;\n        \n    }\n\n    .right-column{\n        /*float: right;*/\n        margin: 320px;\n        display: table-cell;\n        vertical-align: middle;\n        text-align: center;\n        height: 60px;\n        width: 20%;\n    }\n    \n    textarea{\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    padding: 10px;\n    margin: 0;\n    border: none;\n    outline: none;\n    resize: none;\n    background: inherit;\n    font: inherit;\n}\n\n.left-column:hover{\nbackground: #F2D7B7;\n}\n    \n</style>\n    \n    <div class=\"wrapper\">\n        <div class=\"left-column\">\n            <textarea ></textarea>\n        </div>\n        <div class=\"right-column\"></div>\n    </div>\n\n";

/***/ }),

/***/ "./src/templates/login-template.js":
/*!*****************************************!*\
  !*** ./src/templates/login-template.js ***!
  \*****************************************/
/*! exports provided: loginTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginTemplate", function() { return loginTemplate; });
var loginTemplate = document.createElement('template');
loginTemplate.innerHTML = "\n\t<style>\n\t\t.form-wrapper{\n\t\t\t\theight: 600px;\n\t\t\t\twidth: 600px;\n\t\t\t\tmargin: 10px auto 10px auto;\n\t\t\t\tdisplay: table-cell;\n\t\t\t\tvertical-align: middle;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\nh1{\n\tfont-size: 40px;\n\ttext-align: center;\n\tmargin:20px;\n\tcolor: #715636;\n\ttext-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n}\n\ninput:hover{\n\tbackground: #E7CCAC;\n}\ninput:focus{\n\toutline: 3px #B99E7E groove;\n\tborder: 3px #B99E7E groove;\n}\n\ninput:-webkit-autofill{\n\tbackground: #E7CCAC\n}\n\n\nlabel, input {\n\tcolor: #715636;\n\ttext-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n\t\t\t\tfont-size: 20px;\n\n\t\t\t\tmargin: 10px 0 10px 0 ;\n\t\t\t\tdisplay: block;\n\t\t\t} \nlabel{\n\tcolor: #715636;\n\ttext-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n}\t\t\t\n\ninput {\n\twidth:300px;\n\theight: 30px;\n\tborder: 3px #B99E7E groove;\n\tborder-radius: 4px;\n\tbox-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n\t\n}\n\nform{\n    width: 400px; \n\t/*height: 400px;*/\n\tbackground: #FFE4C4;\n\tdisplay: block;\n\tbox-sizing: border-box;\n\t\n\tmargin: 10px auto 10px auto; \n\tpadding: 50px; \n\ttext-align: left;\n\tborder-radius: 10px;\n\tborder: 5px #B99E7E groove;\n\tbox-shadow: 5px 5px 10px rgba(0,0,0,0.5);\n\n\n\t/* border-style: groove ridge ridge groove; */\n\t/* display: table-cell;\n\tvertical-align: middle; */\n}\n\n.hide{\n    display: none;\n}\n\ntable{\n    width: 100%;\n}\n\ntd{\n    vertical-align: middle;\n}\n\n\n\t</style>\n\t<div class=\"form-wrapper\">\n\t\t<form name=\"login\">\n\t\t\t<h1>Login Form</h1>\n\t\t\t<label for=\"username\" class=\"hide username\">User Name</label>\n\t\t\t<input type=\"text\"  class=\"hide\" name=\"username\"  placeholder=\"Enter User Name\">\n\t\t\t<label for=\"email\">Email</label>\n\t\t\t<input type=\"email\" name=\"email\" autocomplete=\"on\" placeholder=\"Enter Email\">\n\t\t\t<label for=\"password\">Password</label>\n\t\t\t<input type=\"password\" name=\"password\" autocomplete=\"on\" placeholder=\"Enter Password\">\n\t\t\t\n\t\t\t\n\t\t\t<table>\n\t\t\t    <tr>\n\t\t\t        <td class=\"in-button\"></td>\n\t\t\t        <td class=\"up-button\"></td>\n                </tr>\n            </table>\n\t\t</form>\n\t</div>\n";

/***/ }),

/***/ "./src/templates/task-list-template.js":
/*!*********************************************!*\
  !*** ./src/templates/task-list-template.js ***!
  \*********************************************/
/*! exports provided: taskListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskListTemplate", function() { return taskListTemplate; });
var taskListTemplate = document.createElement('template');
taskListTemplate.innerHTML = "\n <style>\n    ul{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli{\n    height: 60px;\n    margin: 0;\n    border-width: 2px;\n    border-color: rgb(163, 163, 92) rgb(42, 118, 118) rgb(42, 118, 118) rgb(163, 163, 92);\n    border-style: groove ridge ridge groove;\n}\n\nmy-component-task, my-component-textarea{\n    height: 100%;\n    width: 100%;\n    display: block;\n}\n\nmy-component-task[data-completed = \"true\"]{\n    background: #81FFD6;\n}\n\nmy-component-task:hover[data-completed = \"true\"]{\n    background: #68E8BD;\n}\n\nmy-component-task[data-completed = \"false\"]{\n    background: #FFC0A9;\n}\n\nmy-component-task:hover[data-completed = \"false\"]{\n    background: #EA755E;\n}\n\nmy-component-textarea[data-completed = \"false\"]{\n    background: #EA755E;\n}\n\nmy-component-textarea[data-completed = \"true\"]{\n    background: #68E8BD;\n}\n\n</style>\n    <div>\n    <ul></ul>\n</div>\n\n";

/***/ }),

/***/ "./src/templates/task-template.js":
/*!****************************************!*\
  !*** ./src/templates/task-template.js ***!
  \****************************************/
/*! exports provided: taskTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskTemplate", function() { return taskTemplate; });
var taskTemplate = document.createElement('template');
taskTemplate.innerHTML = "\n<style>\n\tdiv {\n    height: 100%;\n}\n\n.left-column{\n    float: left;\n    width: 80%;\n\n}\n\n.right-column{\n    float: right;\n    width: 20%;\n}\n\ntd {\n    text-align: center;\n    vertical-align: center;\n}\ntable{\n    margin: auto;\n}\n\np {\n    width: 100%;\n    margin: 10px;\n    padding: 0;\n}\n</style>\t\n<div class=\"left-column\">\n    <p></p>\n</div>\n<div class=\"right-column\">\n    <table>\n        <tr><td class=\"done-button-wrapper\"></td></tr>\n        <tr><td class=\"delete-button-wrapper\"></td></tr>\n    </table>\n</div>\n";

/***/ }),

/***/ "./src/templates/textarea-template.js":
/*!********************************************!*\
  !*** ./src/templates/textarea-template.js ***!
  \********************************************/
/*! exports provided: textareaTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textareaTemplate", function() { return textareaTemplate; });
var textareaTemplate = document.createElement('template');
textareaTemplate.innerHTML = "\n    <style>\n .left-column{\n    float: left;\n    width: 80%;\n\n}\n\n.right-column{\n    float: right;\n    width: 20%;\n}\n\ntd {\n    text-align: center;\n    vertical-align: center;\n}\ntable{\n    margin: auto;\n}\n\n\n.text-area{\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    padding: 10px;\n    margin: 0;\n    border: none;\n    outline: none;\n    resize: none;\n    background: inherit;\n    font: inherit;\n}\n    </style>\n    \n <div class=\"left-column\">\n       <textarea class=\"text-area\"></textarea>\n </div>\n <div class=\"right-column\">\n       <table>\n         <tr><td class=\"save-button-wrapper\"></td></tr>\n         <tr><td class=\"cancel-button-wrapper\"></td></tr>\n       </table>\n       </div>    \n";

/***/ }),

/***/ "./src/templates/todo-template.js":
/*!****************************************!*\
  !*** ./src/templates/todo-template.js ***!
  \****************************************/
/*! exports provided: todoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoTemplate", function() { return todoTemplate; });
var todoTemplate = document.createElement('template');
todoTemplate.innerHTML = "\n\n<style>\n    ul{\n    list-style-type: none;\n    }\n    .left-column{\n    margin-left: 0;\n        float: left;\n        width: 70%;\n        outline: blue 1px groove;\n    }\n    .right-column{\n        width: 30%;\n        float: right;\n        outline: blue 1px groove;\n    }\n    \n</style>\n    <div class=\"header\">\n        <h1>Todo Application</h1>\n        <div class=\"sign-out-wrapper\"></div>\n        </div>\n    <div class=\"left-column\">\n        <div class=\"input-wrapper\"></div>\n        <div class=\"filter-wrapper\"></div>\n        <div class=\"todo-list-wrapper\"></div>\n    </div>\n    <div class=\"right-column\"></div>\n";

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map