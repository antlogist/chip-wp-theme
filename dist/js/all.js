/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/Classes/Request.js":
/*!************************************************!*\
  !*** ./resources/assets/js/Classes/Request.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Request)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Request = /*#__PURE__*/function () {
  function Request() {
    _classCallCheck(this, Request);
  }
  return _createClass(Request, [{
    key: "get",
    value:
    //Get
    function get(url, cb) {
      try {
        // xhr object
        var xhr = new XMLHttpRequest();
        // xhr open
        xhr.open("GET", url);
        // xhr load
        xhr.addEventListener("load", function () {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb("Error. Status code ".concat(xhr.status), xhr);
            return;
          }
          // parse
          var response = JSON.parse(xhr.responseText);
          // callback
          cb(null, response);
        });
        // xhr error
        xhr.addEventListener("error", function () {
          console.log("error");
        });
        // xhr send
        xhr.send();
      } catch (error) {
        console.log(error);
      }
    }

    //Post
  }, {
    key: "post",
    value: function post(url, body, headers, cb) {
      // xhr object
      var xhr = new XMLHttpRequest();
      // xhr open
      xhr.open("POST", url);
      // headers
      if (headers) {
        Object.entries(headers).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          xhr.setRequestHeader(key, value);
        });
      }
      // xhr load
      xhr.addEventListener("load", function () {
        if (Math.floor(xhr.status / 100) !== 2) {
          cb("Error. Status code ".concat(xhr.status), xhr);
          return;
        }
        // parse
        var response = JSON.parse(xhr.responseText);
        // callback
        cb(null, response);
      });
      // xhr error
      xhr.addEventListener("error", function () {
        console.log("error");
      });
      // xhr send
      //    console.log(JSON.stringify(body));
      //    xhr.send(JSON.stringify(body));
      xhr.send(body);
    }
  }]);
}();


/***/ }),

/***/ "./resources/assets/libs/bootstrap/js/dist/base-component.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/libs/bootstrap/js/dist/base-component.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap base-component.js v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory(__webpack_require__(/*! ./dom/data.js */ "./resources/assets/libs/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./resources/assets/libs/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./resources/assets/libs/bootstrap/js/dist/dom/event-handler.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./dom/data */ "./resources/assets/libs/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./dom/selector-engine */ "./resources/assets/libs/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./dom/event-handler */ "./resources/assets/libs/bootstrap/js/dist/dom/event-handler.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (Data, SelectorEngine, EventHandler) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      'default': e
    };
  }
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element

    var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;
    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first

    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = function isElement(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }
    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }
    return typeof obj.nodeType !== 'undefined';
  };
  var getElement = function getElement(obj) {
    if (isElement(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }
    if (typeof obj === 'string' && obj.length > 0) {
      return SelectorEngine__default['default'].findOne(obj);
    }
    return null;
  };
  var execute = function execute(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  };
  var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
    var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    var durationPadding = 5;
    var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    var called = false;
    var _handler = function handler(_ref) {
      var target = _ref.target;
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, _handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, _handler);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '5.0.2';
  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      _classCallCheck(this, BaseComponent);
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      Data__default['default'].set(this._element, this.constructor.DATA_KEY, this);
    }
    return _createClass(BaseComponent, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;
        Data__default['default'].remove(this._element, this.constructor.DATA_KEY);
        EventHandler__default['default'].off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach(function (propertyName) {
          _this[propertyName] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(callback, element) {
        var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        executeAfterTransition(callback, element, isAnimated);
      }
      /** Static */
    }], [{
      key: "getInstance",
      value: function getInstance(element) {
        return Data__default['default'].get(element, this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);
  }();
  return BaseComponent;
});

/***/ }),

