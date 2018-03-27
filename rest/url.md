# 认证与基础查询

使用 REST API 之前需要创建一个[应用](../application/application.md)，使用应用 ID 与应用密钥作为调用 API。

![](/assets/app_create.png)


### URL 地址

- REST API 访问 URL 地址：
```bash
https://www.actorcloud.io/api/v1/
```

### 认证方式

- 基于 Basic Auth 认证，用户名为应用 ID，密码为应用密钥：
```bash
curl -v --basic -u <AppID>:<AppSecret> -k https://www.actorcloud.io/api/v1/overview/current_count
```

### 消息体格式

- 在 HTTP 请求头中定义以下两个值，并在 POST PUT 请求时发送 JSON 格式文本数据。
```bash
Content-Type: 'application/json'
Accept: 'application/json'
```

### 响应
- HTTP Status Code = 20X 可视为操作成功，状态码大于 300 时错误信息会在响应体里返回。

错误示例：
```bash
# Status 401
{
  "message": "登录后才能访问"
}

# Status 422
{
  "errors": { 
      "deviceID": ["设备编号重复"]
  },
  "message": "无效的表单"
}
```

**ActorCloud** 常见 HTTP 响应码：

| 响应码     | 返回信息  | 说明 |
| ------ | ----------- | ------- |      
| 200 | 响应资源 | 响应成功 |
| 201 | -- | 操作成功 |
| 204 | -- | 删除成功 |
| 401 | 错误提示 | 认证失败 |
| 403 | 当前权限信息 | 无操作权限 |
| 404 | 错误提示 | URL 不存在 |
| 422 | 错误字段 | 表单字段错误 |



### 资源列表

- 在资源列表页中，可以使用 URL 参数进行分页查询。

请求示例：

```bash
GET /api/v1/products?_page=1&_limit=10
```

字段说明：

| 字段     | 类型   | 说明          |
| ------ | --- | ----------- |
| _page  | Integer | 当前页码，默认为 1   |
| _limit | Integer | 分页大小，默认为 10 |


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
资源列表响应信息中 **items** 为资源列表数据，**meta** 为分页信息。

meta 定义：

| 字段     | 类型   | 说明          |
| ------ | --- | ----------- |
| count  | Integer | 符合条件总数   |
| limit | Integer | 分页大小 |
| page | Integer | 当前页码 |


### 查询参数
某些资源中，可以使用 URL 参数进行资源过滤，查询格式：**字段名_查询指令=查询值**。

请求示例：

```bash
GET /api/v1/products?_page=1&_limit=10&productName_like=共享单车
```
常见查询指令：

| 指令     | 类型   | 说明          |
| ------ | --- | ----------- |
| *_like  | -- | 模糊查询   |

> 具体查询参数参见各资源下文档。

