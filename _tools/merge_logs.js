const fs = require('fs')

const logs = require('./api_log')


Object.keys(logs).forEach((key) => {
  const data = logs[key]
  const _data = data[key] ? { ...data[key] } : null

  if (!_data) {
    return
  }
  delete data[key]

  const length = JSON.stringify(data)
  const length2 = JSON.stringify(_data)

  if (length2 > length) {
    logs[key] = _data
  }
})

fs.writeFileSync('./api_log.json', JSON.stringify(logs, null, 2))
