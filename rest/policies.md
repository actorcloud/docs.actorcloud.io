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
      "access": 2,
      "accessLabel": "订阅",
      "allow": 1,
      "allowLabel": "允许",
      "createAt": "2018-03-22 15:49:08",
      "description": null,
      "id": 8,
      "mqtt_acl": [
        {
          "id": 192
        }
      ],
      "name": "禁止订阅网关监听主题",
      "topic": "/gateway/upload",
      "updateAt": "2018-03-22 16:41:10",
      "userIntID": 6
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

| 字段名         | 示例值                 | 字段类型    | 说明                   |
| ----------- | ------------------- | ------- | -------------------- |
| access      | 2                   | Integer | 访问控制 0:发布 1:订阅 2:发布与订阅 |
| accessLabel | 订阅                  | String  | 访问控制说明               |
| allow       | 1                   | Integer | 操作 0:拒绝 1:允许          |
| allowLabel  | 允许                  | String  | 操作说明                 |
| createAt    | 2018-03-22 15:49:08 | Date    | 创建时间                 |
| description |                     | String  | 产品描述                 |
| id          | 8                   | Integer | 主键 ID                |
| mqtt_acl    | [{id: 192}]     | Array   | 包含设备                 |
| name        | 禁止订阅网关监听主题          | String  | 策略名称                 |
| topic       | /gateway/upload     | String  | 作用主题                 |
| updateAt    | 2018-03-22 16:41:10 | Date    | 更新时间                 |
| userIntID   | 6                   | Integer | 创建用户主键ID             |
                                                                       | Integer  |  创建用户主键 ID     |

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
  "name": "允许订阅",
  "topic": "/gateway/downstream",
  "access": 2,
  "allow": 1,
  "description": "允许"
}
```

**字段说明：**

| 字段名         | 示例值                 | 字段类型    | 是否必填 | 说明                   |
| ----------- | ------------------- | ------- | ---- | -------------------- |
| name        | 允许订阅                | String  | true | 策略名称                 |
| topic       | /gateway/downstream | String  | true | 作用主题                 |
| access      | 2                   | Integer | true | 访问控制 0:发布 1:订阅 2:发布与订阅 |
| allow       | 1                   | Integer | true | 操作 0:拒绝 1:允许          |
| description | 允许                  | String  | false | 产品描述                 |




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
  "allow": 1,
  "allowLabel": "允许",
  "createAt": "2018-03-22 15:49:08",
  "createUser": "EMQ",
  "description": null,
  "id": 8,
  "mqtt_acl": [
    {
      "id": 192
    }
  ],
  "name": "禁止订阅网关监听主题",
  "topic": "/gateway/upload",
  "updateAt": "2018-03-22 16:41:10",
  "userIntID": 6
}
```

**字段说明：**

| 字段名         | 示例值                 | 字段类型    | 说明                   |
| ----------- | ------------------- | ------- | -------------------- |
| access      | 2                   | Integer | 访问控制 0:发布 1:订阅 2:发布与订阅 |
| accessLabel | 订阅                  | String  | 访问控制说明               |
| allow       | 1                   | Integer | 操作 0:拒绝1:允许          |
| allowLabel  | 允许                  | String  | 操作说明                 |
| createAt    | 2018-03-22 15:49:08 | Date    | 创建时间                 |
| createUser  | EMQ                 | String  | 创建用户名                |
| description |                     | String  | 产品描述                 |
| id          | 8                   | Integer | 主键 ID                |
| mqtt_acl    | [{id: 1}]     | Array   | 包含设备                 |
| name        | 禁止订阅网关监听主题          | String  | 策略名称                 |
| topic       | /gateway/upload     | String  | 作用主题                 |
| updateAt    | 2018-03-22 16:41:10 | Date    | 更新时间                 |
| userIntID   | 6                   | Integer | 创建用户主键 ID             |



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
    "name": "禁止订阅",
    "topic": "/reboot",
    "userIntID": 6
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
      "deviceID": "10C61F1A1F41",
      "deviceName": "传感器_10C61F1A1F41",
      "deviceTypeLabel": "终端",
      "id": 428
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

