# motorcortex-anime

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-anime
# OR
$ yarn add @kissmybutton/motorcortex-anime
```

## Importing

```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import Anime from "@kissmybutton/motorcortex-anime";
```

## Loading

```javascript
const plugins = MotorCortex.loadPlugin(Anime);
// configure here
const anime = new plugins.Anime(attrs, props);
```

## API

```javascript
const attrs = {
  animatedAttrs: {
    opacity: 0.5,
    transform: {
      translateX: "320px"
    }
  }
};

const props = {
  duration: 800,
  selector: ".example",
  easing: "linear"
};
```

### attrs

#### animatedAttrs

`animatedAttrs` include any CSS (opacity, backgroundColor...), Transform (translateX, rotate...), Object, DOM or SVG properties to be animated.
