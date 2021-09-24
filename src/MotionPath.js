import MotorCortex from "@donkeyclip/motorcortex";
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
    this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4;
    this.calculatedPoints = [];

    const svgEl = this.context.getElements(this.targetValue.pathElement)[0];
    this.path = anime.path(svgEl);
    this.isPathTargetInsideSVG = this.element instanceof SVGElement;
  }

  onProgress(f) {
    let toSet;
    const distance =
      Math.round((this.path.totalLength / this.pixelsAccuracy) * f) *
      this.pixelsAccuracy;
    if (
      this.calculatedPoints[distance] !== null &&
      this.calculatedPoints[distance] !== undefined
    ) {
      toSet = this.calculatedPoints[distance];
    } else {
      const position = anime.getPathProgress(
        this.path,
        distance / this.path.totalLength,
        this.isPathTargetInsideSVG
      );
      // console.log(position);
      toSet = `
            translateX(${position.x}px)
            translateY(${position.y}px)
            rotate(${position.angle}deg)
        `;
      this.calculatedPoints[distance] = toSet;
    }

    this.element.style.transform = toSet;
  }
}
