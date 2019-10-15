const MC = require("@kissmybutton/motorcortex");
import anime from "animejs/lib/anime.es.js";
const compoAttributes = require("./compoAttributes");
const getMatrix2D = require("./matrix2d");

export default class Anime extends MC.API.MonoIncident {
  onGetContext() {
    const options = {};
    const initialize = {};
    if (compoAttributes.hasOwnProperty(this.attributeKey)) {
      const compoAttribute = compoAttributes[this.attributeKey];

      for (let i = 0; i < compoAttribute.length; i++) {
        if (!this.targetValue.hasOwnProperty(compoAttribute[i])) {
          continue;
        }
        options[compoAttribute[i]] = [
          this.getInitialValue()[compoAttribute[i]],
          this.targetValue[compoAttribute[i]]
        ];
        initialize[compoAttribute[i]] = [
          this.getScratchValue(),
          this.targetValue[compoAttribute[i]]
        ];
      }
    } else {
      options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
      initialize[this.targetValue] = [this.getScratchValue(), this.targetValue];
    }

    const initialStyle = {};
    if (
      this.element.style[this.attributeKey] != "" &&
      this.element.style[this.attributeKey] != null
    ) {
      initialStyle[this.attributeKey] = this.element.style[this.attributeKey];
    }

    this.target = anime({
      autoplay: false,
      duration: this.props.duration,
      easing: (this.attrs.attrs || {}).easing || "linear",
      targets: this.element,
      ...((this.attrs || {}).attrs || {}),
      ...options
    }); // handle first render initial values

    for (const key in this.attrs.animatedAttrs) {
      if (initialStyle.hasOwnProperty(key)) {
        this.element.style[key] = initialStyle[key];
      } else {
        this.element.style[key] = null;
      }
    }
  }

  getScratchValue() {
    if (this.attributeKey === "transform") {
      const obj = {};
      const transform = compoAttributes[this.attributeKey];
      const currentTransform = getMatrix2D(this.context.window, this.element);

      for (let i = 0; i < transform.length; i++) {
        if (currentTransform.hasOwnProperty(transform[i])) {
          obj[transform[i]] = currentTransform[transform[i]];
        } else {
          obj[transform[i]] = anime.get(this.element, transform[i]);
        }
      }

      return obj;
    }
    return anime.get(this.element, this.attributeKey);
  }

  onProgress(f) {
    return this.target.seek(this.target.duration * f);
  }
}
