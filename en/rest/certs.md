# Certificate


### Get certificate list

**API:**

```bash
GET /api/v1/certs?_page=1&_limit=10 
```

**Response:**

```json
{
  "items": [
    {
      "createAt": "2018-03-27 11:26:31",
      "enable": 1,
      "id": 22,
      "name": "Two-way authentication access"
    },
    {
      "createAt": "2018-03-23 15:45:51",
      "enable": 1,
      "id": 14,
      "name": "Default certificate"
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```

**Field description:**

| Name | Sample value     | Type | Description |
| -------- | ------------------- | ------- | ------------- |
| createAt | 2018-03-27 11:26:31 | Date    | Creation time |
| enable   | 1                   | Integer | Whether Available: 1: Available 0: Unavailable |
| id       | 22                  | Integer | Primary key ID |
| name     | Two-way authentication access | String  | Certificate name |

**Query parameters:**

```bash
GET /api/v1/certs?_page=1&_limit=10&name_like=Certificate name
```

**Field description:**

| Name | Type | Description |
| ------ | --- | ----------- |
| name_like  | String | Filter by certificate name |


### Create a certificate

**API:**

```bash
POST /api/v1/certs
```

**Body:**

```json
{
  "name": "Default certificate",
  "enable": 1
}
```

**Field description:**

| Name | Sample value | Type | required to fill or not | Description |
| ------ | ---- | ------- | ---- | ------------- |
| name   | Default certificate | String  | true | Certificate name |
| enable | 1    | Integer | true | Whether Available: 1: Available 0: Unavailable |


### View certificate details

**API:**

```bash
GET /api/v1/certs/{cert_id}
```

api.js?7a86:64 /api/v1/certs/14
loader.js?1e59:60 

**Response:**

```json
{
  "CN": "CyOTtJod0:Y5AlQ1rKq3wcXnpzyZgadLHINC",
  "cert": "-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----",
  "createAt": "2018-03-23 15:45:51",
  "createUser": "EMQ",
  "enable": 1,
  "id": 14,
  "key": "-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----",
  "name": "Default certificate",
  "root": "-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----",
  "updateAt": null
}
```

**Field description:**

| Name | Sample value                         | Type   | Description |
| ---- | ------------------------------------ | ------ | ----------- |
| CN   | CyOTtJod0:Y5AlQ1rKq3wcXnpzyZgadLHINC | String | CN          |
| cert       | -----BEGIN CERTIFICATE-----
MIIDEzCCAfsCAQAwDQYJKo | String  | Certificate key          |
| createAt   | 2018-03-23 15:45:51                                | Date    | Create time          |
| createUser | EMQ                                                | String  | Create username         |
| enable     | 1                                                  | Integer | Whether Available: 1: Available 0: Unavailable |
| id         | 14                                                 | Integer | Primary key ID         |
| key        | -----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w | String  | Certificate Key        |
| name       | Default certificate                                              | String  | Certificate name          |
| root       | -----BEGIN CERTIFICATE-----
MIIErjCCA5agAwIBAgIQBY | String  |               |
| updateAt   |                                                    | Date    | Update time          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Date    | Update time         |


### Edit certificate information

**API :**

```bash
PUT /api/v1/certs/{cert_id}
```

**Body:**

```json
{
  "enable": 0,
  "id": 6,
  "name": "Default certificate"
}
```


### Delete certificate

**API:**

```bash
# Single delete
DELETE /api/v1/certs?ids={cert_id}

# Support batch deletion, seperate multiple cert_ids by commas in English
DELETE /api/v1/certs?ids={cert_id, cert_id, cert_id}
```

**Response:**

```bash
HTTP Status Code 204
```


### Get a list of devices bounded with certificates 

**API:**

```bash
GET /api/v1/certs/{cert_id}/devices?_page=1&_limit=10
```

**Response:**

```json
{
  "items": [
    {
      "authType": 1,
      "blocked": 0,
      "createAt": "2018-03-23 11:39:44",
      "description": "v 1.0",
      "deviceID": "10C61F1A1F40",
      "deviceName": "sensor_10C61F1A1F40",
      "deviceType": 1,
      "deviceTypeLabel": "terminal",
      "deviceUsername": "10C61F1A1F40",
      "hardwareVersion": "v 1.0",
      "id": 427,
      "location": "Yuquan Campus",
      "manufacturer": "A factory",
      "productID": "kGBizO",
      "serialNumber": "10C61F1A1F40",
      "softVersion": "10C61F1A1F40",
      "status": 0,
      "tenantID": "CyOTtJod0",
      "token": "10C61F1A1F40",
      "updateAt": "2018-03-24 14:02:08",
      "userIntID": 6
    },
    {
      "authType": 2,
      "blocked": 0,
      "createAt": "2018-03-24 13:49:35",
      "description": null,
      "deviceID": "10C61F1A1F44",
      "deviceName": "sensor_10C61F1A1F44",
      "deviceType": 1,
      "deviceTypeLabel": "terminal",
      "deviceUsername": "10C61F1A1F44",
      "hardwareVersion": null,
      "id": 432,
      "location": null,
      "manufacturer": "10C61F1A1F44",
      "productID": "kGBizO",
      "serialNumber": null,
      "softVersion": null,
      "status": 0,
      "tenantID": "CyOTtJod0",
      "token": "10C61F1A1F44",
      "updateAt": "2018-03-24 13:56:38",
      "userIntID": 6
    }
  ],
  "meta": {
    "count": 3,
    "limit": 10,
    "page": 1
  }
}
```

**Field description:**

