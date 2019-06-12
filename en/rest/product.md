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
      "createAt": "2018-03-24 13:59:02",
      "description": "desc",
      "devices": [
        {
          "id": 433
        }
      ],
      "id": 18,
      "productID": "fSPvWw",
      "productName": "默认产品",
      "updateAt": null,
      "userIntID": 6
    },
    {
      "createAt": "2018-03-23 11:38:28",
      "description": "环境监测系列",
      "devices": [
        {
          "id": 427
        },
        {
          "id": 428
        },
        {
          "id": 432
        }
      ],
      "id": 11,
      "productID": "kGBizO",
      "productName": "环境监测",
      "updateAt": null,
      "userIntID": 6
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

| 字段名         | 示例值                 | 字段类型    | 说明         |
| ----------- | ------------------- | ------- | ---------- |
| createAt    | 2018-03-28 10:41:15 | Date    | 创建时间       |
| description | 环境监测                | String  | 产品描述       |
| devices     |                     | Array   | 该产品下所有设备 ID |
| id          | 21                  | Integer | 主键 ID      |
| productID   | DcSzpG              | String  | 产品识别码      |
| productName | 环境监测器               | String  | 产品名称       |
| updateAt    |                     | Date    | 更新时间       |
| userIntID   | 6                   | Integer | 创建用户主键 ID   |
  
  


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
  "productName": "环境监测器",
  "description": "环境监测"
}
```

**字段说明：**

| 字段名         | 示例值   | 字段类型   | 是否必填 | 说明   |
| ----------- | ----- | ------ | ---- | ---- |
| productName | 环境监测器 | String | true | 产品名称 |
| description | 环境监测  | String | true | 产品描述 |
  
  




### 查看产品详情

**API 定义：**

```bash
GET /api/v1/products/{product_id}
```
  
**成功响应：**

```json
{
  "createAt": "2018-03-23 11:38:28",
  "createUser": "EMQ",
  "description": "环境监测系列",
  "deviceCount": 3,
  "devices": [
    {
      "id": 427
    },
    {
      "id": 428
    },
    {
      "id": 432
    }
  ],
  "id": 11,
  "productID": "kGBizO",
  "productName": "环境监测",
  "updateAt": null,
  "userIntID": 6
}
```

**字段说明：**

| 字段名         | 示例值                                             | 字段类型    | 说明         |
| ----------- | ----------------------------------------------- | ------- | ---------- |
| createAt    | 2018-03-23 11:38:28                             | Date    | 创建时间       |
| createUser  | EMQ                                             | String  | 创建用户名      |
| description | 环境监测系列                                          | String  | 产品描述       |
| deviceCount | 3                                               | Integer | 该产品下设备数量   |
| devices     | [] | Array   | 该产品下所有设备ID |
| id          | 11                                              | Integer | 产品ID       |
| productID   | kGBizO                                          | String  | 产品识别码      |
| productName | 环境监测                                            | String  | 产品名称       |
| updateAt    |                                                 | Date    | 更新时间       |
| userIntID   | 6                                               | Integer | 创建用户主键ID   |
  
  
  




### 编辑产品信息

**API 定义：**

```bash
PUT /api/v1/products/{product_id}
```

**请求体：**

```json
{
  "productName": "环境监测器",
  "description": "环境监测使用"
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

