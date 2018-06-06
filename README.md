# motorcortex-anime

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-anime
# OR
$ yarn add @kissmybutton/motorcortex-anime
```

## Usage

### Importing

```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import Anime from "@kissmybutton/motorcortex-anime";
```

### Loading

```javascript
const plugins = MotorCortex.loadPlugin(Anime);
// configure here
const anime = new plugins.Anime(attrs, props);
```

### API

```javascript
const attrs = {
  animatedAttrs: {
    opacity: 0.5,
    translateX: "320px"
  },
  attrs: {
    easing: "linear"
  }
};

const props = {
  duration: 800,
  selector: ".example"
};
```

### attrs

#### animatedAttrs

`animatedAttrs` include any CSS (opacity, backgroundColor...), Transform (translateX, rotate...), Object, DOM or SVG properties to be animated.

#### attrs

`attrs` include animation properties such as duration, delay, easing (default 'easeOutElastic'), elasticity etc.

### props

`props` include the following keys:

`duration`: which defines the animation duration

`selector`: which are the elements (CSS selectors, dom elements, nodelist, object or array) to animate.
