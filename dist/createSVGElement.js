'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function createSVGElement(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs).forEach(function (attr) {
        return el.setAttribute(attr, attrs[attr]);
    });
    return el;
}

exports['default'] = createSVGElement;
module.exports = exports['default'];