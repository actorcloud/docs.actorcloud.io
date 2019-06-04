# 设备

## 创建设备

#### 创建说明

##### 字段约束

- 设备类型与上联系统：

  设备类型 `deviceType` 为 `1 (终端)` 时，必须携带上联系统 `upLinkSystem` 字段，否则 `upLinkSystem` 应当为空。

- 上联系统与所属网关：

  上联系统 `upLinkSystem` 为 `2 (网关)` 时必须携带有效 `gateway` 网关 ID 字段。

- 上联系统与所属设备：

  上联系统 `upLinkSystem` 为 `3 (设备)` 时必须携带有效 `parentDevice` 设备 ID 字段。


> 详细字段间约束请见设备字段说明。


##### 多种设备类型

请求参数根据所选产品的云端协议有所不同，除去基础信息之外，下表给出相关差异：

| 云端协议     | 必填项        | 锁定项   |
| --------------- | ----------------- | ------- |
| MQTT、CoAP、HTTP、WebSocket、Modbus | 认证方式：`authType` | -- |
| LwM2M | 接入 IMEI：`IMEI` 、自动订阅： `autoSub` | -- |
| LoRa | LoRa 协议相关信息，入网方式：`lora.type` 、DevEUI：`deviceID`、AppEUI： `lora.appEUI`、AppKey： `lora.appKey` 、FCnt Check： `lora.fcntCheck`、允许加入：`lora.canJoin` | 入网方式：`lora.type`等于 `otaa` 时 |
| LoRa | LoRa 协议相关信息，入网方式：`lora.type` 、所属网关：`gateway`、DevAddr： `deviceID`、发射频率： `lora.region` 、NwkSKey： `lora.nwkSKey`、AppSKey：`lora.appSKey`、FCnt Up：`lora.fcntUp`、FCnt Down： `lora.fcntDown`、FCnt Check：`lora.fcntCheck` | 入网方式：`lora.type`等于 `abp` 时 |


当云端协议为 `LwM2M` 和 `LoRa` 时，协议相关信息分别对应 `lwm2mData` 和 `loraData`，示例如下：

`LwM2M` 协议
```json
{
  // 设备的其他信息
  "lwm2mData":{
    "IMEI":"",
    "IMSI":"",
    "autoSub":1
  }
}
```

