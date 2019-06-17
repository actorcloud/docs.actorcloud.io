# 分组操作

### 获取分组列表

**API 定义：**
```bash
GET /api/v1/groups?_page=1&_limit=10 
```

**成功响应：**

```json
{
  "items": [
    {
      "createAt": "2018-03-23 13:51:48",
      "description": "上报数据",
      "devices": [
        {
          "id": 427
        },
        {
          "id": 428
        }
      ],
      "groupID": "9H6t1L",
      "groupName": "上报分组",
      "id": 4,
      "productID": "kGBizO",
      "productName": "环境监测",
      "updateAt": null,
      "userIntID": 6
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

| 字段名         | 示例值                             | 字段类型    | 说明         |
| ----------- | ------------------------------- | ------- | ---------- |
| createAt    | 2018-03-23 13:51:48             | Date    | 创建时间       |
| description | 上报数据                            | String  | 产品描述       |
| devices     | [] | Array   | 该产品下所有设备 ID |
| groupID     | 9H6t1L                          | String  | 分组标识符      |
| groupName   | 上报分组                            | String  | 分组名称       |
| id          | 4                               | Integer | 主键 ID      |
| productID   | kGBizO                          | String  | 产品识别码      |
| productName | 环境监测                            | String  | 产品名称       |
| updateAt    |                                 | Date    | 更新时间       |
| userIntID   | 6                               | Integer | 创建用户主键ID   |


**查询参数：**
```bash
GET /api/v1/products?_page=1&_limit=10&pruductName_like=共享单车
```

**字段说明：**

| 字段名     | 类型   | 说明          |
| ------ | --- | ----------- |
| groupName_like  | String | 按分组名称过滤   |
| groupID_like  | String | 按分组标识符过滤   |


### 创建一个分组

**API 定义：**
```bash
POST /api/v1/groups
```

**请求体：**

```json
{
  "groupName": "默认分组",
  "productID": "kGBizO",
  "description": "默认分组"
}
```

**字段说明：**

| 字段名         | 示例值    | 字段类型   | 是否必填 | 说明    |
| ----------- | ------ | ------ | ---- | ----- |
| groupName   | 默认分组   | String | true | 所属分组  |
| productID   | kGBizO | String | true | 产品识别码 |
| description | 默认分组   | String | true | 分组描述  |


### 查看分组详情

**API 定义：**

```bash
GET /api/v1/groups/{group_id}
```

**成功响应：**

```json
{
  "createAt": "2018-03-23 13:51:48",
  "createUser": "EMQ",
  "description": "上报数据",
  "devices": [
    {
      "id": 427
    },
    {
      "id": 428
    }
  ],
  "groupID": "9H6t1L",
  "groupName": "上报分组",
  "id": 4,
  "productID": "kGBizO",
  "updateAt": null,
  "userIntID": 6
}
```

**字段说明：**

| 字段名         | 示例值                             | 字段类型    | 说明         |
| ----------- | ------------------------------- | ------- | ---------- |
| createAt    | 2018-03-23 13:51:48             | Date    | 创建时间       |
| createUser  | EMQ                             | String  | 创建用户名      |
| description | 上报数据                            | String  | 产品描述       |
| devices     | [] | Array   | 该产品下所有设备主键 ID |
| groupID     | 9H6t1L                          | String  | 分组标识符      |
| groupName   | 上报分组                            | String  | 所属分组       |
| id          | 4                               | Integer | 主键 ID      |
| productID   | kGBizO                          | String  | 产品识别码      |
| updateAt    |                                 | Date    | 更新时间       |
| userIntID   | 6                               | Integer | 创建用户主键 ID   |


### 编辑分组信息

**API 定义：**

```bash
PUT /api/v1/groups/{group_id}
```

**请求体：**

```json
{
  "description": "默认分组",
  "groupName": "默认分组",
  "id": 4,
  "productID": "Gq2kxM"
}
```


### 删除分组

**API 定义：**
```bash
# 单个删除
DELETE /api/v1/groups?ids={group_id}

# 支出批量删除，多个 group_id 使用英文逗号分隔
DELETE /api/v1/groups?ids={group_id, group_id, group_id}
```


**成功响应：**

```bash
HTTP Status Code 204
```

