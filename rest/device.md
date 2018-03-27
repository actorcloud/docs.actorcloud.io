# 设备操作 

### 获取设备列表

**API 定义：**
```bash
GET /api/v1/devices?_page=1&_limit=10 
```

**成功响应：**

```json
{
  "items": [
    {
      "blocked": 0,
      "createAt": "2018-03-02 15:49:53",
      "deviceName": "共享单车_c4c9f031cace9a",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "id": 9,
      "productID": "Gq2kxM",
      "productName": "共享单车",
      "status": 0,
      "statusLabel": "离线"
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

| 字段名             | 示例值                 | 字段类型    | 说明                       |
| --------------- | ------------------- | ------- | ------------------------ |
| blocked         | 0                   | Integer  | 是否允许访问，0: 允许 1: 不允许                         |
| createAt        | 2018-03-02 15:49:53 | Date    | 创建时间                     |
| deviceName      | 共享单车_c4c9f031cace9a | String  | 设备名称                     |
| deviceType      | 1                   | Integer | 设备类型，0: 终端 1: 网关 2: 智能手机 |
| deviceTypeLabel | 终端                  | String  |  设备类型描述                        |
| id              | 9                   | Integer | 主键 ID                    |
| productID       | Gq2kxM              | String  |  所属产品标识符                        |
| productName     | 共享单车                | String  | 产品名称                     |
| status          | 0                   | Integer  |  运行状态，0: 离线 1: 在线                         |
| statusLabel     | 离线                  | String  |  运行状态描述                        |

**查询参数：**
```bash
GET /api/v1/devices?_page=1&_limit=10&deviceName_like=共享单车
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| deviceName_like  | String | 按设备名称过滤   |
| deviceID_like  | String | 按设备编号过滤   |
| deviceType_like  | Integer | 按设备类型过滤，0: 终端 1: 网关 2: 智能手机   |
| groupID  | String | 按分组标识符过滤   |
| productID  | String | 按所属产品标识符过滤   |




### 创建一个设备

**API 定义：**
```bash
POST /api/v1/devices
```

**请求体：**

```json
{
  "deviceName": "共享单车_c4c9f031cace9a512fb6",
  "deviceType": 1,
  "manufacturer": "A 号制造商",
  "productID": "Gq2kxM",
  "serialInteger": "c4c9f031cace9a512fb6",
  "softVersion": "v 1.0",
  "hardwareVersion": "v 1.0",
  "description": "一批次",
  "location": "江南厂",
  "deviceID": "c4c9f031cace9a512fb6",
  "deviceUsername": "c4c9f031cace9a512fb6",
  "token": "c4c9f031cace9a512fb6",
  "authType": 1
}
```

**字段说明：**

| 字段名             | 示例值                       | 字段类型    | 是否必填  | 说明   |
| --------------- | ------------------------- | ------- | ----- | ---- |
| deviceName      | 共享单车_c4c9f031cace9a512fb6 | String  | true  | 设备名称 |
| deviceType      | 1                         | Integer | true  | 设备类型，0: 终端 1: 网关 2: 智能手机 |
| manufacturer    | A 号制造商                    | String  | false | 制造商  |
| productID       | Gq2kxM                    | String  | true  | 所属产品识别码     |
| serialInteger    | c4c9f031cace9a512fb6      | String  | false | 序列号  |
| softVersion     | v 1.0                     | String  | false | 软件版本 |
| hardwareVersion | v 1.0                     | String  | false | 硬件版本 |
| description     | 一批次                       | String  | false | 描述   |
| location        | 江南厂                       | String  | false | 安装位置 |
| deviceID        | c4c9f031cace9a512fb6      | String  | true  | 设备编号， 8 - 32位 |
| deviceUsername  | c4c9f031cace9a512fb6      | String  | true  | 连接用户名， 8 - 32位     |
| token           | c4c9f031cace9a512fb6      | String  | false | 设备密钥， 8 - 32位 |
| authType        | 1                         | Integer  | true  |  认证方式，1: token 2: 证书    | 



### 查看设备详情