| 字段名             | 示例值              | 字段类型    | 说明     |
| --------------- | ---------------- | ------- | ------ |
| deviceID        | 10C61F1A1F41     | String  | 设备编号   |
| deviceName      | 传感器_10C61F1A1F41 | String  | 设备名称   |
| deviceTypeLabel | 终端               | String  | 设备类型说明 |
| id              | 428              | Integer | 主键 ID  |



### 获取策略未绑定设备列表

**API 定义：**
```bash
GET /api/v1/emq_select/policies/{policies_id}/not_joined_devices?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "deviceName": "综合传感器_10C61FA1F47",
      "id": 439,
      "productName": "环境监测"
    },
    {
      "deviceName": "传感器_10C61F1A1F11",
      "id": 433,
      "productName": "默认产品"
    },
    {
      "deviceName": "传感器_10C61F1A1F44",
      "id": 432,
      "productName": "环境监测"
    },
    {
      "deviceName": "传感器_10C61F1A1F40",
      "id": 427,
      "productName": "环境监测"
    }
  ],
  "meta": {
    "count": 4,
    "limit": 5,
    "page": 1
  }
}
```

**字段说明：**

| 字段名         | 示例值               | 字段类型    | 说明    |
| ----------- | ----------------- | ------- | ----- |
| deviceName  | 综合传感器_10C61FA1F47 | String  | 设备名称  |
| id          | 439               | Integer | 主键 ID |
| productName | 环境监测              | String  | 产品名称  |
 



**查询参数：**
```bash
GET /api/v1/emq_select/policies/{policies_id}/not_joined_devices?_page=1&_limit=10&deviceName_like=测试设备
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
  "devicesIntID": [
    427,
    432,
    433,
    439
  ]
}
```

**字段说明：**

| 字段名          | 示例值             | 字段类型   | 是否必填  | 说明  |
| ------------ | --------------- | ------ | ----- | --- |
| devicesIntID | [427,432,433,439] | Array | false | 设备主键 ID    |



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


### 查看设备已绑定策略

**API 定义：**
```bash
GET /api/v1/devices/{device_id}/policies?_page=1&_limit=10
```
**成功响应：**

