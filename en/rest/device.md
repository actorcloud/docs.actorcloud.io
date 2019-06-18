#  Device operation

### Get device list

**API :**

```bash
GET /api/v1/devices?_page=1&_limit=10 
```

 **Response:**

```json
{
  "items": [
    {
      "authType": 1,
      "blocked": 0,
      "createAt": "2018-03-23 11:39:44",
      "deviceID": "10C61F1A1F40",
      "deviceName": "Sensor_10C61F1A1F40",
      "deviceType": 1,
      "deviceTypeLabel": "Terminal",
      "deviceUsername": "10C61F1A1F40",
      "id": 427,
      "productID": "kGBizO",
      "productName": "Environmental monitoring",
      "status": 0,
      "statusLabel": "Offline",
      "token": "10C61F1A1F40"
    }
  ],
  "meta": {
    "count": 4,
    "limit": 10,
    "page": 1
  }
}
```

**Field description:**

| Name          | Sample value      | Type | Description        |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | Authentication method, 1: token 2: certificate |
| blocked         | 0                   | Integer | Allow access or not, 0: Allow 1: Not allowed |
| createAt        | 2018-03-24 14:00:06 | Date    | Creation time   |
| deviceID        | 10C61F1A1F11        | String  | Device ID        |
| deviceName      | Sensor_10C61F1A1F11 | String  | Device name      |
| deviceType      | 1                   | Integer | Device type, 0: terminal 1: gateway 2: smartphone |
| deviceTypeLabel | Terminal           | String  | Device type description |
| deviceUsername  | 10C61F1A1F11        | String  | Username of device connection |
| id              | 433                 | Integer | Primary key ID     |
| productID       | fSPvWw              | String  | Product ID      |
| productName     | Default product | String  | Product name     |
| status          | 0                   | Integer | Running status, 0: offline 1: online |
| statusLabel     | Offline           | String  | Running status information |
| token           | 10C61F1A1F11        | String  | Device key       |



**Query parameter:**

```bash
GET /api/v1/devices?_page=1&_limit=10&deviceName_like=Shared bicycle
```

**Field description:**

| Name  | Type | Description |
| ------ | --- | ----------- |
| deviceName_like  | String | Filter by device name |
| deviceID_like  | String | Filter by device ID |
| deviceType_like  | Integer | Filter by device type, 0: Terminal 1: Gateway 2: Smartphone |
| groupID  | String | Filter by group ID |
| productID  | String | Filter by product ID |


### Create a device

**API :**

```bash
POST /api/v1/devices
```

**Body:**

```json
{
  "deviceName": "Integrated sensor_10C61FA1F47",
  "productID": "kGBizO",
  "deviceType": 1,
  "manufacturer": "A factory",
  "serialNumber": "10C61FA1F47",
  "softVersion": "v 1.0",
  "hardwareVersion": "v 1.0",
  "description": "10C61FA1F47",
  "location": "Yuquan Campus",
  "deviceID": "10C61FA1F47",
  "deviceUsername": "10C61FA1F47",
  "authType": 1
}
```

**Field description:**

| Name          | Sample value    | Type | Required to fill or not | Description      |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| deviceName      | Integrated sensor_10C61FA1F47 | String  | true  | Device name     |
| productID       | kGBizO            | String  | true  | Product ID     |
| deviceType      | 1                 | Integer | true  | Device type, 0: Terminal 1: Gateway 2: Smartphone |
| manufacturer    | A factory        | String  | false  | manufacturer     |
| serialNumber    | 10C61FA1F47       | String  | false | Serial number  |
| softVersion     | v 1.0             | String  | false  | Software version |
| hardwareVersion | v 1.0             | String  | false  | Hardware version |
| description     | 10C61FA1F47       | String  | false  | Product description |
| location        | Yuquan Campus | String  | false  | Installation location |
| deviceID        | 10C61FA1F47       | String  | false  | Device number, automatically generated 36 bits without filling |
| deviceUsername  | 10C61FA1F47       | String  | false  | Device connection user name, automatically generate 36 bit without filling |
| authType        | 1                 | Integer | true  | Authentication method, 1: token 2: certificate |


### View device details

**API :**

```bash
GET /api/v1/devices/{device_id}
```

**Response:**

