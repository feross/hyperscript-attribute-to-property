module.exports = attributeToProperty

var transform = {
  'accesskey': 'accessKey',
  'autocomplete': 'autoComplete',
  'autoplay': 'autoPlay',
  'class': 'className',
  'colspan': 'colSpan',
  'contenteditable': 'contentEditable',
  'contextmenu': 'contextMenu',
  'enctype': 'encType',
  'for': 'htmlFor',
  'formnovalidate': 'formNoValidate',
  'hreflang': 'hrefLang',
  'http-equiv': 'httpEquiv',  
  'novalidate': 'noValidate',
  'readonly': 'readOnly',
  'rowspan': 'rowSpan',
  'spellcheck ': 'spellCheck',
  'srcdoc': 'srcDoc',
  'srcset': 'srcSet',
  'tabindex': 'tabIndex'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}
