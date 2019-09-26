"use strict";

var Anime = require("./Anime");

var compositeAttributes = require("./compoAttributes");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime,
    name: "Anime"
  }],
  compositeAttributes: compositeAttributes
};