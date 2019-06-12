# 设备信息


### 查看设备运行日志

**API 定义：**

```bash
GET /api/v1/devices/{device_id}/connect_logs?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "IP": "221.226.150.197",
      "createAt": "2018-03-27 05:30:37",
      "deviceID": "10C61F1A1F40",
      "deviceName": "传感器_10C61F1A1F40",
      "deviceStatus": 0,
      "deviceStatusLabel": "下线",
      "id": 3229,
      "keepAlive": null,
      "tenantID": "CyOTtJod0",
      "updateAt": null
    },
    {
      "IP": "221.226.150.197",
      "createAt": "2018-03-27 05:30:36",
      "deviceID": "10C61F1A1F40",
      "deviceName": "传感器_10C61F1A1F40",
      "deviceStatus": 1,
      "deviceStatusLabel": "上线",
      "id": 3228,
      "keepAlive": 60,
      "tenantID": "CyOTtJod0",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 66,
    "limit": 10,
    "page": 1
  }
}
```

**字段说明：**

| 字段名               | 示例值                 | 字段类型    | 说明                   |
| ----------------- | ------------------- | ------- | -------------------- |
| IP                | 221.226.150.197     | String  | 设备连接IP               |
| createAt          | 2018-03-27 05:30:37 | Date    | 创建时间                 |
| deviceID          | 10C61F1A1F40        | String  | 设备编号                 |
| deviceName        | 传感器_10C61F1A1F40    | String  | 设备名称                 |
| deviceStatus      | 0                   | String  | 连接状态码，0:下线 1:上线 2:认证失败 |
| deviceStatusLabel | 下线                  | String  | 连接状态描述               |
| id                | 3229                | Integer | 主键 ID                 |
| keepAlive         |                     | Integer | 心跳时长                 |
| tenantID          | CyOTtJod0           | String  | 所属租户标识符              |
| updateAt          |                     | Date    | 更新时间                 |



### 设备安全信息

设备安全分为证书信息，详见：

- [证书 API](certs.md)


### 查看设备事件

 **API 定义：**
```bash
GET /api/v1/devices/{device_id}/events?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "IP": null,
      "createAt": "2018-03-24 08:19:09",
      "deviceID": "10C61F1A1F40",
      "deviceName": "传感器_10C61F1A1F40",
      "id": 594,
      "payload": "Hello world!",
      "productName": "环境监测",
      "topic": "hello_topic",
      "updateAt": null
    },
    {
      "IP": null,
      "createAt": "2018-03-24 08:19:07",
      "deviceID": "10C61F1A1F40",
      "deviceName": "传感器_10C61F1A1F40",
      "id": 593,
      "payload": "Hello world!",
      "productName": "环境监测",
      "topic": "hello_topic",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 127,
    "limit": 10,
    "page": 1
  }
}
```

**字段说明：**

| 字段名         | 示例值                 | 字段类型    | 说明     |
| ----------- | ------------------- | ------- | ------ |
| IP          |                     | String  | 设备连接IP |
| createAt    | 2018-03-24 08:19:09 | Date    | 创建时间   |
| deviceID    | 10C61F1A1F40        | String  | 设备编号   |
| deviceName  | 传感器_10C61F1A1F40    | String  | 设备名称   |
| id          | 594                 | Integer | 主键 ID   |
| payload     | Hello world!        | String  | 载荷     |
| productName | 环境监测                | String  | 产品名称   |
| topic       | hello_topic         | String  | 作用主题   |
| updateAt    |                     | Date    | 更新时间   |



### 设备指令下发

**API 定义：**
```bash
POST /api/v1/device_publish
```

**请求体：**

```json
{
  "deviceID": "10C61F1A1F40",
  "payload": "{\"message\":\"Hello\"}",
  "topic": "/hello"
}
```

**字段说明：**

| 字段名      | 示例值                 | 字段类型   | 是否必填 | 说明   |
| -------- | ------------------- | ------ | ---- | ---- |
| deviceID | 10C61F1A1F40        | String | true | 设备编号 |
| payload  | {"message":"Hello"} | String | true | 载荷   |
| topic    | /hello              | String | false | 作用主题，不填则为设备自订阅主题 |
  



### 查看设备控制历史

 **API 定义：**
```bash
GET /api/v1/devices/{device_id}/control_logs?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "createAt": "2018-03-28 11:19:18",
      "deviceIntID": 427,
      "deviceName": "传感器_10C61F1A1F40",
      "id": 134,
      "payload": "{\"message\":\"Hello\"}",
      "publishStatus": 0,
      "publishStatusLabel": "下发失败",
      "publishUser": "EMQ",
      "topic": "/hello",
      "updateAt": "2018-03-28 11:19:18",
      "userIntID": 6
    },
    {
      "createAt": "2018-03-24 11:09:38",
      "deviceIntID": 427,
      "deviceName": "传感器_10C61F1A1F40",
      "id": 128,
      "payload": "\"{\\n  \\\"cmd\\\": \\\"upload\\\"\\n}\"",
      "publishStatus": 3,
      "publishStatusLabel": "不需要回执",
      "publishUser": "EMQ",
      "topic": null,
      "updateAt": null,
      "userIntID": 6
    }
  ],
  "meta": {
    "count": 8,
    "limit": 10,
    "page": 1
  }
}
```

**字段说明：**

| 字段名                | 示例值                 | 字段类型    | 说明                     |
| ------------------ | ------------------- | ------- | ---------------------- |
| createAt           | 2018-03-28 11:19:18 | Date    | 创建时间                   |
| deviceIntID        | 427                 | Integer | 设备主键 ID                |
| deviceName         | 传感器_10C61F1A1F40    | String  | 设备名称                   |
| id                 | 134                 | Integer | 主键 ID                  |
| payload            | {"message":"Hello"} | String  | 载荷                     |
| publishStatus      | 0                   | Integer | 下发状态：0:下发失败 1:已下发 2:发送成功 |
| publishStatusLabel | 下发失败                | String  | 下发回执描述                 |
| publishUser        | EMQ                 | String  | 下发者用户名                 |
| topic              | /hello              | String  | 作用主题                   |
| updateAt           | 2018-03-28 11:19:18 | Date    | 更新时间                   |
| userIntID          | 6                   | Integer | 下发用户主键 ID               |