| Name  | Sample value   | Type | Description       |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | Authentication method, 1: token 2: certificate |
| blocked         | 0                   | Integer | allow access or not, 0: Allow 1: Not allowed |
| createAt        | 2018-03-23 11:39:44 | Date    | Creation time   |
| description     | v 1.0               | String  | product description |
| deviceID        | 10C61F1A1F40        | String  | device ID       |
| deviceName      | Sensor_10C61F1A1F40 | String  | Device name      |
| deviceType      | 1                   | Integer | Device type, 0: terminal 1: gateway 2: smartphone |
| deviceTypeLabel | Terminal          | String  | Device type description |
| deviceUsername  | 10C61F1A1F40        | String  | Username of device connection |
| hardwareVersion | v 1.0               | String  | Hardware version |
| id              | 427                 | Integer | Primary key ID    |
| location        | Yuquan Campus   | String  | Installation location |
| manufacturer    | A 厂                 | String  | Manufacturer     |
| productID       | kGBizO              | String  | Product ID     |
| serialNumber    | 10C61F1A1F40        | String  | Serial Number   |
| softVersion     | 10C61F1A1F40        | String  | Software version |
| status          | 0                   | Integer | Running status, 0: offline 1: online |
| tenantID        | CyOTtJod0           | String  | Tenant identifier |
| token           | 10C61F1A1F40        | String  | Device key      |
| updateAt        | 2018-03-24 14:02:08 | Date    | Update time     |
| userIntID       | 6                   | Integer | Create a user primary key ID |


### Get the list of devicesunbound  for the certificate

**API :**

```bash
GET /api/v1/certs/{cert_id}/not_joined_devices?_page=1&_limit=10
```

**Response:**

```json
{
  "items": [
    {
      "deviceName": "Integrated sensor_10C61FA1F47",
      "id": 439,
      "productName": "Environmental monitoring"
    },
    {
      "deviceName": "sensor_10C61F1A1F11",
      "id": 433,
      "productName": "Default product"
    }
  ],
  "meta": {
    "count": 2,
    "limit": 5,
    "page": 1
  }
}
```

**Field description:**

| Name        | Sample value                  | Type    | Description    |
| ----------- | ----------------------------- | ------- | -------------- |
| deviceName  | Integrated sensor_10C61FA1F47 | String  | Device name    |
| id          | 439                           | Integer | Primary key ID |
| productName | Environmental monitoring      | String  | Product name   |



**Query parameter:**
```bash
GET /api/v1/certs/{cert_id}/not_joined_devices?_page=1&_limit=10&deviceName_like=test device
```

**Field description:**

| Name | Type | description |
| ------ | --- | ----------- |
| deviceName_like  | String | Filter by device name |
| groupName_like  | String | Filter by group name |
| productName_like  | String | Filter by group name |



### Binding device within the certificate

**API :**

```bash
POST /api/v1/certs/{cert_id}/devices
```

**Body:**

```json
{
  "devicesIntID": [
    433,
    439
  ]
}
```

**Field description:**

| Name       | Sample value | Type | Required to fill or not | Description |
| ------------ | ------- | ------ | ----- | --- |
| devicesIntID | 433,439 | object | false | Device primary key ID |




### Remove device within the certificate
**API :**

```bash
# Single delete
DELETE /api/v1/certs/{cert_id}/devices?ids={cert_id}

# Support batch deletion, seperate multiple cert_ids by commas in English
DELETE /api/v1/certs/{cert_id}/devices?ids={cert_id, cert_id, cert_id}
```

**Response:**

```bash
HTTP Status Code 204
```



### View Device Binded Certificate

**API :**

```bash
GET /api/v1/devices/{device_id}/certs?_page=1&_limit=10
```

**Response:**

```json
{
  "items": [
    {
      "createAt": "2018-03-23 15:45:51",
      "enable": 1,
      "id": 14,
      "name": "Default certificate"
    }
  ],
  "meta": {
    "count": 1,
    "limit": 10,
    "page": 1
  }
}
```

**Field description:**

| Name | Sample value      | Type | Description |
| -------- | ------------------- | ------- | ------------- |
| createAt | 2018-03-23 15:45:51 | Date    | Creation time |
| enable   | 1                   | Integer | Available 1 Available 0: Unavailable |
| id       | 14                  | Integer | Primary key ID |
| name     | Default certificate | String  | Certificate name |




### Get device bindable certificate

**API :**

```bash
GET /api/v1/emq_select/devices/{device_id}/not_joined_certs
```

**Response:**

```json
{
  "items": [
    {
      "id": 22,
      "name": "Two-way authentication access"
    }
  ],
  "meta": {
    "count": 1,
    "limit": 10,
    "page": 1
  }
}
```

**Field description:**

| Name | Sample value                  | Type    | Description      |
| ---- | ----------------------------- | ------- | ---------------- |
| id   | 22                            | Integer | Primary key  ID  |
| name | Two-way authentication access | String  | Certificate name |



### Device binding certificate

**API :**

```bash
POST /api/v1/devices/{device_id}/certs
```

**Body:**

```json
{
  "ids": [
    22
  ]
}
```

**Field description:**

| Name | Sample value | Type | Required to fill or not | Description |
| --- | --- | ------ | ----- | --- |
| ids | [22, 23]  | [] | true | Device ID array |



### Delete device bound certificate

**API :**

```bash
# Single delete
DELETE /api/v1/devices/{device_id}/certs?ids=14

# Support batch deletion, seperate multiple cert_ids by commas in English
DELETE /api/v1/devices/{device_id}/certs?ids={cert_id, cert_id, cert_id}
```

**Response:**

```bash
HTTP Status Code 204
```
