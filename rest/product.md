# 产品操作

### 获取产品列表

**API 定义：**
```bash
GET /api/v1/products?_page=1&_limit=10 
```

**成功响应：**

```json
{
  "items": [
    {
      "createAt": "2018-03-01 16:43:57",
      "description": "共享单车",
      "devices": [],
      "id": 9,
      "productID": "Gq2kxM",
      "productName": "共享单车",
      "updateAt": null,
      "userID": 2
    }
  ],
  "meta": {
    "count": 5,
    "limit": 10,
    "page": 1
  }
}
```

**字段说明：**

| 字段名         | 示例值                 | 字段类型   | 说明   |
| ----------- | ------------------- | ------ | ---- |
| createAt    | 2018-03-01 16:43:57 | Date | 创建时间     |
| description | 共享单车                | String | 描述   |
| devices     | []                    | Array |  该设备下所有设备 ID     |
| id          | 9                   | Integer | 主键 ID     |
| productID   | Gq2kxM              | String | 产品识别码     |
| productName | 共享单车                | String | 设备名称 |
| updateAt    |                     | Date |  更新时间    |
| userID      | 2                   | Integer | 创建者主键 ID      |


**查询参数：**
```bash
GET /api/v1/products?_page=1&_limit=10&pruductName_like=共享单车
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| productName_like  | String | 按产品名称过滤   |




### 创建一个产品

**API 定义：**
```bash
POST /api/v1/products
```

**请求体：**

```json
{
  "productName": "共享单车",
  "description": "共享单车系列"
}
```

**字段说明：**

| 字段名         | 示例值   | 字段类型   | 是否必填  | 说明   |
| ----------- | ----- | ------ | ----- | ---- |
| productName | 共享单车 | String | true  | 产品名称 |
| description | 共享单车系列  | String | false | 产品描述   | 



### 查看产品详情

**API 定义：**

```bash
GET /api/v1/products/{product_id}
```

**成功响应：**

```bash
{
  "createAt": "2018-03-01 16:43:57",
  "createUser": "EMQ",
  "description": "共享单车",
  "deviceCount": 0,
  "devices": [],
  "id": 9,
  "productID": "Gq2kxM",
  "productName": "共享单车",
  "updateAt": null,
  "userID": 2
}
```

**字段说明：**

| 字段名         | 示例值                 | 字段类型   | 说明   |
| ----------- | ------------------- | ------ | ---- |
| createUser  | EMQ              | String | 创建用户名     |
| description | 共享单车                | String | 产品描述   |
| deviceCount | 0                   | Integer | 该产品下设备数量     |
| devices     |                     | Array | 该产品下所有设备 ID     |
| id          | 9                   | Integer | 产品 ID     |
| productID   | Gq2kxM              | String | 产品识别码     |
| productName | 共享单车                | String | 产品名称 |
| userID      | 2                   | Integer | 创建者 ID    | 


### 编辑产品信息

**API 定义：**

```bash
PUT /api/v1/products/{product_id}
```

**请求体：**

```json
{
  "description": "共享单车传感器",
  "productName": "共享单车"
}
```


### 删除产品

**API 定义：**
```bash
# 单个删除
DELETE /api/v1/products?ids={product_id}

# 支出批量删除，多个 product_id 使用英文逗号分隔
DELETE /api/v1/products?ids={product_id, product_id, product_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```

