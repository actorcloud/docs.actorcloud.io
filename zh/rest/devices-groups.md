# 分组

## 创建分组

#### API 定义

```bash
POST /api/v1/groups
```

#### 请求示例

```bash
POST /api/v1/groups
```

```json
{
  "groupName": "默认分组",
  "description": "默认分组"
}
```


#### 成功响应

```bash
status 201
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "默认分组",
  "groupID": "rTpABa",
  "groupName": "默认分组",
  "id": 15,
  "username":"actorcloud",
  "updateAt": null
}
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| createAt| 2018-09-30 16:42:38 | Date  | 创建时间 |
| description| 默认分组 | String  | 描述 |
| groupID| rTpABa | String  | 分组 ID |
| groupName| 默认分组 | String  | 分组名称 |
| id| 15 | Integer  | id |
| updateAt| 2018-09-30 16:45:38 | Date  | 更新时间 |
| username| ActorCloud | String  | 创建用户 |


## 编辑分组

#### API 定义

```bash
PUT /api/v1/groups/<group_id>
```

#### 请求示例

```bash
PUT /api/v1/groups/15
```

```json
{
  "description": "默认分组",
  "groupName": "默认分组2"
}
```


#### 成功响应

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "默认分组",
  "groupID": "rTpABa",
  "groupName": "默认分组2",
  "id": 15,
  "updateAt": "2018-09-30 16:42:56"
}
```




## 删除分组

#### API 定义

```bash
DELETE /api/v1/groups?ids=<group_ids>
```

#### 请求示例

```bash
DELETE /api/v1/groups?ids=15
```

#### 成功响应

```bash
status 204
```


## 查看分组详情

#### API 定义

```bash
GET /api/v1/groups/<group_id>
```

#### 请求示例

```bash
GET /api/v1/groups/15
```

#### 成功响应

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "默认分组",
  "groupID": "rTpABa",
  "groupName": "默认分组",
  "id": 15,
  "updateAt": null,
  "username": "ActorCloud",
}
```



## 查看分组列表

#### API 定义

```bash
GET /api/v1/groups?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/groups?_page=1&_limit=10
```

#### 成功响应

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
      "groupName": "默认分组",
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


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| endDeviceCount| 1 | Integer  | 分组下设备数量 |
| gateway| 1 | Integer  | 分组下网关数量 |


## 分组绑定设备

#### API 定义

```bash
GET /api/v1/groups/<group_id>/devices
```

#### 请求示例

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

#### 成功响应

```bash
status 201
```

## 分组下的设备数据

#### API 定义

```bash
GET /api/v1/device_capability_data?groupIntID={group_id}
```

参数说明

| 参数         | 示例 | 类型    | 说明    |
| ------------ | ---- | ------- | ------- |
| groupIntID | 12   | Integer | 分组 id |

#### 请求示例

```bash
GET /api/v1/device_capability_data?groupIntID=12
```

#### 成功响应

```json
{
  "items": [
    {
      "dataPointID": "hum",
      "dataPointName": "湿度",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "网关设备",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 80.0
    },
    {
      "dataPointID": "temp",
      "dataPointName": "温度",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "网关设备",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
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