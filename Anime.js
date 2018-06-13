var MotorCortex = require("@kissmybutton/motorcortex");
var anime = require("animejs");

class Anime extends MotorCortex.TimedIncident {
  onGetContext() {
    var x = {};
    var z = {};

    for (var key in this.attrs.animatedAttrs) {
      if (this.channel.compoAttributes.hasOwnProperty(key)) {
        const compoAttribute = this.channel.compoAttributes[key];

        for (var i = 0; i <= compoAttribute.length; i++) {
          if (!attrs[key].hasOwnProperty(compoAttribute[i])) {
            continue;
          }
          x[compoAttribute[i]] = [
            this.getInitialValue(key)[compoAttribute[i]],
            attrs[key][compoAttribute[i]]
          ];
          z[key] = anime.getValue(this.element, compoAttribute[i]);
        }
      } else {
        x[key] = [this.getInitialValue(key), attrs[key]];
        z[key] = anime.getValue(this.element, key);
      }
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
    if (this.channel.compoAttributes.hasOwnProperty(attr)) {
      var obj = {};
      const compoAttribute = this.channel.compoAttributes[attr];

      for (var i = 0; i <= compoAttribute.length; i++) {
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
