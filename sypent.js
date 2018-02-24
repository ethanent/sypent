{ /* global Text Node */
  const isStr = o => typeof o === 'string'
  const isNode = o => o instanceof Node

  window.sy = new Proxy((tag, attribs, ...children) => {
    if (!tag) throw new Error('Missing tag argument.')

    const el = document.createElement(tag)

    if (isNode(attribs) || isStr(attribs)) children.unshift(attribs)
    else if (attribs) {
      for (const key in attribs) {
        const val = attribs[key]
        if (key in el) el[key] = val
        else if (isStr(val)) {
          el.setAttribute(key, val)
        } else {
          Object.defineProperty(el, key, Object.getOwnPropertyDescriptor(attribs, key))
        }
      }
    }

    children.length && children.forEach(child => {
      el.appendChild(isNode(child) ? child : new Text(child))
    })

    return el
  }, {
    get: (fn, key) => fn.bind(null, key)
  })
}
