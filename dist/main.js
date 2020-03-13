"use strict";

var Anime = require("./Anime");

var compositeAttributes = require("./compoAttributes");

var validations = require("./validation");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime,
    name: "Anime",
    attributesValidationRules: validations
  }],
  compositeAttributes: compositeAttributes
};