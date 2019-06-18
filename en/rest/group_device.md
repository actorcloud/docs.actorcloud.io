# Group device management


### Getting grouped addable devices

 **API :**
```bash
GET /api/v1/emq_select/groups/{group_id}/not_joined_devices
```

**Response:**

```json
[
  {
    "label": "Integrated Sensor_10C61FA1F47",
    "value": 439
  },
  {
    "label": "Sensor_10C61F1A1F44",
    "value": 432
  }
]
```

**Field description:**

| Name | Sample value  | Type | Description |
| --- | --------------- | ------ | --- |
| --   | [] | Object | Basic information of the device |



### Add devices within group

 **API :**
```bash
POST /api/v1/groups/{group_id}/devices
```

**Body:**

```json
{
  "ids": [
    9
  ]
}
```

**Field description:**

| Name | Sample value | Type | Required to fill or not | Description |
| --- | --- | ------ | ---- | --- |
| ids | [9, 10]   | Array | true | ID of device to be added |



### Device list within group

**API :**

```bash
GET /api/v1/groups/{group_id}/devices
```

**Response:**

```json
{
  "items": [
    {
      "authType": 1,
      "blocked": 0,
      "createAt": "2018-03-23 11:40:46",
      "description": "v 1.0",
      "deviceID": "10C61F1A1F41",
      "deviceName": "sensor_10C61F1A1F41",
      "deviceType": 1,
      "deviceTypeLabel": "terminal",
      "deviceUsername": "10C61F1A1F41",
      "hardwareVersion": "v 1.0",
      "id": 428,
      "location": "Yuquan campus",
      "manufacturer": "A factory",
      "productID": "kGBizO",
      "serialNumber": "10C61F1A1F41",
      "softVersion": "10C61F1A1F41",
      "status": 0,
      "tenantID": "CyOTtJod0",
      "token": "10C61F1A1F41",
      "updateAt": "2018-03-24 15:43:55",
      "userIntID": 6
    },
    {
      "authType": 1,
      "blocked": 0,
      "createAt": "2018-03-23 11:39:44",
      "description": "v 1.0",
      "deviceID": "10C61F1A1F40",
      "deviceName": "Sensor_10C61F1A1F40",
      "deviceType": 1,
      "deviceTypeLabel": "Terminal",
      "deviceUsername": "10C61F1A1F40",
      "hardwareVersion": "v 1.0",
      "id": 427,
      "location": "Yuquan campus",
      "manufacturer": "A factory",
      "productID": "kGBizO",
      "serialNumber": "10C61F1A1F40",
      "softVersion": "10C61F1A1F40",
      "status": 0,
      "tenantID": "CyOTtJod0",
      "token": "10C61F1A1F40",
      "updateAt": "2018-03-24 14:02:08",
      "userIntID": 6
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

| Name          | Sample value      | Type | Description        |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | Authentication method, 1: token 2: certificate |
| blocked         | 0                   | Integer | Allow access ornot, 0: Allow 1: Not allowed |
| createAt        | 2018-03-23 11:40:46 | Date    | Creation time    |
| description     | v 1.0               | String  | Product description |
| deviceID        | 10C61F1A1F41        | String  | Device ID        |
| deviceName      | Sensor_10C61F1A1F41 | String  | Device name      |
| deviceType      | 1                   | Integer | Device type, 0: terminal 1: gateway 2: smartphone |
| deviceTypeLabel | Terminal           | String  | Device type description |
| deviceUsername  | 10C61F1A1F41        | String  | Device connection username |
| hardwareVersion | v 1.0               | String  | Hardware version |
| id              | 428                 | Integer | Primary key ID    |
| location        | Yuquan campus    | String  | Installation location |
| manufacturer    | A factory          | String  | manufacturer     |
| productID       | kGBizO              | String  | Product ID      |
| serialNumber    | 10C61F1A1F41        | String  | Serial number     |
| softVersion     | 10C61F1A1F41        | String  | Software version |
| status          | 0                   | Integer | Running status, 0: offline 1: online |
| tenantID        | CyOTtJod0           | String  | Tenant ID     |
| token           | 10C61F1A1F41        | String  | Device key       |
| updateAt        | 2018-03-24 15:43:55 | Date    | Update time    |
| userIntID       | 6                   | Integer | Create user primary key ID |



### Remove devices within group

**API:**

```bash
# Single delete
DELETE /api/v1/groups/{group_id}/devices?ids={device_id}

# Support batch deletion, multiple device_ids separated by English commas
DELETE /api/v1/groups/{group_id}/devices?ids={device_id,device_id,device_id}
```


**Response:**

```bash
HTTP Status Code 204
```