# 策略


### 获取策略列表

**API 定义：**
```bash
GET /api/v1/policies?_page=1&_limit=10 
```

**成功响应：**

```json
{
    "items": [
        {
            "access": 1,
            "accessLabel": "发布",
            "allow": 0,
            "allowLabel": "拒绝",
            "createAt": "2018-03-17 14:30:31",
            "description": "设备禁止发布控制升级固件的主题",
            "id": 2,
            "mqtt_acl": [
                {
                    "id": 137
                },
                {
                    "id": 138
                },
                {
                    "id": 139
                },
                {
                    "id": 140
                },
                {
                    "id": 141
                }
            ],
            "name": "禁止发布高级主题",
            "topic": "/check_update",
            "updateAt": null,
            "userIntID": 2
        }
    ],
    "meta": {
        "count": 1,
        "limit": 10,
        "page": 1
    }
}
```

**字段说明：**

| 字段名         | 示例值                                                                             | 字段类型    | 说明    |
| ----------- | ------------------------------------------------------------------------------- | ------- | ----- |
| access      | 1                                                                               | Integer  | 访问控制 0: 发布 1: 订阅 2: 发布与订阅     |
| accessLabel | 发布                                                                              | String  |  访问控制说明     |
| allow       | 0                                                                               | Integer  | 操作 0: 拒绝 1: 允许      |
| allowLabel  | 拒绝                                                                              | String  |  操作说明     |
| createAt    | 2018-03-17 14:30:31                                                             | Date    | 创建时间  |
| description | 设备禁止发布控制升级固件的主题                                                         String        | String  | 描述    |
| id          | 2                                                                               | Integer | 主键 ID |
| mqtt_acl    | [1,2,3,4,5] | Array  |  包含设备     |
| name        | 禁止发布高级主题                                                                        | String  | 策略名称      |
| topic       | /check_update                                                                   | String  | 作用主题      |
| updateAt    |                                                                                 | Date    | 更新时间  |
| userIntID   | 2                                                                               | Integer  |  创建用户主键 ID     |

**查询参数：**
```bash
GET /api/v1/policies?_page=1&_limit=10&name_like=策略名称
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| name_like  | String | 按策略名称过滤   |



### 创建一个策略

**API 定义：**
```bash
POST /api/v1/policies
```

**请求体：**

```json
{
  "name": "禁止订阅",
  "topic": "/reboot",
  "access": 2,
  "allow":0,
  "description":""
}
```



### 查看策略详情

**API 定义：**

```bash
GET /api/v1/policies/{policies_id}
```

**成功响应：**

```json
{
    "access": 2,
    "accessLabel": "订阅",
    "allow": 0,
    "allowLabel": "拒绝",
    "createAt": "2018-03-17 16:27:55",
    "createUser": "EMQ",
    "description": "",
    "id": 3,
    "mqtt_acl": [],
    "name": "禁止订阅",
    "topic": "/reboot",
    "updateAt": null,
    "userIntID": 2
}
```


### 编辑策略信息

**API 定义：**

```bash
PUT /api/v1/policies/{policies_id}
```

**请求体：**

```json
{
    "access": 2,
    "allow": 0,
    "createUser": "EMQ",
    "description": "",
    "id": 3,
    "mqtt_acl": [],
    "name": "禁止订阅",
    "topic": "/reboot",
    "userIntID": 2
}
```



### 删除策略

**API 定义：**
```bash
# 单个删除
DELETE /api/v1/policies?ids={policies_id}

# 支出批量删除，多个 policies_id 使用英文逗号分隔
DELETE /api/v1/policies?ids={policies_id, policies_id, policies_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```

### 获取策略绑定设备列表

**API 定义：**
```bash
GET /api/v1/policies/{policies_id}/devices?_page=1&_limit=10
```

**成功响应：**

```json
{
    "items": [
        {
            "deviceID": "60583004f5fb53b4b6f3efb0c9e959df",
            "deviceName": "测试1",
            "deviceTypeLabel": "终端",
            "id": 419
        },
        {
            "deviceID": "ccfb5eaa6413517db41fb38e29edee42",
            "deviceName": "测试",
            "deviceTypeLabel": "终端",
            "id": 418
        },
        {
            "deviceID": "d661214640cd5d858fcd83c8e431168f",
            "deviceName": "emq设备250",
            "deviceTypeLabel": "终端",
            "id": 249
        },
        {
            "deviceID": "23a7cb090e2d5d16938faa58fbb7eb56",
            "deviceName": "emq设备248",
            "deviceTypeLabel": "终端",
            "id": 247
        }
    ],
    "meta": {
        "count": 4,
        "limit": 10,
        "page": 1
    }
}
```

**字段说明：**

| 字段名             | 示例值                              | 字段类型    | 说明                       |
| --------------- | -------------------------------- | ------- | ------------------------ |
| deviceID        | 60583004f5fb53b4b6f3efb0c9e959df | String  | 设备编号                     |
| deviceName      | 测试1                              | String  | 设备名称                     |
| deviceTypeLabel | 终端                               | String  |    设备类型说明                      |
| id              | 419                              | Integer | 主键 ID                    |



### 获取策略未绑定设备列表

**API 定义：**
```bash
GET /api/v1/policies/{policies_id}/not_joined_devices?_page=1&_limit=10
```

**成功响应：**
```json
{
  "items": [
    {
      "deviceName": "测试设备",
      "groupName": "所属分组",
      "productName": "所属产品",
      "id": 1
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "count": 1
  }

}

```

**字段说明：**

| 字段名         | 示例值  | 字段类型    | 说明    |
| ----------- | ---- | ------- | ----- |
| deviceName  | 测试设备 | String  | 设备名称  |
| groupName   | 所属分组 | String  | 所属分组      |
| productName | 所属产品 | String  | 所属产品  |
| id          | 1    | Integer | 主键 ID |



**查询参数：**
```bash
GET /api/v1/policies/{policies_id}/not_joined_devices?_page=1&_limit=10&deviceName_like=测试设备
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| deviceName_like  | String | 按设备名称过滤   |
| groupName_like  | String | 按分组名称过滤   |
| productName_like  | String | 按产品名称过滤   |


### 策略内绑定设备

**API 定义：**
```bash
POST /api/v1/policies/{policies_id}/devices
```

**请求体：**

```json
{
  "deviceIntIds": [1, 2, 3, 4, 5]
}
```

### 移除策略内设备
**API 定义：**
```bash
# 单个删除
DELETE /api/v1/policies/{policies_id}/devices?ids={policies_id}

# 支出批量删除，多个 policies_id 使用英文逗号分隔
DELETE /api/v1/policies/{policies_id}/devices?ids={policies_id, policies_id, policies_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```