`LoRa` 协议
```json
{
  // 设备的其他信息
  "loraData": {
    "appEUI": "1092ej1029e0192u",
    "appKey": "12u1092u0192je1029u0912uu142j4oi",
    "canJoin": 1,
    "fcntCheck": 0,
    "region": "EU863-870",
    "type": "otaa"
  }
}
```

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
  "authType": 1,
  "carrier": 1,
  "cloudProtocol": 1,
  "description": "智能锁",
  "deviceID": "10c61f1a1f47",
  "deviceName": "智能锁",
  "deviceUsername": "10c61f1a1f47",
  "deviceType": 1,
  "groups":[1,2],
  "hardwareVersion": "v 1.0",
  "latitude": 30.266682,
  "location": "浙江省杭州市西湖区灵隐街道浙江大学玉泉校区",
  "longitude": 120.124144,
  "mac":"",
  "manufacturer": "江南",
  "productID": "p3zZMy",
  "serialNumber": "1061f1a1f47",
  "softVersion": "v 1.2",
  "upLinkNetwork": 3,
  "upLinkSystem": 1,
  "token": "10c61f1a1f47"
}
```


#### 成功响应

```bash
status 201
```

```json
{
  "authType": 1, 
  "blocked": 0, 
  "carrier": 3, 
  "createAt": "2019-06-03 09:58:20", 
  "description": "智能锁", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "10c61f1a1f47", 
  "deviceName": "智能锁", 
  "deviceStatus": 0, 
  "deviceType": 1, 
  "deviceUsername": "10c61f1a1f47", 
  "gateway": null, 
  "groups": [], 
  "groupsIndex": [], 
  "hardwareVersion": "2.0", 
  "id": 27, 
  "lastConnection": null, 
  "latitude": 30.266682,
  "location": "浙江省杭州市西湖区灵隐街道浙江大学玉泉校区",
  "longitude": 120.124144,
  "loraData": null, 
  "lwm2mData": null, 
  "mac": "", 
  "manufacturer": "江南", 
  "metaData": null, 
  "parentDevice": null, 
  "productID": "p3zZMy", 
  "serialNumber": "1061f1a1f47", 
  "softVersion": "V 1.0", 
  "token": "10c61f1a1f47", 
  "upLinkNetwork": 3, 
  "upLinkSystem": 1, 
  "updateAt": null
}
```


## 编辑设备


#### API 定义

```bash
PUT /api/v1/devices/{device_id}
```

#### 请求示例

```bash
PUT /api/v1/devices/191
```

```json
{
  "authType": 1, 
  "blocked": 0, 
  "carrier": 3, 
  "createAt": "2019-06-03 09:58:20", 
  "description": "智能锁", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "deviceName": "智能锁", 
  "deviceStatus": 0, 
  "deviceType": 1, 
  "deviceUsername": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "gateway": null, 
  "groups": [], 
  "groupsIndex": [], 
  "hardwareVersion": "2.0", 
  "id": 27, 
  "lastConnection": null, 
  "latitude": 39.908692, 
  "location": "北京市东城区", 
  "longitude": 116.397477, 
  "loraData": null, 
  "lwm2mData": null, 
  "mac": "12.87", 
  "manufacturer": "东南", 
  "metaData": null, 
  "parentDevice": null, 
  "productID": "bff530", 
  "serialNumber": "988888alsd", 
  "softVersion": "1.0", 
  "token": "6e1ecb1b74bc526ceeee6e709d2beaebe996", 
  "upLinkNetwork": 3, 
  "upLinkSystem": 1, 
  "updateAt": null
}
```


#### 成功响应

```bash
status 200
```

```json
{
  "authType": 1, 
  "blocked": 0, 
  "carrier": 3, 
  "createAt": "2019-06-03 09:58:20", 
  "description": "智能锁", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "deviceName": "智能锁", 
  "deviceStatus": 0, 
  "deviceType": 1, 
  "deviceUsername": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "gateway": null, 
  "groups": [], 
  "groupsIndex": [], 
  "hardwareVersion": "2.0", 
  "id": 27, 
  "lastConnection": null, 
  "latitude": 39.908692, 
  "location": "北京市东城区", 
  "longitude": 116.397477, 
  "loraData": null, 
  "lwm2mData": null, 
  "mac": "12.87", 
  "manufacturer": "东南", 
  "metaData": null, 
  "parentDevice": null, 
  "productID": "bff530", 
  "serialNumber": "988888alsd", 
  "softVersion": "1.0", 
  "token": "6e1ecb1b74bc526ceeee6e709d2beaebe996", 
  "upLinkNetwork": 3, 
  "upLinkSystem": 1, 
  "updateAt": "2019-06-03 10:00:20"
}
```




## 删除设备

#### API 定义

```bash
DELETE /api/v1/devices?ids={device_ids}
```
> 支持删除多个设备，ids=1,2,3

#### 请求示例

```bash
DELETE /api/v1/devices?ids=190
```

#### 成功响应

```bash
status 204
```


## 设备详情

#### API 定义

```bash
GET /api/v1/devices/{device_id}
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
  "authType": 1, 
  "authTypeLabel": "Token", 
  "blocked": 0, 
  "carrier": 1, 
  "cloudProtocol": 7, 
  "cloudProtocolLabel": "Modbus", 
  "createAt": "2018-10-26 11:27:56", 
  "createUser": "modbus", 
  "description": "", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "ea78e8af256d57b2a52dcda2f05282cf", 
  "deviceName": "modubs设备1", 
  "deviceStatus": 0, 
  "deviceStatusLabel": "离线", 
  "deviceType": 1, 
  "deviceUsername": "ea78e8af256d57b2a52dcda2f05282cf", 
  "gateway": 94, 
  "gatewayName": "Modbus网关", 
  "hardwareVersion": "1.0", 
  "id": 95, 
  "lastConnection": "2019-01-01 15:00:00",
  "latitude": 39.908692, 
  "location": "北京市东城区", 
  "longitude": 116.397477, 
  "loraData": {
    "appEUI": "1092ej1029e0192u",
    "appKey": "12u1092u0192je1029u0912uu142j4oi",
    "canJoin": 1,
    "fcntCheck": 0,
    "region": "EU863-870",
    "type": "otaa"
  },
  "lwm2mData": {
    "IMEI": "4982747892374918",
    "IMSI": "8347984918218298",
    "autoSub": 1
  },
  "mac" :"",
  "manufacturer": "", 
  "metaData": {},  
  "parentDevice": 1, 
  "parentDeviceName": "",  
  "productID": "4jMRrz", 
  "productIntID": 36, 
  "productName": "Modbus产品", 
  "serialNumber": "", 
  "softVersion": "1.0", 
  "token": "da77cafead065dbf8ac1844f11db9d8c", 
  "upLinkNetwork": 2,
  "upLinkSystem": 1,
  "updateAt": "2018-10-26 12:27:56"
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| authType| 1 | Integer  | 认证方式，可选参数: Token: 1, 证书: 2 |
| authTypeLabel| Token | String  | Token |
| blocked| 0 | Integer  | 是否允许访问，0:允许 1:禁止 |
| carrier| 1 | Integer  | 运营商，可选参数: 中国电信: 1, 中国移动: 2, 中国联通: 3, 其他: 4 |
| cloudProtocol| 1 | Integer  | 云端协议，可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| cloudProtocolLabel| MQTT | String  | 云端协议，可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| createAt| 2019-09-14 14:55:20 | Date  | 创建时间 |
| createUser| actorcloud | String  | 创建用户 |
| description| 智能锁 | String  | 描述 |
| deviceConsoleIP| 127.0.0.1 | String  | 控制台ip |
| deviceConsolePort| 22 | Integer  | 控制台端口 |
| deviceConsoleUsername| root | String  | 控制台用户名 |
| deviceID| 063da5117b8c5ea5a6b3441edbf99d03 | String  | 设备 ID |
| deviceName| mqtt设备_1 | String  | 设备名称 |
| deviceStatus| 0 | Integer  | 设备运行状态，可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceStatusLabel| 离线 | String  | 设备运行状态，可选参数: 离线: 0, 在线: 1, 休眠: 2 |
| deviceType| 1 | Integer  | 设备类型，可选参数: 终端: 1, 网关: 2  与上联系统互斥：该处值为 `终端: 1` 时才能填写 `upLinkSystem` 字段 |
| deviceUsername| 063da5117b8c5ea5a6b3441edbf99d03 | String  | 设备用户名，用于连接emq |
| gateway| 1 | Integer  | 所属网关，当设备类型 `upLinkSystem` 为 `2 (网关)` 时必须填写网关 ID |
| gatewayName| 网关1 | String  | 网关名称 |
| gatewayProtocol| 7 | Integer  | 网关协议 |
| hardwareVersion| 1.0 | String  | 硬件版本 |
| id| 46 | Integer  | id |
| lastConnection| 2019-01-01 15:00:00 | Date  | 上次连接时间 |
| latitude| 25.064918 | Float  | 纬度 |
| location| 云南省昆明市五华区丰宁街道金鼎科技园 | String  | 位置 |
| longitude| 102.678732 | Float  | 经度 |
| loraData| {"appEUI": "1092ej1029e0192u","appKey": "12u1092u0192je1029u0912uu142j4oi","canJoin": 1,"fcntCheck": 0,"region": "EU863-870","type": "otaa"} | JSON  | LoRa 协议设备数据 |
| lwm2mData| {"IMEI": "4982747892374918","IMSI": "8347984918218298","autoSub": 1} | JSON  | LwM2M 协议设备数据 |
| mac| a4:5e:60:be:ef:3b | String  | MAC |
| manufacturer| Samsung | String  | 制造商 |
| metaData | {} | JSON | 元数据 |
| parentDevice | 2 | Integer | 上联设备 ID， 当上联系统选择 `设备` 时，必须填写|
| parentDeviceName | 上联设备1 | String | 上联设备名称 |
| productID| 2ioNzM | String  | 产品 ID |
| productIntID| 60 | Integer  | 产品 ID |
| productName| MQTT产品 | String  | 产品名称 |
| serialNumber| 16OQUWEOI923 | String  | 序列号 |
| softVersion| 1.0 | String  | 软件版本 |
| token| 990afd1e9448584abfca5b7154f9bcba | String  | 设备秘钥 |
| upLinkNetwork| 1 | Integer  | 上联网络，可选参数: 2G: 1, 3G: 2, 4G: 3, Wi-Fi: 4, NB-IoT: 5, BlueTooth: 6, 有线: 7 |
| upLinkSystem| 1 | Integer  | 上联系统，可选参数: 云: 1, 设备: 2, 网关: 3 |
| updateAt| 2018-10-12 09:39:52 | Date  | 更新时间 |

