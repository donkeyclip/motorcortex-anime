import { Effect } from "@donkeyclip/motorcortex";
import { path, getPathProgress } from "mc-animejs-core/lib/anime.es.js";

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
export default class MotionPath extends Effect {
  onGetContext() {
    this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4;
    this.calculatedPoints = [];

    const svgEl = this.context.getElements(this.targetValue.pathElement)[0];
    this.path = path(svgEl);
    this.isPathTargetInsideSVG = this.element instanceof SVGElement;
  }

  onProgress(m) {
    let toSet;
    const distance =
      Math.round(
        (this.path.totalLength / this.pixelsAccuracy) * this.getFraction(m)
      ) * this.pixelsAccuracy;
    if (this.calculatedPoints[distance] != null) {
      toSet = this.calculatedPoints[distance];
    } else {
      const position = getPathProgress(
        this.path,
        distance / this.path.totalLength,
        this.isPathTargetInsideSVG
      );
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
