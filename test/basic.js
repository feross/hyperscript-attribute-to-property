import attrToProp from '../index.js'
import pkg from 'virtual-dom/h.js'
import test from 'tape'

const h = attrToProp(pkg)

test('class -> className', function (t) {
  const vnode = h('div', { class: 'value' })
  t.equal(vnode.properties.className, 'value')
  t.end()
})

test('for -> htmlFor', function (t) {
  const vnode = h('div', { for: 'value' })
  t.equal(vnode.properties.htmlFor, 'value')
  t.end()
})

test('http-equiv -> httpEquiv', function (t) {
  const vnode = h('div', { 'http-equiv': 'value' })
  t.equal(vnode.properties.httpEquiv, 'value')
  t.end()
})
