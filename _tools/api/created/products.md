# 产品管理

## 查看产品列表

#### API 定义

```bash
GET /api/v1/products?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/products?_page=1&_limit=9
```

#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "appCount": 2,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-09-13 21:26:01",
      "dataPointCount": 7,
      "dataStreamCount": 1,
      "description": "mqtt产品测试1",
      "deviceCount": 106,
      "id": 60,
      "productID": "2ioNzM",
      "productName": "MQTT产品",
      "updateAt": "2018-10-17 11:50:16"
    },
    {
      "appCount": 0,
      "cloudProtocol": 3,
      "cloudProtocolLabel": "LwM2M",
      "createAt": "2018-10-16 16:24:35",
      "description": "测试",
      "deviceCount": 1,
      "id": 141,
      "itemCount": 1,
      "productID": "67eH9V",
      "productName": "lwm2m图表测试",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 78,
    "limit": 9,
    "page": 1
  }
}
```







## 查看产品详情

#### API 定义

```bash
GET /api/v1/products/{productIntID}
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
  "deviceCount": 106,
  "id": 60,
  "productID": "2ioNzM",
  "productName": "MQTT产品",
  "updateAt": "2018-10-17 11:50:16"
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| cloudProtocol| 1 | Integer  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| cloudProtocolLabel| "MQTT" | String  | 云端协议 可选参数: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| createAt| "2019-09-13 21:26:01" | Date  | 创建时间 |
| createUser| "actorcloud" | String  | 创建用户 |
| description| "qtt产品测试1..." | String  | 描述 |
| deviceCount| 106 | Integer  | 月设备数量 |
| id| 60 | Integer  | id |
| productID| "2ioNzM" | String  | 产品 ID |
| productName| "MQTT产品" | String  | 产品名称 |
| updateAt| "2018-10-17 11:50:16" | Date  | 更新时间 |









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
  "cloudProtocol": 3,
  "productName": "LWM2M",
  "description": "23"
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
  "description": "23",
  "id": 129,
  "productID": "Bwj2pn",
  "productName": "LWM2M",
  "updateAt": null
}
```







## 编辑产品

#### API 定义

```bash
PUT /api/v1/products/{productIntID}
```

#### 请求示例

```bash
PUT /api/v1/products/60
```

```json
{
  "cloudProtocol": 1,
  "cloudProtocolLabel": "MQTT",
  "createAt": "2019-09-13 21:26:01",
  "createUser": "actorcloud",
  "description": "mqtt产品测试1",
  "deviceCount": 106,
  "id": 60,
  "productID": "2ioNzM",
  "productName": "MQTT产品",
  "updateAt": null
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
  "id": 60,
  "productID": "2ioNzM",
  "productName": "MQTT产品",
  "updateAt": "2018-10-17 11:50:16"
}
```







## 删除产品

#### API 定义

```bash
DELETE /api/v1/products?ids={productIntIDS}
```

#### 请求示例

```bash
DELETE /api/v1/products?ids=127
```

#### 成功响应

```bash
status 204
```

```json
""
```







