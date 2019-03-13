const desc = `如果使用了 Typora 来编写 Markdown 文件，可以配置将剪切板的图片文件粘贴到文档中时，
将源文件复制到当前目录便于图片的插入。鉴于粘贴时工具会给图片随机命名，回溯维护比较麻烦，文档写完后可以使用该脚本进行批量重命名。`

console.log(desc)

const fs = require('fs')
const path = require('path')
const glob = require('glob')

const entry = path.resolve(__dirname, '../')
const assetsPath = './_assets'

const filePathReg = /_assets\/image-/

function processPath(currentPath, row, filename, filePath) {
  if (!filename || !filePath || !filePathReg.test(filePath)) {
    return row
  }
  // 重命名当前文件 filePath -> filename
  const ext = filePath.split('.').length > 0 ? filePath.split('.').pop() : ''
  const targetFileNameWithOutExt = filePath.split('/').pop().split('.')[0] //
}

glob(`${entry}/**/*.md`, (err, files) => {
  if (err) {
    throw err
  }

  console.log('开始处理')

  for (const file of files) {
    const content = fs.readFileSync(file).toString()
    const paths = content.split('/')
    paths.pop()
    const currentPath = paths.join('/')

    rows.replace(/!\[(.*)]\((.*)\)/gim, function(row, $1, $2) {
      const currentPath = file.split('/').pop().join('/')
      return processPath(currentPath, row, $1, $2)
    })
  }
})
