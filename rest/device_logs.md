# 设备日志

## 连接日志

### 查看连接日志

#### API 定义

```bash
GET /api/v1/device_connect_logs?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/device_connect_logs?_page=1&_limit=10
```

#### 成功响应

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







## 下行消息

### 查看下行消息

#### API 定义

```bash
GET /api/v1/device_control_logs?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/device_control_logs?_page=1&_limit=10
```

#### 成功响应

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







## 上行消息

### 查看上行消息

#### API 定义

```bash
GET /api/v1/device_events?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/device_events?_page=1&_limit=10
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







