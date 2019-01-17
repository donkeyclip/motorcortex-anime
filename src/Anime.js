const MC = require("@kissmybutton/motorcortex/");
const anime = require("animejs");

class Anime extends MC.TimedIncident {
  onGetContext() {
    const options = {};
    const initialize = {};
    const mcid = this.element.dataset.motorcortex2Id;
    for (const key in this.attrs.animatedAttrs) {
      if (this.channel.compoAttributes.hasOwnProperty(key)) {
        const compoAttribute = this.channel.compoAttributes[key];

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

  getScratchValue(id, attr) {
    return anime.getValue(this.element, attr);
  }

  onProgress(t) {
    return this.target.seek(this.target.duration * t);
  }
}

module.exports = Anime;
