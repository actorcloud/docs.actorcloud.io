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
      "createAt": "2018-03-02 17:30:40",
      "description": "默认分组",
      "devices": [
        {
          "id": 9
        }
      ],
      "groupID": "84Ffn9",
      "groupName": "默认分组",
      "id": 3,
      "productID": "Gq2kxM",
      "productName": "共享单车",
      "updateAt": null,
      "userID": 2
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

| 字段名         | 示例值                 | 字段类型    | 说明       |
| ----------- | ------------------- | ------- | -------- |
| createAt    | 2018-03-02 17:30:40 | Date    | 创建时间     |
| description | 默认分组                | String  | 描述       |
| devices     | [3]     | Array   | 分组下所有设备 ID  |
| groupID     | 84Ffn9              | String  |  分组标识符        |
| groupName   | 默认分组                | String  |          |
| id          | 3                   | Integer | 分组主键 ID    |
| productID   | Gq2kxM              | String  |   所属产品标识符       |
| productName | 共享单车                | String  | 所属产品名称     |
| updateAt    |                     | Date    | 更新时间     |
| userID      | 2                   | Integer | 创建者主键 ID |


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
  "productID": "Gq2kxM",
  "description": "默认分组"
}
```

**字段说明：**

| 字段名         | 示例值    | 字段类型   | 是否必填  | 说明  |
| ----------- | ------ | ------ | ----- | --- |
| groupName   | 默认分组   | String | true  | 分组名称    |
| productID   | Gq2kxM | String | true  | 所属产品标识符    |
| description | 默认分组   | String | false | 描述  |


### 查看分组详情

**API 定义：**

```bash
GET /api/v1/groups/{group_id}
```

**成功响应：**

```bash
{
  "createAt": "2018-03-02 17:30:40",
  "createUser": "EMQ",
  "description": "默认分组",
  "devices": [],
  "groupID": "84Ffn9",
  "groupName": "默认分组",
  "id": 3,
  "productID": "Gq2kxM",
  "updateAt": null,
  "userID": 2
}
```

**字段说明：**

 | 字段名         | 示例值                 | 字段类型    | 说明       |
| ----------- | ------------------- | ------- | -------- |
| createAt    | 2018-03-02 17:30:40 | Date    | 创建时间     |
| createUser  | EMQ              | String  |  创建者用户名        |
| description | 默认分组                | String  | 描述       |
| devices     |                     | Array   | 分组下所有设备 ID  |
| groupID     | 84Ffn9              | String  |   分组标识符       |
| groupName   | 默认分组                | String  |  分组名称        |
| id          | 3                   | Integer | 分组主键 ID    |
| productID   | Gq2kxM              | String  |  分组所属产品标识符        |
| updateAt    |                     | Date    | 更新时间     |
| userID      | 2                   | Integer | 创建者主键 ID | 


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
  "id": 3,
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

