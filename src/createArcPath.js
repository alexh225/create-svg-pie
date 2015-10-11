function createArcPath(x, y, radius, endAngle, startAngle, color) {

    const [x1,y1] = polarToCartesian(radius, radius, radius, startAngle - 90);
    const [x2,y2] = polarToCartesian(radius, radius, radius, endAngle - 90);

    const d = "M" + x + "," + y + "  L" + x1 + "," + y1 + "  A" + radius + "," + radius + " 0 " +
        ((endAngle - startAngle > 180) ? 1 : 0) + ",1 " + x2 + "," + y2 + " z";

    return createSVGElement("path", {d: d, fill: color});
}

export default createArcPath;