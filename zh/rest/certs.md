# 证书


### 获取证书列表

**API 定义：**
```bash
GET /api/v1/certs?_page=1&_limit=10 
```

**成功响应：**

```json
{
  "items": [
    {
      "createAt": "2018-03-27 11:26:31",
      "enable": 1,
      "id": 22,
      "name": "双向认证接入"
    },
    {
      "createAt": "2018-03-23 15:45:51",
      "enable": 1,
      "id": 14,
      "name": "默认证书"
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

| 字段名      | 示例值                 | 字段类型    | 说明            |
| -------- | ------------------- | ------- | ------------- |
| createAt | 2018-03-27 11:26:31 | Date    | 创建时间          |
| enable   | 1                   | Integer | 是否可用：1:可用 0:不可用 |
| id       | 22                  | Integer | 主键 ID         |
| name     | 双向认证接入              | String  | 证书名称          |


**查询参数：**
```bash
GET /api/v1/certs?_page=1&_limit=10&name_like=证书名称
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| name_like  | String | 按证书名称过滤   |


### 创建一个证书

**API 定义：**
```bash
POST /api/v1/certs
```

**请求体：**

```json
{
  "name": "默认证书",
  "enable": 1
}
```

**字段说明：**

| 字段名    | 示例值  | 字段类型    | 是否必填 | 说明            |
| ------ | ---- | ------- | ---- | ------------- |
| name   | 默认证书 | String  | true | 证书名称          |
| enable | 1    | Integer | true | 是否可用：1:可用 0:不可用 |


### 查看证书详情

**API 定义：**

```bash
GET /api/v1/certs/{cert_id}
```

api.js?7a86:64 /api/v1/certs/14
loader.js?1e59:60 
  
**成功响应：**

```json
{
  "CN": "CyOTtJod0:Y5AlQ1rKq3wcXnpzyZgadLHINC",
  "cert": "-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----",
  "createAt": "2018-03-23 15:45:51",
  "createUser": "EMQ",
  "enable": 1,
  "id": 14,
  "key": "-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----",
  "name": "默认证书",
  "root": "-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----",
  "updateAt": null
}
```

**字段说明：**

| 字段名        | 示例值                                                | 字段类型    | 说明            |
| ---------- | -------------------------------------------------- | ------- | ------------- |
| CN         | CyOTtJod0:Y5AlQ1rKq3wcXnpzyZgadLHINC               | String  | CN            |
| cert       | -----BEGIN CERTIFICATE-----
MIIDEzCCAfsCAQAwDQYJKo | String  | 证书密钥          |
| createAt   | 2018-03-23 15:45:51                                | Date    | 创建时间          |
| createUser | EMQ                                                | String  | 创建用户名         |
| enable     | 1                                                  | Integer | 是否可用1:可用0:不可用 |
| id         | 14                                                 | Integer | 主键 ID         |
| key        | -----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w | String  | 证书 Key        |
| name       | 默认证书                                               | String  | 证书名称          |
| root       | -----BEGIN CERTIFICATE-----
MIIErjCCA5agAwIBAgIQBY | String  |               |
| updateAt   |                                                    | Date    | 更新时间          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Date    | 更新时间          |


### 编辑证书信息

**API 定义：**

```bash
PUT /api/v1/certs/{cert_id}
```

**请求体：**

```json
{
  "enable": 0,
  "id": 6,
  "name": "默认证书"
}
```


### 删除证书

**API 定义：**
```bash
# 单个删除
DELETE /api/v1/certs?ids={cert_id}

# 支出批量删除，多个 cert_id 使用英文逗号分隔
DELETE /api/v1/certs?ids={cert_id, cert_id, cert_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```


### 获取证书已绑定设备列表

