# MotorCortex Anime

[Anime.js](https://animejs.com/) library as a MotorCortex CSS Layer

## Installation

```bash
$ npm install @donkeyclip/motorcortex-anime
# OR
$ yarn add @donkeyclip/motorcortex-anime
```

```javascript
import Anime from "@donkeyclip/motorcortex-anime";
```

## Key Concepts / Features

The library exposes `CSSEffect` which implementes an alternative CSS Layer for MotorCortex while the second (`MotionPath`)
performs motion path animation.

## Browser compatibility

| Chrome | Safari | IE / Edge | Firefox | Opera |
| ------ | ------ | --------- | ------- | ----- |
| 24+    | 6+     | 10+       | 32+     | 15+   |

## Documentation

### Import and load the plugin to MotorCortex

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";

const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);
```

### Use the provided CSSEffect as the CSS core of MotorCortex.

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
MotorCortex.setCSSCore(AnimePluginDefinition.CSSEffect);
// from that point and on Anime's CSSEffect will be used as MotorCortex's core CSS Layer implementation

const MyClip = new MotorCortex.Clip({
  html: `
    <div class="container">
      <div class="a"></div>
    </div>
  `,
  css: `
    .container{
      width: 600px;
      height: 400px;
      background: white;
      position: relative;
    }
    .a{
      width: 30px;
      height: 30px;
      position: absolute;
      background: red;
      top: 0px;
      left: 0px;
    }
  `
});

const MyAnime = new CSSEffect({
  animatedAttrs: {
    left: '120px',
    top: '220px',
    background: 'orange',
    width: '10px;
  }
}, {
  selector: '.a',
  duration: 2000,
  easing: 'linear'
});

MyClip.addIncident(MyAnime, 1000);

MyClip.play();
```

## MotionPath

The MotioPath Incident implements the motion path capability of anime.js library. This feature allows motion of any element on any given (svg) path.

### Create a MotionPath animation Incident and place it anywhere in your Clip

The syntax is simple:

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);

const motionPath = new AnimePlugin.MotionPath(
  {
    pixelsAccuracy: 5,
    animatedAttrs: {
      positionOn: {
        pathElement: "the selector that targets your path element",
      },
    },
  },
  {
    selector: ".a",
    duration: 2000,
    easing: "linear",
  }
);
```

As you can notice the animated attribute here is `positionOn` which in turn is an
object expecting only one key, the `pathElement` which is a selctor to the path
element that defines the motion path.

The selected elements will sleep into this path on the given duration.

One more thing to notice is the `pixelsAccuracy` attribute. This attribute sets the distance threshold between two
sequential points of the path that the element should move. This attribute can be used so the motion path
effect gets more performant (less processing is required). The default value is 4.

### Exposed Incidents

- `CSSEffect` (CSS Layer implementation)
- `MotionPath`

### Demo

https://donkeyclip.github.io/motorcortex-anime/demo/

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
