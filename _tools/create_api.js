const fs = require('fs')
const path = require('path')

const permissions = require('./api_list')

const dir = './api'

const log = {}

// 只从最后一层新建文件
function loop(data = [], parent = {}) {
  data.forEach((item) => {
    if (item.children) {
      loop(item.children, item)
    } else {
      const { label, id, name } = parent
      const file = name

      log[file] = log[file] || []

      log[file].push(`# ${label}\n\n`)

      for (const item of parent.children) {
        if (item.children) continue

        const { label, id, name } = item
        // 写入小标题
        log[file].push(`### ${label}\n\n!#!${id}!#!\n!@!${name}!@!\n\n\n\n`)
      }

      log[file] = [...new Set(log[file])]
    }
  })
}

loop(permissions)

let toc = ''

Object.entries(log).forEach((item) => {
  const file = path.resolve(dir, `${item[0]}.md`)
  fs.writeFileSync(file, item[1].join(''))
  const title = `${item[1][0].replace(/[\n\s#]/g, '')}`
  toc += `* [${title}](${dir}/${item[0]}.md)\n`

  for (let subTitle of item[1]) {
    if (!subTitle || /^# .+/.test(subTitle)) continue

    subTitle = subTitle.match(/### (.*)\n/)[1]
    if (!subTitle) continue
    toc += `  * [${subTitle}](${dir}/${item[0]}.md#${subTitle})\n`
  }
})

fs.writeFileSync('api/toc.md', toc)



