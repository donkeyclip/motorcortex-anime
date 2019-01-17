const MC = require("@kissmybutton/motorcortex/");
const anime = require("animejs");

class Anime extends MC.TimedIncident {
  onGetContext() {
    const options = {};
    const initialize = {};
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
            this.getScratchValue(null, key)[compoAttribute[i]],
            this.attrs.animatedAttrs[key][compoAttribute[i]]
          ];
        }
      } else {
        options[key] = [
          this.getInitialValue(key),
          this.attrs.animatedAttrs[key]
        ];
        initialize[key] = [
          this.getScratchValue(null, key),
          this.attrs.animatedAttrs[key]
        ];
      }
    }

    this.target = anime({
      autoplay: false,
      duration: this.props.duration,
      easing: (this.attrs.attrs || {}).easing || "linear",
      targets: this.element,
      ...((this.attrs || {}).attrs || {}),
      ...options
    });

    // handle first render initial values
    anime({
      autoplay: false,
      duration: this.props.duration,
      easing: (this.attrs.attrs || {}).easing || "linear",
      targets: this.element,
      ...((this.attrs || {}).attrs || {}),
      ...initialize
    });
  }

  getScratchValue(id, attr) {
    if (this.channel.compoAttributes.hasOwnProperty(attr)) {
      const obj = {};
      const compoAttribute = this.channel.compoAttributes[attr];

      for (let i = 0; i < compoAttribute.length; i++) {
        obj[compoAttribute[i]] = anime.getValue(
          this.element,
          compoAttribute[i]
        );
      }

      return obj;
    }
    return anime.getValue(this.element, attr);
  }

  onProgress(t) {
    return this.target.seek(this.target.duration * t);
  }
}

module.exports = Anime;
