# 数据流

## 查看数据流列表

#### API 定义

```bash
GET /api/v1/data_streams?productID={productID}&_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/data_streams?productID=2ioNzM&_page=1&_limit=10
```

#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "id": 17,
      "productName": "MQTT产品",
      "streamDataType": 1,
      "streamDataTypeLabel": "JSON",
      "streamName": "测试",
      "streamType": 2,
      "streamTypeLabel": "数据下发",
      "topic": "hello"
    },
    {
      "id": 1,
      "productName": "MQTT产品",
      "streamDataType": 1,
      "streamDataTypeLabel": "JSON",
      "streamName": "温湿度",
      "streamType": 1,
      "streamTypeLabel": "终端上报",
      "topic": "hum_temp"
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```







## 查看数据流详情

#### API 定义

```bash
GET /api/v1/data_streams/{dataStreamsID}
```

#### 请求示例

```bash
GET /api/v1/data_streams/9
```

#### 成功响应

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:48:22",
  "dataPointNames": [
    "经度",
    "纬度"
  ],
  "dataPoints": [
    28,
    29
  ],
  "detail": null,
  "id": 9,
  "productID": "p3zZMy",
  "streamDataType": 1,
  "streamDataTypeLabel": "JSON",
  "streamName": "location",
  "streamType": 1,
  "topic": "topic",
  "updateAt": null,
  "userIntID": 23
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| createAt| "2018-09-30 16:48:22" | Date  | 创建时间 |
| dataPointNames| ["经度","纬度"] | Array  | 功能点名称 |
| dataPoints| [28,29] | Array  | 功能点 ID |
| detail| "null" | String  | 备注 |
| id| 9 | Integer  | id |
| productID| "p3zZMy" | String  | 产品 ID |
| streamDataType| 1 | Integer  | 数据类型 可选参数: JSON: 1, 二进制: 2 |
| streamDataTypeLabel| "JSON" | String  | 数据类型 可选参数: JSON: 1, 二进制: 2 |
| streamName| "location" | String  | 数据流名称 |
| streamType| 1 | Integer  | 数据流类型 可选参数: 终端上报: 1, 数据下发: 2 |
| topic| "topic" | String  | 主题 |
| updateAt| "null" | Date  | 更新时间 |
| userIntID| 23 | Integer  | 用户 ID |









## 创建数据流

#### API 定义

```bash
POST /api/v1/data_points
```

#### 请求示例

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


#### 成功响应

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







## 编辑数据流

#### API 定义

```bash
PUT /api/v1/data_points/{dataStreamsID}
```

#### 请求示例

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


#### 成功响应

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







## 删除数据流

#### API 定义

```bash
DELETE /api/v1/data_points?ids={dataStreamsIDS}
```

#### 请求示例

```bash
DELETE /api/v1/data_points?ids=30
```

#### 成功响应

```bash
status 204
```

```json
""
```







