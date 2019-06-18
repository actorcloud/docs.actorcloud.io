# Group

## Create group

#### API 

```bash
POST /api/v1/groups
```

#### Example

```bash
POST /api/v1/groups
```

```json
{
  "groupName": "Default group",
  "description": "Default group"
}
```


#### Response

```bash
status 201
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "Default group",
  "groupID": "rTpABa",
  "groupName": "Default group",
  "id": 15,
  "username":"actorcloud",
  "updateAt": null
}
```

#### Field description

| Name         | Sample value   | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| createAt| 2018-09-30 16:42:38 | Date  | Creation time |
| description| Default group | String  | Description |
| groupID| rTpABa | String  | Group ID |
| groupName| Default group | String  | Group name |
| id| 15 | Integer  | id |
| updateAt| 2018-09-30 16:45:38 | Date  | Update time |
| username| ActorCloud | String  | Creation user |


## Edit group

#### API 

```bash
PUT /api/v1/groups/<group_id>
```

#### Example

```bash
PUT /api/v1/groups/15
```

```json
{
  "description": "Default group",
  "groupName": "Default group 2"
}
```


#### Response

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "Default group",
  "groupID": "rTpABa",
  "groupName": "Default group2",
  "id": 15,
  "updateAt": "2018-09-30 16:42:56"
}
```




## Delete group

#### API 

```bash
DELETE /api/v1/groups?ids=<group_ids>
```

#### Example

```bash
DELETE /api/v1/groups?ids=15
```

#### Response

```bash
status 204
```


## Group details

#### API 

```bash
GET /api/v1/groups/<group_id>
```

#### Example

```bash
GET /api/v1/groups/15
```

#### Response

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "Default group",
  "groupID": "rTpABa",
  "groupName": "Default group",
  "id": 15,
  "updateAt": null,
  "username": "ActorCloud",
}
```



## Group list

#### API 

```bash
GET /api/v1/groups?_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/groups?_page=1&_limit=10
```

#### Response

```bash
status 200
```

```json
{
  "items": [
    {
      "createAt": "2018-10-17 11:20:30",
      "description": "POST.*groups/",
      "endDeviceCount": 1,
      "gatewayCount": 1,
      "groupID": "EtTuHU",
      "groupName": "Default group",
      "id": 18,
      "updateAt": null
    }
  ],
  "meta": {
    "count": 1,
    "limit": 10,
    "page": 1
  }
}
```


#### Field description

| Name         | Sample value    | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| endDeviceCount| 1 | Integer  | Number of devices under group |
| gateway| 1 | Integer  | Number of gateways under group |


## Binding device by group

#### API 

```bash
GET /api/v1/groups/<group_id>/devices
```

#### Example

```bash
GET /api/v1/groups/1/devices
```

```json
{
  "devices":[
    2,
    3
  ]
}
```

#### Response

```bash
status 201
```

## Device data under group

#### API 

```bash
GET /api/v1/device_capability_data?groupIntID={group_id}
```

Parameter Description

| Name       | Sample value | Type    | Description |
| ---------- | ------------ | ------- | ----------- |
| groupIntID | 12           | Integer | Group id    |

#### Example

```bash
GET /api/v1/device_capability_data?groupIntID=12
```

#### Response

```json
{
  "items": [
    {
      "dataPointID": "hum",
      "dataPointName": "humidity",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "Gateway device",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 80.0
    },
    {
      "dataPointID": "temp",
      "dataPointName": "Temperature",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "Gateway device",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 37.0
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```