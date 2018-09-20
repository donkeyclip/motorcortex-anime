const MotorCortex = require("../node_modules/@kissmybutton/motorcortex/");
const Player = require("./node_modules/@kissmybutton/motorcortex-player/");
const AnimeDefinition = require("../src/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

const css = `

  html,body {
    background-color:white;
    height:100%;
    width:100%;
    margin:0px;
  }
  .container {
    width:100%;
    height:100%;
    position:absolute;
  }
  .cirlce {
    background: navy;
    border-radius: 64px;
    height: 64px;
    left: 0;
    position: relative;
    top: 0;
    width: 64px;
  }

  .dotted {
    background-image: -webkit-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
    background-image: -moz-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
    background-image: -ms-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
    background-image: repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
    -webkit-background-size: 3px 3px;
    -moz-background-size: 3px 3px;
    background-size: 3px 3px;
  }
  .board {
    background-color: whitesmoke;
    width:384px;
    height:384px;
    margin:auto;
    transform:translateY(50%)
  }
`;

const html = `<div class="container"><div class="board dotted"><div class="cirlce" /></div></div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "90%",
  height: "90%"
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