`LoRa` 协议设备字段说明

| 字段名             | 示例值               | 字段类型    |  说明         |
| --------------- | ----------------- | ------- | ------------------- |
|type|otaa|String|入网方式|
|appSKey||String|appSkey|
|region|9600|String|发射频率|
|fcntCheck|0|Integer|FCnt Check|
|fcntDown|0|Integer|FCnt Down|
|fcntUp|0|Integer|FCnt Up|
|nwkSKey||String|nwkSKey|
|canJoin|0|Integer|允许加入|
|appEUI| |String|appEUI|
|appKey| |String|appKey|



`LwM2M` 协议设备字段说明

| 字段名             | 示例值               | 字段类型    |  说明         |
| --------------- | ----------------- | ------- | ------------------- |
|IMEI|7472938749187241|String|IMEI|
|IMSI|2384792739482336|String|IMSI|
|autoSub|1|Integer|是否自动订阅，1: 自动订阅, 0: 不自动订阅|

## 设备列表


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
      "authType": 1, 
      "authTypeLabel": "Token", 
      "blocked": 0, 
      "carrier": 1, 
      "cloudProtocol": 7, 
      "cloudProtocolLabel": "Modbus", 
      "createAt": "2018-10-26 11:27:56", 
      "description": "", 
      "deviceConsoleIP": null, 
      "deviceConsolePort": 22, 
      "deviceConsoleUsername": null, 
      "deviceID": "ea78e8af256d57b2a52dcda2f05282cf", 
      "deviceName": "modubs设备1", 
      "deviceStatus": 0, 
      "deviceStatusLabel": "离线", 
      "deviceType": 1,  
      "deviceUsername": "ea78e8af256d57b2a52dcda2f05282cf", 
      "gateway": 94, 
      "gatewayProtocol": 7,
      "hardwareVersion": "1.0",
      "id": 95, 
      "lastConnection": "2019-01-01 15:00:00",
      "latitude": 39.908692, 
      "location": "北京市东城区", 
      "longitude": 116.397477, 
      "loraData": {
        "appEUI": "1092ej1029e0192u",
        "appKey": "12u1092u0192je1029u0912uu142j4oi",
        "canJoin": 1,
        "fcntCheck": 0,
        "region": "EU863-870",
        "type": "otaa"
      },
      "lwm2mData": {
        "IMEI": "4982747892374918",
        "IMSI": "8347984918218298",
        "autoSub": 1
      },
      "mac" :"",
      "manufacturer": "", 
      "metaData": {},  
      "productID": "4jMRrz", 
      "productIntID": 36, 
      "productName": "Modbus产品", 
      "serialNumber": "", 
      "softVersion": "1.0", 
      "tenantID": "CkqVIYpeh", 
      "token": "da77cafead065dbf8ac1844f11db9d8c", 
      "upLinkNetwork": 2, 
      "upLinkSystem": 1,
      "updateAt": "2018-10-26 12:27:56"
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