```json
{
  "items": [
    {
      "access": 2,
      "accessLabel": "订阅",
      "allow": 1,
      "allowLabel": "允许",
      "createAt": "2018-03-22 15:49:08",
      "description": null,
      "id": 8,
      "mqtt_acl": [
        {
          "id": 228
        },
        {
          "id": 229
        },
        {
          "id": 230
        },
        {
          "id": 192
        }
      ],
      "name": "禁止订阅网关监听主题",
      "topic": "/gateway/upload",
      "updateAt": "2018-03-22 16:41:10",
      "userIntID": 6
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

| 字段名         | 示例值                                                             | 字段类型    | 说明                   |
| ----------- | --------------------------------------------------------------- | ------- | -------------------- |
| access      | 2                                                               | Integer | 访问控制 0:发布1:订阅2:发布与订阅 |
| accessLabel | 订阅                                                              | String  | 访问控制说明               |
| allow       | 1                                                               | Integer | 操作 0:拒绝1:允许          |
| allowLabel  | 允许                                                              | String  | 操作说明                 |
| createAt    | 2018-03-22 15:49:08                                             | Date    | 创建时间                 |
| description |                                                                 | String  | 产品描述                 |
| id          | 8                                                               | Integer | 主键 ID                |
| mqtt_acl    | [{id: 228}] | Array   | 包含设备                 |
| name        | 禁止订阅网关监听主题                                                      | String  | 策略名称                 |
| topic       | /gateway/upload                                                 | String  | 作用主题                 |
| updateAt    | 2018-03-22 16:41:10                                             | Date    | 更新时间                 |
| userIntID   | 6                                                               | Integer | 创建用户主键ID             |
  
  



### 获取设备可绑定策略

**API 定义：**
```bash
GET /api/v1/emq_select/devices/{device_id}/not_joined_policies
```

**成功响应：**

```json
{
  "items": [
    {
      "access": 2,
      "accessLabel": "订阅",
      "allow": 1,
      "allowLabel": "允许",
      "createAt": "2018-03-28 14:23:02",
      "description": "允许",
      "id": 12,
      "mqtt_acl": [],
      "name": "允许订阅",
      "topic": "/gateway/downstream",
      "updateAt": null,
      "userIntID": 6
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

| 字段名         | 示例值                 | 字段类型    | 说明                   |
| ----------- | ------------------- | ------- | -------------------- |
| access      | 2                   | Integer | 访问控制 0:发布 1:订阅 2:发布与订阅 |
| accessLabel | 订阅                  | String  | 访问控制说明               |
| allow       | 1                   | Integer | 操作 0:拒绝 1:允许          |
| allowLabel  | 允许                  | String  | 操作说明                 |
| createAt    | 2018-03-28 14:23:02 | Date    | 创建时间                 |
| description | 允许                  | String  | 产品描述                 |
| id          | 12                  | Integer | 主键 ID                |
| mqtt_acl    |                     | Array   | 包含设备                 |
| name        | 允许订阅                | String  | 策略名称                 |
| topic       | /gateway/downstream | String  | 作用主题                 |
| updateAt    |                     | Date    | 更新时间                 |
| userIntID   | 6                   | Integer | 创建用户主键ID             |
  


### 设备绑定策略

**API 定义：**
```bash
POST /api/v1/devices/{device_id}/policies
```

**请求体：**

```json
{
  "ids": [
    12
  ]
}
```

**字段说明：**

| 字段名 | 示例值 | 字段类型   | 是否必填  | 说明  |
| --- | --- | ------ | ----- | --- |
| ids | [12, 13]  | Array | false |     |
  
**成功响应：**

```json
{
  "items": [
    {
      "access": 2,
      "accessLabel": "订阅",
      "allow": 1,
      "allowLabel": "允许",
      "createAt": "2018-03-28 14:23:02",
      "description": "允许",
      "id": 12,
      "mqtt_acl": [
        {
          "id": 232
        }
      ],
      "name": "允许订阅",
      "topic": "/gateway/downstream",
      "updateAt": null,
      "userIntID": 6
    },
    {
      "access": 2,
      "accessLabel": "订阅",
      "allow": 1,
      "allowLabel": "允许",
      "createAt": "2018-03-22 15:49:08",
      "description": null,
      "id": 8,
      "mqtt_acl": [
        {
          "id": 228
        },
        {
          "id": 229
        },
        {
          "id": 230
        },
        {
          "id": 192
        }
      ],
      "name": "禁止订阅网关监听主题",
      "topic": "/gateway/upload",
      "updateAt": "2018-03-22 16:41:10",
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

| 字段名         | 示例值                 | 字段类型    | 说明                   |
| ----------- | ------------------- | ------- | -------------------- |
| access      | 2                   | Integer | 访问控制 0:发布 1:订阅 2:发布与订阅 |
| accessLabel | 订阅                  | String  | 访问控制说明               |
| allow       | 1                   | Integer | 操作 0:拒绝 1:允许          |
| allowLabel  | 允许                  | String  | 操作说明                 |
| createAt    | 2018-03-28 14:23:02 | Date    | 创建时间                 |
| description | 允许                  | String  | 产品描述                 |
| id          | 12                  | Integer | 主键 ID                |
| mqtt_acl    | [{id: 228}]     | Array   | 包含设备                 |
| name        | 允许订阅                | String  | 策略名称                 |
| topic       | /gateway/downstream | String  | 作用主题                 |
| updateAt    |                     | Date    | 更新时间                 |
| userIntID   | 6                   | Integer | 创建用户主键 ID             |
  
  

### 删除设备已绑定策略

**API 定义：**
```bash
# 单个删除
DELETE /api/v1/devices/{policies_id}/policies?ids=14

# 支出批量删除，多个 policies_id 使用英文逗号分隔
DELETE /api/v1/devices/{device_id}/policies?ids={policies_id, policies_id, policies_id}
```

**成功响应：**

```bash
HTTP Status Code 204
```