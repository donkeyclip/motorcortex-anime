var MotorCortex = require("@kissmybutton/motorcortex");

class Channel extends MotorCortex.AttributeChannel {
  constructor(props) {
    super(props);

    this.compoAttributes = {
      transform: [
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skewX",
        "skewY",
        "perspective"
      ]
    };
  }
}

module.exports = Channel;