#### API 定义

```bash
GET /api/v1/devices/{deviceIntID}/events?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/devices/189/events?_page=1&_limit=10
```

#### 成功响应

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







## 查看设备原始数据

#### API 定义

```bash
GET /api/v1/original_data?deviceID={deviceID}&metricType=2&time_unit=day
```

#### 请求示例

```bash
GET /api/v1/original_data?deviceID=063da5117b8c5ea5a6b3441edbf99d03&metricType=2&time_unit=day
```

#### 成功响应

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


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| dataPointIntID| 1 | Integer  | 功能点 ID |
| dataPointName| "温度" | String  | 功能点名称 |
| originalData| {"time":[],"value":[]} | Object  | 原始数据 |









## 查看设备指标数据

#### API 定义

```bash
GET /api/v1/metrics_data?deviceID={deviceID}&metricType=1
```

#### 请求示例

```bash
GET /api/v1/metrics_data?deviceID=063da5117b8c5ea5a6b3441edbf99d03&metricType=1
```

#### 成功响应

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

## 设备控制

#### API 定义

```bash
POST /api/v1/device_publish
```

#### 请求示例

```bash
POST /api/v1/device_publish
```

```json
{
  "deviceID": "10c61f1a1f47",
  "payload": "{\"message\":\"Hello\"}",
  "topic": "topic"
}
```


#### 成功响应

```bash
status 201
```

```json
{
  "message": "Client publish success", 
  "progress": 100, 
  "result": {
    "deviceID": "10c61f1a1f47", 
    "taskID": "e58b55bcb11a53b9f9598f825bedfbb5"
  }, 
  "status": 3
}
```