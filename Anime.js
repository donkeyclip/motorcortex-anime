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
    const el = this.getElementByMCID(id);

    return window.getComputedStyle(el).getPropertyValue(attribute);
  }

  onProgress(progress) {
    return this.element.seek(this.element.duration * progress);
  }
}

module.exports = Anime;
