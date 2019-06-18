# Device Information


### View device running logs

**API :**

```bash
GET /api/v1/devices/{device_id}/connect_logs?_page=1&_limit=10
```

**Response:**

```json
{
  "items": [
    {
      "IP": "221.226.150.197",
      "createAt": "2018-03-27 05:30:37",
      "deviceID": "10C61F1A1F40",
      "deviceName": "Sensor_10C61F1A1F40",
      "deviceStatus": 0,
      "deviceStatusLabel": "offline",
      "id": 3229,
      "keepAlive": null,
      "tenantID": "CyOTtJod0",
      "updateAt": null
    },
    {
      "IP": "221.226.150.197",
      "createAt": "2018-03-27 05:30:36",
      "deviceID": "10C61F1A1F40",
      "deviceName": "Sensor_10C61F1A1F40",
      "deviceStatus": 1,
      "deviceStatusLabel": "online",
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

**Field description:**

| Name           | Sample value      | Type | Description        |
| ----------------- | ------------------- | ------- | -------------------- |
| IP                | 221.226.150.197     | String  | Device connection IP |
| createAt          | 2018-03-27 05:30:37 | Date    | Creation time    |
| deviceID          | 10C61F1A1F40        | String  | Device ID        |
| deviceName        | Sensor_10C61F1A1F40 | String  | Device Name     |
| deviceStatus      | 0                   | String  | Connection status code, 0: Offline 1: Online 2: Authentication failed |
| deviceStatusLabel | Offline           | String  | Connection status description |
| id                | 3229                | Integer | Primary key ID       |
| keepAlive         |                     | Integer | Heartbeat duration |
| tenantID          | CyOTtJod0           | String  | Tenant ID      |
| updateAt          |                     | Date    | Update time      |



### Device security information

Device security is divided into certificate information, for details, see:

- [Certificate API](certs.md)


### View device events

 **API :**
```bash
GET /api/v1/devices/{device_id}/events?_page=1&_limit=10
```

**Response:**

```json
{
  "items": [
    {
      "IP": null,
      "createAt": "2018-03-24 08:19:09",
      "deviceID": "10C61F1A1F40",
      "deviceName": "Sensor_10C61F1A1F40",
      "id": 594,
      "payload": "Hello world!",
      "productName": "Environmental monitoring",
      "topic": "hello_topic",
      "updateAt": null
    },
    {
      "IP": null,
      "createAt": "2018-03-24 08:19:07",
      "deviceID": "10C61F1A1F40",
      "deviceName": "Sensor_10C61F1A1F40",
      "id": 593,
      "payload": "Hello world!",
      "productName": "Environmental monitoring",
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

**Field description:**

| Name     | Sample value      | Type | Description |
| ----------- | ------------------- | ------- | ------ |
| IP          |                     | String  | Device connection IP |
| createAt    | 2018-03-24 08:19:09 | Date    | Creation time |
| deviceID    | 10C61F1A1F40        | String  | Device ID |
| deviceName  | Sensor_10C61F1A1F40 | String  | Device name |
| id          | 594                 | Integer | Primary key ID |
| payload     | Hello world!        | String  | Payload |
| productName | environmental monitoring | String  | Product name |
| topic       | hello_topic         | String  | Function topic |
| updateAt    |                     | Date    | Update time |



### Device order issue

**API :**

```bash
POST /api/v1/device_publish
```

**Body:**

```json
{
  "deviceID": "10C61F1A1F40",
  "payload": "{\"message\":\"Hello\"}",
  "topic": "/hello"
}
```

**Field description:**

| Name | Sample value     | Type | Required to fill or not | Description |
| -------- | ------------------- | ------ | ---- | ---- |
| deviceID | 10C61F1A1F40        | String | true | Device ID |
| payload  | {"message":"Hello"} | String | true | Payload |
| topic    | /hello              | String | false | Function topic, if not filled, it is the topic of device self-subscription |




### View device control history

 **API :**
```bash
GET /api/v1/devices/{device_id}/control_logs?_page=1&_limit=10
```

**Response:**

```json
{
  "items": [
    {
      "createAt": "2018-03-28 11:19:18",
      "deviceIntID": 427,
      "deviceName": "Sensor_10C61F1A1F40",
      "id": 134,
      "payload": "{\"message\":\"Hello\"}",
      "publishStatus": 0,
      "publishStatusLabel": "Issue failed",
      "publishUser": "EMQ",
      "topic": "/hello",
      "updateAt": "2018-03-28 11:19:18",
      "userIntID": 6
    },
    {
      "createAt": "2018-03-24 11:09:38",
      "deviceIntID": 427,
      "deviceName": "Sensor_10C61F1A1F40",
      "id": 128,
      "payload": "\"{\\n  \\\"cmd\\\": \\\"upload\\\"\\n}\"",
      "publishStatus": 3,
      "publishStatusLabel": "receipt not required",
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

**Field description:**

| Name             | Sample value      | Type | Description           |
| ------------------ | ------------------- | ------- | ---------------------- |
| createAt           | 2018-03-28 11:19:18 | Date    | Creation time      |
| deviceIntID        | 427                 | Integer | Device primary key ID |
| deviceName         | Sensor_10C61F1A1F40 | String  | Device name         |
| id                 | 134                 | Integer | Primary key ID    |
| payload            | {"message":"Hello"} | String  | Payload               |
| publishStatus      | 0                   | Integer | Publish status: 0: Publish failed 1: Publish completed 2: Successfully send |
| publishStatusLabel | Issue failed | String  | Publish receipt description |
| publishUser        | EMQ                 | String  | Username of publisher |
| topic              | /hello              | String  | Function topic    |
| updateAt           | 2018-03-28 11:19:18 | Date    | Update time         |
| userIntID          | 6                   | Integer | Publisher primary key ID |
