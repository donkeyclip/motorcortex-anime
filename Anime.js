var MotorCortex = require("@kissmybutton/motorcortex");
var anime = require("animejs");

class Anime extends MotorCortex.TimedIncident {
  onGetContext() {
    this.element = anime({
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
    return this.element.seek(this.element.duration * t);
  }
}

module.exports = Anime;
