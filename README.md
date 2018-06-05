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

### Configuring

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

##### animatedAttrs

This property defines any CSS (opacity, backgroundColor...), Transform (translateX, rotate...), Object, DOM or SVG properties that is going to be animated.

##### attrs

This property defines animation properties such as duration, delay, easing (default 'easeOutElastic'), elasticity etc.

### props

This property defines the animation duration and the elements (CSS selectors, dom elements, nodelist, object or array) to animate.
