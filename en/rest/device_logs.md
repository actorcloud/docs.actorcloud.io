# Device log

## Connection log

#### API 

```bash
GET /api/v1/devices/<device_id>/connect_logs?_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/devices/1/connect_logs?_page=1&_limit=10
```

#### Response

```bash
status 200
```

```json
{
  "items": [
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "Online",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:51:03"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "Online",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:47:39"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "Online",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:45:59"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "Online",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "keepAlive": null,
      "msgTime": "2019-06-03 14:33:46"
    },
    {
      "IP": null,
      "connectStatus": 1,
      "connectStatusLabel": "Online",
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

#### Field description

| Name | Sample value | Type |  Description  |
| ---------| ------- | ------- | -------|
| IP | 127.0.0.1 | String | Connection IP |
| connectStatus | 1 | Integer | Connection status, 0: offline, 1: online, 2: authentication failed |
| connectStatusLabel | Online | String | Connection status, 0: offline, 1: online, 2: authentication failed |
| deviceID | dbabdf8ad91ef595bf9e9f35b1eef433 | String | Device  ID |
| keepAlive | 60 | Integer | Heartbeat time |
| msgTime | 2019-06-03 13:50:55 | Date | Connection time |



## Control log


#### API 

```bash
GET /api/v1/devices/<device_id>/publish_logs?_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/devices/1/publish_logs?_page=1&_limit=10
```

#### Response

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
      "publishStatusLabel": "published",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-06-03 06:57:31",
      "payload": "{\"message\": \"Jack\"}",
      "publishStatus": 1,
      "publishStatusLabel": "published",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-06-03 06:55:24",
      "payload": "{\"message\": \"Tom\"}",
      "publishStatus": 1,
      "publishStatusLabel": "published",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-06-03 06:54:19",
      "payload": "{\"message\": \"Hello\"}",
      "publishStatus": 0,
      "publishStatusLabel": "publish failed",
      "streamID": null,
      "topic": "inbox"
    },
    {
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "msgTime": "2019-05-31 07:13:09",
      "payload": "{\"message\": \"Hello\"}",
      "publishStatus": 1,
      "publishStatusLabel": "publish",
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


#### Field description

| Name | Sample value | Type |  Description  |
| ---------| ------- | ------- | -------|
| deviceID | dbabdf8ad91ef595bf9e9f35b1eef433 | String | Device ID |
| msgTime | 2019-06-03 13:50:55 | Date | Publish time |
| payload | {\"message\": \"Hello\"} | String | Connection IP |
| publishtStatus | 1 | Integer | Publish status, 0: Publish failed, 1: published, 2: Arrived, 3: Publish at regular time |
| publishStatusLabel | Online | String | Publish status, 0: Publish failed, 1: published, 2: Arrived, 3: Publish at regular time |
| streamID | qwe29j | String | Data stream ID |
| topic | inbox | String | topic |