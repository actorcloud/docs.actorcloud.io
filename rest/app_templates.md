# 应用模板

## 查看应用模板列表

**API 定义：**

```bash
GET /api/v1/app_templates?productID={productID}
```

**请求示例：**

```bash
GET /api/v1/app_templates?productID=2ioNzM
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "createAt": "2018-10-17 13:47:01",
      "dataPointID": "wrqwr",
      "dataPointIntID": 41,
      "dataPointName": "测试布尔",
      "dataStreamIntID": 17,
      "dataStreamName": "测试",
      "dataTransType": 3,
      "defaultValues": [
        {
          "dataPointID": "temp",
          "dataPointName": "温度",
          "enum": [],
          "id": 1,
          "pointDataType": 1,
          "value": 1
        },
        {
          "dataPointID": "humy",
          "dataPointName": "湿度",
          "enum": [],
          "id": 2,
          "pointDataType": 1,
          "value": 2
        },
        {
          "dataPointID": "str_",
          "dataPointName": "字符串",
          "enum": [],
          "id": 26,
          "pointDataType": 3,
          "value": "3"
        },
        {
          "dataPointID": "fsdf",
          "dataPointName": "测试字符",
          "enum": [],
          "id": 42,
          "pointDataType": 3,
          "value": "4"
        }
      ],
      "enum": null,
      "id": 8,
      "instanceID": null,
      "itemID": null,
      "itemName": null,
      "itemOperations": null,
      "objectID": null,
      "places": [
        0,
        0
      ],
      "productID": "2ioNzM",
      "productItemIntID": null,
      "templateName": "模板",
      "templateType": 1,
      "templateTypeLabel": "开关",
      "topic": "hello",
      "updateAt": null
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

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| createAt| "2018-10-17 13:47:01" | Date  | true  | 创建时间 |
| dataPointID| "wrqwr" | String  | true  | 功能点 ID |
| dataPointIntID| 41 | Integer  | true  | 功能点 ID |
| dataPointName| "测试布尔" | String  | true  | 功能点名称 |
| dataStreamIntID| 17 | Integer  | true  | 数据流 ID |
| dataStreamName| "测试" | String  | true  | 测试 |
| dataTransType| 3 | Integer  | true  | 数据传输类型 可选参数: 只上报: 1, 只下发: 2, 可上报可下发: 3 |
| defaultValues| [{"dataPointID":"temp","dataPointName":"温度","enum":[],"id":1,"pointDataType":1,"value":1},{"dataPointID":"humy","dataPointName":"湿度","enum":[],"id":2,"pointDataType":1,"value":2},{"dataPointID":"str_","dataPointName":"字符串","enum":[],"id":26,"pointDataType":3,"value":"3"},{"dataPointID":"fsdf","dataPointName":"测试字符","enum":[],"id":42,"pointDataType":3,"value":"4"}] | JSON  | true  | 同一数据流下其它功能点默认值 |
| enum| "null" | JSON  | true  | 枚举值 |
| id| 8 | Integer  | true  | id |
| instanceID| "null" | Integer  | true  | 实例 ID |
| itemID| "null" | Integer  | true  | 属性ID |
| itemName| "null" | String  | true  | 属性名 |
| itemOperations| "null" | String  | true  | 支持操作，R/W/RW/E |
| objectID| "null" | Integer  | true  | 对象 ID |
| places| [0,0] | JSON  | true  | 页面位置 |
| productID| "2ioNzM" | String  | true  | 产品 ID |
| productItemIntID| "null" | Integer  | true  | 产品 Item |
| templateName| "模板" | String  | true  | 模板名称 |
| templateType| 1 | Integer  | true  | 模板格式 可选参数: 开关: 1, 枚举: 2, 数值: 3, 字符串: 4, 布尔: 5, 时间: 6 |
| templateTypeLabel| "开关" | String  | true  | 开关 |
| topic| "hello" | String  | true  | 主题 |
| updateAt| "null" | Date  | true  | 更新时间 |









## 删除应用模板

**API 定义：**

```bash
DELETE /api/v1/app_templates?ids={appTemplateIDS}
```

**请求示例：**

```bash
DELETE /api/v1/app_templates?ids=5
```

**成功响应：**

```bash
status 204
```

```json
""
```







## 查看设备应用模板

**API 定义：**

```bash
GET /api/v1/device_consoles/{deviceIntID}
```

**请求示例：**

```bash
GET /api/v1/device_consoles/46
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "createAt": "2018-10-17 13:47:01",
      "dataPointID": "wrqwr",
      "dataPointIntID": 41,
      "dataPointName": "测试布尔",
      "dataStreamIntID": 17,
      "dataStreamName": "测试",
      "dataTransType": 3,
      "defaultValues": [
        {
          "dataPointID": "temp",
          "dataPointName": "温度",
          "enum": [],
          "id": 1,
          "pointDataType": 1,
          "value": 1
        },
        {
          "dataPointID": "humy",
          "dataPointName": "湿度",
          "enum": [],
          "id": 2,
          "pointDataType": 1,
          "value": 2
        },
        {
          "dataPointID": "str_",
          "dataPointName": "字符串",
          "enum": [],
          "id": 26,
          "pointDataType": 3,
          "value": "3"
        },
        {
          "dataPointID": "fsdf",
          "dataPointName": "测试字符",
          "enum": [],
          "id": 42,
          "pointDataType": 3,
          "value": "4"
        }
      ],
      "enum": null,
      "id": 8,
      "instanceID": null,
      "places": [
        0,
        0
      ],
      "productID": "2ioNzM",
      "productItemIntID": null,
      "templateName": "模板",
      "templateType": 1,
      "templateTypeLabel": "开关",
      "topic": "hello",
      "updateAt": null,
      "value": ""
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

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| createAt| "2018-10-17 13:47:01" | Date  | true  | 创建时间 |
| dataPointID| "wrqwr" | String  | true  | 功能点 ID |
| dataPointIntID| 41 | Integer  | true  | 功能点 ID |
| dataPointName| "测试布尔" | String  | true  | 功能点名称 |
| dataStreamIntID| 17 | Integer  | true  | 数据流 ID |
| dataStreamName| "测试" | String  | true  | 测试 |
| dataTransType| 3 | Integer  | true  | 数据传输类型 可选参数: 只上报: 1, 只下发: 2, 可上报可下发: 3 |
| defaultValues| [{"dataPointID":"temp","dataPointName":"温度","enum":[],"id":1,"pointDataType":1,"value":1},{"dataPointID":"humy","dataPointName":"湿度","enum":[],"id":2,"pointDataType":1,"value":2},{"dataPointID":"str_","dataPointName":"字符串","enum":[],"id":26,"pointDataType":3,"value":"3"},{"dataPointID":"fsdf","dataPointName":"测试字符","enum":[],"id":42,"pointDataType":3,"value":"4"}] | JSON  | true  | 同一数据流下其它功能点默认值 |
| enum| "null" | JSON  | true  | 枚举值 |
| id| 8 | Integer  | true  | id |
| instanceID| "null" | Integer  | true  | 实例 ID |
| places| [0,0] | JSON  | true  | 页面位置 |
| productID| "2ioNzM" | String  | true  | 产品 ID |
| productItemIntID| "null" | Integer  | true  | 产品 Item |
| templateName| "模板" | String  | true  | 模板名称 |
| templateType| 1 | Integer  | true  | 模板格式 可选参数: 开关: 1, 枚举: 2, 数值: 3, 字符串: 4, 布尔: 5, 时间: 6 |
| templateTypeLabel| "开关" | String  | true  | 开关 |
| topic| "hello" | String  | true  | 主题 |
| updateAt| "null" | Date  | true  | 更新时间 |
| value| "null" | String  | true  | key 对应的值 |









