"use strict";

var Anime = require("./Anime");

var Channel = require("./Channel");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime,
    name: "Anime"
  }],
  channel: Channel
};