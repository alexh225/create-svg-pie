'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createArcPathJs = require('./createArcPath.js');

var _createArcPathJs2 = _interopRequireDefault(_createArcPathJs);

function drawArcs(element, data, radius, palette) {

    var centerX = element.getAttribute('width') / 2;
    var centerY = element.getAttribute('height') / 2;

    var total = data.reduce(function (memo, value) {
        return memo + value;
    }, 0);

    var angles = data.map(function (v) {
        return 360 * (v / total);
    });

    var startAngle = 0;
    var endAngle = 0;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < angles.length; i++) {
        startAngle = endAngle;
        endAngle = startAngle + angles[i];

        var arc = (0, _createArcPathJs2['default'])(centerX, centerY, radius, endAngle, startAngle, palette[i]);
        fragment.appendChild(arc);
    }

    element.appendChild(fragment);

    return element;
}

exports['default'] = drawArcs;
module.exports = exports['default'];