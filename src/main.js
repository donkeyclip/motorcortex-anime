const Anime = require("./Anime");
const compositeAttributes = require("./compoAttributes");
module.exports = {
  name: "@kissmybutton/motorcortex-anime",
  incidents: [
    {
      exportable: Anime,
      name: "Anime"
    }
  ],
  compositeAttributes
};
