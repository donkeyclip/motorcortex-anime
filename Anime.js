var MotorCortex = require("@kissmybutton/motorcortex");
var anime = require("animejs");

class Anime extends MotorCortex.TimedIncident {
  onGetContext() {
    this.target = anime({
      autoplay: false,
      duration: this.props.duration,
      targets: this.elements,
      ...this.attrs.attrs,
      ...this.attrs.animatedAttrs
    });
  }

  getScratchValue(id, attribute) {
    var el = this.getElementByMCID(id);

    return window.getComputedStyle(el).getPropertyValue(attribute);
  }

  onProgress(t) {
    return this.target.seek(this.target.duration * t);
  }
}

module.exports = Anime;
