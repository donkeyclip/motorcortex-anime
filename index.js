var MotorCortex = require("@kissmybutton/motorcortex");
var Anime = require("./Anime");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [
    {
      exportable: Anime
    }
  ],
  channel: MotorCortex.AttributeChannel
};
