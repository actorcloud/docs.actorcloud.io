const fs = require('fs')

fs.createReadStream('assets/favicon.ico').pipe(fs.createWriteStream('_book/gitbook/images/favicon.ico'))

console.log('done')
