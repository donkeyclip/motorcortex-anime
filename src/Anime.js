const MC = require("@kissmybutton/motorcortex");
const anime = require("animejs");
const compoAttributes = require("./compoAttributes");

class Anime extends MC.API.MonoIncident {
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
    if (compoAttributes.hasOwnProperty(this.attributeKey)) {
      const obj = {};
      const compoAttribute = compoAttributes[this.attributeKey];

      for (let i = 0; i < compoAttribute.length; i++) {
        obj[compoAttribute[i]] = anime.getValue(
          this.element,
          compoAttribute[i]
        );
      }

      return obj;
    }
    return anime.getValue(this.element, this.attributeKey);
  }

  onProgress(f) {
    return this.target.seek(this.target.duration * f);
  }
}

module.exports = Anime;
