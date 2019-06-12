# 设备日志

## 连接日志

#### API 定义

```bash
GET /api/v1/devices/<device_id>/connect_logs?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/devices/1/connect_logs?_page=1&_limit=10
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
      "connectStatus": 1,
      "connectStatusLabel": "上线",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:51:03"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "上线",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:47:39"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "上线",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:45:59"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "上线",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:33:46"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "上线",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 13:50:55"
    }
  ],
  "meta": {
    "count": 5,
    "limit": 10,
    "page": 1
  }
}
```

#### 字段说明

| 字段名    | 示例     | 类型     |  说明  |
| ---------| ------- | ------- | -------|
| IP | 127.0.0.1 | String | 连接 IP |
| connectStatus | 1 | Integer | 连接状态，0：下线，1：上线，2：认证失败 |
| connectStatusLabel | 上线 | String | 连接状态，0：下线，1：上线，2：认证失败 |
| deviceID | dbabdf8ad91ef595bf9e9f35b1eef433 | String | 设备 ID |
| keepAlive | 60 | Integer | 心跳时间 |
| msgTime | 2019-06-03 13:50:55 | Date | 连接时间 |



## 控制日志


#### API 定义

```bash
GET /api/v1/devices/<device_id>/publish_logs?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/devices/1/publish_logs?_page=1&_limit=10
```

#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-06-03 07:03:39",
      "payload": "{\"message\": \"Hello\"}",
      "publishStatus": 1,
      "publishStatusLabel": "已下发",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-06-03 06:57:31",
      "payload": "{\"message\": \"Jack\"}",
      "publishStatus": 1,
      "publishStatusLabel": "已下发",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-06-03 06:55:24",
      "payload": "{\"message\": \"Tom\"}",
      "publishStatus": 1,
      "publishStatusLabel": "已下发",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-06-03 06:54:19",
      "payload": "{\"message\": \"Hello\"}",
      "publishStatus": 0,
      "publishStatusLabel": "下发失败",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-05-31 07:13:09",
      "payload": "{\"message\": \"Hello\"}",
      "publishStatus": 1,
      "publishStatusLabel": "已下发",
      "streamID": null,
      "topic": "inbox"
    }
  ],
  "meta": {
    "count": 5,
    "limit": 10,
    "page": 1
  }
}
```


#### 字段说明

| 字段名    | 示例     | 类型     |  说明  |
| ---------| ------- | ------- | -------|
| deviceID | dbabdf8ad91ef595bf9e9f35b1eef433 | String | 设备 ID |
| msgTime | 2019-06-03 13:50:55 | Date | 下发时间 |
| payload | {\"message\": \"Hello\"} | String | 连接 IP |
| publishtStatus | 1 | Integer | 下发状态，0：下发失败，1：已下发，2：已到达，3：定时下发 |
| publishStatusLabel | 上线 | String | 下发状态，0：下发失败，1：已下发，2：已到达，3：定时下发 |
| streamID | qwe29j | String | 数据流标识 |
| topic | inbox | String | topic |