/***/ "./resources/assets/libs/bootstrap/js/dist/carousel.js":
/*!*************************************************************!*\
  !*** ./resources/assets/libs/bootstrap/js/dist/carousel.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap carousel.js v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory(__webpack_require__(/*! ./dom/selector-engine.js */ "./resources/assets/libs/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./resources/assets/libs/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/manipulator.js */ "./resources/assets/libs/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./base-component.js */ "./resources/assets/libs/bootstrap/js/dist/base-component.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./dom/selector-engine */ "./resources/assets/libs/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./dom/event-handler */ "./resources/assets/libs/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/manipulator */ "./resources/assets/libs/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./base-component */ "./resources/assets/libs/bootstrap/js/dist/base-component.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (SelectorEngine, EventHandler, Manipulator, BaseComponent) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      'default': e
    };
  }
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "".concat(obj);
    }
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended

      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = "#".concat(hrefAttr.split('#')[1]);
      }
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
  };
  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };
  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = function isElement(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }
    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }
    return typeof obj.nodeType !== 'undefined';
  };
  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
      }
    });
  };
  var isVisible = function isVisible(element) {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  };
  var reflow = function reflow(element) {
    return element.offsetHeight;
  };
  var getjQuery = function getjQuery() {
    var _window = window,
      jQuery = _window.jQuery;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', function () {
          DOMContentLoadedCallbacks.forEach(function (callback) {
            return callback();
          });
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };
  var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var name = plugin.NAME;
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */

  var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
    var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

    if (index === -1) {
      return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    }
    var listLength = list.length;
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var ORDER_NEXT = 'next';
  var ORDER_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var KEY_TO_DIRECTION = _defineProperty(_defineProperty({}, ARROW_LEFT_KEY, DIRECTION_RIGHT), ARROW_RIGHT_KEY, DIRECTION_LEFT);
  var EVENT_SLIDE = "slide".concat(EVENT_KEY);
  var EVENT_SLID = "slid".concat(EVENT_KEY);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY);
  var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY);
  var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY);
  var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY);
  var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY);
  var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY);
  var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY);
  var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY);
  var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY).concat(DATA_API_KEY);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_INDICATOR = '[data-bs-target]';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
  var Carousel = /*#__PURE__*/function (_BaseComponent__defau) {
    function Carousel(element, config) {
      var _this;
      _classCallCheck(this, Carousel);
      _this = _callSuper(this, Carousel, [element]);
      _this._items = null;
      _this._interval = null;
      _this._activeElement = null;
      _this._isPaused = false;
      _this._isSliding = false;
      _this.touchTimeout = null;
      _this.touchStartX = 0;
      _this.touchDeltaX = 0;
      _this._config = _this._getConfig(config);
      _this._indicatorsElement = SelectorEngine__default['default'].findOne(SELECTOR_INDICATORS, _this._element);
      _this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      _this._pointerEvent = Boolean(window.PointerEvent);
      _this._addEventListeners();
      return _this;
    } // Getters
    _inherits(Carousel, _BaseComponent__defau);
    return _createClass(Carousel, [{
      key: "next",
      value:
      // Public

      function next() {
        this._slide(ORDER_NEXT);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(ORDER_PREV);
      }
    }, {
      key: "pause",
      value: function pause(event) {
        if (!event) {
          this._isPaused = true;
        }
        if (SelectorEngine__default['default'].findOne(SELECTOR_NEXT_PREV, this._element)) {
          triggerTransitionEnd(this._element);
          this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }
        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }
        if (this._config && this._config.interval && !this._isPaused) {
          this._updateInterval();
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }
    }, {
      key: "to",
      value: function to(index) {
        var _this2 = this;
        this._activeElement = SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element);
        var activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) {
          return;
        }
        if (this._isSliding) {
          EventHandler__default['default'].one(this._element, EVENT_SLID, function () {
            return _this2.to(index);
          });
          return;
        }
        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }
        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, this._items[index]);
      } // Private
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread(_objectSpread(_objectSpread({}, Default), Manipulator__default['default'].getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);
        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }
        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
        if (!direction) {
          return;
        }
        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this3 = this;
        if (this._config.keyboard) {
          EventHandler__default['default'].on(this._element, EVENT_KEYDOWN, function (event) {
            return _this3._keydown(event);
          });
        }
        if (this._config.pause === 'hover') {
          EventHandler__default['default'].on(this._element, EVENT_MOUSEENTER, function (event) {
            return _this3.pause(event);
          });
          EventHandler__default['default'].on(this._element, EVENT_MOUSELEAVE, function (event) {
            return _this3.cycle(event);
          });
        }
        if (this._config.touch && this._touchSupported) {
          this._addTouchEventListeners();
        }
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this4 = this;
        var start = function start(event) {
          if (_this4._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
            _this4.touchStartX = event.clientX;
          } else if (!_this4._pointerEvent) {
            _this4.touchStartX = event.touches[0].clientX;
          }
        };
        var move = function move(event) {
          // ensure swiping with one touch and not pinching
          _this4.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this4.touchStartX;
        };
        var end = function end(event) {
          if (_this4._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
            _this4.touchDeltaX = event.clientX - _this4.touchStartX;
          }
          _this4._handleSwipe();
          if (_this4._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            _this4.pause();
            if (_this4.touchTimeout) {
              clearTimeout(_this4.touchTimeout);
            }
            _this4.touchTimeout = setTimeout(function (event) {
              return _this4.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
          }
        };
        SelectorEngine__default['default'].find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
          EventHandler__default['default'].on(itemImg, EVENT_DRAG_START, function (e) {
            return e.preventDefault();
          });
        });
        if (this._pointerEvent) {
          EventHandler__default['default'].on(this._element, EVENT_POINTERDOWN, function (event) {
            return start(event);
          });
          EventHandler__default['default'].on(this._element, EVENT_POINTERUP, function (event) {
            return end(event);
          });
          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler__default['default'].on(this._element, EVENT_TOUCHSTART, function (event) {
            return start(event);
          });
          EventHandler__default['default'].on(this._element, EVENT_TOUCHMOVE, function (event) {
            return move(event);
          });
          EventHandler__default['default'].on(this._element, EVENT_TOUCHEND, function (event) {
            return end(event);
          });
        }
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }
        var direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
          event.preventDefault();
          this._slide(direction);
        }
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine__default['default'].find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(order, activeElement) {
        var isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);
        var fromIndex = this._getItemIndex(SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element));
        return EventHandler__default['default'].trigger(this._element, EVENT_SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var activeIndicator = SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
          activeIndicator.removeAttribute('aria-current');
          var indicators = SelectorEngine__default['default'].find(SELECTOR_INDICATOR, this._indicatorsElement);
          for (var i = 0; i < indicators.length; i++) {
            if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
              indicators[i].classList.add(CLASS_NAME_ACTIVE);
              indicators[i].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var element = this._activeElement || SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element);
        if (!element) {
          return;
        }
        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      }
    }, {
      key: "_slide",
      value: function _slide(directionOrOrder, element) {
        var _this5 = this;
        var order = this._directionToOrder(directionOrOrder);
        var activeElement = SelectorEngine__default['default'].findOne(SELECTOR_ACTIVE_ITEM, this._element);
        var activeElementIndex = this._getItemIndex(activeElement);
        var nextElement = element || this._getItemByOrder(order, activeElement);
        var nextElementIndex = this._getItemIndex(nextElement);
        var isCycling = Boolean(this._interval);
        var isNext = order === ORDER_NEXT;
        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        var eventDirectionName = this._orderToDirection(order);
        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE)) {
          this._isSliding = false;
          return;
        }
        if (this._isSliding) {
          return;
        }
        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
        if (slideEvent.defaultPrevented) {
          return;
        }
        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }
        this._isSliding = true;
        if (isCycling) {
          this.pause();
        }
        this._setActiveIndicatorElement(nextElement);
        this._activeElement = nextElement;
        var triggerSlidEvent = function triggerSlidEvent() {
          EventHandler__default['default'].trigger(_this5._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        };
        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);
          var completeCallBack = function completeCallBack() {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE);
            activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
            _this5._isSliding = false;
            setTimeout(triggerSlidEvent, 0);
          };
          this._queueCallback(completeCallBack, activeElement, true);
        } else {
          activeElement.classList.remove(CLASS_NAME_ACTIVE);
          nextElement.classList.add(CLASS_NAME_ACTIVE);
          this._isSliding = false;
          triggerSlidEvent();
        }
        if (isCycling) {
          this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(direction) {
        if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
          return direction;
        }
        if (isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(order) {
        if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
          return order;
        }
        if (isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(element, config) {
        var data = Carousel.getOrCreateInstance(element, config);
        var _config = data._config;
        if (_typeof(config) === 'object') {
          _config = _objectSpread(_objectSpread({}, _config), config);
        }
        var action = typeof config === 'string' ? config : _config.slide;
        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"".concat(action, "\""));
          }
          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          Carousel.carouselInterface(this, config);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(event) {
        var target = getElementFromSelector(this);
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }
        var config = _objectSpread(_objectSpread({}, Manipulator__default['default'].getDataAttributes(target)), Manipulator__default['default'].getDataAttributes(this));
        var slideIndex = this.getAttribute('data-bs-slide-to');
        if (slideIndex) {
          config.interval = false;
        }
        Carousel.carouselInterface(target, config);
        if (slideIndex) {
          Carousel.getInstance(target).to(slideIndex);
        }
        event.preventDefault();
      }
    }]);
  }(BaseComponent__default['default']);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler__default['default'].on(window, EVENT_LOAD_DATA_API, function () {
    var carousels = SelectorEngine__default['default'].find(SELECTOR_DATA_RIDE);
    for (var i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);
  return Carousel;
});

