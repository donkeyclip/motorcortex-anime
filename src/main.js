const Anime = require("./Anime");
const compositeAttributes = require("./compoAttributes");
const validations = require("./validation");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [
    {
      exportable: Anime,
      name: "Anime",
      attributesValidationRules: validations
    }
  ],
  compositeAttributes
};
