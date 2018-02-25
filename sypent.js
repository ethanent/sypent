var sy = new Proxy((tag, attribs, ...children) => {
  if (!tag) throw new Error('Missing tag argument.')
  const el = document.createElement(tag)

  if (attribs instanceof Node || typeof attribs === 'string') {
    children.unshift(attribs)
  } else if (attribs === Object(attribs)) {
    for (const key in attribs) {
      key in el ? el[key] = attribs[key] : el.setAttribute(key, attribs[key])
    }
  }

  el.append(...children)
  return el
}, {
  get: (fn, key) => fn.bind(null, key)
})
