const Anime = require("../src/main");
const MotorCortex = require("@kissmybutton/motorcortex/");
const Player = require("@kissmybutton/motorcortex-player/");

// console.log(Anime);
// Load plugins
const plugins = MotorCortex.loadPlugin(Anime);

// Create a Clip
const css = `
  .wcPxNCqx {
    background: palevioletred;
    border-radius: 64px;
    height: 64px;
    left: 0;
    position: absolute;
    top: 0;
    width: 64px;
  }
  .keNWI6yF {
    height: 384px;
    position: relative;
    width: 384px;
  }
`;

const html = `<div class="keNWI6yF"><div class="wcPxNCqx" /></div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "384px",
  height: "384px"
};

const clip = new MotorCortex.Clip(null, {
  css,
  html,
  host,
  containerParams
});

// Create a Group
const group = new MotorCortex.Group();

// Add Group to Clip
clip.addIncident(group, 0);

// Create an Anime effect
const attrs = {
  animatedAttrs: {
    opacity: 0.5,
    translateX: "320px"
  },
  attrs: {
    easing: "linear"
  }
};

const attrs1 = {
  animatedAttrs: {
    opacity: 1,
    translateX: "0px",
    backgroundColor: "tomato"
  },
  attrs: {
    easing: "linear"
  }
};

const props = {
  duration: 3000,
  selector: ".wcPxNCqx"
};

const anime = new plugins.Anime(attrs, props);
const anime1 = new plugins.Anime(attrs1, props);

// Add anime to Group
group.addIncident(anime, 0);
group.addIncident(anime1, 3000);

// console.log(clip);
new Player({
  clip: clip,
  theme: "transparent on-top",
  preview: false,
  pointerEvents: false
});
