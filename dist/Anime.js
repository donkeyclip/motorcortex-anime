"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _motorcortex = require("@kissmybutton/motorcortex");

var _motorcortex2 = _interopRequireDefault(_motorcortex);

var _animejs = require("animejs");

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Anime = function (_MotorCortex$TimedInc) {
  _inherits(Anime, _MotorCortex$TimedInc);

  function Anime() {
    _classCallCheck(this, Anime);

    return _possibleConstructorReturn(this, (Anime.__proto__ || Object.getPrototypeOf(Anime)).apply(this, arguments));
  }

  _createClass(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var x = {};
      var z = {};

      for (var key in this.attrs.animatedAttrs) {
        if (this.channel.compoAttributes.hasOwnProperty(key)) {
          var compoAttribute = this.channel.compoAttributes[key];

          for (var i = 0; i <= compoAttribute.length; i++) {
            if (!this.attrs.animatedAttrs[key].hasOwnProperty(compoAttribute[i])) {
              continue;
            }
            x[compoAttribute[i]] = [this.getInitialValue(key)[compoAttribute[i]], this.attrs.animatedAttrs[key][compoAttribute[i]]];
            z[key] = _animejs2.default.getValue(this.element, compoAttribute[i]);
          }
        } else {
          x[key] = [this.getInitialValue(key), this.attrs.animatedAttrs[key]];
          z[key] = _animejs2.default.getValue(this.element, key);
        }
      }

      this.target = (0, _animejs2.default)(_extends({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}, x));

      (0, _animejs2.default)(_extends({
        duration: 0,
        targets: this.element
      }, z));
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue(id, attr) {
      if (this.channel.compoAttributes.hasOwnProperty(attr)) {
        var obj = {};
        var compoAttribute = this.channel.compoAttributes[attr];

        for (var i = 0; i <= compoAttribute.length; i++) {
          obj[compoAttribute[i]] = _animejs2.default.getValue(this.element, compoAttribute[i]);
        }

        return obj;
      }

      return _animejs2.default.getValue(this.element, attr);
    }
  }, {
    key: "onProgress",
    value: function onProgress(t) {
      return this.target.seek(this.target.duration * t);
    }
  }]);

  return Anime;
}(_motorcortex2.default.TimedIncident);

exports.default = Anime;