```json
{
  "authType": 1,
  "blocked": 0,
  "clientIP": "",
  "coapBroker": "console.actorcloud.io:5683",
  "coapsBroker": "console.actorcloud.io:5684",
  "coapssBroker": "console.actorcloud.io:5685",
  "connectedAt": "",
  "createAt": "2018-03-23 11:39:44",
  "createUser": "EMQ",
  "description": "v 1.0",
  "deviceID": "10C61F1A1F40",
  "deviceName": "Sensor_10C61F1A1F40",
  "deviceType": 1,
  "deviceUsername": "10C61F1A1F40",
  "hardwareVersion": "v 1.0",
  "id": 427,
  "keepAlive": "",
  "location": "Yuquan Campus",
  "manufacturer": "A factory",
  "mqttBroker": "console.actorcloud.io:1883",
  "mqttsBroker": "console.actorcloud.io:8883",
  "mqttssBroker": "console.actorcloud.io:8884",
  "productID": "kGBizO",
  "serialNumber": "10C61F1A1F40",
  "softVersion": "10C61F1A1F40",
  "status": 0,
  "statusLabel": "offline",
  "tenantID": "CyOTtJod0",
  "token": "10C61F1A1F40",
  "updateAt": "2018-03-24 14:02:08",
  "userIntID": 6
}
```

**Field description:**

| Name          | Sample value      | Type | Description      |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | Authentication method, 1: token2: certificate |
| blocked         | 0                   | Integer | Allow access or not, 0: Allow 1: Not allowed |
| clientIP        |                     | String  | Client IP, visible when connected |
| coapBroker      | actorcloud.io:5683  | String  |  CoAP server address     |
| coapsBroker     | actorcloud.io:5684  | String  |  CoAP server address（DTLS）     |
| coapssBroker    | actorcloud.io:5685  | String  |                     |
| connectedAt     |                     | String  | Connection time, visible when connected |
| createAt        | 2018-03-23 11:39:44 | Date    | Creation time   |
| createUser      | EMQ                 | String  | Create a username |
| description     | v 1.0               | String  | Product description |
| deviceID        | 10C61F1A1F40        | String  | Device ID        |
| deviceName      | Sensor_10C61F1A1F40 | String  | Device name      |
| deviceType      | 1                   | Integer | Device type, 0: terminal 1: gateway 2: smartphone |
| deviceUsername  | 10C61F1A1F40        | String  | Device connection username |
| hardwareVersion | v 1.0               | String  | Hardware version |
| id              | 427                 | Integer | Product ID          |
| keepAlive       |                     | Integer | Heartbeat time (seconds) |
| location        | Yuquan Campus   | String  | Installation location |
| manufacturer    | A factory          | String  | Manufacturer    |
| mqttBroker      | actorcloud.io:1883  | String  | MQTT server address |
| mqttsBroker     | actorcloud.io:8883  | String  | MQTT server address（TLS） |
| mqttssBroker    | actorcloud.io:8884  | String  | MQTT Server address (two-way authentication) |
| productID       | kGBizO              | String  | Product ID     |
| serialNumber    | 10C61F1A1F40        | String  | Serial Number    |
| softVersion     | 10C61F1A1F40        | String  | Software version |
| status          | 0                   | Integer | Running status, 0: offline 1: online |
| statusLabel     | Offline            | String  | Running status information |
| tenantID        | CyOTtJod0           | String  | Tenant ID   |
| token           | 10C61F1A1F40        | String  | Device key      |
| updateAt        | 2018-03-24 14:02:08 | Date    | Update time     |
| userIntID       | 6                   | Integer | Create user primary key ID |

  

### Edit device information

**API :**

```bash
PUT /api/v1/devices/{device_id}
```

**Body:**

```json
{
  "deviceName": "Sensor_10C61F1A1F40",
  "deviceType": 1,
  "softVersion": "10C61F1A1F40",
  "hardwareVersion": "v 1.0",
  "manufacturer": "A 厂",
  "serialNumber": "10C61F1A1F40",
  "location": "Yuquan Campus",
  "description": "v 1.0",
  "authType": 1,
  "blocked": 0
}
```


### Delete device

**API :**

```bash
# Single delete
DELETE /api/v1/devices?ids={device_id}

# Support batch deletion, multiple device_ids separated by commas in English
DELETE /api/v1/device_id?ids={device_id, device_id, device_id}
```


**Response:**

```bash
HTTP Status Code 204
```




