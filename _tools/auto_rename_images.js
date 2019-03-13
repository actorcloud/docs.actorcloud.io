const desc = `如果使用了 Typora 来编写 Markdown 文件，可以配置将剪切板的图片文件粘贴到文档中时，
将源文件复制到当前目录便于图片的插入。鉴于粘贴时工具会给图片随机命名，回溯维护比较麻烦，文档写完后可以使用该脚本进行批量重命名。`

console.log(desc)

const fs = require('fs')
const path = require('path')
const glob = require('glob')

if (require('child_process').execSync('git status').toString().includes('"git commit -a"')) {
  console.error('工具尚不成熟，请先 commit 当前改动')
  process.exit(0)
}

const entry = path.resolve(__dirname, '../')
const assetsPath = './_assets'

const filePathReg = /_assets\/image-/

function processPath(currentPath, row, filename, filePath) {
  if (!filename || !filePath || !filePathReg.test(filePath)) {
    return row
  }
  // 重命名当前文件 filePath.png -> filename.png
  const ext = filePath.split('.').length > 0 ? filePath.split('.').pop() : ''
  const targetPaths = filePath.split('/')
  targetPaths[targetPaths.length - 1] = `${filename}${ext ? '.' + ext : ''}`
  const assetsPath = targetPaths.join('/')

  const realAssetsPath = path.join(currentPath, assetsPath)
  const sourceAssetsPath = path.join(currentPath, filePath)
  fs.renameSync(sourceAssetsPath, realAssetsPath)

  return `![${filename}](${assetsPath})`
}

glob(`${entry}/**/*.md`, { ignore: ['node_modules'] }, (err, files) => {
  if (err) {
    throw err
  }

  console.log('开始处理', files)

  for (const file of files) {
    let content = fs.readFileSync(file).toString()
    const paths = file.split('/')
    const fileName = paths.pop()
    const currentPath = paths.join('/')

    content = content.replace(/!\[(.*)]\((.*)\)/gim, function(row, $1, $2) {
      return processPath(currentPath, row, $1, $2)
    })
    fs.writeFileSync(file, content)
    console.log(fileName, 'Done')
  }
  console.log('All Done')
})
