import MotorCortex from "@kissmybutton/motorcortex";

class Channel extends MotorCortex.AttributeChannel {
  constructor(props) {
    super(props);

    this.compoAttributes = {
      transform: [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skewX",
        "skewY",
        "perspective"
      ]
    };
  }
}

export default Channel;
