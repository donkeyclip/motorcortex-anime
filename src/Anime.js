const MC = require("@kissmybutton/motorcortex");
const anime = require("animejs");
const compoAttribute = require("./compoAttributes");

class Anime extends MC.API.Incident {
  onGetContext() {
    const options = {};
    const initialize = {};
    const mcid = this.element.dataset.motorcortex2Id;
    for (const key in this.attrs.animatedAttrs) {
      if (compoAttribute.hasOwnProperty(key)) {
        const compoAttribute = compoAttribute[key];

        for (let i = 0; i < compoAttribute.length; i++) {
          if (
            !this.attrs.animatedAttrs[key].hasOwnProperty(compoAttribute[i])
          ) {
            continue;
          }
          options[compoAttribute[i]] = [
            this.getInitialValue(key)[compoAttribute[i]],
            this.attrs.animatedAttrs[key][compoAttribute[i]]
          ];
          initialize[compoAttribute[i]] = [
            this.getScratchValue(mcid, compoAttribute[i]),
            this.attrs.animatedAttrs[key][compoAttribute[i]]
          ];
        }
      } else {
        options[key] = [
          this.getInitialValue(key),
          this.attrs.animatedAttrs[key]
        ];
        initialize[key] = [
          this.getScratchValue(mcid, key),
          this.attrs.animatedAttrs[key]
        ];
      }
    }

    const initialStyle = {};
    for (const key in this.attrs.animatedAttrs) {
      if (this.element.style[key] != "" && this.element.style[key] != null) {
        initialStyle[key] = this.element.style[key];
      }
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
    const attr = this.attributeKey;
    return anime.getValue(this.element, attr);
  }

  onProgress(f) {
    return this.target.seek(this.target.duration * f);
  }
}

module.exports = Anime;
