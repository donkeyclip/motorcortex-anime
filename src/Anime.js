import MC from "@kissmybutton/motorcortex";
import anime from "mc-animejs-core/lib/anime.es.js";
import compoAttributes from "./compoAttributes";
import getMatrix2D from "./matrix2d";

export default class Anime extends MC.API.MonoIncident {
  onGetContext() {
    const options = {};
    const initialize = {};
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
          this.getInitialValue()[compoAttribute[i]],
          this.targetValue[compoAttribute[i]],
        ];
        initialize[compoAttribute[i]] = [
          this.getScratchValue(),
          this.targetValue[compoAttribute[i]],
        ];
      }
    } else {
      options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
      initialize[this.targetValue] = [this.getScratchValue(), this.targetValue];
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
    if (this.attributeKey === "transform") {
      const obj = {};
      const transform = compoAttributes[this.attributeKey];
      const currentTransform = getMatrix2D(this.context.window, this.element);

      for (let i = 0; i < transform.length; i++) {
        if (
          Object.prototype.hasOwnProperty.call(currentTransform, transform[i])
        ) {
          obj[transform[i]] = currentTransform[transform[i]];
        } else {
          obj[transform[i]] = anime.get(this.element, transform[i]);
        }
      }

      return obj;
    }
    return anime.get(this.element, this.attributeKey);
  }

  /**
   * @param {number} f
   */
  onProgress(f) {
    return this.target.seek(this.target.duration * f);
  }
}
