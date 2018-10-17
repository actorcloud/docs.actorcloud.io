const fs = require('fs')
const path = require('path')

const data = require('./api_log')
const apis = require('./apis')

const _keys = require('./keys')

let keys = {}

const not_keys = []

Object.values(_keys).forEach((item) => {
  Object.values(item).forEach((data) => {
    keys[data.key] = data
  })
})

// 文件列表
const files = require('./api/files')
// 错误
const errors = []

for (let file of files) {
  let content = []
  const rows = fs.readFileSync(`./api/${file}`).toString().split('\n')

  for (let row of rows) {
    if (!row.startsWith('!#!') || !row.endsWith('!#!')) {
      content.push(row)
      continue
    }

    // 处理
    const key = row.replace(/!#!/g, '')
    const model = data[key]
    // 错误控制
    if (!key || !model) {
      const error = `接口文件不存在 ${key} ${file}`
      errors.push(errors)
      console.log(error)
      continue
    }
    model.$api = apis[key]

    let rowText = '**API 定义：**\n\n'
    // URL 及 method
    rowText += `\`\`\`bash\n${model.method} ${getKey(model)}\n\`\`\`\n\n`

    // 请求示例
    rowText += `**请求示例：**\n\n`
    rowText += `\`\`\`bash\n${model.method} ${model.path}\n\`\`\`\n\n`
    if (model.request && Object.keys(model.request).length > 0) {
      rowText += `\`\`\`json\n${JSON.stringify(model.request, null, 2)}\n\`\`\`\n\n\n`
    }

    // 响应
    rowText += `**成功响应：**\n\n`
    // 状态码
    rowText += `\`\`\`bash\nstatus ${model.status}\n\`\`\`\n\n`
    rowText += `\`\`\`json\n${JSON.stringify(getResponse(model), null, 2)}\n\`\`\`\n\n\n`

    // 字段说明
    rowText += getContent(model)

    content.push(rowText)
  }

  fs.writeFileSync(`./api/created/${file}`, content.join('\n'))
}

function getKey(model) {
  let { key } = model
  const { rule } = model.$api
  key = key.replace(/(GET_)|(POST_)|(DELETE_)|(PUT_)/g, '')
  if (!rule) {
    return key
  }
  Object.keys(rule).forEach((k) => {
    key = key.replace(new RegExp(k, 'g'), rule[k])
  })
  return key
}

function getResponse(model) {
  if (Array.isArray(model.response)) {
    return model.response
  }
  if (!model.response || Object.keys(model.response).length === 0) {
    return ''
  }
  if (model.response.items) {
    model.response.items = model.response.items.slice(0, 2)
  }
  return model.response
}

function getContent(model) {
  if (model.method !== 'GET') {
    return ''
  }

  let data = model.response
  if (Array.isArray(data)) {
    data = data[0]
  }
  if (data.items) {
    data = data.items[0]
    return ''
  }
  if (!data) {
    return ''
  }

  let content = `**字段说明：**\n\n`
  // 表头
  content += '| 字段名             | 示例值               | 字段类型    |  说明                  |\n'
  content += '| --------------- | ----------------- | ------- | ------------------- |\n'

  Object.keys(data).forEach((key) => {
    let value = data[key] || 'null'

    const keyData = keys[key] || {
      type: Array.isArray(value) ? 'array' : typeof value,
      label: value,
      value: value || '',
    }
    keyData.required = keyData.required || !!value
    if (!keys[key]) {
      not_keys.push({ key, value: value || '', label: value, type: typeof value })
    }
    if (key === 'description' || value.length > 100) {
      value = value.slice(1, 99)
    }

    content += `| ${key}| ${JSON.stringify(value || keyData.value)} | ${toUpperOne(keyData.type)}  | ${typeof keyData.label === 'string' ? keyData.label : '暂无'} |\n`
  })

  return `${content}\n\n\n\n`

}

function toUpperOne(str) {
  const array = str.split('')
  array[0] = array[0].toUpperCase()
  return array.join('')
}

fs.writeFileSync('./not_keys.json', JSON.stringify(not_keys, null, 2))
