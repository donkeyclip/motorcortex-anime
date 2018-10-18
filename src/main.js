const Anime = require("./Anime");
const Channel = require("./Channel");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [
    {
      exportable: Anime,
      name: "Anime"
    }
  ],
  channel: Channel
};
