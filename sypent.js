const sy = (tag, attribs, children) => {
	let gen = document.createElement(tag)

	if (attribs) Object.keys(attribs).forEach((attrib) => gen.setAttribute(attrib, attribs[attrib]))

	if (children) children.forEach((child) => child !== null ? gen.appendChild(typeof child === 'string' ? document.createTextNode(child) : child) : null)

	return gen
}