/***/ }),

/***/ "./resources/assets/libs/bootstrap/js/dist/dom/data.js":
/*!*************************************************************!*\
  !*** ./resources/assets/libs/bootstrap/js/dist/dom/data.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap data.js v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var elementMap = new Map();
  var data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }
      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      var instanceMap = elementMap.get(element);
      instanceMap["delete"](key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap["delete"](element);
      }
    }
  };
  return data;
});

/***/ }),

/***/ "./resources/assets/libs/bootstrap/js/dist/dom/event-handler.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/libs/bootstrap/js/dist/dom/event-handler.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap event-handler.js v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  var getjQuery = function getjQuery() {
    var _window = window,
      jQuery = _window.jQuery;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }
    return null;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var customEventsRegex = /^(mouseenter|mouseleave)/i;
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }
  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);
      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;
            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, selector, fn);
            }
            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint

      return null;
    };
  }
  function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var uidEventList = Object.keys(events);
    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];
      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }
    return null;
  }
  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler;
    var typeEvent = getTypeEvent(originalTypeEvent);
    var isNative = nativeEvents.has(typeEvent);
    if (!isNative) {
      typeEvent = originalTypeEvent;
    }
    return [delegation, originalHandler, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (customEventsRegex.test(originalTypeEvent)) {
      var wrapFn = function wrapFn(fn) {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }
    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];
    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }
    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        delegation = _normalizeParams4[0],
        originalHandler = _normalizeParams4[1],
        typeEvent = _normalizeParams4[2];
      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');
      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }
        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }
      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }
      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      var $ = getjQuery();
      var typeEvent = getTypeEvent(event);
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event

      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  return EventHandler;
});

