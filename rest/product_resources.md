# 资源定义

## 查看资源列表

**API 定义：**

```bash
GET /api/v1/product_resources?productID={productID}&_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/product_resources?productID=2ioNzM&_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "codeValue": "serialNumber",
      "codeValueLabel": "序列号",
      "createAt": "2018-10-17 13:43:03",
      "dataPointIntID": 42,
      "dataPointName": "测试字符",
      "id": 6,
      "itemName": null,
      "productItemIntID": null,
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
| codeValue| "serialNumber" | Integer  | true  | code 的值 |
| codeValueLabel| "序列号" | String  | true  | 序列号 |
| createAt| "2018-10-17 13:43:03" | Date  | true  | 创建时间 |
| dataPointIntID| 42 | Integer  | true  | 功能点 ID |
| dataPointName| "测试字符" | String  | true  | 功能点名称 |
| id| 6 | Integer  | true  | id |
| itemName| "null" | String  | true  | 属性名 |
| productItemIntID| "null" | Integer  | true  | 产品 Item |
| updateAt| "null" | Date  | true  | 更新时间 |









## 创建资源

**API 定义：**

```bash
POST /api/v1/product_resources
```

**请求示例：**

```bash
POST /api/v1/product_resources
```

```json
{
  "codeValue": "serialNumber",
  "dataPointIntID": 42,
  "productIntID": "60",
  "productItemIntID": 0
}
```


**成功响应：**

```bash
status 201
```

```json
{
  "codeValue": "serialNumber",
  "createAt": "2018-10-17 13:43:03",
  "dataPointIntID": 42,
  "id": 6,
  "productItemIntID": null,
  "updateAt": null
}
```







## 删除资源

**API 定义：**

```bash
DELETE /api/v1/product_resources?ids={resourcesIDS}
```

**请求示例：**

```bash
DELETE /api/v1/product_resources?ids=3
```

**成功响应：**

```bash
status 204
```

```json
""
```







