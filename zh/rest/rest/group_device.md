# 分组设备管理


### 获取分组可添加设备

 **API 定义：**
```bash
GET /api/v1/emq_select/groups/{group_id}/not_joined_devices
```

**成功响应：**

```json
[
  {
    "label": "综合传感器_10C61FA1F47",
    "value": 439
  },
  {
    "label": "传感器_10C61F1A1F44",
    "value": 432
  }
]
```

**字段说明：**

| 字段名 | 示例值             | 字段类型   | 说明  |
| --- | --------------- | ------ | --- |
| --   | [] | Object | 设备基本信息    |



### 分组内添加设备

 **API 定义：**
```bash
POST /api/v1/groups/{group_id}/devices
```

**请求体：**

```json
{
  "ids": [
    9
  ]
}
```

**字段说明：**

| 字段名 | 示例值 | 字段类型   | 是否必填 | 说明  |
| --- | --- | ------ | ---- | --- |
| ids | [9, 10]   | Array | true |  待添加设备 ID  |



### 分组内设备列表

**API 定义：**
```bash
GET /api/v1/groups/{group_id}/devices
```

**成功响应：**

```json
{
  "items": [
    {
      "authType": 1,
      "blocked": 0,
      "createAt": "2018-03-23 11:40:46",
      "description": "v 1.0",
      "deviceID": "10C61F1A1F41",
      "deviceName": "传感器_10C61F1A1F41",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "deviceUsername": "10C61F1A1F41",
      "hardwareVersion": "v 1.0",
      "id": 428,
      "location": "玉泉校区",
      "manufacturer": "A 厂",
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
      "deviceName": "传感器_10C61F1A1F40",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "deviceUsername": "10C61F1A1F40",
      "hardwareVersion": "v 1.0",
      "id": 427,
      "location": "玉泉校区",
      "manufacturer": "A 厂",
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

**字段说明：**

| 字段名             | 示例值                 | 字段类型    | 说明                  |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | 认证方式，1:token 2:证书    |
| blocked         | 0                   | Integer | 是否允许访问，0:允许 1:不允许    |
| createAt        | 2018-03-23 11:40:46 | Date    | 创建时间                |
| description     | v 1.0               | String  | 产品描述                |
| deviceID        | 10C61F1A1F41        | String  | 设备编号                |
| deviceName      | 传感器_10C61F1A1F41    | String  | 设备名称                |
| deviceType      | 1                   | Integer | 设备类型，0:终端 1:网关 2:智能手机 |
| deviceTypeLabel | 终端                  | String  | 设备类型说明              |
| deviceUsername  | 10C61F1A1F41        | String  | 设备连接用户名             |
| hardwareVersion | v 1.0               | String  | 硬件版本                |
| id              | 428                 | Integer | 主键 ID               |
| location        | 玉泉校区                | String  | 安装位置                |
| manufacturer    | A 厂                 | String  | 制造商                 |
| productID       | kGBizO              | String  | 产品识别码               |
| serialNumber    | 10C61F1A1F41        | String  | 序列号                 |
| softVersion     | 10C61F1A1F41        | String  | 软件版本                |
| status          | 0                   | Integer | 运行状态，0:离线 1:在线       |
| tenantID        | CyOTtJod0           | String  | 所属租户标识符             |
| token           | 10C61F1A1F41        | String  | 设备密钥                |
| updateAt        | 2018-03-24 15:43:55 | Date    | 更新时间                |
| userIntID       | 6                   | Integer | 创建用户主键 ID            |



### 移除分组内设备


**API 定义：**
```bash
# 单个删除
DELETE /api/v1/groups/{group_id}/devices?ids={device_id}

# 支出批量删除，多个 device_id 使用英文逗号分隔
DELETE /api/v1/groups/{group_id}/devices?ids={device_id,device_id,device_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```



### 分组内设备控制

**API 定义：**
```bash
POST /api/v1/group_publish
```

**请求体：**

```json
{
  "groupID": "9H6t1L",
  "payload": "{\"message\":\"Hello\"}",
  "needAck": 0
}
```

**字段说明：**

| 字段名     | 示例值                 | 字段类型    | 是否必填  | 说明    |
| ------- | ------------------- | ------- | ----- | ----- |
| groupID | 9H6t1L              | String  | true  | 分组标识符 |
| payload | {"message":"Hello"} | String  | true  | 载荷    |
| needAck | 0                   | Integer | false | 需要回执： 0: 不需要，发送到分组主题 1: 需要，发送到设备主题      |
