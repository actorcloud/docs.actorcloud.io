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
            "CN": "CSX9Rh2lL:kdLalSb5V2FCtfwe6QHisBYg9j",
            "createAt": "2018-03-17 14:22:57",
            "enable": 1,
            "id": 6,
            "name": "安全证书",
            "updateAt": null
        },
        {
            "CN": "CSX9Rh2lL:z6jMuSpAGUQOFnhxa0rdq7Vo8s",
            "createAt": "2018-03-17 11:34:58",
            "enable": 1,
            "id": 5,
            "name": "999",
            "updateAt": null
        },
        {
            "CN": "CSX9Rh2lL:bLqzNj6runwTM8Q7JW9CsH35Gc",
            "createAt": "2018-03-17 11:33:11",
            "enable": 1,
            "id": 4,
            "name": "默认证书",
            "updateAt": null
        },
        {
            "CN": "CSX9Rh2lL:YSHMKtok5UlO3JQzCnBI4ph9yb",
            "createAt": "2018-03-15 18:43:31",
            "enable": 1,
            "id": 1,
            "name": "cert2",
            "updateAt": "2018-03-16 20:26:34"
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

| 字段名      | 示例值                                  | 字段类型    | 说明    |
| -------- | ------------------------------------ | ------- | ----- |
| CN       | CSX9Rh2lL:kdLalSb5V2FCtfwe6QHisBYg9j | String  |  CN     |
| createAt | 2018-03-17 14:22:57                  | Date    | 创建时间  |
| enable   | 1                                    | Integer  | 是否可用 1: 可用 0: 不可用      |
| id       | 6                                    | Integer | 主键 ID |
| name     | 安全证书                                 | String  | 证书名称      |
| updateAt |                                      | Date    | 更新时间  |


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
  "name": "安全证书",
  "enable": "是否可用"
}
```



### 查看证书详情

**API 定义：**

```bash
GET /api/v1/certs/{cert_id}
```

**成功响应：**

```bash
{
    "CN": "CSX9Rh2lL:kdLalSb5V2FCtfwe6QHisBYg9j",
    "createAt": "2018-03-17 14:22:57",
    "createUser": "EMQ",
    "enable": 1,
    "id": 6,
    "name": "安全证书",
    "updateAt": null
}
```

**字段说明：**

 | 字段名        | 示例值                                  | 字段类型    | 说明    |
 | ---------- | ------------------------------------ | ------- | ----- |
 | CN         | CSX9Rh2lL:kdLalSb5V2FCtfwe6QHisBYg9j | String  |  CN     |
 | createAt   | 2018-03-17 14:22:57                  | Date    | 创建时间  |
 | createUser | EMQ                                  | String  |   创建用户名    |
 | enable     | 1                                    | Integer  |  是否可用 1: 可用 0: 不可用     |
 | id         | 6                                    | Integer | 主键 ID |
 | name       | 安全证书                                 | String  |  证书名称     |
 | updateAt   |                                      | Date    | 更新时间  |


### 编辑证书信息

**API 定义：**

```bash
PUT /api/v1/certs/{cert_id}
```

**请求体：**

```json
{
  "CN": "CSX9Rh2lL:TgR8KusVZ5HeYWkaJr109mOEnC",
  "createAt": "2018-03-17 15:22:44",
  "createUser": "EMQ",
  "enable":0,
  "id": 6,
  "name": "安全证书",
  "updateAt": null
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

### 获取证书绑定设备列表

**API 定义：**
```bash
GET /api/v1/certs/{cert_id}/devices?_page=1&_limit=10
```

**成功响应：**

```json
{
  "items": [
    {
      "authType": 2, 
      "blocked": 0, 
      "createAt": "2018-03-17 14:53:10", 
      "description": null, 
      "deviceID": "60583004f5fb53b4b6f3efb0c9e959df", 
      "deviceName": "\u6d4b\u8bd51", 
      "deviceType": 1, 
      "deviceTypeLabel": "\u7ec8\u7aef", 
      "deviceUsername": "60583004f5fb53b4b6f3efb0c9e959df", 
      "hardwareVersion": null, 
      "id": 419, 
      "location": null, 
      "manufacturer": null, 
      "productID": "DCWpNR", 
      "serialNumber": null, 
      "softVersion": null, 
      "status": 0, 
      "tenantID": "CSX9Rh2lL", 
      "token": "14372f27d14b58a48f9837a5015ceee0", 
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

| 字段名             | 示例值                              | 字段类型    | 说明                       |
| --------------- | -------------------------------- | ------- | ------------------------ |
| createAt        | 2018-03-17 14:53:10              | Date    | 创建时间                     |
| deviceID        | 60583004f5fb53b4b6f3efb0c9e959df | String  | 设备编号                     |
| deviceName      | 测试1                              | String  | 设备名称                     |
| deviceType      | 1                                | Integer | 设备类型，0: 终端 1: 网关 2: 智能手机 |
| deviceTypeLabel | 终端                               | String  |    设备类型说明                      |
| id              | 419                              | Integer | 主键 ID                    |
| updateAt        |                                  | Date    | 更新时间                     |



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
  "deviceIntIds": [1, 2, 3, 4, 5]
}
```

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
