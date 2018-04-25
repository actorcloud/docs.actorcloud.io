# 错误处理

### 错误定义

HTTP Status Code = 20X 可视为操作成功，状态码大于 300 时错误信息会在响应体里返回。

- **ActorCloud** REST API 常见 HTTP 响应码：

| 响应码     | 返回信息  | 说明 |
| ------ | ----------- | ------- |
| 200 | 响应资源 | 响应成功 |
| 201 | -- | 操作成功 |
| 204 | -- | 删除成功 |
| 401 | 错误提示 | 认证失败 |
| 403 | 当前权限信息 | 无操作权限 |
| 404 | 错误提示 | URL 或资源不存在 |
| 422 | 错误字段 | 表单字段错误 |


### 错误信息

请求错误时 REST API 返回 JSON 格式错误信息，结构定义如下：

- message： 错误的语义化说明；
- errors： 不定数量的错误信息；
- errorCode：错误码，用于区分错误类型。


```json
{
    "errorCode": "BAD_REQUEST",
    "errors": null,
    "message": "Bad request"
}
```


### 常见的错误码

| 错误码     | 中文含义  | 英文含义 |
| ------ | ----------- | ------- |
| BAD_REQUEST | 错误请求 | Bad Request |
| REFERENCED_ERROR | 引用错误 | Referenced Error |
| PARAMETER_INVALID | 请求参数错误 | Parameter Invalid |
| FORMAT_INVALID | 表单错误 | Format Invalid |
| DATA_EXISTED | 数据已存在 | Data Existed |
| DATA_NOT_FOUND | 访问的数据不存在 | Data Not Found |
| LOGIN_REQUIRED | 请先登录 | Login Required |
| PERMISSION_DENIED | 暂无权限 | Permission Denied |
| INTERNAL_ERROR | 服务器错误 | Internal Error |
| AUTH_FAILED | 认证失败 | Auth Failed |
| RESOURCE_LIMITED | 资源限制 | Resource Limited |
| PAY_EXCEPTION | 支付异常 | Pay Exception |
