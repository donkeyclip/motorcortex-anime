import Anime from "./Anime";
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
  ],
  compositeAttributes,
};
