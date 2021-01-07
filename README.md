# MotorCortex Anime

[Anime.js](https://animejs.com/) library as a MotorCortex Incident

## Installation
```bash
$ npm install @kissmybutton/motorcortex-anime
# OR
$ yarn add @kissmybutton/motorcortex-anime
```

```javascript
import Anime from "@kissmybutton/motorcortex-anime";
```


## Key Concepts / Features
MotorCortex Anime takes the capabilities of Anime.js library and exposes them via 
easy to use MotorCortex Incidents. 
The library exposes two Incidents, the one with the name "Anime" which, by the use 
of the Anime.js engine, can perform any CSS (or any other attribute) animation 
to any selected element while the second performs motion path animation.

## Browser compatibility 
| Chrome | Safari | IE / Edge | Firefox | Opera |
| --- | --- | --- | --- | --- |
| 24+ | 6+ | 10+ | 32+ | 15+ |

## Documentation
### Import and load the plugin to MotorCortex
```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import AnimePluginDefinition from "@kissmybutton/motorcortex-anime";

const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);
```

### Create an Anim animation Incident and place it anywhere in your Clip
```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import AnimePluginDefinition from "@kissmybutton/motorcortex-anime";

const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);

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

const MyAnime = new AnimePlugin.Anime({
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

### Work with tranform
`transform` is (the only) composite attribute that Anime Incident can animate. Transform attribute includes the following attributes:
- "translateX",
- "translateY",
- "translateZ",
- "rotate",
- "rotateX",
- "rotateY",
- "rotateZ",
- "scale",
- "scaleX",
- "scaleY",
- "scaleZ",
- "skewX",
- "skewY",
- "perspective"

All of the attributes on this list can only be animated via the transform composite attribute:
```javascript
const MyAnime = new AnimePlugin.Anime({
  animatedAttrs: {
    transform: {
      translateX: '50px',
      scale: 2
    }
  }
}, {
  selector: '.a',
  duration: 2000,
  easing: 'linear'
});
```

## MotionPath
The MotioPath Incident implements the motion path capability of anime.js library as Incident. This feature allows motion of any element on any given (svg) path.
### Create a MotionPath animation Incident and place it anywhere in your Clip
The syntax is simple:

```javascript
const motionPath = new AnimePlugin.MotionPath({
  animatedAttrs: {
    positionOn: {
      pathElement: 'the selector that targets your path element'
    }
  }
}, {
  selector: '.a',
  duration: 2000,
  easing: 'linear'
});
```
As you can notice the animated attribute here is `positionOn` which in turn is an
object expecting only one key, the `pathElement` which is a selctor to the path
element that defines the motion path.

The selected elements will sleep into this path on the given duration.

### Exposed Incidents
* `Anime`
* `MotionPath`
### Demo
https://kissmybutton.github.io/motorcortex-anime/demo/


## License
[MIT License](https://opensource.org/licenses/MIT)


  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
