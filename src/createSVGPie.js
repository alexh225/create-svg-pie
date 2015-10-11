"use strict";
import createSVGElement from './createSVGElement.js';
import polarToCartesian from './polarToCartesian.js';
import createArcPath from './createArcPath.js';
import drawArcs from './drawArcs.js';

const defaults = {
    colors: ['#4D4D4D', '#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#B276B2', '#DECF3F', '#F15854']
};


function createSVGPie(data, radius, palette = defaults.colors) {

    const size = radius * 2;
    const elementAttributes = {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`
    };

    const element = createSVGElement('svg', elementAttributes);
    return drawArcs(element, data, radius, palette);

}

export default createSVGPie;