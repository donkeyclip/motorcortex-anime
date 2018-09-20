const MotorCortex = require("../node_modules/@kissmybutton/motorcortex/");
const Player = require("./node_modules/@kissmybutton/motorcortex-player/");
const AnimeDefinition = require("../src/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
const calcDist = (x1, x2, y1, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
const getTotalTime = g => {
  let sum = 0;
  for (const i of g.incidents) {
    sum += i.incident.props.duration;
  }
  return sum;
};
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

  .board {
    background-color: whitesmoke;
    width:50%;
    height:50%;
    margin:auto;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .cirlce {
    position: absolute;
    background: navy;
    border-radius: 30px;
    height: 30px;
    width: 30px;
    left: 0px;
    top: 0px;
  }

  .cirlceIn {
    position: absolute;
    background: red;
    border-radius: 20px;
    height:20px;
    width: 20px;
    left: 5px;
    top: 5px;;
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
`;

const html = `
  <div class="container">
    <div id="board" class="board dotted">
      <div class="cirlce0 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce1 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce2 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce3 cirlce">
        <div class="cirlceIn"></div>
      </div>
       <div class="cirlce4 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce5 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce6 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce7 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce8 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce9 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce10 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce11 cirlce">
        <div class="cirlceIn"></div>
      </div>
       <div class="cirlce12 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce13 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce14 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce15 cirlce">
        <div class="cirlceIn"></div>
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

for (let q = 0; q <= 15; q++) {
  const group = new MotorCortex.Group();

  let c = 0;
  let translateX1 = 0,
    translateY1 = 0,
    translateX2 = 0,
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
        selector: ".cirlce" + q
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
        selector: ".cirlce" + q
      }
    );

    if (group.incidents.length == 0) {
      group.addIncident(anime, 0);
      // console.log(group.incidents)
      // console.log("millisecond added",0);
      // console.log("current duration",parseInt(calcDist(translateX1, 0, translateY1, 0)));

      group.addIncident(anime1, getTotalTime(group));

      // console.log(group.incidents)
      // console.log("millisecond previous",parseInt(calcDist(translateX1, 0, translateY1, 0)))
      // console.log("current durations",parseInt(calcDist(translateX1, 0, translateY1, 0)) + parseInt(calcDist(translateX1, translateX2, translateY1, translateY2)))
    } else {
      group.addIncident(anime, getTotalTime(group));

      // console.log(group.incidents)
      // console.log("millisecond previous", group.incidents[group.incidents.length - 1].millisecond)
      // console.log("millisecond added", parseInt(group.incidents[group.incidents.length - 1].millisecond + group.incidents[group.incidents.length - 1].incident.props.duration))
      // console.log("current duration", parseInt(group.incidents[group.incidents.length - 1].millisecond + group.incidents[group.incidents.length - 1].incident.props.duration) + parseInt(calcDist(translateX1, translateX2, translateY1, translateY2)));

      group.addIncident(anime1, getTotalTime(group));
      // console.log("millisecond previous", group.incidents[group.incidents.length - 1].millisecond)
      // console.log("millisecond added", parseInt(group.incidents[group.incidents.length - 1].millisecond + group.incidents[group.incidents.length - 1].incident.props.duration))
      // console.log("current duration", parseInt(group.incidents[group.incidents.length - 1].millisecond + group.incidents[group.incidents.length - 1].incident.props.duration) + parseInt(calcDist(translateX1, translateX2, translateY1, translateY2)));
    }
  }
  clip.addIncident(group, 0);
}

new Player({
  clip: clip,
  theme: "transparent on-top",
  preview: false,
  pointerEvents: false
});
