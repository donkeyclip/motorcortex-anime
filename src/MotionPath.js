import MotorCortex from "@kissmybutton/motorcortex";
import anime from "mc-animejs-core/lib/anime.es.js";

/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      positionOn: {
 *          pathElement: "selector of the path element"
 *      }
 *  }
 * }
 }
**/
export default class MotionPath extends MotorCortex.Effect {
  onGetContext() {
    const svgEl = this.context.getElements(this.targetValue.pathElement)[0];
    this.path = anime.path(svgEl);
    this.isPathTargetInsideSVG = this.element instanceof SVGElement;
  }

  onProgress(f) {
    const position = anime.getPathProgress(
      this.path,
      f,
      this.isPathTargetInsideSVG
    );
    // console.log(position);
    const toSet = `
            translateX(${position.x}px) 
            translateY(${position.y}px) 
            rotate(${position.angle}deg)
        `;
    this.element.style.transform = toSet;
  }
}
