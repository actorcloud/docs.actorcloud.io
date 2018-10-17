# 网关管理

## 查看网关列表

**API 定义：**

```bash
GET /api/v1/gateways?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/gateways?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "authType": 1,
      "authTypeLabel": "Token",
      "blocked": 0,
      "createAt": "2018-10-10 15:55:15",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceCount": 2,
      "deviceID": "gw000001",
      "deviceStatus": 1,
      "deviceStatusLabel": "在线",
      "deviceUsername": "gw123456",
      "gatewayName": "智能电表网关",
      "gatewayProtocol": 1,
      "gatewayProtocolLabel": "MQTT",
      "hardwareVersion": null,
      "id": 207,
      "location": null,
      "mac": "0e:85:90:67:bb:d8",
      "manufacturer": null,
      "serialNumber": null,
      "softVersion": null,
      "token": "gw123456",
      "updateAt": null,
      "userIntID": 2
    },
    {
      "authType": 1,
      "authTypeLabel": "Token",
      "blocked": 0,
      "createAt": "2018-10-10 14:38:04",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceCount": 0,
      "deviceID": "97ae4463b4d558489a2d8c3660222659",
      "deviceStatus": 0,
      "deviceStatusLabel": "离线",
      "deviceUsername": "97ae4463b4d558489a2d8c3660222659",
      "gatewayName": "1111",
      "gatewayProtocol": 4,
      "gatewayProtocolLabel": "LoRa",
      "hardwareVersion": null,
      "id": 206,
      "location": null,
      "mac": "111111",
      "manufacturer": null,
      "serialNumber": null,
      "softVersion": null,
      "token": "ad50dee6be875f72823a18376ab7b4c3",
      "updateAt": null,
      "userIntID": 2
    }
  ],
  "meta": {
    "count": 5,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| authType| 1 | Integer  | true  | 认证方式 可选参数: Token: 1, 证书: 2 |
| authTypeLabel| "Token" | String  | true  | Token |
| blocked| "null" | Integer  | true  | 是否允许访问 0:允许 1:禁止 |
| createAt| "2018-10-10 15:55:15" | Date  | true  | 创建时间 |
| description| "ull" | String  | true  | 描述 |
| deviceConsoleIP| "null" | String  | true  | 控制台ip |
| deviceConsolePort| 22 | Integer  | true  | 控制台端口 |
| deviceConsoleUsername| "null" | String  | true  | 控制台用户名 |
| deviceCount| 2 | Integer  | true  | 月设备数量 |
| deviceID| "gw000001" | String  | true  | 设备 ID |
| deviceStatus| 1 | Integer  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceStatusLabel| "在线" | String  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceUsername| "gw123456" | String  | true  | 设备用户名，用于连接emq |
| gatewayName| "智能电表网关" | String  | true  | 网关名称 |
| gatewayProtocol| 1 | Integer  | true  | 网关协议类型 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| gatewayProtocolLabel| "MQTT" | String  | true  | 网关协议类型 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| hardwareVersion| "null" | String  | true  | 硬件版本 |
| id| 207 | Integer  | true  | id |
| location| "null" | JSON  | true  | 位置 |
| mac| "0e:85:90:67:bb:d8" | String  | true  | 0e:85:90:67:bb:d8 |
| manufacturer| "null" | String  | true  | 制造商 |
| serialNumber| "null" | String  | true  | 序列号 |
| softVersion| "null" | String  | true  | 软件版本 |
| token| "gw123456" | String  | true  | 设备秘钥 |
| updateAt| "null" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









## 查看网关详情

**API 定义：**

```bash
GET /api/v1/gateways/{gatewayIntIDS}
```

**请求示例：**

```bash
GET /api/v1/gateways/207
```

**成功响应：**

```bash
status 200
```

```json
{
  "authType": 1,
  "blocked": 0,
  "createAt": "2018-10-10 15:55:15",
  "createUser": "actorcloud",
  "description": null,
  "deviceConsoleIP": null,
  "deviceConsolePort": 22,
  "deviceConsoleUsername": null,
  "deviceID": "gw000001",
  "deviceStatus": 1,
  "deviceUsername": "gw123456",
  "gatewayName": "智能电表网关",
  "gatewayProtocol": 1,
  "gatewayProtocolLabel": "MQTT",
  "hardwareVersion": null,
  "id": 207,
  "location": null,
  "mac": "0e:85:90:67:bb:d8",
  "manufacturer": null,
  "serialNumber": null,
  "softVersion": null,
  "token": "gw123456",
  "updateAt": null,
  "userIntID": 2
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| authType| 1 | Integer  | true  | 认证方式 可选参数: Token: 1, 证书: 2 |
| blocked| "null" | Integer  | true  | 是否允许访问 0:允许 1:禁止 |
| createAt| "2018-10-10 15:55:15" | Date  | true  | 创建时间 |
| createUser| "actorcloud" | String  | true  | 创建用户 |
| description| "ull" | String  | true  | 描述 |
| deviceConsoleIP| "null" | String  | true  | 控制台ip |
| deviceConsolePort| 22 | Integer  | true  | 控制台端口 |
| deviceConsoleUsername| "null" | String  | true  | 控制台用户名 |
| deviceID| "gw000001" | String  | true  | 设备 ID |
| deviceStatus| 1 | Integer  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceUsername| "gw123456" | String  | true  | 设备用户名，用于连接emq |
| gatewayName| "智能电表网关" | String  | true  | 网关名称 |
| gatewayProtocol| 1 | Integer  | true  | 网关协议类型 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| gatewayProtocolLabel| "MQTT" | String  | true  | 网关协议类型 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| hardwareVersion| "null" | String  | true  | 硬件版本 |
| id| 207 | Integer  | true  | id |
| location| "null" | JSON  | true  | 位置 |
| mac| "0e:85:90:67:bb:d8" | String  | true  | 0e:85:90:67:bb:d8 |
| manufacturer| "null" | String  | true  | 制造商 |
| serialNumber| "null" | String  | true  | 序列号 |
| softVersion| "null" | String  | true  | 软件版本 |
| token| "gw123456" | String  | true  | 设备秘钥 |
| updateAt| "null" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









## 查看网关下设备列表

**API 定义：**

```bash
GET /api/v1/devices?gateway={gatewayIntID}&_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/devices?gateway=207&_page=1&_limit=10
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
      "authType": null,
      "authTypeLabel": null,
      "autoSub": null,
      "blocked": 0,
      "carrier": 1,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2018-10-11 11:50:31",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "fc81ad57cf7056e9973f3503242e0dbe",
      "deviceName": "智能电表02",
      "deviceStatus": 0,
      "deviceStatusLabel": "离线",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "deviceUsername": "fc81ad57cf7056e9973f3503242e0dbe",
      "gateway": 207,
      "hardwareVersion": null,
      "id": 209,
      "latitude": null,
      "location": null,
      "longitude": null,
      "lora": null,
      "manufacturer": null,
      "physicalNetwork": 1,
      "productID": "ZKyn1N",
      "productIntID": 132,
      "productName": "智能电表",
      "scopes": [],
      "serialNumber": null,
      "softVersion": null,
      "tenantID": "C2xPah6mn",
      "token": "45e55753676153428dd1bd2ce90a7f2a",
      "upLinkSystem": 2,
      "updateAt": null,
      "userIntID": 2
    },
    {
      "IMEI": null,
      "IMSI": null,
      "authType": null,
      "authTypeLabel": null,
      "autoSub": null,
      "blocked": 0,
      "carrier": 1,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2018-10-10 15:59:22",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "8d05fa80d5be5a42a0c999865222176d",
      "deviceName": "智能电表01",
      "deviceStatus": 0,
      "deviceStatusLabel": "离线",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "deviceUsername": "8d05fa80d5be5a42a0c999865222176d",
      "gateway": 207,
      "hardwareVersion": null,
      "id": 208,
      "latitude": null,
      "location": null,
      "longitude": null,
      "lora": null,
      "manufacturer": null,
      "physicalNetwork": 1,
      "productID": "ZKyn1N",
      "productIntID": 132,
      "productName": "智能电表",
      "scopes": [],
      "serialNumber": null,
      "softVersion": null,
      "tenantID": "C2xPah6mn",
      "token": "1fc74c7e86da5d79b2ecc12feb1f7eaf",
      "upLinkSystem": 2,
      "updateAt": null,
      "userIntID": 2
    }
  ],
  "meta": {
    "count": 2,
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
| authType| "null" | Integer  | true  | 认证方式 可选参数: Token: 1, 证书: 2 |
| authTypeLabel| "null" | String  | true  | null |
| autoSub| "null" | Integer  | true  | 自动订阅，0:关闭，1:开启 |
| blocked| "null" | Integer  | true  | 是否允许访问 0:允许 1:禁止 |
| carrier| 1 | Integer  | true  | 运营商 可选参数: 中国电信: 1, 中国移动: 2, 中国联通: 3, 其他: 4 |
| cloudProtocol| 1 | Integer  | true  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| cloudProtocolLabel| "MQTT" | String  | true  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| createAt| "2018-10-11 11:50:31" | Date  | true  | 创建时间 |
| description| "ull" | String  | true  | 描述 |
| deviceConsoleIP| "null" | String  | true  | 控制台ip |
| deviceConsolePort| 22 | Integer  | true  | 控制台端口 |
| deviceConsoleUsername| "null" | String  | true  | 控制台用户名 |
| deviceID| "fc81ad57cf7056e9973f3503242e0dbe" | String  | true  | 设备 ID |
| deviceName| "智能电表02" | String  | true  | 设备名称 |
| deviceStatus| "null" | Integer  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceStatusLabel| "离线" | String  | true  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceType| 1 | Integer  | true  | 设备类型 可选参数: 终端: 1, 智能手机: 3  与上联系统互斥：该处值为 `终端: 1` 时才能填写 `upLinkSystem` 字段 |
| deviceTypeLabel| "终端" | String  | true  | 设备类型 可选参数: 终端: 1, 智能手机: 3 |
| deviceUsername| "fc81ad57cf7056e9973f3503242e0dbe" | String  | true  | 设备用户名，用于连接emq |
| gateway| 207 | Integer  | true  | 所属网关 |
| hardwareVersion| "null" | String  | true  | 硬件版本 |
| id| 209 | Integer  | true  | id |
| latitude| "null" | Float  | true  | 纬度 |
| location| "null" | JSON  | true  | 位置 |
| longitude| "null" | Float  | true  | 经度 |
| lora| "null" | JSON  | true  | 是否 LoRa 协议 |
| manufacturer| "null" | String  | true  | 制造商 |
| physicalNetwork| 1 | Integer  | true  | 物理网络 可选参数: WIFI: 1, 2G: 2, 3G: 3, 4G: 4, NB-IOT: 5, BlueTooth: 6 |
| productID| "ZKyn1N" | String  | true  | 产品 ID |
| productIntID| 132 | Integer  | true  | 产品 ID |
| productName| "智能电表" | String  | true  | 产品名称 |
| scopes| [] | Array  | true  | 围栏范围 |
| serialNumber| "null" | String  | true  | 序列号 |
| softVersion| "null" | String  | true  | 软件版本 |
| tenantID| "C2xPah6mn" | String  | true  | 租户 ID |
| token| "45e55753676153428dd1bd2ce90a7f2a" | String  | true  | 设备秘钥 |
| upLinkSystem| 2 | Integer  | true  | 上联系统 可选参数: 云: 1, 网关: 2 |
| updateAt| "null" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









## 查看网关事件

**API 定义：**

```bash
GET /api/v1/gateways/{gatewayInt}/events?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/gateways/207/events?_page=1&_limit=10
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
      "createAt": "2018-10-17 11:44:48",
      "deviceID": "gw000001",
      "gatewayName": "智能电表网关",
      "id": 81288,
      "msgTime": "2018-10-17 11:44:48",
      "payload": "{\"Telemetry\":[{\"Addr\":52,\"Current\":0.122,\"DeviceID\":\"8d05fa80d5be5a42a0c999865222176d\",\"PowerConsumption\":1.3,\"State\":1,\"TimeStamp\":1539747888,\"Voltage\":237.91},{\"Addr\":1,\"DeviceID\":\"fc81ad57cf7056e9973f3503242e0dbe\",\"State\":1,\"TimeStamp\":1539747888,\"Voltage\":237.9}]}",
      "topic": "state",
      "updateAt": null
    },
    {
      "IP": null,
      "createAt": "2018-10-17 11:44:38",
      "deviceID": "gw000001",
      "gatewayName": "智能电表网关",
      "id": 81285,
      "msgTime": "2018-10-17 11:44:38",
      "payload": "{\"Telemetry\":[{\"Addr\":52,\"Current\":0.123,\"DeviceID\":\"8d05fa80d5be5a42a0c999865222176d\",\"PowerConsumption\":1.3,\"State\":1,\"TimeStamp\":1539747878,\"Voltage\":237.85},{\"Addr\":1,\"DeviceID\":\"fc81ad57cf7056e9973f3503242e0dbe\",\"State\":1,\"TimeStamp\":1539747878,\"Voltage\":237.9}]}",
      "topic": "state",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 21783,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| IP| "null" | String  | true  | 连接IP |
| createAt| "2018-10-17 11:44:48" | Date  | true  | 创建时间 |
| deviceID| "gw000001" | String  | true  | 设备 ID |
| gatewayName| "智能电表网关" | String  | true  | 网关名称 |
| id| 81288 | Integer  | true  | id |
| msgTime| "2018-10-17 11:44:48" | Date  | true  | 消息时间 |
| payload| "\"Telemetry\":[{\"Addr\":52,\"Current\":0.122,\"DeviceID\":\"8d05fa80d5be5a42a0c999865222176d\",\"PowerConsum" | JSON  | true  | 推送消息内容 |
| topic| "state" | String  | true  | 主题 |
| updateAt| "null" | Date  | true  | 更新时间 |









## 创建网关

**API 定义：**

```bash
POST /api/v1/gateways
```

**请求示例：**

```bash
POST /api/v1/gateways
```

```json
{
  "gatewayProtocol": 1,
  "gatewayName": "默认网关",
  "gatewayMAC": "10c61f1a1f47",
  "location": "北京",
  "manufacturer": "江南",
  "serialNumber": "10c61f1a1f47",
  "softVersion": "v 1.2",
  "hardwareVersion": "v 1.1",
  "consoleIP": "192.168.33.1",
  "consoleUsername": "root",
  "consolePort": "22",
  "description": "desc"
}
```


**成功响应：**

```bash
status 201
```

```json
{
  "consoleIP": "192.168.33.1",
  "consolePort": 22,
  "consoleUsername": "root",
  "createAt": "2018-09-30 16:45:39",
  "description": "desc",
  "gatewayMAC": "10c61f1a1f47",
  "gatewayName": "默认网关",
  "gatewayProtocol": 1,
  "hardwareVersion": "v 1.1",
  "id": 10,
  "location": "北京",
  "manufacturer": "江南",
  "serialNumber": "10c61f1a1f47",
  "softVersion": "v 1.2",
  "updateAt": null,
  "userIntID": 23
}
```







## 编辑网关

**API 定义：**

```bash
PUT /api/v1/gateways/{gatewayIntIDS}
```

**请求示例：**

```bash
PUT /api/v1/gateways/10
```

```json
{
  "consoleIP": "192.168.33.1",
  "consolePort": 22,
  "consoleUsername": "root",
  "createAt": "2018-09-30 16:45:39",
  "createUser": "ActorCloud",
  "description": "desc",
  "gatewayMAC": "10c61f1a1f47",
  "gatewayName": "默认网关2",
  "gatewayProtocol": 1,
  "gatewayProtocolLabel": "MQTT",
  "hardwareVersion": "v 1.1",
  "id": 10,
  "location": "北京",
  "manufacturer": "江南",
  "serialNumber": "10c61f1a1f47",
  "softVersion": "v 1.2",
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
  "consoleIP": "192.168.33.1",
  "consolePort": 22,
  "consoleUsername": "root",
  "createAt": "2018-09-30 16:45:39",
  "description": "desc",
  "gatewayMAC": "10c61f1a1f47",
  "gatewayName": "默认网关2",
  "gatewayProtocol": 1,
  "hardwareVersion": "v 1.1",
  "id": 10,
  "location": "北京",
  "manufacturer": "江南",
  "serialNumber": "10c61f1a1f47",
  "softVersion": "v 1.2",
  "updateAt": "2018-09-30 16:46:05",
  "userIntID": 23
}
```







## 删除网关

**API 定义：**

```bash
DELETE /api/v1/gateways?ids={gatewayIntIDS}
```

**请求示例：**

```bash
DELETE /api/v1/gateways?ids=10
```

**成功响应：**

```bash
status 204
```

```json
""
```







