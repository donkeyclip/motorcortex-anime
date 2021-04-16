import Player from "@kissmybutton/motorcortex-player";
import { Clip, Group, loadPlugin } from "@kissmybutton/motorcortex/";
import AnimeDefinition from "../src/index";

const Anime = loadPlugin(AnimeDefinition);
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
    top:0px;
    left:0px;
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
      <div class="cirlce16 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce17 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce18 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce19 cirlce">
        <div class="cirlceIn"></div>
      </div>
      <div class="cirlce20 cirlce">
        <div class="cirlceIn"></div>
      </div>
    </div>
  </div>`;
const host = document.getElementById("clip");
const containerParams = {
  width: "90%",
  height: "90%",
};
const rootClip = new Clip({
  html: '<div id="edo"></div>',
  css: "#edo{width:100%; height: 100%}",
  host: host,
  containerParams,
  audio: "off",
});
const clip = new Clip({
  css,
  html,
  selector: "#edo",
  containerParams,
});
const width = host.offsetWidth * 0.9;
const height = host.offsetHeight * 0.9;
const top = 0;
const right = width - 30;
const bottom = height - 30;
const left = 0;
for (let q = 0; q <= 30; q++) {
  const group = new Group({}, {});
  let c = 0;
  let translateX1 = 0,
    translateY1 = 0,
    translateX2 = 0,
    translateY2 = 0;
  for (let i = 0; i < 10; i += 2) {
    c++;
    if (c % 2) {
      translateX1 = (right / width) * 100;
      translateY1 = ((Math.random() * bottom) / height) * 100;
    } else {
      translateX1 = ((Math.random() * right) / width) * 100;
      translateY1 = (bottom / height) * 100;
    }
    const anime = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            scaleX: 0.2,
            scaleY: 0.2,
          },
          left: translateX1 + "%",
          top: translateY1 + "%",
          backgroundColor: `rgb(${Math.random() * 256},${Math.random() * 256},${
            Math.random() * 256
          })`,
        },
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: parseInt(
          calcDist(translateX1, translateX2, translateY1, translateY2) * 10
        ),
        selector: ".cirlce" + q,
      }
    );
    if (c % 2) {
      translateX2 = (left / width) * 100;
      translateY2 = ((Math.random() * bottom) / height) * 100;
    } else {
      translateX2 = ((Math.random() * right) / width) * 100;
      translateY2 = (top / height) * 100;
    }
    const anime1 = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            scaleX: 1,
            scaleY: 1,
          },
          left: translateX2 + "%",
          top: translateY2 + "%",
          backgroundColor: `rgb(${Math.random() * 256},${Math.random() * 256},${
            Math.random() * 256
          })`,
        },
        attrs: {
          easing: "linear",
        },
      },
      {
        duration: parseInt(
          calcDist(translateX1, translateX2, translateY1, translateY2) * 10
        ),
        selector: ".cirlce" + q,
      }
    );
    group.addIncident(anime, group.duration);
    group.addIncident(anime1, group.duration);
  }
  clip.addIncident(group, 0);
}
rootClip.addIncident(clip, 0);
new Player({
  clip: rootClip,
  theme: "mc-blue",
  preview: false,
  pointerEvents: false,
  // speedValues: [1, 2, 3]
});
window.myclip = clip;
