/**
 * 生成 Summary 信息
 **/
const fs = require('fs')
const path = require('path')

const list = require('./dict/summary')

const entry = path.resolve('../')
const indent = '  '

let content = `# Summary\n`

list.forEach((item) => {
  if (item.child && item.child.length > 0) {
    content += `* ${item.title}\n`
  } else {
    content += `* [${item.title}](${item.path})\n`
    createFile(item)
  }
  item.child && item.child.forEach((ch) => {
    content += `${indent}* [${ch.title}](${ch.path})\n`
    createFile(ch)
  })
})

console.log(content)

function createFile(_point) {
  if (!_point.path) {
    return
  }
  // 创建文件和文件夹
  const point = _point.path.split('/')
  const file = {
    path: path.join(entry, point[0]),
    fileName: point[1],
  }
  if (!file.fileName) {
    return
  }
  if (!fs.existsSync(file.path)) {
    fs.mkdirSync(file.path)
  }
  const filePath = path.join(file.path, file.fileName)
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `# ${_point.title}`)
  }
}