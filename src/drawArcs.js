function drawArcs(element, data, radius, palette) {

    const centerX = element.getAttribute('width') / 2;
    const centerY = element.getAttribute('height') / 2;

    const total = data.reduce(function (memo, value) {
        return memo + value;
    }, 0);

    const angles = data.map(function (v) {
        return 360 * (v / total);
    });

    let startAngle = 0;
    let endAngle = 0;
    const fragment = document.createDocumentFragment();

    for (var i = 0; i < angles.length; i++) {
        startAngle = endAngle;
        endAngle = startAngle + angles[i];

        const arc = createArcPath(centerX, centerY, radius, endAngle, startAngle, palette[i]);
        fragment.appendChild(arc);
    }

    element.appendChild(fragment);

    return element;
}

export default drawArcs;