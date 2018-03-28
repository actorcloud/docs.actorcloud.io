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
      "authType": 1,
      "blocked": 0,
      "createAt": "2018-03-23 11:39:44",
      "deviceID": "10C61F1A1F40",
      "deviceName": "传感器_10C61F1A1F40",
      "deviceType": 1,
      "deviceTypeLabel": "终端",
      "deviceUsername": "10C61F1A1F40",
      "id": 427,
      "productID": "kGBizO",
      "productName": "环境监测",
      "status": 0,
      "statusLabel": "离线",
      "token": "10C61F1A1F40"
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

| 字段名             | 示例值                 | 字段类型    | 说明                  |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | 认证方式，1:token 2:证书    |
| blocked         | 0                   | Integer | 是否允许访问，0:允许 1:不允许    |
| createAt        | 2018-03-24 14:00:06 | Date    | 创建时间                |
| deviceID        | 10C61F1A1F11        | String  | 设备编号                |
| deviceName      | 传感器_10C61F1A1F11    | String  | 设备名称                |
| deviceType      | 1                   | Integer | 设备类型，0:终端 1:网关 2:智能手机 |
| deviceTypeLabel | 终端                  | String  | 设备类型说明              |
| deviceUsername  | 10C61F1A1F11        | String  | 设备连接用户名             |
| id              | 433                 | Integer | 主键 ID                |
| productID       | fSPvWw              | String  | 产品识别码               |
| productName     | 默认产品                | String  | 产品名称                |
| status          | 0                   | Integer | 运行状态，0:离线 1:在线       |
| statusLabel     | 离线                  | String  | 运行状态信息              |
| token           | 10C61F1A1F11        | String  | 设备密钥                |




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
  "deviceName": "综合传感器_10C61FA1F47",
  "productID": "kGBizO",
  "deviceType": 1,
  "manufacturer": "A 厂",
  "serialNumber": "10C61FA1F47",
  "softVersion": "v 1.0",
  "hardwareVersion": "v 1.0",
  "description": "10C61FA1F47",
  "location": "玉泉校区",
  "deviceID": "10C61FA1F47",
  "deviceUsername": "10C61FA1F47",
  "authType": 1
}
```

**字段说明：**

| 字段名             | 示例值               | 字段类型    | 是否必填  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| deviceName      | 综合传感器_10C61FA1F47 | String  | true  | 设备名称                |
| productID       | kGBizO            | String  | true  | 产品识别码               |
| deviceType      | 1                 | Integer | true  | 设备类型，0:终端1:网关2:智能手机 |
| manufacturer    | A 厂               | String  | false  | 制造商                 |
| serialNumber    | 10C61FA1F47       | String  | false | 序列号                 |
| softVersion     | v 1.0             | String  | false  | 软件版本                |
| hardwareVersion | v 1.0             | String  | false  | 硬件版本                |
| description     | 10C61FA1F47       | String  | false  | 产品描述                |
| location        | 玉泉校区              | String  | false  | 安装位置                |
| deviceID        | 10C61FA1F47       | String  | false  | 设备编号， 不填自动生成 36 位                |
| deviceUsername  | 10C61FA1F47       | String  | false  | 设备连接用户名，不填自动生成 36 位             |
| authType        | 1                 | Integer | true  | 认证方式，1:token 2:证书    |


### 查看设备详情

**API 定义：**

```bash
GET /api/v1/devices/{device_id}
```

**成功响应：**

```json
{
  "authType": 1,
  "blocked": 0,
  "clientIP": "",
  "coapBroker": "118.24.50.125:5683",
  "coapsBroker": "118.24.50.125:5684",
  "coapssBroker": "118.24.50.125:5685",
  "connectedAt": "",
  "createAt": "2018-03-23 11:39:44",
  "createUser": "EMQ",
  "description": "v 1.0",
  "deviceID": "10C61F1A1F40",
  "deviceName": "传感器_10C61F1A1F40",
  "deviceType": 1,
  "deviceUsername": "10C61F1A1F40",
  "hardwareVersion": "v 1.0",
  "id": 427,
  "keepAlive": "",
  "location": "玉泉校区",
  "manufacturer": "A 厂",
  "mqttBroker": "118.24.50.125:1883",
  "mqttsBroker": "118.24.50.125:8883",
  "mqttssBroker": "118.24.50.125:8884",
  "productID": "kGBizO",
  "serialNumber": "10C61F1A1F40",
  "softVersion": "10C61F1A1F40",
  "status": 0,
  "statusLabel": "离线",
  "tenantID": "CyOTtJod0",
  "token": "10C61F1A1F40",
  "updateAt": "2018-03-24 14:02:08",
  "userIntID": 6
}
```

**字段说明：**

| 字段名             | 示例值                 | 字段类型    | 说明                  |
| --------------- | ------------------- | ------- | ------------------- |
| authType        | 1                   | Integer | 认证方式，1:token2:证书    |
| blocked         | 0                   | Integer | 是否允许访问，0:允许1:不允许    |
| clientIP        |                     | String  | 客户端IP，连接时可见         |
| coapBroker      | 118.24.50.125:5683  | String  |  CoAP 服务器地址                   |
| coapsBroker     | 118.24.50.125:5684  | String  |  CoAP 服务器地址（DTLS）                   |
| coapssBroker    | 118.24.50.125:5685  | String  |                     |
| connectedAt     |                     | String  | 连接时间，连接时可见          |
| createAt        | 2018-03-23 11:39:44 | Date    | 创建时间                |
| createUser      | EMQ                 | String  | 创建用户名               |
| description     | v 1.0               | String  | 产品描述                |
| deviceID        | 10C61F1A1F40        | String  | 设备编号                |
| deviceName      | 传感器_10C61F1A1F40    | String  | 设备名称                |
| deviceType      | 1                   | Integer | 设备类型，0:终端 1:网关 2:智能手机 |
| deviceUsername  | 10C61F1A1F40        | String  | 设备连接用户名             |
| hardwareVersion | v 1.0               | String  | 硬件版本                |
| id              | 427                 | Integer | 产品 ID                |
| keepAlive       |                     | Integer | 心跳时长 （秒）                |
| location        | 玉泉校区                | String  | 安装位置                |
| manufacturer    | A 厂                 | String  | 制造商                 |
| mqttBroker      | 118.24.50.125:1883  | String  | MQTT服务器地址           |
| mqttsBroker     | 118.24.50.125:8883  | String  | MQTT服务器地址（TLS）      |
| mqttssBroker    | 118.24.50.125:8884  | String  | MQTT服务器地址（双向认证）                    |
| productID       | kGBizO              | String  | 产品识别码               |
| serialNumber    | 10C61F1A1F40        | String  | 序列号                 |
| softVersion     | 10C61F1A1F40        | String  | 软件版本                |
| status          | 0                   | Integer | 运行状态，0:离线 1:在线       |
| statusLabel     | 离线                  | String  | 运行状态信息              |
| tenantID        | CyOTtJod0           | String  | 所属租户标识符             |
| token           | 10C61F1A1F40        | String  | 设备密钥                |
| updateAt        | 2018-03-24 14:02:08 | Date    | 更新时间                |
| userIntID       | 6                   | Integer | 创建用户主键ID            |
  
  

### 编辑设备信息

**API 定义：**

```bash
PUT /api/v1/devices/{device_id}
```

**请求体：**

```json
{
  "deviceName": "传感器_10C61F1A1F40",
  "deviceType": 1,
  "softVersion": "10C61F1A1F40",
  "hardwareVersion": "v 1.0",
  "manufacturer": "A 厂",
  "serialNumber": "10C61F1A1F40",
  "location": "玉泉校区",
  "description": "v 1.0",
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




