function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = angleInDegrees * Math.PI / 180.0;
    const x = centerX + radius * Math.cos(angleInRadians);
    const y = centerY + radius * Math.sin(angleInRadians);
    return [x, y];
}
export default polarToCartesian;