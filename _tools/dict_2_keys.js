const fs = require('fs')

const dict = require('./dict/dict')

const not_keys = require('./not_keys')

const _keys = require('./keys')

let keys = {}

Object.values(_keys).forEach((item) => {
  Object.values(item).forEach((data) => {
    keys[data.key] = data
  })
})

for (let item of not_keys) {
  const key = item.key.replace(/Label/g, '')
  if (!item.key.endsWith('Label') || !dict[key]) {
    continue
  }

  const data = dict[key]
  const data2 = keys[key]
  if (data2.label) {
    item.label = data2.label
    item.type = 'string'
  } else {
    item.label += ' 可选参数: '
    item.label += data.map($ => $.label + ':' + $.value + ', ')
  }
}

console.log(not_keys)
fs.writeFileSync('./not_keys.json', JSON.stringify(not_keys, null, 2))
