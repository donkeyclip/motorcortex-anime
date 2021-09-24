import MotorCortex from "@donkeyclip/motorcortex";
import anime from "mc-animejs-core/lib/anime.es.js";
import compoAttributes from "./compoAttributes";
import getMatrix2D from "./matrix2d";

export default class Anime extends MotorCortex.Effect {
  onGetContext() {
    const options = {};
    if (
      Object.prototype.hasOwnProperty.call(compoAttributes, this.attributeKey)
    ) {
      const compoAttribute = compoAttributes[this.attributeKey];

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

  getScratchValue() {
    if (this.attributeKey !== "transform") {
      return anime.get(this.element, this.attributeKey);
    }

    const obj = {};
    const transform = compoAttributes[this.attributeKey];
    const currentTransform = getMatrix2D(this.context.window, this.element);

    for (let i = 0; i < transform.length; i++) {
      obj[transform[i]] = Object.prototype.hasOwnProperty.call(
        currentTransform,
        transform[i]
      )
        ? currentTransform[transform[i]]
        : anime.get(this.element, transform[i]);
    }

    return obj;
  }

  /**
   * @param {number} f
   */
  onProgress(f) {
    return this.target.seek(this.target.duration * f);
  }
}
