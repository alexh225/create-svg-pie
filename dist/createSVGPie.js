"use strict";
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createSVGElementJs = require('./createSVGElement.js');

var _createSVGElementJs2 = _interopRequireDefault(_createSVGElementJs);

var _polarToCartesianJs = require('./polarToCartesian.js');

var _polarToCartesianJs2 = _interopRequireDefault(_polarToCartesianJs);

var _createArcPathJs = require('./createArcPath.js');

var _createArcPathJs2 = _interopRequireDefault(_createArcPathJs);

var _drawArcsJs = require('./drawArcs.js');

var _drawArcsJs2 = _interopRequireDefault(_drawArcsJs);

var defaults = {
    colors: ['#4D4D4D', '#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F', '#F15854']
};

function createSVGPie(data, radius) {
    var palette = arguments.length <= 2 || arguments[2] === undefined ? defaults.colors : arguments[2];

    var size = radius * 2;
    var elementAttributes = {
        width: size,
        height: size,
        viewBox: '0 0 ' + size + ' ' + size
    };

    var element = (0, _createSVGElementJs2['default'])('svg', elementAttributes);
    return (0, _drawArcsJs2['default'])(element, data, radius, palette);
}

exports['default'] = createSVGPie;
module.exports = exports['default'];