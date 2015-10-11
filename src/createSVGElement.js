function createSVGElement(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs).forEach((attr) => el.setAttribute(attr, attrs[attr]));
    return el;
}

export default createSVGElement;