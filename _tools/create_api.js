const fs = require('fs')
const path = require('path')

const permissions = require('./api_list')
const apiLog = require('./api_log')
const _keys = require('./keys')

let keys = {}

Object.values(_keys).forEach((item) => {
  Object.values(item).forEach((data) => {
    keys[data.key] = data
  })
})

const apiLogDict = {}

Object.values(apiLog).forEach((log) => {
  apiLogDict[log.resourceId] = log
})

const dir = './api'

const log = {}

const method_dict = {
  '查看': 'GET',
  '创建': 'POST',
  '编辑': 'PUT',
  '删除': 'DELETE',
}

// 只从最后一层新建文件
function loop(data = [], parent = {}) {
  data.forEach((item) => {
    if (item.children) {
      loop(item.children, item)
    } else {
      const { label, id, name } = parent
      const file = name

      log[file] = log[file] || {}

      log[file].title = label
      log[file].file = file

      for (const item of parent.children) {
        if (item.children) continue

        log[file].children = log[file].children || []

        const { label, id, name } = item

        const info = {
          title: label,
          id,
          name,
          method: method_dict[label.slice(0, 2)],
          path: ''
        }

        log[file].children.push()

        log[file].children = [...new Set(log[file].children)]
      }
    }
  })
}

loop(permissions)

fs.writeFileSync('./api/api_toc.json', JSON.stringify(log, null, 2))

let toc = ''

// Object.entries(log).forEach((item) => {
//   const file = path.resolve(dir, `${item[0]}.md`)
//   fs.writeFileSync(file, item[1].join(''))
//   const title = `${item[1][0].replace(/[\n\s#]/g, '')}`
//   toc += `* [${title}](${dir}/${item[0]}.md)\n`
//
//   for (let subTitle of item[1]) {
//     if (!subTitle || /^# .+/.test(subTitle)) continue
//
//     subTitle = subTitle.match(/### (.*)\n/)[1]
//     if (!subTitle) continue
//     toc += `  * [${subTitle}](${dir}/${item[0]}.md#${subTitle})\n`
//   }
// })

// fs.writeFileSync('api/toc.md', toc)

function getDocs(item) {
  const log = apiLogDict[item.id]
  if (!log) {
    return ''
  }
  const { method, path, request, status, response, key } = log
  const { label, id, name } = item

  let template = `
**API 定义：**
\`\`\`bash
${method} ${key} 
\`\`\`

${getBody(log)}

**成功响应**

\`\`\`json
${JSON.stringify(response, null, 2)}
\`\`\`

${getTable(log)}
`
  return template
}

function getBody(log) {
  if (['GET', 'DELETE'].includes(log.method)) {
    return ''
  }
  if (!log.request || Object.keys(log.request).length === 0) {
    return ''
  }

  return `**请求体：**

\`\`\`json
${JSON.stringify(log.request, null, 2)}
\`\`\``
}

function getTable(log) {
  if (log.method !== 'GET') {
    return ''
  }
  let table = `
**字段说明：**
  
| 字段名             | 示例值               | 字段类型    | 是否必填  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
`

  let data = log.response
  if (Array.isArray(data)) {
    data = data[0]
  }
  if (!data) {
    return ''
  }

  Object.keys(data).forEach((key) => {
    let value = data[key]

    const keyData = keys[key] || { type: typeof value, label: value, value: value || '' }
    if (key === 'description' && value.length > 100) {
      value = value.slice(1, 99)
    }

    table += `| ${key}| ${JSON.stringify(value || keyData.value)} | ${keyData.type}  | ${!!keyData.required}  | ${keyData.label} |  \n`
  })

  return `${table}\n\n\n`
}