/***/ }),

/***/ "./resources/assets/libs/bootstrap/js/dist/dom/manipulator.js":
/*!********************************************************************!*\
  !*** ./resources/assets/libs/bootstrap/js/dist/dom/manipulator.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap manipulator.js v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }
    if (val === 'false') {
      return false;
    }
    if (val === Number(val).toString()) {
      return Number(val);
    }
    if (val === '' || val === 'null') {
      return null;
    }
    return val;
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-".concat(chr.toLowerCase());
    });
  }
  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }
      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs');
      }).forEach(function (key) {
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };
  return Manipulator;
});

/***/ }),

/***/ "./resources/assets/libs/bootstrap/js/dist/dom/selector-engine.js":
/*!************************************************************************!*\
  !*** ./resources/assets/libs/bootstrap/js/dist/dom/selector-engine.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap selector-engine.js v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.2): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NODE_TEXT = 3;
  var SelectorEngine = {
    find: function find(selector) {
      var _ref;
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function findOne(selector) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref2;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;
      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }
        ancestor = ancestor.parentNode;
      }
      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    }
  };
  return SelectorEngine;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*******************************************!*\
  !*** ./resources/assets/js/baseObject.js ***!
  \*******************************************/
(function () {
  "use strict";

  window.BASEOBJECT = {
    nav: {},
    buttons: {},
    frontPageCarousel: {},
    wpcf7: {}
  };
})();
})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/assets/js/nav/nav.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classes_Request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Request.js */ "./resources/assets/js/Classes/Request.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

