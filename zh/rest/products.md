# 产品管理

## 创建产品

#### API 定义

```bash
POST /api/v1/products
```

#### 请求示例

```bash
POST /api/v1/products
```

```json
{
  "cloudProtocol": 1,
  "description": "产品描述",
  "productName": "LWM2M",
  "productType": 1
}
```


#### 成功响应

```bash
status 201
```

```json
{
  "cloudProtocol": 3,
  "createAt": "2018-09-30 17:02:53",
  "description": "产品描述",
  "gatewayProtocol":null,
  "id": 129,
  "productID": "Bwj2pn",
  "productName": "LWM2M",
  "productType":1,
  "updateAt": null
}
```


## 编辑产品

#### API 定义

```bash
PUT /api/v1/products/<product_id>
```

#### 请求示例

```bash
PUT /api/v1/products/60
```

```json
{
  "description": "mqtt产品测试1",
  "productName": "MQTT产品",
}
```


#### 成功响应

```bash
status 200
```

```json
{
  "cloudProtocol": 1,
  "createAt": "2019-09-13 21:26:01",
  "description": "mqtt产品测试1",
  "gatewayProtocol":null,
  "id": 60,
  "productID": "2ioNzM",
  "productName": "MQTT产品",
  "productType": 1,
  "updateAt": "2018-10-17 11:50:16"
}
```




## 删除产品

#### API 定义

```bash
DELETE /api/v1/products?ids=<product_ids>
```

#### 请求示例

```bash
DELETE /api/v1/products?ids=127
```

#### 成功响应

```bash
status 204
```



## 查看产品详情

#### API 定义

```bash
GET /api/v1/products/<product_id>
```

#### 请求示例

```bash
GET /api/v1/products/60
```

#### 成功响应

```bash
status 200
```

```json
{
  "cloudProtocol": 1,
  "cloudProtocolLabel": "MQTT",
  "createAt": "2019-09-13 21:26:01",
  "createUser": "actorcloud",
  "description": "mqtt产品测试1",
  "deviceCount": 10,
  "gatewayProtocol": null,
  "id": 60,
  "productID": "2ioNzM",
  "productName": "MQTT产品",
  "productType": 1,
  "productTypeLabel": "设备",
  "updateAt": "2018-10-17 11:50:16"
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| cloudProtocol| 1 | Integer  | 云端协议，可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| cloudProtocolLabel| MQTT | String  | 云端协议，可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| createAt| 2019-09-13 21:26:01 | Date  | 创建时间 |
| createUser| actorcloud | String  | 创建用户 |
| description| mqtt产品测试1 | String  | 描述 |
| deviceCount| 10 | Integer  | 产品下设备数量 |
| gatewayProtocol| 7 | Integer  | 网关协议（若产品类型为网关） |
| id| 60 | Integer  | id |
| productID| 2ioNzM | String  | 产品 ID |
| productName| MQTT产品 | String  | 产品名称 |
| productType| 1 | String  | 产品类型，设备：1，网关：2 |
| updateAt| 2018-10-17 11:50:16 | Date  | 更新时间 |


## 查看产品列表

#### API 定义

```bash
GET /api/v1/products?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/products?_page=1&_limit=10
```


#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-06-04 16:47:42",
      "dataPointCount": 0,
      "dataStreamCount": 0,
      "description": "PUT",
      "deviceCount": 0,
      "gatewayProtocol": null,
      "id": 7,
      "productID": "05ea56",
      "productName": "PUT测试",
      "productType": 1,
      "productTypeLabel": "设备",
      "updateAt": "2019-06-04 16:55:10"
    },
    {
      "cloudProtocol": 4,
      "cloudProtocolLabel": "LoRa",
      "createAt": "2019-05-31 13:45:20",
      "dataPointCount": 0,
      "dataStreamCount": 0,
      "description": null,
      "deviceCount": 1,
      "gatewayProtocol": null,
      "id": 6,
      "productID": "87b8ee",
      "productName": "LoRa 产品",
      "productType": 1,
      "productTypeLabel": "设备",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 7,
    "limit": 10,
    "page": 1
  }
}
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| dataPointCount| 1 | Integer  | 功能点数量 |
| dataStreamCount| 1 | Integer  | 数据流数量 |





## 产品下的设备列表

#### API 定义

```bash
GET /api/v1/devices?_page={page}&_limit={pageSize}&productID={productID}
```

参数说明

| 参数             | 示例               | 参数类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| productID| bff530 | String  | 产品 ID |

> 返回数据格式与设备列表相同


#### 请求示例

```bash
GET /api/v1/devices?_page=1&_limit=10&productID=bff530
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
      "carrier": 3,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-05-31 11:26:41",
      "description": "设备描述",
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "e6951abf3639be0b8eff5a5f403e4ee353b6",
      "deviceName": "全数据设备",
      "deviceStatus": 0,
      "deviceStatusLabel": "离线",
      "deviceType": 1,
      "deviceUsername": "e6951abf3639be0b8eff5a5f403e4ee353b6",
      "gateway": null,
      "gatewayProtocol": null,
      "groups": [
        "1eee19"
      ],
      "groupsIndex": [
        {
          "label": "分组",
          "value": 1
        }
      ],
      "hardwareVersion": "1.1",
      "id": 22,
      "lastConnection": null,
      "latitude": 39.908692,
      "location": "北京市东城区东华门街道天安门",
      "longitude": 116.397477,
      "loraData": null,
      "lwm2mData": null,
      "mac": "0.0.0.0",
      "manufacturer": "Apple",
      "metaData": null,
      "parentDevice": null,
      "productID": "bff530",
      "productIntID": 1,
      "productName": "测试产品",
      "serialNumber": "28109489328759",
      "softVersion": "1.0",
      "token": "40ee8e9a185e51bbd6b78573a64a1d70198a",
      "upLinkNetwork": 3,
      "upLinkSystem": 1,
      "updateAt": null
    },
    {
      "authType": 1,
      "authTypeLabel": "Token",
      "blocked": 0,
      "carrier": 1,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-05-08 10:50:03",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "deviceName": "测试设备1",
      "deviceStatus": 1,
      "deviceStatusLabel": "在线",
      "deviceType": 1,
      "deviceUsername": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "gateway": null,
      "gatewayProtocol": null,
      "groups": [
        "1eee19"
      ],
      "groupsIndex": [
        {
          "label": "分组",
          "value": 1
        }
      ],
      "hardwareVersion": null,
      "id": 1,
      "lastConnection": "2019-06-03 14:51:03",
      "latitude": null,
      "location": null,
      "longitude": null,
      "loraData": null,
      "lwm2mData": null,
      "mac": null,
      "manufacturer": null,
      "metaData": null,
      "parentDevice": null,
      "productID": "bff530",
      "productIntID": 1,
      "productName": "测试产品",
      "serialNumber": null,
      "softVersion": null,
      "token": "1974e8f49da9e131ef5fe50bf96f19be",
      "upLinkNetwork": 3,
      "upLinkSystem": 1,
      "updateAt": "2019-06-03 14:51:03"
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```