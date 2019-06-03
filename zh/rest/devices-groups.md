# 分组

## 查看分组列表

#### API 定义

```bash
GET /api/v1/groups?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/groups?_page=1&_limit=10
```

#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "createAt": "2018-10-17 11:20:30",
      "description": "POST.*groups/",
      "deviceCount": 0,
      "groupID": "EtTuHU",
      "groupName": "默认分组",
      "id": 18,
      "productID": "2ioNzM",
      "productName": "MQTT产品",
      "updateAt": null
    },
    {
      "createAt": "2018-10-09 11:23:57",
      "description": "这是 LwM2M 的分组",
      "deviceCount": 3,
      "groupID": "kUoTjf",
      "groupName": "LwM2M 分组",
      "id": 17,
      "productID": "t2Oa5W",
      "productName": "LWM2M产品",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 3,
    "limit": 10,
    "page": 1
  }
}
```







## 查看分组详情

#### API 定义

```bash
GET /api/v1/groups/{groupIntID}
```

#### 请求示例

```bash
GET /api/v1/groups/15
```

#### 成功响应

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "createUser": "ActorCloud",
  "description": "默认分组",
  "groupID": "rTpABa",
  "groupName": "默认分组",
  "id": 15,
  "productID": "p3zZMy",
  "productName": "智能锁",
  "updateAt": null
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| createAt| "2018-09-30 16:42:38" | Date  | 创建时间 |
| createUser| "ActorCloud" | String  | 创建用户 |
| description| "认分组..." | String  | 描述 |
| groupID| "rTpABa" | String  | 分组 ID |
| groupName| "默认分组" | String  | 分组名称 |
| id| 15 | Integer  | id |
| productID| "p3zZMy" | String  | 产品 ID |
| productName| "智能锁" | String  | 产品名称 |
| updateAt| "null" | Date  | 更新时间 |









## 创建分组

#### API 定义

```bash
POST /api/v1/groups
```

#### 请求示例

```bash
POST /api/v1/groups
```

```json
{
  "productID": "p3zZMy",
  "groupName": "默认分组",
  "description": "默认分组"
}
```


#### 成功响应

```bash
status 201
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "默认分组",
  "groupID": "rTpABa",
  "groupName": "默认分组",
  "id": 15,
  "productID": "p3zZMy",
  "updateAt": null
}
```







## 编辑分组

#### API 定义

```bash
PUT /api/v1/groups/{groupIntID}
```

#### 请求示例

```bash
PUT /api/v1/groups/15
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "createUser": "ActorCloud",
  "description": "默认分组",
  "groupID": "rTpABa",
  "groupName": "默认分组2",
  "id": 15,
  "productID": "p3zZMy",
  "productName": "智能锁",
  "updateAt": null
}
```


#### 成功响应

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:42:38",
  "description": "默认分组",
  "groupID": "rTpABa",
  "groupName": "默认分组2",
  "id": 15,
  "productID": "p3zZMy",
  "updateAt": "2018-09-30 16:42:56"
}
```







## 删除分组

#### API 定义

```bash
DELETE /api/v1/groups?ids={groupIntIDS}
```

#### 请求示例

```bash
DELETE /api/v1/groups?ids=15
```

#### 成功响应

```bash
status 204
```

```json
""
```
