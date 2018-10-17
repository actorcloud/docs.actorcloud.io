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







