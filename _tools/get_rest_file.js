const fs = require('fs')
const path = require('path')

const list = require('./api_list')

const DEEP = 2

const device = list[0].children
const alert = list[1].children


// 最小文件单元

const dict = {
  device_list: device[0].children[0],
  group_list: device[0].children[1],
  gateway_list: device[1],
  security: device[3],
  ota: device[4],
  log: device[5],

  // 告警
  current_alert: alert[0],
  history_alert: alert[1],
}

const product_list = { ...device[2] }
product_list.children = product_list.children.filter($ => !$.children)

const product_develop = { ...device[2] }
product_develop.children = product_develop.children.filter($ => !!$.children)

dict.product_list = product_list

product_develop.children.forEach((item) => {
  dict[item.name] = item
})



fs.writeFileSync('./toc.json', JSON.stringify(dict, null, 2))
