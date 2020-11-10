import MotorCortex from "@kissmybutton/motorcortex";
import anime from "mc-animejs-core/lib/anime.es.js";

/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      transform: {
 *          path: "svg path"
 *      }
 *  }
 * }
 }
**/
export default class MotionPath extends MotorCortex.Effect {
  onGetContext() {
    this.anime_path = anime.path(this.targetValue.path);
  }

  // onProgress(f, ms) {

  // }
}
