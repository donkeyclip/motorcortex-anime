function getMatrix2D(win, element) {
  const transform = win.getComputedStyle(element).transform;
  if (transform === "") {
    return {};
  }
  const values = transform
    .split("(")[1]
    .split(")")[0]
    .split(",");
  const qrDecompone = function(a) {
    const angle = Math.atan2(a[1], a[0]),
      denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
      scaleX = Math.sqrt(denom),
      scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
      skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
      skewY = (180 / Math.PI) * a[1];
    return {
      angle: angle / (Math.PI / 180), // this is rotation angle in degrees
      scaleX: scaleX, // scaleX factor
      scaleY: scaleY, // scaleY factor
      skewX: skewX / (Math.PI / 180), // skewX angle degrees
      skewY: skewY, // skewY angle degrees
      translateX: a[4], // translation point  x
      translateY: a[5] // translation point  y
    };
  };
  return qrDecompone(values);
}

module.exports = getMatrix2D;
