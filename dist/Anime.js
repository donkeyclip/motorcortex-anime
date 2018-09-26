const _extends =
  Object.assign ||
  function(target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

const MC = require("@kissmybutton/motorcortex/");
const anime = require("animejs");

class Anime extends MC.TimedIncident {
  onGetContext() {
    const x = {};
    const z = {};

    for (const key in this.attrs.animatedAttrs) {
      if (this.channel.compoAttributes.hasOwnProperty(key)) {
        const compoAttribute = this.channel.compoAttributes[key];

        for (let i = 0; i <= compoAttribute.length; i++) {
          if (
            !this.attrs.animatedAttrs[key].hasOwnProperty(compoAttribute[i])
          ) {
            continue;
          }
          x[compoAttribute[i]] = [
            this.getInitialValue(key)[compoAttribute[i]],
            this.attrs.animatedAttrs[key][compoAttribute[i]]
          ];
          z[key] = anime.getValue(this.element, compoAttribute[i]);
        }
      } else {
        x[key] = [this.getInitialValue(key), this.attrs.animatedAttrs[key]];
        z[key] = anime.getValue(this.element, key);
      }
    }

    this.target = anime(
      _extends(
        {
          autoplay: false,
          duration: this.props.duration,
          easing: (this.attrs.attrs || {}).easing || "linear",
          targets: this.element
        },
        (this.attrs || {}).attrs || {},
        x
      )
    );

    anime(
      _extends(
        {
          duration: 0,
          targets: this.element
        },
        z
      )
    );
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
