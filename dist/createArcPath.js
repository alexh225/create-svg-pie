"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function createArcPath(x, y, radius, endAngle, startAngle, color) {
    var _polarToCartesian = polarToCartesian(radius, radius, radius, startAngle - 90);

    var _polarToCartesian2 = _slicedToArray(_polarToCartesian, 2);

    var x1 = _polarToCartesian2[0];
    var y1 = _polarToCartesian2[1];

    var _polarToCartesian3 = polarToCartesian(radius, radius, radius, endAngle - 90);

    var _polarToCartesian32 = _slicedToArray(_polarToCartesian3, 2);

    var x2 = _polarToCartesian32[0];
    var y2 = _polarToCartesian32[1];

    var d = "M" + x + "," + y + "  L" + x1 + "," + y1 + "  A" + radius + "," + radius + " 0 " + (endAngle - startAngle > 180 ? 1 : 0) + ",1 " + x2 + "," + y2 + " z";

    return createSVGElement("path", { d: d, fill: color });
}

exports["default"] = createArcPath;
module.exports = exports["default"];