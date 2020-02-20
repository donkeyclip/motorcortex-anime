"use strict";

var nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var ru = ["deg", "rad", "grad", "turn"];
module.exports = {
  animatedAttrs: {
    type: "object",
    strict: true,
    props: {
      width: {
        type: "string",
        dc: {
          type: 'number',
          min: 0,
          units: nu
        }
      },
      height: {
        type: "string",
        dc: {
          type: 'number',
          min: 0,
          units: nu
        }
      },
      opacity: { // as soon as the "dc" key is missing dc will use the basic validation rules
        type: 'number',
        min: 0,
        max: 1
      },
      transform: {
        type: "object",
        strict: true, // here donkeyclip will use the basic validation (type:"object", strict: "true"). strict=true means only the listed props on "props" key are supported
        props: {
          translateX: {
            type: "string",
            dc: {
              type: "number",
              units: nu
            }
          },
          translateY: {
            type: "string",
            dc: {
              type: "number",
              units: nu
            }
          },
          translateZ: {
            type: "string",
            dc: {
              type: "number",
              units: nu
            }
          },
          rotate: {
            type: "string",
            dc: {
              type: "number",
              units: ru
            }
          },
          rotateX: {
            type: "string",
            dc: {
              type: "number",
              units: ru
            }
          },
          rotateY: {
            type: "string",
            dc: {
              type: "number",
              units: ru
            }
          },
          rotateZ: {
            type: "string",
            dc: {
              type: "number",
              units: ru
            }
          },
          scale: {
            type: "number",
            min: 0
          },
          scaleX: {
            type: "number",
            min: 0
          },
          scaleY: {
            type: "number",
            min: 0
          },
          scaleZ: {
            type: "number",
            min: 0
          },
          skewX: {
            type: "string",
            dc: {
              type: "number",
              units: ru
            }
          },
          skewY: {
            type: "string",
            dc: {
              type: "number",
              units: ru
            }
          },
          perspective: {
            type: "string",
            dc: {
              type: "number",
              units: ru
            }
          }
        }
      }
    }
  }
};
