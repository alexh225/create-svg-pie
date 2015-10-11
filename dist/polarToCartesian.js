"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = angleInDegrees * Math.PI / 180.0;
    var x = centerX + radius * Math.cos(angleInRadians);
    var y = centerY + radius * Math.sin(angleInRadians);
    return [x, y];
}
exports["default"] = polarToCartesian;
module.exports = exports["default"];