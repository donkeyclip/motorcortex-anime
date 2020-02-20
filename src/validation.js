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
  "%"
];
const ru = ["deg", "rad", "grad", "turn"];
const _MEASUREMENT = "measurement";
const _COLOR = "color";

module.exports = {
  animatedAttrs: {
    type: "object",
    props: {
      background: {
        type: _COLOR
      },
      backgroundColor: {
        type: _COLOR
      },
      backgroundPosition: {
        type: "string"
      },
      backgroundSize: {
        type: "string"
      },
      border: {
        type: "string"
      },
      borderBottom: {
        type: "string"
      },
      borderBottomColor: {
        type: _COLOR
      },
      borderBottomLeftRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderBottomRightRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderBottomWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      borderColor: {
        type: _COLOR
      },
      borderEndEndRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderEndStartRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderImageOutset: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      borderImageSlice: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      borderImageWidth: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      borderLeft: {
        type: "string"
      },
      borderLeftColor: {
        type: _COLOR
      },
      borderLeftWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      borderRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderRight: {
        type: "string"
      },
      borderRightColor: {
        type: _COLOR
      },
      borderRightWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      borderStartEndRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderStartStartRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderTop: {
        type: "string"
      },
      borderTopColor: {
        type: _COLOR
      },
      borderTopLeftRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderTopRightRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      borderTopWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      borderWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      bottom: {
        type: _MEASUREMENT,
        units: nu
      },
      boxShadow: {
        type: "string"
      },
      caretColor: {
        type: _COLOR
      },
      color: {
        type: _COLOR
      },
      columnCount: {
        type: "number",
        min: 0,
        integer: true
      },
      columnGap: {
        type: _MEASUREMENT,
        units: nu
      },
      columnRule: {
        type: "string"
      },
      columnRuleColor: {
        type: _COLOR
      },
      columnRuleWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      columns: {
        type: "number",
        min: 0,
        integer: true
      },
      columnWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      flex: {
        type: "number",
        min: 0,
        integer: true
      },
      flexBasis: {
        type: _MEASUREMENT,
        units: nu
      },
      flexGrow: {
        type: "number",
        min: 0,
        integer: true
      },
      flexShrink: {
        type: "number",
        min: 0,
        integer: true
      },
      font: {
        type: "string"
      },
      fontSize: {
        type: _MEASUREMENT,
        units: nu
      },
      fontSizeAdjust: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      fontStretch: {
        type: _MEASUREMENT,
        units: ["%"]
      },
      fontWeight: {
        type: "string"
      },
      gap: {
        type: _MEASUREMENT,
        units: nu
      },
      gridColumnGap: {
        type: _MEASUREMENT,
        units: nu
      },
      gridGap: {
        type: _MEASUREMENT,
        units: nu
      },
      gridRowGap: {
        type: _MEASUREMENT,
        units: nu
      },
      gridTemplateColumns: {
        type: _MEASUREMENT,
        units: nu
      },
      gridTemplateRows: {
        type: _MEASUREMENT,
        units: nu
      },
      height: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      inset: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      insetBlock: {
        type: _MEASUREMENT,
        units: nu
      },
      insetBlockEnd: {
        type: _MEASUREMENT,
        units: nu
      },
      insetBlockStart: {
        type: _MEASUREMENT,
        units: nu
      },
      insetInline: {
        type: _MEASUREMENT,
        units: nu
      },
      insetInlineEnd: {
        type: _MEASUREMENT,
        units: nu
      },
      insetInlineStart: {
        type: _MEASUREMENT,
        units: nu
      },
      left: {
        type: _MEASUREMENT,
        units: nu
      },
      letterSpacing: {
        type: _MEASUREMENT,
        units: nu
      },
      lineClamp: {
        type: "number",
        min: 0,
        integer: true
      },
      lineHeight: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      margin: {
        type: "string"
      },
      marginBottom: {
        type: _MEASUREMENT,
        units: nu
      },
      marginLeft: {
        type: _MEASUREMENT,
        units: nu
      },
      marginRight: {
        type: _MEASUREMENT,
        units: nu
      },
      marginTop: {
        type: _MEASUREMENT,
        units: nu
      },
      maskBorder: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      maskPosition: {
        type: "string"
      },
      maskSize: {
        type: "string"
      },
      maxHeight: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      maxWidth: {
        type: _MEASUREMENT,
        units: nu,
        min: 0
      },
      objectPosition: {
        type: "string"
      },
      offset: {
        type: _MEASUREMENT,
        units: nu
      },
      offsetAnchor: {
        type: "string"
      },
      offsetDistance: {
        type: _MEASUREMENT,
        units: nu
      },
      offsetPath: {
        type: "string"
      },
      offsetPosition: {
        type: "string"
      },
      offsetRotate: {
        type: _MEASUREMENT,
        units: ru
      },
      opacity: {
        type: "number",
        min: 0,
        max: 1
      },
      order: {
        type: "number",
        integer: true
      },
      outline: {
        type: "string"
      },
      outlineColor: {
        type: _COLOR
      },
      outlineOffset: {
        type: _MEASUREMENT,
        units: nu
      },
      outlineRadius: {
        type: _MEASUREMENT,
        units: nu
      },
      outlineRadiusBottomleft: {
        type: _MEASUREMENT,
        units: nu
      },
      outlineRadiusBottomright: {
        type: _MEASUREMENT,
        units: nu
      },
      outlineRadiusTopleft: {
        type: _MEASUREMENT,
        units: nu
      },
      outlineRadiusTopright: {
        type: _MEASUREMENT,
        units: nu
      },
      outlineWidth: {
        type: _MEASUREMENT,
        units: nu
      },
      padding: {
        type: _MEASUREMENT,
        units: nu
      },
      paddingBottom: {
        type: _MEASUREMENT,
        units: nu
      },
      paddingLeft: {
        type: _MEASUREMENT,
        units: nu
      },
      paddingRight: {
        type: _MEASUREMENT,
        units: nu
      },
      paddingTop: {
        type: _MEASUREMENT,
        units: nu
      },
      perspective: {
        type: _MEASUREMENT,
        units: nu
      },
      perspectiveOrigin: {
        type: "string"
      },
      right: {
        type: _MEASUREMENT,
        units: nu
      },
      rotate: {
        type: _MEASUREMENT,
        units: ru
      },
      rowGap: {
        type: _MEASUREMENT,
        units: nu
      },
      scale: {
        type: "number",
        min: 0
      },
      scrollbarColor: {
        type: _COLOR
      },

      scrollMargin: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginBlock: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginBlockEnd: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginBlockStart: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginBottom: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginInline: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginInlineEnd: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginInlineStart: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginLeft: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginRight: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollMarginTop: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPadding: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingBlock: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingBlockEnd: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingBlockStart: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingBottom: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingInline: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingInlineEnd: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingInlineStart: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingLeft: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingRight: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollPaddingTop: {
        type: _MEASUREMENT,
        units: nu
      },
      scrollSnapCoordinate: {
        type: "string"
      },
      scrollSnapDestination: {
        type: _MEASUREMENT,
        units: nu
      },
      shapeImageThreshold: {
        type: "string"
      },
      shapeMargin: {
        type: _MEASUREMENT,
        units: nu
      },
      shapeOutside: {
        type: "string"
      },
      tabSize: {
        type: "string"
      },
      textDecoration: {
        type: "string"
      },
      textDecorationColor: {
        type: _COLOR
      },
      textDecorationThickness: {
        type: _MEASUREMENT,
        units: nu
      },
      textEmphasis: {
        type: "string"
      },
      textEmphasisColor: {
        type: _COLOR
      },
      textFillColor: {
        type: _COLOR
      },
      textIndent: {
        type: _MEASUREMENT,
        units: nu
      },
      textShadow: {
        type: "string"
      },
      textStroke: {
        type: "string"
      },
      textStrokeColor: {
        type: _COLOR
      },
      textUnderlineOffset: {
        type: _MEASUREMENT,
        units: nu
      },
      top: {
        type: _MEASUREMENT,
        units: nu
      },
      transform: {
        type: "object",
        props: {
          translateX: { type: _MEASUREMENT, units: nu },
          translateY: { type: _MEASUREMENT, units: nu },
          translateZ: { type: _MEASUREMENT, units: nu },
          rotate: { type: _MEASUREMENT, units: ru },
          rotateX: { type: _MEASUREMENT, units: ru },
          rotateY: { type: _MEASUREMENT, units: ru },
          rotateZ: { type: _MEASUREMENT, units: ru },
          scale: { type: "number", min: 0 },
          scaleX: { type: "number", min: 0 },
          scaleY: { type: "number", min: 0 },
          scaleZ: { type: "number", min: 0 },
          skewX: { type: _MEASUREMENT, units: ru },
          skewY: { type: _MEASUREMENT, units: ru },
          perspective: { type: _MEASUREMENT, units: nu }
        }
      },
      transformOrigin: {
        type: "string"
      },
      verticalAlign: {
        type: "string"
      },
      visibility: {
        type: "string"
      },
      width: {
        type: _MEASUREMENT,
        units: nu
      },
      wordSpacing: {
        type: _MEASUREMENT,
        units: nu
      },
      zIndex: {
        type: "number",
        integer: true
      },
      zoom: {
        type: _MEASUREMENT,
        units: ["%"],
        min: 0
      }
    }
  }
};
