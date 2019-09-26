"use strict";

var Anime = require("./Anime");

var compositeAttributes = require("./compoAttributes");

module.exports = {
  name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime,
    name: "Anime"
  }],
  compositeAttributes: compositeAttributes
};