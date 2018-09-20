const MotorCortex = require("../node_modules/@kissmybutton/motorcortex/");
const Player = require("./node_modules/@kissmybutton/motorcortex-player/");
const AnimeDefinition = require("../src/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
const calcDist = (x1, x2, y1, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

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
    position: relative;
    background: navy;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    left: 0;
    top: 0;
  }
  .cirlceIn {
    position: relative;
    background: red;
    border-radius: 20px;
    height:20px;
    width: 20px;
    left: 5;
    top: 5;
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
    width:50%;
    height:50%;
    margin:auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const html = `
  <div class="container">
    <div id="board" class="board dotted">
      <div id="hit"/>
      <div class="cirlce">
        <div class="cirlceIn"/>
      </div>
    </div>
  </div>`;

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

clip.props.host
  .getElementsByTagName("iframe")[0]
  .contentWindow.document.getElementById(
    "board"
  ).style.width = clip.props.host
  .getElementsByTagName("iframe")[0]
  .contentWindow.document.getElementById("board").offsetWidth;
clip.props.host
  .getElementsByTagName("iframe")[0]
  .contentWindow.document.getElementById(
    "board"
  ).style.height = clip.props.host
  .getElementsByTagName("iframe")[0]
  .contentWindow.document.getElementById("board").offsetHeight;
// const group = new MotorCortex.Group();
const top = 0;
const right =
  clip.props.host
    .getElementsByTagName("iframe")[0]
    .contentWindow.document.getElementById("board").offsetWidth - 30;
const bottom =
  clip.props.host
    .getElementsByTagName("iframe")[0]
    .contentWindow.document.getElementById("board").offsetHeight - 30;
const left = 0;
let c = 0;
let translateX1, translateY1;
let translateX2 = 0,
  translateY2 = 0;

for (let i = 0; i < 50; i += 2) {
  c++;
  if (c % 2) {
    translateX1 = right;
    translateY1 = Math.random() * bottom;
  } else {
    translateX1 = Math.random() * right;
    translateY1 = bottom;
  }

  const anime = new Anime.Anime(
    {
      animatedAttrs: {
        transform: {
          translateX: translateX1 + "px",
          translateY: translateY1 + "px"
        },
        backgroundColor: `rgb(${Math.random() * 256},${Math.random() *
          256},${Math.random() * 256})`
      },
      attrs: {
        easing: "linear"
      }
    },
    {
      duration: parseInt(
        calcDist(translateX1, translateX2, translateY1, translateY2)
      ),
      selector: ".cirlce"
    }
  );

  if (c % 2) {
    translateX2 = left;
    translateY2 = Math.random() * bottom;
  } else {
    translateX2 = Math.random() * right;
    translateY2 = top;
  }

  const anime1 = new Anime.Anime(
    {
      animatedAttrs: {
        transform: {
          translateX: translateX2 + "px",
          translateY: translateY2 + "px"
        },
        backgroundColor: `rgb(${Math.random() * 256},${Math.random() *
          256},${Math.random() * 256})`
      },
      attrs: {
        easing: "linear"
      }
    },
    {
      duration: parseInt(
        calcDist(translateX1, translateX2, translateY1, translateY2)
      ),
      selector: ".cirlce"
    }
  );

  if (clip.incidents.length == 0) {
    clip.addIncident(anime, 0);
    clip.addIncident(anime1, 0);
  } else {
    clip.addIncident(
      anime,
      parseInt(
        clip.incidents[clip.incidents.length - 1].millisecond +
          clip.incidents[clip.incidents.length - 1].incident.props.duration
      )
    );
    clip.addIncident(
      anime1,
      parseInt(
        clip.incidents[clip.incidents.length - 1].millisecond +
          clip.incidents[clip.incidents.length - 1].incident.props.duration
      )
    );
  }
}

new Player({
  clip: clip,
  theme: "transparent on-top",
  preview: false,
  pointerEvents: false
});
