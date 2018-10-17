# 功能点

## 查看功能点列表

**API 定义：**

```bash
GET /api/v1/data_points?productID={productID}&_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/data_points?productID=2ioNzM&_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "binarySize": null,
      "createAt": "2018-10-15 17:37:53",
      "dataPointID": "fsdf",
      "dataPointName": "测试字符",
      "dataStep": null,
      "dataTransType": 1,
      "dataTransTypeLabel": "只上报",
      "detail": null,
      "enum": [],
      "faultValue": null,
      "id": 42,
      "isDiscard": null,
      "isLocationType": 0,
      "locationType": null,
      "lowerLimit": null,
      "pointDataType": 3,
      "pointDataTypeLabel": "字符串",
      "productID": "2ioNzM",
      "productName": "MQTT产品",
      "unitName": null,
      "unitSymbol": null,
      "updateAt": null,
      "upperLimit": null
    },
    {
      "binarySize": null,
      "createAt": "2018-10-15 17:13:45",
      "dataPointID": "wrqwr",
      "dataPointName": "测试布尔",
      "dataStep": null,
      "dataTransType": 3,
      "dataTransTypeLabel": "可上报可下发",
      "detail": null,
      "enum": null,
      "faultValue": null,
      "id": 41,
      "isDiscard": null,
      "isLocationType": 0,
      "locationType": null,
      "lowerLimit": null,
      "pointDataType": 5,
      "pointDataTypeLabel": "布尔",
      "productID": "2ioNzM",
      "productName": "MQTT产品",
      "unitName": null,
      "unitSymbol": null,
      "updateAt": "2018-10-15 17:14:39",
      "upperLimit": null
    }
  ],
  "meta": {
    "count": 7,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| binarySize| "null" | Integer  | true  | 二进制长度 (数值类型为二进制(11)时选填) |
| createAt| "2018-10-15 17:37:53" | Date  | true  | 创建时间 |
| dataPointID| "fsdf" | String  | true  | 功能点 ID |
| dataPointName| "测试字符" | String  | true  | 功能点名称 |
| dataStep| "null" | Float  | true  | 数据步长 (数据类型为数值类型(1)时选填) |
| dataTransType| 1 | Integer  | true  | 数据传输类型 可选参数: 只上报: 1, 只下发: 2, 可上报可下发: 3 |
| dataTransTypeLabel| "只上报" | String  | true  | 只上报 |
| detail| "null" | String  | true  | 备注 |
| enum| [] | JSON  | true  | 枚举值 |
| faultValue| "null" | String  | true  | 故障值 (数据类型为故障类型(4)时必填) |
| id| 42 | Integer  | true  | id |
| isDiscard| "null" | Integer  | true  | 是否丢弃该消息 (数据类型为故障类型(4)时选填) |
| isLocationType| "null" | Integer  | true  | 是否为位置类型(默认 1) 可选参数: 是: 1, 否: 2 |
| locationType| "null" | Integer  | true  | 位置类型 可选参数: 经度: 1, 纬度: 2, 海拔: 3 |
| lowerLimit| "null" | Float  | true  | 下限 (数据类型为数值类型(1)时选填) |
| pointDataType| 3 | Integer  | true  | 数据格式 可选参数: 数值: 1, 字符串: 3, 故障: 4, 布尔: 5, 定长字符串: 11, 变长字符串: 12, 定长binary: 13, 变长binary: 14, 有符号整型: 15, 无符号整型: 16, 单精度浮点型: 17, 双精度浮点型: 18, bit类型: 19 |
| pointDataTypeLabel| "字符串" | String  | true  | 字符串 |
| productID| "2ioNzM" | String  | true  | 产品 ID |
| productName| "MQTT产品" | String  | true  | 产品名称 |
| unitName| "null" | String  | true  | 单位名称 (数据类型为数值类型(1)时选填) |
| unitSymbol| "null" | String  | true  | 单位符号 (数据类型为数值类型(1)时选填) |
| updateAt| "null" | Date  | true  | 更新时间 |
| upperLimit| "null" | Float  | true  | 上限 (数据类型为数值类型(1)时选填) |









## 查看功能点详情

**API 定义：**

```bash
GET /api/v1/data_points/{dataPointIntID}
```

**请求示例：**

```bash
GET /api/v1/data_points/42
```

**成功响应：**

```bash
status 200
```

```json
{
  "binarySize": null,
  "createAt": "2018-10-15 17:37:53",
  "createUser": "actorcloud",
  "dataPointID": "fsdf",
  "dataPointName": "测试字符",
  "dataStep": null,
  "dataTransType": 1,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 42,
  "isDiscard": null,
  "isLocationType": 0,
  "locationType": null,
  "lowerLimit": null,
  "pointDataType": 3,
  "productID": "2ioNzM",
  "unitName": null,
  "unitSymbol": null,
  "updateAt": null,
  "upperLimit": null
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| binarySize| "null" | Integer  | true  | 二进制长度 (数值类型为二进制(11)时选填) |
| createAt| "2018-10-15 17:37:53" | Date  | true  | 创建时间 |
| createUser| "actorcloud" | String  | true  | 创建用户 |
| dataPointID| "fsdf" | String  | true  | 功能点 ID |
| dataPointName| "测试字符" | String  | true  | 功能点名称 |
| dataStep| "null" | Float  | true  | 数据步长 (数据类型为数值类型(1)时选填) |
| dataTransType| 1 | Integer  | true  | 数据传输类型 可选参数: 只上报: 1, 只下发: 2, 可上报可下发: 3 |
| detail| "null" | String  | true  | 备注 |
| enum| [] | JSON  | true  | 枚举值 |
| faultValue| "null" | String  | true  | 故障值 (数据类型为故障类型(4)时必填) |
| id| 42 | Integer  | true  | id |
| isDiscard| "null" | Integer  | true  | 是否丢弃该消息 (数据类型为故障类型(4)时选填) |
| isLocationType| "null" | Integer  | true  | 是否为位置类型(默认 1) 可选参数: 是: 1, 否: 2 |
| locationType| "null" | Integer  | true  | 位置类型 可选参数: 经度: 1, 纬度: 2, 海拔: 3 |
| lowerLimit| "null" | Float  | true  | 下限 (数据类型为数值类型(1)时选填) |
| pointDataType| 3 | Integer  | true  | 数据格式 可选参数: 数值: 1, 字符串: 3, 故障: 4, 布尔: 5, 定长字符串: 11, 变长字符串: 12, 定长binary: 13, 变长binary: 14, 有符号整型: 15, 无符号整型: 16, 单精度浮点型: 17, 双精度浮点型: 18, bit类型: 19 |
| productID| "2ioNzM" | String  | true  | 产品 ID |
| unitName| "null" | String  | true  | 单位名称 (数据类型为数值类型(1)时选填) |
| unitSymbol| "null" | String  | true  | 单位符号 (数据类型为数值类型(1)时选填) |
| updateAt| "null" | Date  | true  | 更新时间 |
| upperLimit| "null" | Float  | true  | 上限 (数据类型为数值类型(1)时选填) |









## 创建功能点

**API 定义：**

```bash
POST /api/v1/data_points
```

**请求示例：**

```bash
POST /api/v1/data_points
```

```json
{
  "dataPointName": "经度",
  "dataPointID": "x",
  "productIntID": "128",
  "pointDataType": 1,
  "dataTransType": 1,
  "unitName": "经度",
  "unitSymbol": "x",
  "upperLimit": "180",
  "lowerLimit": "0",
  "dataStep": "0.01",
  "enum": [],
  "isLocationType": 1,
  "locationType": 1
}
```


**成功响应：**

```bash
status 201
```

```json
{
  "binarySize": null,
  "createAt": "2018-09-30 16:46:53",
  "dataPointID": "x",
  "dataPointName": "经度",
  "dataStep": 0.01,
  "dataTransType": 1,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 28,
  "isDiscard": null,
  "isLocationType": 1,
  "locationType": 1,
  "lowerLimit": 0,
  "pointDataType": 1,
  "productID": "p3zZMy",
  "unitName": "经度",
  "unitSymbol": "x",
  "updateAt": null,
  "upperLimit": 180
}
```







## 编辑功能点

**API 定义：**

```bash
PUT /api/v1/data_points/{dataStreamsID}
```

**请求示例：**

```bash
PUT /api/v1/data_points/31
```

```json
{
  "binarySize": null,
  "createAt": "2018-09-30 16:49:06",
  "createUser": "ActorCloud",
  "dataPointID": "name",
  "dataPointName": "name",
  "dataStep": null,
  "dataTransType": 3,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 31,
  "isDiscard": null,
  "isLocationType": 0,
  "locationType": null,
  "lowerLimit": null,
  "pointDataType": 1,
  "productID": "p3zZMy",
  "unitName": null,
  "unitSymbol": null,
  "updateAt": null,
  "upperLimit": null
}
```


**成功响应：**

```bash
status 200
```

```json
{
  "binarySize": null,
  "createAt": "2018-09-30 16:49:06",
  "dataPointID": "name",
  "dataPointName": "name",
  "dataStep": null,
  "dataTransType": 3,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 31,
  "isDiscard": null,
  "isLocationType": 0,
  "locationType": null,
  "lowerLimit": null,
  "pointDataType": 1,
  "productID": "p3zZMy",
  "unitName": null,
  "unitSymbol": null,
  "updateAt": "2018-09-30 16:51:00",
  "upperLimit": null
}
```







## 删除功能点

**API 定义：**

```bash
DELETE /api/v1/data_points?ids={dataStreamsIDS}
```

**请求示例：**

```bash
DELETE /api/v1/data_points?ids=30
```

**成功响应：**

```bash
status 204
```

```json
""
```