**API 定义：**

```bash
GET /api/v1/devices/{device_id}
```

**成功响应：**

```bash
{
  "authType": 1,
  "blocked": 0,
  "clientIP": "",
  "connectedAt": "",
  "createAt": "2018-03-02 15:49:53",
  "createUser": "EMQ",
  "description": "一批次",
  "deviceID": "c4c9f031cace9a",
  "deviceName": "共享单车_c4c9f031cace9a",
  "deviceType": 1,
  "deviceUsername": "c4c9f031cace9a",
  "hardwareVersion": "v 1.0",
  "id": 9,
  "location": "江南厂",
  "manufacturer": "A 号制造商",
  "mqttBroker": "actorcloud.io:1883",
  "mqttsBroker": "actorcloud.io:8883",
  "productID": "Gq2kxM",
  "serialInteger": "c4c9f031cace9a",
  "softVersion": "v 1.0",
  "status": 0,
  "statusLabel": "离线",
  "tenantID": "CCgnIXTAh",
  "token": "c4c9f031cace9a",
  "updateAt": null,
  "userID": 2
}
```

**字段说明：**

 | 字段名             | 示例值                 | 字段类型    | 说明                       |
| --------------- | ------------------- | ------- | ------------------------ |
| authType        | 1                   | Integer | 认证方式，1: token 2: 证书      |
| blocked         | 0                   | Integer  |  是否允许访问，0: 允许 1: 不允许                        |
| clientIP        |                     | String  | 客户端 IP，连接时可见                         |
| connectedAt     |                     | String  | 连接时间，连接时可见                         |
| createAt        | 2018-03-02 15:49:53 | Date    | 创建时间                     |
| createUser      | EMQ              | String  |  创建者用户名                        |
| description     | 一批次                 | String  | 描述                       |
| deviceID        | c4c9f031cace9a      | String  | 设备编号                     |
| deviceName      | 共享单车_c4c9f031cace9a | String  | 设备名称                     |
| deviceType      | 1                   | Integer | 设备类型，0: 终端 1: 网关 2: 智能手机 |
| deviceUsername  | c4c9f031cace9a      | String  |  连接用户名                        |
| hardwareVersion | v 1.0               | String  | 硬件版本                     |
| id              | 9                   | Integer | 主键 ID                    |
| location        | 江南厂                 | String  | 安装位置                     |
| manufacturer    | A 号制造商              | String  | 制造商                      |
| mqttBroker      | actorcloud.io:1883  | String  | MQTT 服务器地址                       |
| mqttsBroker     | actorcloud.io:8883  | String  | MQTT 服务器地址（TLS）                         |
| productID       | Gq2kxM              | String  | 所属产品标识符                         |
| serialInteger    | c4c9f031cace9a      | String  | 序列号                      |
| softVersion     | v 1.0               | String  | 软件版本                     |
| status          | 0                   | Integer  | 运行状态，0: 离线 1: 在线                         |
| statusLabel     | 离线                  | String  | 运行状态信息                         |
| tenantID        | CCgnIXTAh           | String  |  所属租户标识符                        |
| token           | c4c9f031cace9a      | String  | 设备密钥                     |
| updateAt        |                     | Date    | 更新时间                     |
| userID          | 2                   | Integer | 创建者主键 ID                 | 


### 编辑设备信息

**API 定义：**

```bash
PUT /api/v1/devices/{device_id}
```

**请求体：**

```json
{
  "deviceName": "共享单车_c4c9f031cace9a",
  "deviceType": 1,
  "softVersion": "v 1.0",
  "hardwareVersion": "v 1.0",
  "manufacturer": "A 号制造商",
  "serialNumber": "c4c9f031cace9a",
  "location": "江南厂",
  "description": "一批次",
  "authType": 1,
  "blocked": 0
}
```


### 删除设备

**API 定义：**
```bash
# 单个删除
DELETE /api/v1/devices?ids={device_id}

# 支出批量删除，多个 device_id 使用英文逗号分隔
DELETE /api/v1/device_id?ids={device_id, device_id, device_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```




