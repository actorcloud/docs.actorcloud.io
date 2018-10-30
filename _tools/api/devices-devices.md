# 设备

## 查看设备列表

<!--!#!GET_/api/v1/devices?_page={page}&_limit={pageSize}!#!-->

#### API 定义

```bash
GET /api/v1/devices?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/devices?_page=1&_limit=10
```

#### 成功响应

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
      "cloudProtocol": 7, 
      "cloudProtocolLabel": "Modbus", 
      "createAt": "2018-10-26 11:27:56", 
      "description": null, 
      "deviceConsoleIP": null, 
      "deviceConsolePort": 22, 
      "deviceConsoleUsername": null, 
      "deviceID": "ea78e8af256d57b2a52dcda2f05282cf", 
      "deviceName": "modubs设备1", 
      "deviceStatus": 0, 
      "deviceStatusLabel": "离线", 
      "deviceType": 1, 
      "deviceTypeLabel": "终端", 
      "deviceUsername": "ea78e8af256d57b2a52dcda2f05282cf", 
      "gateway": 94, 
      "hardwareVersion": null, 
      "id": 95, 
      "latitude": null, 
      "location": null, 
      "longitude": null, 
      "lora": null, 
      "manufacturer": null, 
      "metaData": null, 
      "modBusIndex": 3, 
      "parentDevice": null, 
      "physicalNetwork": 1, 
      "productID": "4jMRrz", 
      "productIntID": 36, 
      "productName": "Modbus产品", 
      "scopes": [], 
      "serialNumber": null, 
      "softVersion": null, 
      "tenantID": "CkqVIYpeh", 
      "token": "da77cafead065dbf8ac1844f11db9d8c", 
      "upLinkSystem": 2, 
      "updateAt": null, 
      "userIntID": 6
    }
  ], 
  "meta": {
    "count": 1, 
    "limit": 10, 
    "page": 1
  }
}
```



## 查看设备详情

<!-- !#!GET_/api/v1/devices/{id}!#! -->

#### API 定义

```bash
GET /api/v1/devices/{deviceIntID}
```

#### 请求示例

```bash
GET /api/v1/devices/46
```

#### 成功响应

```bash
status 200
```

```json
{
  "IMEI": null, 
  "IMSI": null, 
  "authType": null, 
  "authTypeLabel": null, 
  "autoSub": null, 
  "blocked": 0, 
  "carrier": 1, 
  "clientIP": null, 
  "cloudProtocol": 7, 
  "cloudProtocolLabel": "Modbus", 
  "connectedAt": null, 
  "createAt": "2018-10-26 11:27:56", 
  "createUser": "modbus", 
  "description": null, 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "ea78e8af256d57b2a52dcda2f05282cf", 
  "deviceName": "modubs设备1", 
  "deviceStatus": 0, 
  "deviceStatusLabel": "离线", 
  "deviceType": 1, 
  "deviceTypeLabel": "终端", 
  "deviceUsername": "ea78e8af256d57b2a52dcda2f05282cf", 
  "gateway": 94, 
  "gatewayName": "Modbus网关", 
  "hardwareVersion": null, 
  "id": 95, 
  "keepAlive": null, 
  "latitude": null, 
  "location": null, 
  "longitude": null, 
  "lora": null, 
  "manufacturer": null, 
  "metaData": null, 
  "modBusIndex": 3, 
  "parentDevice": null, 
  "parentDeviceName": null, 
  "physicalNetwork": 1, 
  "productID": "4jMRrz", 
  "productIntID": 36, 
  "productName": "Modbus产品", 
  "scopes": [], 
  "serialNumber": null, 
  "softVersion": null, 
  "tenantID": "CkqVIYpeh", 
  "token": "da77cafead065dbf8ac1844f11db9d8c", 
  "upLinkSystem": 2, 
  "updateAt": null, 
  "userIntID": 6
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| IMEI| "null" | String  | 设备IMEI |
| IMSI| "null" | String  | 设备IMSI |
| authType| 1 | Integer  | 认证方式 可选参数: Token: 1, 证书: 2 |
| authTypeLabel| "Token" | String  | Token |
| autoSub| "null" | Integer  | 自动订阅，0:关闭，1:开启 |
| blocked| "null" | Integer  | 是否允许访问 0:允许 1:禁止 |
| carrier| 1 | Integer  | 运营商 可选参数: 中国电信: 1, 中国移动: 2, 中国联通: 3, 其他: 4 |
| clientIP| "null" | String  | 客户端 IP |
| cloudProtocol| 1 | Integer  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| cloudProtocolLabel| "MQTT" | String  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| connectedAt| "null" | String  | 连接时间 |
| createAt| "2019-09-14 14:55:20" | Date  | 创建时间 |
| createUser| "actorcloud" | String  | 创建用户 |
| description| "ull..." | String  | 描述 |
| deviceConsoleIP| "null" | String  | 控制台ip |
| deviceConsolePort| 22 | Integer  | 控制台端口 |
| deviceConsoleUsername| "null" | String  | 控制台用户名 |
| deviceID| "063da5117b8c5ea5a6b3441edbf99d03" | String  | 设备 ID |
| deviceName| "mqtt设备_1" | String  | 设备名称 |
| deviceStatus| "null" | Integer  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceStatusLabel| "离线" | String  | 设备运行状态 可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceType| 1 | Integer  | 设备类型 可选参数: 终端: 1, 智能手机: 3  与上联系统互斥：该处值为 `终端: 1` 时才能填写 `upLinkSystem` 字段 |
| deviceTypeLabel| "终端" | String  | 设备类型 可选参数: 终端: 1, 智能手机: 3 |
| deviceUsername| "063da5117b8c5ea5a6b3441edbf99d03" | String  | 设备用户名，用于连接emq |
| gateway| "null" | Integer  | 所属网关 当设备类型 `upLinkSystem` 为 `2 (网关)` 时必须填写网关 ID |
| gatewayName| "null" | String  | 网关名称 |
| hardwareVersion| "null" | String  | 硬件版本 |
| id| 46 | Integer  | id |
| keepAlive| "null" | Integer  | 心跳时间 |
| latitude| 25.064918 | Float  | 纬度 |
| location| "云南省昆明市五华区丰宁街道金鼎科技园" | JSON  | 位置 |
| longitude| 102.678732 | Float  | 经度 |
| lora| "null" | JSON  | 是否 LoRa 协议 |
| manufacturer| "null" | String  | 制造商 |
| metaData | "null" | json | 元数据 |
| modBuxIndex | 3 | Integer | 索引，所属产品是 `Modbus` 协议时，必须填写(0~255之间的数字，同级设备不能重复) |
| parentDevice | "null" | Integer | 上联设备 ID， 当上联系统选择 `设备` 时，必须填写|
| parentDeviceName | "null" | String | 上联设备名称 |
| physicalNetwork| 1 | Integer  | 物理网络 可选参数: WIFI: 1, 2G: 2, 3G: 3, 4G: 4, NB-IOT: 5, BlueTooth: 6 |
| productID| "2ioNzM" | String  | 产品 ID |
| productIntID| 60 | Integer  | 产品 ID |
| productName| "MQTT产品" | String  | 产品名称 |
| scopes| [] | Array  | 围栏范围 |
| serialNumber| "null" | String  | 序列号 |
| softVersion| "null" | String  | 软件版本 |
| tenantID| "C2xPah6mn" | String  | 租户 ID |
| token| "990afd1e9448584abfca5b7154f9bcba" | String  | 设备秘钥 |
| upLinkSystem| 1 | Integer  | 上联系统 可选参数: 云: 1, 网关: 2, 设备: 3 |
| updateAt| "2018-10-12 09:39:52" | Date  | 更新时间 |
| userIntID| 2 | Integer  | 用户 ID |




## 创建设备

#### 创建说明


##### 字段约束

- 所属产品与索引：

  所属产品 `productID` 为 `Modbus` 协议的产品时，必须携带索引 `modBusIndex` 字段。
- 设备类型与上联系统：

  设备类型 `deviceType` 为 `1 (终端)` 时，必须携带上联系统 `upLinkSystem` 字段，否则 `upLinkSystem` 应当为空。

- 上联系统与所属网关：

  上联系统 `upLinkSystem` 为 `2 (网关)` 时必须携带有效 `gateway` 网关 ID 字段。

- 上联系统与所属设备：

  上线系统 `upLinkSystem` 为 `3 (设备)` 时必须携带有效 `parentDevice` 设备 ID 字段。


> 详细字段间约束请见设备字段说明，网关信息参考[网关列表 API](rest/gateways.html#%E6%9F%A5%E7%9C%8B%E7%BD%91%E5%85%B3%E5%88%97%E8%A1%A8)。


##### 多种设备类型

请求参数根据所选产品的云端协议有所不同，除去基础信息之外，下表给出相关差异：

| 云端协议     | 必填项        | 锁定项   |
| --------------- | ----------------- | ------- |
| MQTT、CoAP、HTTP、WebSocket | 认证方式：`authType` | -- |
| LwM2M | 接入 IEMI：`IMEI` 、自动订阅： `autoSub` | -- |
| LoRa | LoRa 协议相关信息，入网方式：`lora.type` 、DevEUI：`deviceID`、AppEUI： `lora.appEUI`、AppKey： `lora.appKey` 、FCnt Check： `lora.fcntCheck`、允许加入：`lora.canJoin` | 入网方式：`lora.type`等于 `otaa` 时 |
| LoRa | LoRa 协议相关信息，入网方式：`lora.type` 、所属网关：`gateway`、DevAddr： `deviceID`、发射频率： `lora.region` 、NwkSKey： `lora.nwkSKey`、AppSKey：`lora.appSKey`、FCnt Up：`lora.fcntUp`、FCnt Down： `lora.fcntDown`、FCnt Check：`lora.fcntCheck` | 入网方式：`lora.type`等于 `abp` 时 |
| Modbus | 索引：`modBuxIndex`、认证方式：`authType` | -- |


<!-- !#!POST_/api/v1/devices!#! -->

#### API 定义

```bash
POST /api/v1/devices
```

#### 请求示例

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


#### 成功响应

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
  "metaData": null, 
  "modBusIndex": null, 
  "parentDevice": null, 
  "parentDeviceName": null, 
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




## 编辑设备

<!-- !#!PUT_/api/v1/devices/{id}!#! -->

#### API 定义

```bash
PUT /api/v1/devices/{deviceIntID}
```

#### 请求示例

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
  "metaData": null, 
  "modBusIndex": null, 
  "parentDevice": null, 
  "parentDeviceName": null, 
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


#### 成功响应

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
  "metaData": null, 
  "modBusIndex": null, 
  "parentDevice": null, 
  "parentDeviceName": null, 
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

!#!DELETE_/api/v1/devices?ids={ids}!#!




## 导出设备

!#!GET_/api/v1/devices_export!#!




## 导入设备

!#!POST_/api/v1/devices_import!#!




## 查看子设备列表

#### API 定义

```bash
GET /api/v1/devices?parentDevice={deviceIntID}&_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/devices?parentDevice=95&_page=1&_limit=10
```

#### 成功响应

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
      "cloudProtocol": 7, 
      "cloudProtocolLabel": "Modbus", 
      "createAt": "2018-10-29 14:48:37", 
      "description": null, 
      "deviceConsoleIP": null, 
      "deviceConsolePort": 22, 
      "deviceConsoleUsername": null, 
      "deviceID": "A_0573be62c1565f7dbe636765ae46af1a_1", 
      "deviceName": "modbus设备2", 
      "deviceStatus": 0, 
      "deviceStatusLabel": "离线", 
      "deviceType": 1, 
      "deviceTypeLabel": "终端", 
      "deviceUsername": "0573be62c1565f7dbe636765ae46af1a", 
      "gateway": null, 
      "hardwareVersion": null, 
      "id": 99, 
      "latitude": null, 
      "location": null, 
      "longitude": null, 
      "lora": null, 
      "manufacturer": null, 
      "metaData": null, 
      "modBusIndex": 5, 
      "parentDevice": 95, 
      "physicalNetwork": 1, 
      "productID": "4jMRrz", 
      "productIntID": 36, 
      "productName": "Modbus产品", 
      "scopes": [], 
      "serialNumber": null, 
      "softVersion": null, 
      "tenantID": "CkqVIYpeh", 
      "token": "88823fd94f0c5fcab1de844821a0810b", 
      "upLinkSystem": 3, 
      "updateAt": null, 
      "userIntID": 6
    }
  ], 
  "meta": {
    "count": 1, 
    "limit": 10, 
    "page": 1
  }
}
```







## 子设备的创建、编辑

> 与普通设备的创建、编辑类似，唯一不同的地方是 `parentDevice` 必填，且必须是上联设备的 ID







## 子设备删除

> 参考普通设备的删除接口




## 设备事件

!#!GET_/api/v1/devices/{id}/events?_page={page}&_limit={pageSize}!#!




## 查看设备原始数据

!#!GET_/api/v1/original_data?deviceID={deviceID}&metricType=2&time_unit=day!#!




## 查看设备指标数据

!#!GET_/api/v1/metrics_data?deviceID={deviceID}&metricType=1!#!




## 设备控制

!#!POST_/api/v1/device_publish!#!




## 新建设备定时任务

!#!POST_/api/v1/device_schedule_publish!#!




## 删除设备定时任务

!#!DELETE_/api/v1/device_schedule_publish?ids={ids}!#!