(function () {
  "use strict";

  BASEOBJECT.nav.initFooter = function () {
    var footerMenuEl = document.querySelector("#footerMenu");
    var request = new _Classes_Request_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    request.get("".concat(baseUrl, "/wp-json/menus/v1/footer-menu"), function (err, resp) {
      if (err) {
        console.log(err);
        return;
      }
      var length = resp.length;
      resp.map(function (item, index) {
        var navItem = "<a href=\"".concat(item.url, "\">").concat(item.title, "</a> ").concat(index !== length - 1 ? " | " : "");
        footerMenuEl.insertAdjacentHTML("beforeEnd", navItem);
      });
    });
  };
  BASEOBJECT.nav.init = function () {
    var navMainWrapper = document.getElementById("navMainWrapper");
    var request = new _Classes_Request_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    request.get("".concat(baseUrl, "/wp-json/menus/v1/menu"), function (err, resp) {
      if (err) {
        console.log(err);
        return;
      }
      var currentLocation = window.location.href;
      var ul = document.createElement("ul");
      ul.classList.add("nav-ul-main");
      ul.id = "navMainUl";
      var children = {};
      resp.map(function (item) {
        if (!parseInt(item.menu_item_parent)) {
          var navItem = "\n            <li data-id=\"".concat(item.ID, "\" class=\"li-nav\">\n              <a href=\"").concat(item.url, "\" data-id=\"").concat(item.ID, "\" class=\"").concat(currentLocation === item.url ? "current " : '', "nav-link text-uppercase\">").concat(item.title, "</a>\n            </li>\n          ");
          ul.insertAdjacentHTML("beforeEnd", navItem);
        } else {
          children[item.menu_item_parent] ? "" : children[item.menu_item_parent] = [];
          children[item.menu_item_parent].push({
            id: item.ID,
            parentId: item.menu_item_parent,
            url: item.url,
            title: item.title
          });
        }
      });
      navMainWrapper.insertAdjacentElement("afterBegin", ul);

      //Remove opacity from wrapper
      navMainWrapper.classList.remove("opacity-0");
      navMainWrapper.classList.add("opacity-100");
      if (Object.keys(children).length !== 0) {
        var lis = document.getElementsByClassName("li-nav");
        _toConsumableArray(lis).map(function (li) {
          var id = li.dataset.id;
          for (var child in children) {
            if (child === id) {
              li.classList.add("parent");
              var a = li.children;
              a[0].classList.add("parent-link");
              submenuRender(li);
            }
          }
        });
      }

      //Submenu template
      function submenuRender(el) {
        var fragment = document.createDocumentFragment();
        var ul = document.createElement("ul");
        ul.classList.add("ul-nav-child");
        ul.dataset.id = el.dataset.id;
        children[el.dataset.id].map(function (item) {
          var navItemChild = "\n          <li data-id=\"".concat(item.id, "\" class=\"li-nav-child\">\n            <a href=\"").concat(item.url, "\" class=\"").concat(currentLocation === item.url ? "current " : '', "text-uppercase\">").concat(item.title, "</a>\n          </li>\n        ");
          ul.insertAdjacentHTML("beforeEnd", navItemChild);
        });
        fragment.appendChild(ul);
        el.appendChild(fragment);
      }
    });
    navMainWrapper.addEventListener("click", function (e) {
      var el = e.target;
      var submenus = document.querySelectorAll(".ul-nav-child");
      _toConsumableArray(submenus).map(function (submenu) {
        if (submenu.dataset.id !== el.dataset.id) {
          submenu.classList.remove("show");
        }
      });

      //Parent link click
      if (el.classList.contains("parent-link")) {
        e.preventDefault();
        var submenu = el.nextElementSibling;
        switch (submenu.classList.contains("show")) {
          case false:
            submenu.classList.add("show");
            break;
          default:
            submenu.classList.remove("show");
        }
      }
    });
  };
  BASEOBJECT.nav.toggleButton = function () {
    var button = document.getElementById("navToggleButton");
    var navMain = document.getElementById("navMainWrapper");
    var body = document.body;
    var request = new _Classes_Request_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switch (navMain.classList.contains("active")) {
        case true:
          navMain.classList.remove("active");
          button.classList.remove("active");
          body.classList.remove("active");
          break;
        default:
          navMain.classList.add("active");
          button.classList.add("active");
          body.classList.add("active");
      }
    });
  };
})();
})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./resources/assets/js/carousel/carousel.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/bootstrap/js/dist/carousel */ "./resources/assets/libs/bootstrap/js/dist/carousel.js");
/* harmony import */ var _libs_bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__);

(function () {
  "use strict";

  BASEOBJECT.frontPageCarousel.init = function () {
    var frontCarousel = new (_libs_bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById("frontPageCarousel"), {
      interval: 3000
    });
  };
})();
})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!********************************************!*\
  !*** ./resources/assets/js/wpcf7/wpcf7.js ***!
  \********************************************/
(function () {
  "use strict";

  BASEOBJECT.wpcf7.init = function () {
    var form = document.querySelector(".wpcf7-form");
    if (!form) {
      return;
    }
    form.addEventListener("click", function (e) {
      var target = e.target;
      var responseOutput = document.querySelector(".wpcf7-response-output");
      var submitButton = document.querySelector(".wpcf7-submit");
      if (target === submitButton) {
        responseOutput.style.display = "flex";
      }
      if (target === responseOutput) {
        responseOutput.style.display = "none";
      }
    });
  };
})();
})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*************************************!*\
  !*** ./resources/assets/js/init.js ***!
  \*************************************/
(function () {
  "use strict";

  BASEOBJECT.nav.init();
  BASEOBJECT.nav.initFooter();
  BASEOBJECT.nav.toggleButton();
  //  BASEOBJECT.buttons.init();

  var body = document.body;
  switch (body.id) {
    case "frontPage":
      BASEOBJECT.frontPageCarousel.init();
      BASEOBJECT.wpcf7.init();
  }
})();
})();

/******/ })()
;