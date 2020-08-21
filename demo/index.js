import Player from "@kissmybutton/motorcortex-player";
import { Clip, Group, loadPlugin } from "@kissmybutton/motorcortex/";
import AnimeDefinition from "../dist/motorcortex-anime.umd";
const Anime = loadPlugin(AnimeDefinition);

const css = `

.wrapper {
    background-color: #f7f7f7;
    height:100%;
    width:100%;
    margin:0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    color: #252056;
    font-family: 'Montserrat', sans-serif;
  }
  .title {
    font-size: 50px;
    font-weight: bold;
  }
  .subTitle {
    font-size: 30px;
  }
  .text{
    font-size: 24px;
    font-weight: 100;
  }
  .boxWidth,.boxColor,.boxRotate,.boxMove,.boxBorder {
    background: #252056;
    width: 250px;
    height: 30px;
    position: relative;
    margin-left: 30px
  }
  .boxBorder{
    width: 30px;
    border-radius: 0%;
  }
  .boxMove{
    left:0;
    width: 30px;
  }

  .boxWidth{
    width: 30px;
  }

  .boxColor{
    background: rgb(37, 32, 86);
  }

  .boxRotate{
    width:30px;
    transform: rotate(0deg);
  }

  .demo{
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    position: relative;
  }
  .demoWidth,.demoColor,.demoRotate,.demoMove,.demoBorder{
    display: flex;
    position: relative;
    width: 100%;
    justify-content: start;
  }
  .cls-1{
    stroke-dasharray: 6000;
    stroke-dashoffset: 6000;
  }
`;

const html = `
<div class="wrapper">
<div class="container">
  <div class="title">MotorCortex</div>
  <div class="subTitle">Anime plugin</div>
  <div class="text">Demo:</div>
  <div class="demo">
    <div class="demoWidth">
      <div class="text">width :</div>
      <div class="boxWidth"></div>
    </div>
    <div class="demoColor">
      <div class="text">background color :</div>
      <div class="boxColor"></div>
    </div>
    <div class="demoRotate">
      <div class="text">Rotate :</div>
      <div class="boxRotate"></div>
    </div>
    <div class="demoMove">
      <div class="text">Move with easings:</div>
      <div class="boxMove"> </div>
    </div>
    <div class="demoBorder">
      <div class="text">Border :</div>
      <div class="boxBorder"> </div>
    </div>
  </div>

  <div class="subTitle svgText">svg </div>
  <div class="svgBorder"> <svg xmlns="http://www.w3.org/2000/svg" width="300px" viewBox="0 0 495 464.3"><defs><style>.cls-1{fill:none;stroke:#252056;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:none;}</style></defs><title>mc2</title><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M86,368.6V128.8L195.3,253.4,86,368.6ZM496,18.1H419.8L246.4,197.3,86.3,18.1H4V479.3H80.5L299,250.1l119.6-125V370.5l-71.5-74.4a3.9,3.9,0,0,0-5.4-.1l-.2.2L293.2,348,418.6,479.3H496Z" transform="translate(-2.5 -16.6)"/></g><g id="Layer_2" data-name="Layer 2"><path class="cls-2" d="M86,368.6V128.8L195.3,253.4,86,368.6ZM496,18.1H419.8L246.4,197.3,86.3,18.1H4V479.3H80.5L299,250.1l119.6-125V370.5l-71.5-74.4a3.9,3.9,0,0,0-5.4-.1l-.2.2L293.2,348,418.6,479.3H496Z" transform="translate(-2.5 -16.6)"/></g></svg> </div>

</div>
</div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "612px",
  height: "800px",
};

const clip = new Clip({
  css,
  html,
  host,
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700,900&display=swap`,
    },
  ],
  containerParams,
});

const boxWidth = new Anime.Anime(
  {
    animatedAttrs: {
      width: "250px",
    },
  },
  {
    duration: 1700,
    selector: `.boxWidth`,
    easing: "easeOutQuad",
  }
);

const boxColor = new Anime.Anime(
  {
    animatedAttrs: {
      background: "rgb(255, 0, 85)",
    },
    initialValues: {
      background: "rgb(37, 32, 86)",
    },
  },
  {
    duration: 1700,
    selector: ".boxColor",
    easing: "easeOutQuad",
  }
);

const boxRotate = new Anime.Anime(
  {
    animatedAttrs: {
      width: "30px",
      transform: {
        rotate: "360deg",
      },
    },
    initialValues: {
      width: "30cm",
      transform: {
        rotate: "0deg",
      },
    },
  },
  {
    duration: 1700,
    selector: ".boxRotate",
    easing: "easeOutQuad",
  }
);

const boxMove = new Anime.Anime(
  {
    animatedAttrs: {
      left: "220px",
    },
    initialValues: {
      left: "0px",
    },
  },
  {
    duration: 1700,
    selector: ".boxMove",
    easing: "easeOutBounce",
  }
);

const boxBorder = new Anime.Anime(
  {
    animatedAttrs: {
      borderRadius: "50%",
    },
    initialValues: {
      borderRadius: "0%",
    },
  },
  {
    duration: 1700,
    selector: ".boxBorder",
  }
);

const opacity = new Anime.Anime(
  {
    animatedAttrs: {
      opacity: 1,
    },
    initialValues: {
      opacity: 0,
    },
  },
  {
    duration: 1000,
    selector: ".svgText",
  }
);

const svg = new Anime.Anime(
  {
    animatedAttrs: {
      strokeDashoffset: 0,
    },
    initialValues: {
      strokeDashoffset: 6000,
    },
  },
  {
    duration: 3000,
    selector: ".cls-1",
  }
);

//.cls-1

// const boxWidthBack = new Anime.Anime(
//   {
//     animatedAttrs: {
//       // width: "30px",
//       opacity: 0,
//       // height: 30
//     },
//     initialValues: {
//       // width: "250px"
//     },

//   },
//   {
//     duration: 1000,
//     delay:3000,
//     hiatus:4000,
//     repeats:3,
//     selector: ".boxWidth",
//     easing: "easeOutQuad"
//   }
// );
const myGroup = new Group();
myGroup.addIncident(boxColor, 0);
clip.addIncident(boxWidth, 0);
clip.addIncident(myGroup, 4000);
clip.addIncident(boxRotate, 3400);
clip.addIncident(boxMove, 5100);
clip.addIncident(boxBorder, 6800);
clip.addIncident(opacity, 8500);
clip.addIncident(svg, 9500);
// clip.addIncident(boxWidthBack, 0); //12500
new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-blue",
  preview: false,
  pointerEvents: false,
});

window.myclip = clip;
