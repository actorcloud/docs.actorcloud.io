# 设备日志

## 连接日志

### 查看连接日志

**API 定义：**

```bash
GET /api/v1/device_connect_logs?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/device_connect_logs?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "IP": "42.243.58.100",
      "connectStatus": 0,
      "connectStatusLabel": "下线",
      "createAt": "2018-10-17 10:31:15",
      "deviceID": "a463c024-c7b6-11e8-94e1-00e067109f12",
      "deviceName": "工业网关",
      "id": 7645,
      "keepAlive": null,
      "tenantID": "C2xPah6mn",
      "updateAt": null
    },
    {
      "IP": "42.243.58.100",
      "connectStatus": 1,
      "connectStatusLabel": "上线",
      "createAt": "2018-10-17 10:28:01",
      "deviceID": "a463c024-c7b6-11e8-94e1-00e067109f12",
      "deviceName": "工业网关",
      "id": 7644,
      "keepAlive": 0,
      "tenantID": "C2xPah6mn",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 4770,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| IP| "42.243.58.100" | String  | true  | 连接IP |
| connectStatus| "null" | Integer  | true  | 事件 可选参数: 下线: 0, 上线: 1, 认证失败: 2 |
| connectStatusLabel| "下线" | String  | true  | 下线 |
| createAt| "2018-10-17 10:31:15" | Date  | true  | 创建时间 |
| deviceID| "a463c024-c7b6-11e8-94e1-00e067109f12" | String  | true  | 设备 ID |
| deviceName| "工业网关" | String  | true  | 设备名称 |
| id| 7645 | Integer  | true  | id |
| keepAlive| "null" | Integer  | true  | 心跳时间 |
| tenantID| "C2xPah6mn" | String  | true  | 租户 ID |
| updateAt| "null" | Date  | true  | 更新时间 |









## 下行消息

### 查看下行消息

**API 定义：**

```bash
GET /api/v1/device_control_logs?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/device_control_logs?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "createAt": "2018-10-17 13:23:00",
      "deviceIntID": 46,
      "deviceName": "mqtt设备_1",
      "id": 3437,
      "payload": "{\"message\":\"Hello\"}",
      "publishStatus": 1,
      "publishStatusLabel": "已下发",
      "publishUser": "actorcloud",
      "topic": "inbox",
      "updateAt": "2018-10-17 13:23:00",
      "userIntID": 2
    },
    {
      "createAt": "2018-10-17 12:23:00",
      "deviceIntID": 46,
      "deviceName": "mqtt设备_1",
      "id": 3435,
      "payload": "{\"message\":\"Hello\"}",
      "publishStatus": 1,
      "publishStatusLabel": "已下发",
      "publishUser": "actorcloud",
      "topic": "inbox",
      "updateAt": "2018-10-17 12:23:00",
      "userIntID": 2
    }
  ],
  "meta": {
    "count": 3017,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| createAt| "2018-10-17 13:23:00" | Date  | true  | 创建时间 |
| deviceIntID| 46 | Integer  | true  | 设备 ID |
| deviceName| "mqtt设备_1" | String  | true  | 设备名称 |
| id| 3437 | Integer  | true  | id |
| payload| "{\"message\":\"Hello\"}" | JSON  | true  | 推送消息内容 |
| publishStatus| 1 | Integer  | true  | 状态 可选参数: 下发失败: 0, 已下发: 1, 已到达: 2, 定时下发: 3 |
| publishStatusLabel| "已下发" | String  | true  | 已下发 |
| publishUser| "actorcloud" | String  | true  | actorcloud |
| topic| "inbox" | String  | true  | 主题 |
| updateAt| "2018-10-17 13:23:00" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









## 上行消息

### 查看上行消息

**API 定义：**

```bash
GET /api/v1/device_events?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/device_events?_page=1&_limit=10
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
      "createAt": "2018-10-17 14:08:33",
      "deviceID": "fc81ad57cf7056e9973f3503242e0dbe",
      "deviceName": "智能电表02",
      "id": 83846,
      "msgTime": "2018-10-17 14:08:33",
      "payload": "{\"Addr\": 1, \"State\": 1, \"TimeStamp\": 1539756513, \"Voltage\": 238.4}",
      "topic": "state",
      "updateAt": null
    },
    {
      "IP": null,
      "createAt": "2018-10-17 14:08:33",
      "deviceID": "8d05fa80d5be5a42a0c999865222176d",
      "deviceName": "智能电表01",
      "id": 83845,
      "msgTime": "2018-10-17 14:08:33",
      "payload": "{\"Addr\": 52, \"Current\": 0.198, \"PowerConsumption\": 1.4000000000000001, \"State\": 1, \"TimeStamp\": 1539756513, \"Voltage\": 238.36}",
      "topic": "state",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 83756,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| IP| "null" | String  | true  | 连接IP |
| createAt| "2018-10-17 14:08:33" | Date  | true  | 创建时间 |
| deviceID| "fc81ad57cf7056e9973f3503242e0dbe" | String  | true  | 设备 ID |
| deviceName| "智能电表02" | String  | true  | 设备名称 |
| id| 83846 | Integer  | true  | id |
| msgTime| "2018-10-17 14:08:33" | Date  | true  | 消息时间 |
| payload| "{\"Addr\": 1, \"State\": 1, \"TimeStamp\": 1539756513, \"Voltage\": 238.4}" | JSON  | true  | 推送消息内容 |
| topic| "state" | String  | true  | 主题 |
| updateAt| "null" | Date  | true  | 更新时间 |









