var MotorCortex = require("@kissmybutton/motorcortex");
var anime = require("animejs");

class Anime extends MotorCortex.TimedIncident {
  onGetContext() {
    let x = {};
    let z = {};

    for (let key in this.attrs.animatedAttrs) {
      x[key] = [this.getInitialValue(key), this.attrs.animatedAttrs[key]];
      z[key] = anime.getValue(this.element, key);
    }

    this.target = anime({
      autoplay: false,
      duration: this.props.duration,
      targets: this.element,
      ...this.attrs.attrs,
      ...x
    });

    anime({
      duration: 0,
      targets: this.element,
      ...z
    });
  }

  getScratchValue(id, attr) {
    return anime.getValue(this.element, attr);
  }

  onProgress(t) {
    return this.target.seek(this.target.duration * t);
  }
}

module.exports = Anime;
