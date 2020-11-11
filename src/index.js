import Anime from "./Anime";
import MotionPath from "./MotionPath";
import compositeAttributes from "./compoAttributes";
import { animatedAttrs } from "./validation";

export default {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [
    {
      exportable: Anime,
      name: "Anime",
      attributesValidationRules: { animatedAttrs },
    },
    {
      exportable: MotionPath,
      name: "MotionPath",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            positionOn: {
              type: "object",
              props: {
                pathElement: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  ],
  compositeAttributes,
};
