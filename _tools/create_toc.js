const fs = require('fs')
const path = require('path')

const toc = require('./toc')

// REST API 导航
let summary = ''
const files = []
const apis = {}

Object.keys(toc).forEach((key) => {
  const item = toc[key]

  const fileName = `${item.name}.md`
  files.push(fileName)
  // 一级标题
  summary += `* [${item.label}](rest/${item.name}.md)\n`
  let content = `# ${item.label}\n\n`

  if (!item.children) {
    return
  }

  item.children.forEach((item2) => {
    // 二级标题
    summary += `  * [${item2.label}](rest/${item.name}.md#${item2.label})\n`
    content += `## ${item2.label}\n\n`

    if (!item2.children) {
      // content += `${item2.label}\n\n`
      content += `!#!${item2.api}!#!\n\n\n\n\n`

      apis[item2.api] = item2
    } else {
      item2.children.forEach((item3) => {
        // 三级标题
        summary += `    * [${item3.label}](rest/${item.name}.md#${item3.label})\n`
        content += `### ${item3.label}\n\n`

        // content += `${item3.label}\n\n`
        content += `!#!${item3.api}!#!\n\n\n\n\n`

        apis[item3.api] = item3
      })
    }

    fs.writeFileSync(`./api/bak/${fileName}`, content)
  })

  fs.writeFileSync('./api/REST_API_SUMMARY.md', summary)
  fs.writeFileSync('./api/files.json', JSON.stringify(files, null, 2))
  fs.writeFileSync('./apis.json', JSON.stringify(apis, null, 2))

})
