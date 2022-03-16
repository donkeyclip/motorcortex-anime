import MotorCortex from "@donkeyclip/motorcortex";
import anime from "mc-animejs-core/lib/anime.es.js";

export default class Anime extends MotorCortex.ExtendableCSSEffect {
  onGetContext() {
    const options = {};
    if (
      Object.prototype.hasOwnProperty.call(
        this.compoAttributes,
        this.attributeKey
      )
    ) {
      const compoAttribute = this.compoAttributes[this.attributeKey];

      for (let i = 0; i < compoAttribute.length; i++) {
        if (
          !Object.prototype.hasOwnProperty.call(
            this.targetValue,
            compoAttribute[i]
          )
        ) {
          continue;
        }
        options[compoAttribute[i]] = [
          this.initialValue[compoAttribute[i]],
          this.targetValue[compoAttribute[i]],
        ];
      }
    } else {
      options[this.attributeKey] = [this.initialValue, this.targetValue];
    }

    this.target = anime({
      autoplay: false,
      duration: this.props.duration,
      easing: "linear",
      targets: this.element,
      ...((this.attrs || {}).attrs || {}),
      ...options,
    }); // handle first render initial values
  }

  /**
   * @param {number} f
   */
  onProgress(m) {
    return this.target.seek(this.target.duration * this.getFraction(m));
  }
}
