# 设备日志


### 获取账户下所有设备连接日志

 **API 定义：**
```bash
GET /api/v1/device_connect_logs?_page=1&_limit=10
```


**成功响应：**

```json
{
  "items": [
    {
      "IP": "221.226.150.197",
      "createAt": "2018-03-27 08:19:01",
      "deviceID": "10C61F1A1F41",
      "deviceName": "传感器_10C61F1A1F41",
      "deviceStatus": 0,
      "deviceStatusLabel": "下线",
      "id": 3362,
      "keepAlive": null,
      "tenantID": "CyOTtJod0",
      "updateAt": null
    },
    {
      "IP": "221.226.150.197",
      "createAt": "2018-03-27 07:02:11",
      "deviceID": "10C61F1A1F11",
      "deviceName": "传感器_10C61F1A1F11",
      "deviceStatus": 0,
      "deviceStatusLabel": "下线",
      "id": 3275,
      "keepAlive": null,
      "tenantID": "CyOTtJod0",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 195,
    "limit": 10,
    "page": 1
  }
}
```

**字段说明：**

| 字段名               | 示例值                 | 字段类型    | 说明                   |
| ----------------- | ------------------- | ------- | -------------------- |
| IP                | 221.226.150.197     | String  | 设备连接IP               |
| createAt          | 2018-03-27 08:19:01 | Date    | 创建时间                 |
| deviceID          | 10C61F1A1F41        | String  | 设备编号                 |
| deviceName        | 传感器_10C61F1A1F41    | String  | 设备名称                 |
| deviceStatus      | 0                   | String  | 连接状态码，0:下线 1:上线 2:认证失败 |
| deviceStatusLabel | 下线                  | String  | 连接状态描述               |
| id                | 3362                | Integer | 主键 ID                |
| keepAlive         |                     | Integer | 心跳时长                 |
| tenantID          | CyOTtJod0           | String  | 所属租户标识符              |
| updateAt          |                     | Date    | 更新时间                 |


**查询参数：**
```bash
GET /api/v1/device_connect_logs?_page=1&_limit=10&deviceName_like=共享单车
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| deviceName_like  | String | 按设备名称过滤   |
| deviceID_like  | String | 按设备编号过滤   |
| IP_like  | String | 按设备连接 IP 过滤   |




### 获取账户下所有设备上行消息

 **API 定义：**
```bash
GET /api/v1/device_events?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "IP": null,
      "createAt": "2018-03-27 05:47:51",
      "deviceID": "10C61F1A1F11",
      "deviceName": "传感器_10C61F1A1F11",
      "id": 874,
      "payload": "Hello world!",
      "productName": "默认产品",
      "topic": "/World",
      "updateAt": null
    },
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
    }
  ],
  "meta": {
    "count": 177,
    "limit": 10,
    "page": 1
  }
}
```

**字段说明：**

| 字段名         | 示例值                 | 字段类型    | 说明     |
| ----------- | ------------------- | ------- | ------ |
| IP          |                     | String  | 设备连接IP |
| createAt    | 2018-03-27 05:47:51 | Date    | 创建时间   |
| deviceID    | 10C61F1A1F11        | String  | 设备编号   |
| deviceName  | 传感器_10C61F1A1F11    | String  | 设备名称   |
| id          | 874                 | Integer | 主键 ID  |
| payload     | Hello world!        | String  | 载荷     |
| productName | 默认产品                | String  | 产品名称   |
| topic       | /World              | String  | 作用主题   |
| updateAt    |                     | Date    | 更新时间   |


**查询参数：**
```bash
GET /api/v1/device_events?_page=1&_limit=10&deviceName_like=共享单车
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| deviceName_like  | String | 按设备名称过滤   |
| deviceID_like  | String | 按设备编号过滤   |
| topic_like  | String | 按事件主题过滤   |




### 获取账户下所有设备下行消息

 **API 定义：**
```bash
GET /api/v1/device_control_logs?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "createAt": "2018-03-28 11:49:20",
      "deviceIntID": 428,
      "deviceName": "传感器_10C61F1A1F41",
      "id": 136,
      "payload": "{\"message\":\"Hello\"}",
      "publishStatus": 0,
      "publishStatusLabel": "下发失败",
      "publishUser": "EMQ",
      "topic": null,
      "updateAt": null,
      "userIntID": 6
    },
    {
      "createAt": "2018-03-28 11:49:20",
      "deviceIntID": 427,
      "deviceName": "传感器_10C61F1A1F40",
      "id": 135,
      "payload": "{\"message\":\"Hello\"}",
      "publishStatus": 0,
      "publishStatusLabel": "下发失败",
      "publishUser": "EMQ",
      "topic": null,
      "updateAt": null,
      "userIntID": 6
    }
  ],
  "meta": {
    "count": 14,
    "limit": 10,
    "page": 1
  }
}
```

**字段说明：**

| 字段名                | 示例值                 | 字段类型    | 说明                     |
| ------------------ | ------------------- | ------- | ---------------------- |
| createAt           | 2018-03-28 11:49:20 | Date    | 创建时间                   |
| deviceIntID        | 428                 | Integer | 设备主键 ID                |
| deviceName         | 传感器_10C61F1A1F41    | String  | 设备名称                   |
| id                 | 136                 | Integer | 主键 ID                  |
| payload            | {"message":"Hello"} | String  | 载荷                     |
| publishStatus      | 0                   | Integer | 下发状态：0:下发失败 1:已下发 2:发送成功 |
| publishStatusLabel | 下发失败                | String  | 下发回执描述                 |
| publishUser        | EMQ                 | String  | 下发者用户名                 |
| topic              |                     | String  | 作用主题                   |
| updateAt           |                     | Date    | 更新时间                   |
| userIntID          | 6                   | Integer | 下发用户主键 ID               |

**查询参数：**
```bash
GET /api/v1/device_control_logs?_page=1&_limit=10&deviceName_like=共享单车
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| deviceName_like  | String | 按设备名称过滤   |
| deviceID_like  | String | 按设备编号过滤   |


