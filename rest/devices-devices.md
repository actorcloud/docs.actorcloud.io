# 设备

## 查看设备列表

**API 定义：**

```bash
GET /api/v1/devices?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/devices?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "IMEI": null,
      "IMSI": null,
      "authType": 1,
      "authTypeLabel": "Token",
      "autoSub": null,
      "blocked": 0,
      "carrier": 1,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-09-14 14:55:20",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "063da5117b8c5ea5a6b3441edbf99d03",
      "deviceName": "mqtt设备_1",
      "deviceStatus": 0,
      "deviceStatusLabel": "离线",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "deviceUsername": "063da5117b8c5ea5a6b3441edbf99d03",
      "gateway": null,
      "hardwareVersion": null,
      "id": 46,
      "latitude": 25.064918,
      "location": "云南省昆明市五华区丰宁街道金鼎科技园",
      "longitude": 102.678732,
      "lora": null,
      "manufacturer": null,
      "physicalNetwork": 1,
      "productID": "2ioNzM",
      "productIntID": 60,
      "productName": "MQTT产品",
      "scopes": [],
      "serialNumber": null,
      "softVersion": null,
      "tenantID": "C2xPah6mn",
      "token": "990afd1e9448584abfca5b7154f9bcba",
      "upLinkSystem": 1,
      "updateAt": "2018-10-12 09:39:52",
      "userIntID": 2
    },
    {
      "IMEI": "1wqwqqwqqqqqqqq",
      "IMSI": "1wqwqqwqqqqqqq1",
      "authType": 1,
      "authTypeLabel": "Token",
      "autoSub": 1,
      "blocked": 0,
      "carrier": 1,
      "cloudProtocol": 3,
      "cloudProtocolLabel": "LwM2M",
      "createAt": "2018-10-16 16:25:00",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "1wqwqqwqqqqqqqq",
      "deviceName": "lwm2m图表测试",
      "deviceStatus": 0,
      "deviceStatusLabel": "离线",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "deviceUsername": "1wqwqqwqqqqqqqq",
      "gateway": null,
      "hardwareVersion": null,
      "id": 216,
      "latitude": null,
      "location": null,
      "longitude": null,
      "lora": null,
      "manufacturer": null,
      "physicalNetwork": 1,
      "productID": "67eH9V",
      "productIntID": 141,
      "productName": "lwm2m图表测试",
      "scopes": [],
      "serialNumber": null,
      "softVersion": null,
      "tenantID": "C2xPah6mn",
      "token": "0f4d2a3cf0615c4fa338ccb297220b8d",
      "upLinkSystem": 1,
      "updateAt": null,
      "userIntID": 2
    }
  ],
  "meta": {
    "count": 151,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| IMEI| "null" | String  | true  | 设备IMEI |
| IMSI| "null" | String  | true  | 设备IMSI |
| authType| 1 | Integer  | true  | 认证方式 可选参数: Token: 1, 证书: 2 |
| authTypeLabel| "Token" | String  | true  | Token |
| autoSub| "null" | Integer  | true  | 自动订阅，0:关闭，1:开启 |
| blocked| "null" | Integer  | true  | 是否允许访问 0:允许 1:禁止 |
| carrier| 1 | Integer  | true  | 运营商 可选参数: 中国电信: 1, 中国移动: 2, 中国联通: 3, 其他: 4 |
| cloudProtocol| 1 | Integer  | true  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| cloudProtocolLabel| "MQTT" | String  | true  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| createAt| "2019-09-14 14:55:20" | Date  | true  | 创建时间 |
| description| "ull" | String  | true  | 描述 |
| deviceConsoleIP| "null" | String  | true  | 控制台ip |
| deviceConsolePort| 22 | Integer  | true  | 控制台端口 |
| deviceConsoleUsername| "null" | String  | true  | 控制台用户名 |
| deviceID| "063da5117b8c5ea5a6b3441edbf99d03" | String  | true  | 设备 ID |
| deviceName| "mqtt设备_1" | String  | true  | 设备名称 |
| deviceStatus| "null" | Integer  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceStatusLabel| "离线" | String  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceType| 1 | Integer  | true  | 设备类型 可选参数: 终端: 1, 智能手机: 3  与上联系统互斥：该处值为 `终端: 1` 时才能填写 `upLinkSystem` 字段 |
| deviceTypeLabel| "终端" | String  | true  | 设备类型 可选参数: 终端: 1, 智能手机: 3 |
| deviceUsername| "063da5117b8c5ea5a6b3441edbf99d03" | String  | true  | 设备用户名，用于连接emq |
| gateway| "null" | Integer  | true  | 所属网关 |
| hardwareVersion| "null" | String  | true  | 硬件版本 |
| id| 46 | Integer  | true  | id |
| latitude| 25.064918 | Float  | true  | 纬度 |
| location| "云南省昆明市五华区丰宁街道金鼎科技园" | JSON  | true  | 位置 |
| longitude| 102.678732 | Float  | true  | 经度 |
| lora| "null" | JSON  | true  | 是否 LoRa 协议 |
| manufacturer| "null" | String  | true  | 制造商 |
| physicalNetwork| 1 | Integer  | true  | 物理网络 可选参数: WIFI: 1, 2G: 2, 3G: 3, 4G: 4, NB-IOT: 5, BlueTooth: 6 |
| productID| "2ioNzM" | String  | true  | 产品 ID |
| productIntID| 60 | Integer  | true  | 产品 ID |
| productName| "MQTT产品" | String  | true  | 产品名称 |
| scopes| [] | Array  | true  | 围栏范围 |
| serialNumber| "null" | String  | true  | 序列号 |
| softVersion| "null" | String  | true  | 软件版本 |
| tenantID| "C2xPah6mn" | String  | true  | 租户 ID |
| token| "990afd1e9448584abfca5b7154f9bcba" | String  | true  | 设备秘钥 |
| upLinkSystem| 1 | Integer  | true  | 上联系统 可选参数: 云: 1, 网关: 2 |
| updateAt| "2018-10-12 09:39:52" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









## 查看设备详情

**API 定义：**

```bash
GET /api/v1/devices/{deviceIntID}
```

**请求示例：**

```bash
GET /api/v1/devices/46
```

**成功响应：**

```bash
status 200
```

```json
{
  "IMEI": null,
  "IMSI": null,
  "authType": 1,
  "authTypeLabel": "Token",
  "autoSub": null,
  "blocked": 0,
  "carrier": 1,
  "clientIP": null,
  "cloudProtocol": 1,
  "cloudProtocolLabel": "MQTT",
  "connectedAt": null,
  "createAt": "2019-09-14 14:55:20",
  "createUser": "actorcloud",
  "description": null,
  "deviceConsoleIP": null,
  "deviceConsolePort": 22,
  "deviceConsoleUsername": null,
  "deviceID": "063da5117b8c5ea5a6b3441edbf99d03",
  "deviceName": "mqtt设备_1",
  "deviceStatus": 0,
  "deviceStatusLabel": "离线",
  "deviceType": 1,
  "deviceTypeLabel": "终端",
  "deviceUsername": "063da5117b8c5ea5a6b3441edbf99d03",
  "gateway": null,
  "gatewayName": null,
  "hardwareVersion": null,
  "id": 46,
  "keepAlive": null,
  "latitude": 25.064918,
  "location": "云南省昆明市五华区丰宁街道金鼎科技园",
  "longitude": 102.678732,
  "lora": null,
  "manufacturer": null,
  "physicalNetwork": 1,
  "productID": "2ioNzM",
  "productIntID": 60,
  "productName": "MQTT产品",
  "scopes": [],
  "serialNumber": null,
  "softVersion": null,
  "tenantID": "C2xPah6mn",
  "token": "990afd1e9448584abfca5b7154f9bcba",
  "upLinkSystem": 1,
  "updateAt": "2018-10-12 09:39:52",
  "userIntID": 2
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| IMEI| "null" | String  | true  | 设备IMEI |
| IMSI| "null" | String  | true  | 设备IMSI |
| authType| 1 | Integer  | true  | 认证方式 可选参数: Token: 1, 证书: 2 |
| authTypeLabel| "Token" | String  | true  | Token |
| autoSub| "null" | Integer  | true  | 自动订阅，0:关闭，1:开启 |
| blocked| "null" | Integer  | true  | 是否允许访问 0:允许 1:禁止 |
| carrier| 1 | Integer  | true  | 运营商 可选参数: 中国电信: 1, 中国移动: 2, 中国联通: 3, 其他: 4 |
| clientIP| "null" | String  | true  | 客户端 IP |
| cloudProtocol| 1 | Integer  | true  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| cloudProtocolLabel| "MQTT" | String  | true  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| connectedAt| "null" | String  | true  | 连接时间 |
| createAt| "2019-09-14 14:55:20" | Date  | true  | 创建时间 |
| createUser| "actorcloud" | String  | true  | 创建用户 |
| description| "ull" | String  | true  | 描述 |
| deviceConsoleIP| "null" | String  | true  | 控制台ip |
| deviceConsolePort| 22 | Integer  | true  | 控制台端口 |
| deviceConsoleUsername| "null" | String  | true  | 控制台用户名 |
| deviceID| "063da5117b8c5ea5a6b3441edbf99d03" | String  | true  | 设备 ID |
| deviceName| "mqtt设备_1" | String  | true  | 设备名称 |
| deviceStatus| "null" | Integer  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceStatusLabel| "离线" | String  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceType| 1 | Integer  | true  | 设备类型 可选参数: 终端: 1, 智能手机: 3  与上联系统互斥：该处值为 `终端: 1` 时才能填写 `upLinkSystem` 字段 |
| deviceTypeLabel| "终端" | String  | true  | 设备类型 可选参数: 终端: 1, 智能手机: 3 |
| deviceUsername| "063da5117b8c5ea5a6b3441edbf99d03" | String  | true  | 设备用户名，用于连接emq |
| gateway| "null" | Integer  | true  | 所属网关 |
| gatewayName| "null" | String  | true  | 网关名称 |
| hardwareVersion| "null" | String  | true  | 硬件版本 |
| id| 46 | Integer  | true  | id |
| keepAlive| "null" | Integer  | true  | 心跳时间 |
| latitude| 25.064918 | Float  | true  | 纬度 |
| location| "云南省昆明市五华区丰宁街道金鼎科技园" | JSON  | true  | 位置 |
| longitude| 102.678732 | Float  | true  | 经度 |
| lora| "null" | JSON  | true  | 是否 LoRa 协议 |
| manufacturer| "null" | String  | true  | 制造商 |
| physicalNetwork| 1 | Integer  | true  | 物理网络 可选参数: WIFI: 1, 2G: 2, 3G: 3, 4G: 4, NB-IOT: 5, BlueTooth: 6 |
| productID| "2ioNzM" | String  | true  | 产品 ID |
| productIntID| 60 | Integer  | true  | 产品 ID |
| productName| "MQTT产品" | String  | true  | 产品名称 |
| scopes| [] | Array  | true  | 围栏范围 |
| serialNumber| "null" | String  | true  | 序列号 |
| softVersion| "null" | String  | true  | 软件版本 |
| tenantID| "C2xPah6mn" | String  | true  | 租户 ID |
| token| "990afd1e9448584abfca5b7154f9bcba" | String  | true  | 设备秘钥 |
| upLinkSystem| 1 | Integer  | true  | 上联系统 可选参数: 云: 1, 网关: 2 |
| updateAt| "2018-10-12 09:39:52" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









## 创建设备

**API 定义：**

```bash
POST /api/v1/devices
```

**请求示例：**

```bash
POST /api/v1/devices
```

```json
{
  "productID": "p3zZMy",
  "upLinkSystem": 1,
  "longitude": 120.124144,
  "latitude": 30.266682,
  "location": "浙江省杭州市西湖区灵隐街道浙江大学玉泉校区",
  "cloudProtocol": 1,
  "deviceType": 1,
  "carrier": 1,
  "physicalNetwork": 1,
  "deviceName": "智能锁",
  "IMEI": "101010101010101",
  "IMSI": "101010101010101",
  "manufacturer": "江南",
  "serialNumber": "1061f1a1f47",
  "softVersion": "v 1.2",
  "hardwareVersion": "v 1.0",
  "description": "智能锁",
  "deviceConsoleIP": "192.168.1.1",
  "deviceConsoleUsername": "root",
  "deviceConsolePort": 22,
  "authType": 1,
  "deviceID": "10c61f1a1f47",
  "deviceUsername": "10c61f1a1f47",
  "token": "10c61f1a1f47"
}
```


**成功响应：**

```bash
status 201
```

```json
{
  "IMEI": "101010101010101",
  "IMSI": "101010101010101",
  "authType": 1,
  "autoSub": null,
  "blocked": 0,
  "carrier": 1,
  "createAt": "2018-09-30 16:37:55",
  "description": "智能锁",
  "deviceConsoleIP": "192.168.1.1",
  "deviceConsolePort": 22,
  "deviceConsoleUsername": "root",
  "deviceID": "10c61f1a1f47",
  "deviceName": "智能锁",
  "deviceStatus": 0,
  "deviceType": 1,
  "deviceUsername": "10c61f1a1f47",
  "gateway": null,
  "hardwareVersion": "v 1.0",
  "id": 189,
  "latitude": 30.266682,
  "location": "浙江省杭州市西湖区灵隐街道浙江大学玉泉校区",
  "longitude": 120.124144,
  "lora": null,
  "manufacturer": "江南",
  "physicalNetwork": 1,
  "productID": "p3zZMy",
  "scopes": [],
  "serialNumber": "1061f1a1f47",
  "softVersion": "v 1.2",
  "tenantID": "C1g8RWNwv",
  "token": "10c61f1a1f47",
  "upLinkSystem": 1,
  "updateAt": null,
  "userIntID": 23
}
```





### 创建说明

支持创建多种类型设备，请求参数根据所选产品的云端协议有所不同，除去基础信息之外，下表给出相关差异：

| 云端协议     | 必填项        | 锁定项   |
| --------------- | ----------------- | ------- |
| MQTT、CoAP、HTTP、WebSocket | 认证方式：`authType` | -- |
| LwM2M | 接入 IEMI：`IMEI` 、自动订阅： `autoSub` | -- |
| LoRa | LoRa 协议相关信息，入网方式：`lora.type` 、DevEUI：`deviceID`、AppEUI： `lora.appEUI`、AppKey： `lora.appKey` 、FCnt Check： `lora.fcntCheck`、允许加入：`lora.canJoin` | 入网方式：`lora.type`等于 `otaa` 时 |
| LoRa | LoRa 协议相关信息，入网方式：`lora.type` 、所属网关：`gateway`、DevAddr： `deviceID`、发射频率： `lora.region` 、NwkSKey： `lora.nwkSKey`、AppSKey：`lora.appSKey`、FCnt Up：`lora.fcntUp`、FCnt Down： `lora.fcntDown`、FCnt Check：`lora.fcntCheck` | 入网方式：`lora.type`等于 `abp` 时 |





## 编辑设备

**API 定义：**

```bash
PUT /api/v1/devices/{deviceIntID}
```

**请求示例：**

```bash
PUT /api/v1/devices/191
```

```json
{
  "IMEI": "111111111111110",
  "IMSI": "111111111111110",
  "authType": 1,
  "autoSub": 1,
  "blocked": 0,
  "carrier": 1,
  "clientIP": null,
  "cloudProtocol": 3,
  "cloudProtocolLabel": "LwM2M",
  "connectedAt": null,
  "createAt": "2018-09-30 17:03:56",
  "createUser": "ActorCloud",
  "description": null,
  "deviceConsoleIP": null,
  "deviceConsolePort": 22,
  "deviceConsoleUsername": null,
  "deviceID": "111111111111110",
  "deviceName": "lw",
  "deviceStatus": 0,
  "deviceStatusLabel": "离线",
  "deviceType": 1,
  "deviceTypeLabel": "智能手机",
  "deviceUsername": "xxxxxxxx",
  "gateway": null,
  "gatewayName": null,
  "hardwareVersion": null,
  "id": 191,
  "keepAlive": null,
  "latitude": null,
  "location": null,
  "longitude": null,
  "manufacturer": null,
  "physicalNetwork": 1,
  "productID": "Bwj2pn",
  "productIntID": 129,
  "productName": "LWM2M",
  "scopes": [],
  "serialNumber": null,
  "softVersion": null,
  "tenantID": "C1g8RWNwv",
  "token": "xxxxxxxx",
  "upLinkSystem": 1,
  "updateAt": null,
  "userIntID": 23
}
```


**成功响应：**

```bash
status 200
```

```json
{
  "IMEI": "111111111111110",
  "IMSI": "111111111111110",
  "authType": 1,
  "autoSub": 1,
  "blocked": 0,
  "carrier": 1,
  "createAt": "2018-09-30 17:03:56",
  "description": null,
  "deviceConsoleIP": null,
  "deviceConsolePort": 22,
  "deviceConsoleUsername": null,
  "deviceID": "111111111111110",
  "deviceName": "lw",
  "deviceStatus": 0,
  "deviceType": 1,
  "deviceUsername": "xxxxxxxx",
  "gateway": null,
  "hardwareVersion": null,
  "id": 191,
  "latitude": null,
  "location": null,
  "longitude": null,
  "lora": null,
  "manufacturer": null,
  "physicalNetwork": 1,
  "productID": "Bwj2pn",
  "scopes": [],
  "serialNumber": null,
  "softVersion": null,
  "tenantID": "C1g8RWNwv",
  "token": "xxxxxxxx",
  "upLinkSystem": 1,
  "updateAt": "2018-09-30 17:06:10",
  "userIntID": 23
}
```







## 删除设备

**API 定义：**

```bash
DELETE /api/v1/devices?ids={deviceIntIDS}
```

**请求示例：**

```bash
DELETE /api/v1/devices?ids=190
```

**成功响应：**

```bash
status 204
```

```json
""
```







## 导出设备

**API 定义：**

```bash
GET /api/v1/devices_export
```

**请求示例：**

```bash
GET /api/v1/devices_export
```

**成功响应：**

```bash
status 202
```

```json
{
  "statusUrl": "/task_status/2bcfc5eb-9ccb-487b-94aa-612f64dae53c"
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| statusUrl| "/task_status/2bcfc5eb-9ccb-487b-94aa-612f64dae53c" | String  | true  | 任务回调地址 |









## 导入设备

**API 定义：**

```bash
POST /api/v1/devices_import
```

**请求示例：**

```bash
POST /api/v1/devices_import
```

**成功响应：**

```bash
status 202
```

```json
{
  "statusUrl": "/task_status/90bfe9e1-250d-481f-8700-9047219b4f59"
}
```







## 设备事件

**API 定义：**

```bash
GET /api/v1/devices/{deviceIntID}/events?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/devices/189/events?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "IP": null,
      "createAt": "2018-09-30 16:55:31",
      "deviceID": "10c61f1a1f47",
      "deviceName": "智能锁",
      "id": 7623,
      "msgTime": "2018-09-30 16:55:31",
      "payload": "{ \"x\": 33.2, \"y\": 31.4 }",
      "topic": "topic",
      "updateAt": null
    },
    {
      "IP": null,
      "createAt": "2018-09-30 16:55:30",
      "deviceID": "10c61f1a1f47",
      "deviceName": "智能锁",
      "id": 7622,
      "msgTime": "2018-09-30 16:55:30",
      "payload": "{ \"x\": 33.2, \"y\": 31.4 }",
      "topic": "topic",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 6,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| IP| "null" | String  | true  | 连接IP |
| createAt| "2018-09-30 16:55:31" | Date  | true  | 创建时间 |
| deviceID| "10c61f1a1f47" | String  | true  | 设备 ID |
| deviceName| "智能锁" | String  | true  | 设备名称 |
| id| 7623 | Integer  | true  | id |
| msgTime| "2018-09-30 16:55:31" | Date  | true  | 消息时间 |
| payload| "{ \"x\": 33.2, \"y\": 31.4 }" | JSON  | true  | 推送消息内容 |
| topic| "topic" | String  | true  | 主题 |
| updateAt| "null" | Date  | true  | 更新时间 |









## 设备控制

**API 定义：**

```bash
POST /api/v1/device_publish
```

**请求示例：**

```bash
POST /api/v1/device_publish
```

```json
{
  "deviceID": "10c61f1a1f47",
  "deviceIntID": 189,
  "payload": "{\"message\":\"Hello\"}",
  "topic": "topic"
}
```


**成功响应：**

```bash
status 201
```

```json
{
  "publishStatus": "successful"
}
```







## 新建设备定时任务

**API 定义：**

```bash
POST /api/v1/device_schedule_publish
```

**请求示例：**

```bash
POST /api/v1/device_schedule_publish
```

```json
{
  "deviceID": "10c61f1a1f47",
  "deviceIntID": 189,
  "payload": "{\"message\":\"Hello\"}",
  "topic": "topic",
  "scheduleName": "默认定时",
  "IntervalMinute": "37",
  "scheduleType": 1
}
```


**成功响应：**

```bash
status 201
```

```json
""
```







## 删除设备定时任务

**API 定义：**

```bash
DELETE /api/v1/device_schedule_publish?ids={scheduleIDS}
```

**请求示例：**

```bash
DELETE /api/v1/device_schedule_publish?ids=28
```

**成功响应：**

```bash
status 204
```

```json
""
```







## 查看设备指标数据

**API 定义：**

```bash
GET /api/v1/metrics_data?deviceID={deviceID}&metricType=1
```

**请求示例：**

```bash
GET /api/v1/metrics_data?deviceID=063da5117b8c5ea5a6b3441edbf99d03&metricType=1
```

**成功响应：**

```bash
status 200
```

```json
[
  {
    "aggregateData": null,
    "aggregateType": 1,
    "chartType": 1,
    "createAt": "2018-10-12 17:49:42",
    "dataPointIntID": 1,
    "expressions": "currentValue - lastValue",
    "id": 13,
    "isShow": 1,
    "metricData": {
      "time": [],
      "value": []
    },
    "metricName": "111",
    "metricType": 1,
    "productID": "2ioNzM",
    "productItemIntID": null,
    "remark": null,
    "updateAt": null
  }
]
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| aggregateData| "null" | String  | true  | 聚合数据 |
| aggregateType| 1 | Integer  | true  | 聚合方式 可选参数: 最大值: 1, 最小值: 2, 平均值: 3, 累计值: 4 |
| chartType| 1 | Integer  | true  | 展示图表类型 可选参数: 折线图: 1, 柱状图: 2 |
| createAt| "2018-10-12 17:49:42" | Date  | true  | 创建时间 |
| dataPointIntID| 1 | Integer  | true  | 功能点 ID |
| expressions| "currentValue - lastValue" | String  | true  | 计算公式 |
| id| 13 | Integer  | true  | id |
| isShow| 1 | Integer  | true  | 是否显示在设备详情页面: 0否 1是 |
| metricData| {"time":[],"value":[]} | Object  | true  | 指标数据 |
| metricName| "111" | String  | true  | 指标名称 |
| metricType| 1 | Number  | true  | 指标类型 可选参数： 公式指标：1，聚合指标：2 |
| productID| "2ioNzM" | String  | true  | 产品 ID |
| productItemIntID| "null" | Integer  | true  | 产品 Item |
| remark| "null" | String  | true  | 备注 |
| updateAt| "null" | Date  | true  | 更新时间 |









## 查看设备原始数据

**API 定义：**

```bash
GET /api/v1/original_data?deviceID={deviceID}&metricType=2&time_unit=day
```

**请求示例：**

```bash
GET /api/v1/original_data?deviceID=063da5117b8c5ea5a6b3441edbf99d03&metricType=2&time_unit=day
```

**成功响应：**

```bash
status 200
```

```json
[
  {
    "dataPointIntID": 1,
    "dataPointName": "温度",
    "originalData": {
      "time": [],
      "value": []
    }
  },
  {
    "dataPointIntID": 2,
    "dataPointName": "湿度",
    "originalData": {
      "time": [],
      "value": []
    }
  }
]
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| dataPointIntID| 1 | Integer  | true  | 功能点 ID |
| dataPointName| "温度" | String  | true  | 功能点名称 |
| originalData| {"time":[],"value":[]} | Object  | true  | 原始数据 |









