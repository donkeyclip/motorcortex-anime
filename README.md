# MotorCortex-Anime

**Table of Contents**

- [MotorCortex-Anime](#motorcortex-anime)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [CSSEffect](#csseffect)
  - [MotionPath](#motionpath)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-anime/demo/)

# Intro / Features

[Anime.js](https://animejs.com/) library as a MotorCortex CSS Layer.
The library exposes `CSSEffect` which implementes an alternative CSS Layer for MotorCortex while the second (`MotionPath`) performs motion path animation.

The Plugin exposes two Incidents:
- `CSSEffect` (CSS Layer implementation)
- `MotionPath`

## Browser compatibility

| Chrome | Safari | IE / Edge | Firefox | Opera |
| ------ | ------ | --------- | ------- | ----- |
| 24+    | 6+     | 10+       | 32+     | 15+   |


# Getting Started
## Installation

```bash
$ npm install @donkeyclip/motorcortex-anime
# OR
$ yarn add @donkeyclip/motorcortex-anime
```
## Importing and loading

You can load Anime plugin in a two different ways, based on what you want to do with this plugin (you will find out more information below):

As a MotorCortex's core CSS Layer:
```javascript
import { setCSSCore } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
setCSSCore(AnimePluginDefinition.CSSEffect);
```

As a simple plugin:
```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
const AnimePlugin = loadPlugin(AnimePluginDefinition);
```

# Creating Incidents

## CSSEffect
Use the provided CSSEffect as the CSS core of MotorCortex.
```javascript
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
```
#### IMPORTANT 
Don't forget το import and load the Anime Plugin using the first way.

## MotionPath

The MotioPath Incident implements the motion path capability of anime.js library. This feature allows motion of any element on any given (svg) path.

The syntax is simple:

```javascript
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
### MotionPath Attrs
As you can notice the animated attribute here is `positionOn` which in turn is an
object expecting only one key, the `pathElement` which is a selctor to the path
element that defines the motion path.

The selected elements will sleep into this path on the given duration.

One more thing to notice is the `pixelsAccuracy` attribute. This attribute sets the distance threshold between two
sequential points of the path that the element should move. This attribute can be used so the motion path
effect gets more performant (less processing is required). The default value is 4.

#### IMPORTANT 
For the MotionPath Incident you should import and load MotorCortex-Anime as a simple Plugin.

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName, startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)

