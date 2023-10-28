const transform = {
  class: 'className',
  for: 'htmlFor',
  'http-equiv': 'httpEquiv'
}

export default function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (const attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}
