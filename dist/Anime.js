"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MC = require("@kissmybutton/motorcortex");

var anime = require("animejs");

var compoAttributes = require("./compoAttributes");

var Anime =
/*#__PURE__*/
function (_MC$API$MonoIncident) {
  _inherits(Anime, _MC$API$MonoIncident);

  function Anime() {
    _classCallCheck(this, Anime);

    return _possibleConstructorReturn(this, _getPrototypeOf(Anime).apply(this, arguments));
  }

  _createClass(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};
      var initialize = {};

      if (compoAttributes.hasOwnProperty(this.attributeKey)) {
        var compoAttribute = compoAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!this.targetValue.hasOwnProperty(compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.getInitialValue()[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
          initialize[compoAttribute[i]] = [this.getScratchValue(), this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
        initialize[this.targetValue] = [this.getScratchValue(), this.targetValue];
      }

      var initialStyle = {};

      if (this.element.style[this.attributeKey] != "" && this.element.style[this.attributeKey] != null) {
        initialStyle[this.attributeKey] = this.element.style[this.attributeKey];
      }

      this.target = anime(_objectSpread({
        autoplay: false,
        duration: this.props.duration,
        easing: (this.attrs.attrs || {}).easing || "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}, options)); // handle first render initial values

      for (var key in this.attrs.animatedAttrs) {
        if (initialStyle.hasOwnProperty(key)) {
          this.element.style[key] = initialStyle[key];
        } else {
          this.element.style[key] = null;
        }
      }
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      var attr = this.attributeKey;
      return anime.getValue(this.element, attr);
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      return this.target.seek(this.target.duration * f);
    }
  }]);

  return Anime;
}(MC.API.MonoIncident);

module.exports = Anime;