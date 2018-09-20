const MotorCortex = require("@kissmybutton/motorcortex/");
const Player = require("@kissmybutton/motorcortex-player/");
const AnimeDefinition = require("../dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

const css = `
  body {
    background-color:white;
  }
  .cirlce {
    background: palevioletred;
    border-radius: 64px;
    height: 64px;
    left: 0;
    position: absolute;
    top: 0;
    width: 64px;
  }
`;

const html = `<div class="cirlce" />`;

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

const group = new MotorCortex.Group();
const top = 0;
const right = 320;
const bottom = 320;
const left = 0;
let c = 0;
for (let i = 0; i < 50; i += 2) {
  c++;
  let translateX, translateY;
  if (c % 2) {
    translateX = right;
    translateY = Math.random() * 320;
  } else {
    translateX = Math.random() * 320;
    translateY = bottom;
  }

  const anime = new Anime.Anime(
    {
      animatedAttrs: {
        opacity: Math.random(),
        transform: {
          translateX: translateX + "px",
          translateY: translateY + "px"
        }
      },
      attrs: {
        easing: "linear"
      }
    },
    {
      duration: 500,
      selector: ".cirlce"
    }
  );

  if (c % 2) {
    translateX = left;
    translateY = Math.random() * 320;
  } else {
    translateX = Math.random() * 320;
    translateY = top;
  }

  const anime1 = new Anime.Anime(
    {
      animatedAttrs: {
        opacity: Math.random(),
        transform: {
          translateX: translateX + "px",
          translateY: translateY + "px"
        }
      },
      attrs: {
        easing: "linear"
      }
    },
    {
      duration: 500,
      selector: ".cirlce"
    }
  );

  group.addIncident(anime, 500 * i);
  group.addIncident(anime1, 500 * (i + 1));
}
clip.addIncident(group, 0);

new Player({
  clip: clip,
  theme: "transparent on-top",
  preview: false,
  pointerEvents: false
});
