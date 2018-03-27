# 分组设备管理


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
| ids | 9   | Array | true |  待添加设备 id 列表  |



### 分组内设备列表

**API 定义：**
```bash
GET /api/v1/groups/{group_id}/devices
```

**成功响应：**
```json
[
  {
    "authType": 1,
    "blocked": 0,
    "createAt": "2018-03-02 15:49:53",
    "description": "一批次",
    "deviceID": "c4c9f031cace9a",
    "deviceName": "共享单车_c4c9f031cace9a",
    "deviceType": 1,
    "deviceTypeLabel": "终端",
    "deviceUsername": "c4c9f031cace9a",
    "hardwareVersion": "v 1.0",
    "id": 9,
    "location": "江南厂",
    "manufacturer": "A 号制造商",
    "productID": "Gq2kxM",
    "serialInteger": "c4c9f031cace9a",
    "softVersion": "v 1.0",
    "status": 0,
    "tenantID": "CCgnIXTAh",
    "token": "c4c9f031cace9a",
    "updateAt": null,
    "userID": 2
  }
]
```

**字段说明：**

| 字段名             | 示例值                 | 字段类型    | 说明                       |
| --------------- | ------------------- | ------- | ------------------------ |
| authType        | 1                   | Integer | 认证方式，1: token 2: 证书      |
| blocked         | 0                   | Integer  |  是否允许访问，0: 允许 1: 不允许                        |
| createAt        | 2018-03-02 15:49:53 | Date    | 创建时间                     |
| description     | 一批次                 | String  | 描述                       |
| deviceID        | c4c9f031cace9a      | String  | 设备编号                     |
| deviceName      | 共享单车_c4c9f031cace9a | String  | 设备名称                     |
| deviceType      | 1                   | Integer | 设备类型，0: 终端 1: 网关 2: 智能手机 |
| deviceTypeLabel | 终端                  | String  |    设备类型描述                      |
| deviceUsername  | c4c9f031cace9a      | String  |  设备连接用户名                        |
| hardwareVersion | v 1.0               | String  | 硬件版本                     |
| id              | 9                   | Integer | 主键 ID                    |
| location        | 江南厂                 | String  | 安装位置                     |
| manufacturer    | A 号制造商              | String  | 制造商                      |
| productID       | Gq2kxM              | String  |        所属产品标识符                  |
| serialInteger    | c4c9f031cace9a      | String  | 序列号                      |
| softVersion     | v 1.0               | String  | 软件版本                     |
| status          | 0                   | Integer  |   运行状态，0: 离线 1: 在线                       |
| tenantID        | CCgnIXTAh           | String  |    所属租户标识符                      |
| token           | c4c9f031cace9a      | String  | 设备密钥                     |
| updateAt        |                     | Date    | 更新时间                     |
| userID          | 2                   | Integer | 创建者主键 ID                 |






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
  "groupID": "84Ffn9",
  "isNeedAck": 0,
  "payload": "{\"message\":\"Hello\"}"
}
```

**字段说明：**

| 字段名       | 示例值                 | 字段类型   | 是否必填  | 说明  |
| --------- | ------------------- | ------ | ----- | --- |
| groupID   | 84Ffn9              | String | true  |     |
| isNeedAck | 0                   | Integer | true | 是否需要回执， 0: 不需要 1: 需要   |
| payload   | {"message":"Hello"} | String | true  | 载荷  |



#### 查看分组控制历史

**API 定义：**
```bash
GET /api/v1/groups/{group_id}/control_logs?_page=1&_limit=10
```
**成功响应：**
```json
{
      "createAt": "2018-03-02 17:55:35",
      "groupID": "84Ffn9",
      "groupName": "默认分组",
      "id": 5,
      "payload": "{\"message\":\"Hello\"}",
      "publishStatus": 1,
      "publishStatusLabel": "已下发",
      "publishUser": "EMQ",
      "updateAt": "2018-03-02 17:55:35",
      "userID": 2
}
```

**字段说明：**

| 字段名                | 示例值                 | 字段类型    | 说明       |
| ------------------ | ------------------- | ------- | -------- |
| createAt           | 2018-03-02 17:55:35 | Date    | 创建时间     |
| groupID            | 84Ffn9              | String  |  分组标识符        |
| groupName          | 默认分组                | String  |  分组名称        |
| id                 | 5                   | Integer | 控制历史主键 ID    |
| payload            | {"message":"Hello"} | String  | 载荷       |
| publishStatus      | 1                   | Integer  |   下发状态：0: 下发失败 1: 已下发 2: 发送成功      |
| publishStatusLabel | 已下发                 | String  | 下发回执描述         |
| publishUser        | EMQ              | String  |  下发者用户名        |
| updateAt           | 2018-03-02 17:55:35 | Date    | 更新时间     |
| userID             | 2                   | Integer | 下发者主键 ID |

