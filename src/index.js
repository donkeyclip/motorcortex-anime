import Anime from "./Anime";
import MotionPath from "./MotionPath";
import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  CSSEffect: Anime,
  incidents: [
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
};
