"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _motorcortex = require("@kissmybutton/motorcortex");

var _motorcortex2 = _interopRequireDefault(_motorcortex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Channel = function (_MotorCortex$Attribut) {
  _inherits(Channel, _MotorCortex$Attribut);

  function Channel(props) {
    _classCallCheck(this, Channel);

    var _this = _possibleConstructorReturn(this, (Channel.__proto__ || Object.getPrototypeOf(Channel)).call(this, props));

    _this.compoAttributes = {
      transform: ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"]
    };
    return _this;
  }

  return Channel;
}(_motorcortex2.default.AttributeChannel);

exports.default = Channel;