**API 定义：**
```bash
GET /api/v1/certs/{cert_id}/devices?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
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
    },
    {
      "authType": 2,
      "blocked": 0,
      "createAt": "2018-03-24 13:49:35",
      "description": null,
      "deviceID": "10C61F1A1F44",
      "deviceName": "传感器_10C61F1A1F44",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
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

**字段说明：**

| 字段名             | 示例值                 | 字段类型    | 说明                  |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | 认证方式，1:token 2:证书    |
| blocked         | 0                   | Integer | 是否允许访问，0:允许 1:不允许    |
| createAt        | 2018-03-23 11:39:44 | Date    | 创建时间                |
| description     | v 1.0               | String  | 产品描述                |
| deviceID        | 10C61F1A1F40        | String  | 设备编号                |
| deviceName      | 传感器_10C61F1A1F40    | String  | 设备名称                |
| deviceType      | 1                   | Integer | 设备类型，0:终端 1:网关 2:智能手机 |
| deviceTypeLabel | 终端                  | String  | 设备类型说明              |
| deviceUsername  | 10C61F1A1F40        | String  | 设备连接用户名             |
| hardwareVersion | v 1.0               | String  | 硬件版本                |
| id              | 427                 | Integer | 主键 ID               |
| location        | 玉泉校区                | String  | 安装位置                |
| manufacturer    | A 厂                 | String  | 制造商                 |
| productID       | kGBizO              | String  | 产品识别码               |
| serialNumber    | 10C61F1A1F40        | String  | 序列号                 |
| softVersion     | 10C61F1A1F40        | String  | 软件版本                |
| status          | 0                   | Integer | 运行状态，0:离线 1:在线       |
| tenantID        | CyOTtJod0           | String  | 所属租户标识符             |
| token           | 10C61F1A1F40        | String  | 设备密钥                |
| updateAt        | 2018-03-24 14:02:08 | Date    | 更新时间                |
| userIntID       | 6                   | Integer | 创建用户主键 ID            |


### 获取证书未绑定设备列表

**API 定义：**
```bash
GET /api/v1/certs/{cert_id}/not_joined_devices?_page=1&_limit=10
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
    }
  ],
  "meta": {
    "count": 2,
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
GET /api/v1/certs/{cert_id}/not_joined_devices?_page=1&_limit=10&deviceName_like=测试设备
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| deviceName_like  | String | 按设备名称过滤   |
| groupName_like  | String | 按分组名称过滤   |
| productName_like  | String | 按产品名称过滤   |



### 证书内绑定设备

**API 定义：**
```bash
POST /api/v1/certs/{cert_id}/devices
```

**请求体：**

```json
{
  "devicesIntID": [
    433,
    439
  ]
}
```

**字段说明：**

| 字段名          | 示例值     | 字段类型   | 是否必填  | 说明  |
| ------------ | ------- | ------ | ----- | --- |
| devicesIntID | 433,439 | object | false | 设备主键 ID    |
  



### 移除证书内设备
**API 定义：**
```bash
# 单个删除
DELETE /api/v1/certs/{cert_id}/devices?ids={cert_id}

# 支出批量删除，多个 cert_id 使用英文逗号分隔
DELETE /api/v1/certs/{cert_id}/devices?ids={cert_id, cert_id, cert_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```



### 查看设备已绑定证书

**API 定义：**
```bash
GET /api/v1/devices/{device_id}/certs?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "createAt": "2018-03-23 15:45:51",
      "enable": 1,
      "id": 14,
      "name": "默认证书"
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

| 字段名      | 示例值                 | 字段类型    | 说明            |
| -------- | ------------------- | ------- | ------------- |
| createAt | 2018-03-23 15:45:51 | Date    | 创建时间          |
| enable   | 1                   | Integer | 是否可用 1:可用 0:不可用 |
| id       | 14                  | Integer | 主键 ID         |
| name     | 默认证书                | String  | 证书名称          |
  



### 获取设备可绑定证书

**API 定义：**
```bash
GET /api/v1/emq_select/devices/{device_id}/not_joined_certs
```

**成功响应：**

```json
{
  "items": [
    {
      "id": 22,
      "name": "双向认证接入"
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

| 字段名  | 示例值    | 字段类型    | 说明    |
| ---- | ------ | ------- | ----- |
| id   | 22     | Integer | 主键 ID |
| name | 双向认证接入 | String  | 证书名称  |



### 设备绑定证书

**API 定义：**
```bash
POST /api/v1/devices/{device_id}/certs
```

**请求体：**
```json
{
  "ids": [
    22
  ]
}
```

**字段说明：**

| 字段名 | 示例值 | 字段类型   | 是否必填  | 说明  |
| --- | --- | ------ | ----- | --- |
| ids | [22, 23]  | [] | true |  设备 ID 数组   |



### 删除设备已绑定证书

**API 定义：**
```bash
# 单个删除
DELETE /api/v1/devices/{device_id}/certs?ids=14

# 支出批量删除，多个 cert_id 使用英文逗号分隔
DELETE /api/v1/devices/{device_id}/certs?ids={cert_id, cert_id, cert_id}
```

**成功响应：**

```bash
HTTP Status Code 204
```
