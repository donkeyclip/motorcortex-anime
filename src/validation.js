const nu = [
  "cm",
  "mm",
  "in",
  "px",
  "pt",
  "pc",
  "em",
  "ex",
  "ch",
  "rem",
  "vw",
  "vh",
  "vmin",
  "vmax",
  "%",
];
const ru = ["deg", "rad", "grad", "turn"];
const _MEASUREMENT = "measurement";
const _COLOR = "color";

export const animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    background: {
      optional: true,
      type: _COLOR,
    },
    backgroundColor: {
      optional: true,
      type: _COLOR,
    },
    backgroundPosition: {
      optional: true,
      type: "string",
    },
    backgroundSize: {
      optional: true,
      type: "string",
    },
    border: {
      optional: true,
      type: "string",
    },
    borderBottom: {
      optional: true,
      type: "string",
    },
    borderBottomColor: {
      optional: true,
      type: _COLOR,
    },
    borderBottomLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderBottomRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderBottomWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderColor: {
      optional: true,
      type: _COLOR,
    },
    borderEndEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderEndStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderImageOutset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    borderImageSlice: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    borderImageWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    borderLeft: {
      optional: true,
      type: "string",
    },
    borderLeftColor: {
      optional: true,
      type: _COLOR,
    },
    borderLeftWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderRight: {
      optional: true,
      type: "string",
    },
    borderRightColor: {
      optional: true,
      type: _COLOR,
    },
    borderRightWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderStartEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderStartStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderTop: {
      optional: true,
      type: "string",
    },
    borderTopColor: {
      optional: true,
      type: _COLOR,
    },
    borderTopLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderTopRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderTopWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    borderWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    bottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    boxShadow: {
      optional: true,
      type: "string",
    },
    caretColor: {
      optional: true,
      type: _COLOR,
    },
    color: {
      optional: true,
      type: _COLOR,
    },
    columnCount: {
      optional: true,
      type: "number",
      min: 0,
      integer: true,
    },
    columnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    columnRule: {
      optional: true,
      type: "string",
    },
    columnRuleColor: {
      optional: true,
      type: _COLOR,
    },
    columnRuleWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    columns: {
      optional: true,
      type: "number",
      min: 0,
      integer: true,
    },
    columnWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    flex: {
      optional: true,
      type: "number",
      min: 0,
      integer: true,
    },
    flexBasis: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    flexGrow: {
      optional: true,
      type: "number",
      min: 0,
      integer: true,
    },
    flexShrink: {
      optional: true,
      type: "number",
      min: 0,
      integer: true,
    },
    font: {
      optional: true,
      type: "string",
    },
    fontSize: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    fontSizeAdjust: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    fontStretch: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"],
    },
    fontWeight: {
      optional: true,
      type: "string",
    },
    gap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    gridColumnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    gridGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    gridRowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    gridTemplateColumns: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    gridTemplateRows: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    height: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    inset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    insetBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    insetBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    insetBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    insetInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    insetInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    insetInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    left: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    letterSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    lineClamp: {
      optional: true,
      type: "number",
      min: 0,
      integer: true,
    },
    lineHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    margin: {
      optional: true,
      type: "string",
    },
    marginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    marginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    marginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    marginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    maskBorder: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    maskPosition: {
      optional: true,
      type: "string",
    },
    maskSize: {
      optional: true,
      type: "string",
    },
    maxHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    maxWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0,
    },
    objectPosition: {
      optional: true,
      type: "string",
    },
    offset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    offsetAnchor: {
      optional: true,
      type: "string",
    },
    offsetDistance: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    offsetPath: {
      optional: true,
      type: "string",
    },
    offsetPosition: {
      optional: true,
      type: "string",
    },
    offsetRotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru,
    },
    opacity: {
      optional: true,
      type: "number",
      min: 0,
      max: 1,
    },
    order: {
      optional: true,
      type: "number",
      integer: true,
    },
    outline: {
      optional: true,
      type: "string",
    },
    outlineColor: {
      optional: true,
      type: _COLOR,
    },
    outlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    outlineRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    outlineRadiusBottomleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    outlineRadiusBottomright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    outlineRadiusTopleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    outlineRadiusTopright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    outlineWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    padding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    paddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    paddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    paddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    paddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    perspective: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    perspectiveOrigin: {
      optional: true,
      type: "string",
    },
    right: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    rotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru,
    },
    rowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scale: {
      optional: true,
      type: "number",
      min: 0,
    },
    scrollbarColor: {
      optional: true,
      type: _COLOR,
    },
    scrollMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollMarginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPadding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollPaddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    scrollSnapCoordinate: {
      optional: true,
      type: "string",
    },
    scrollSnapDestination: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    shapeImageThreshold: {
      optional: true,
      type: "string",
    },
    shapeMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    shapeOutside: {
      optional: true,
      type: "string",
    },
    tabSize: {
      optional: true,
      type: "string",
    },
    textDecoration: {
      optional: true,
      type: "string",
    },
    textDecorationColor: {
      optional: true,
      type: _COLOR,
    },
    textDecorationThickness: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    textEmphasis: {
      optional: true,
      type: "string",
    },
    textEmphasisColor: {
      optional: true,
      type: _COLOR,
    },
    textFillColor: {
      optional: true,
      type: _COLOR,
    },
    textIndent: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    textShadow: {
      optional: true,
      type: "string",
    },
    textStroke: {
      optional: true,
      type: "string",
    },
    textStrokeColor: {
      optional: true,
      type: _COLOR,
    },
    textUnderlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    top: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    transform: {
      optional: true,
      type: "object",
      props: {
        translateX: { type: _MEASUREMENT, units: nu, optional: true },
        translateY: { type: _MEASUREMENT, units: nu, optional: true },
        translateZ: { type: _MEASUREMENT, units: nu, optional: true },
        rotate: { type: _MEASUREMENT, units: ru, optional: true },
        rotateX: { type: _MEASUREMENT, units: ru, optional: true },
        rotateY: { type: _MEASUREMENT, units: ru, optional: true },
        rotateZ: { type: _MEASUREMENT, units: ru, optional: true },
        scale: { type: "number", min: 0, optional: true },
        scaleX: { type: "number", min: 0, optional: true },
        scaleY: { type: "number", min: 0, optional: true },
        scaleZ: { type: "number", min: 0, optional: true },
        skewX: { type: _MEASUREMENT, units: ru, optional: true },
        skewY: { type: _MEASUREMENT, units: ru, optional: true },
        perspective: { type: _MEASUREMENT, units: nu, optional: true },
      },
    },
    transformOrigin: {
      optional: true,
      type: "string",
    },
    verticalAlign: {
      optional: true,
      type: "string",
    },
    visibility: {
      optional: true,
      type: "string",
    },
    width: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    wordSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
    },
    zIndex: {
      optional: true,
      type: "number",
      integer: true,
    },
    zoom: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"],
      min: 0,
    },
  },
  transformOrigin: {
    type: "string",
  },
  verticalAlign: {
    type: "string",
  },
  visibility: {
    type: "string",
  },
  width: {
    type: _MEASUREMENT,
    units: nu,
  },
  wordSpacing: {
    type: _MEASUREMENT,
    units: nu,
  },
  zIndex: {
    type: "number",
    integer: true,
  },
  zoom: {
    type: _MEASUREMENT,
    units: ["%"],
    min: 0,
  },
};
