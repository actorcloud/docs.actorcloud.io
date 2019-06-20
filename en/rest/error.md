# Error handling

### Error definition

HTTP Status Code = 20X can be considered as successful operation. When the status code is greater than 300, the error message will be returned in the response body.

- **ActorCloud** REST API Common HTTP response code:

| Response code | Returned messages | Description |
| ------ | ----------- | ------- |
| 200 | Response resource | Successful response |
| 201 | -- | Successful operation |
| 204 | -- | Successfully deletion |
| 401 | Error message | Authentication failed |
| 403 | Current permission information | No operation permission |
| 404 | Error message | URL or resource does not exist |
| 422 | Error field | Form field error |


### Error message

When the request is sent incorrectly, the REST API returns error information in JSON format:

```json
{
    "errorCode": "AUTH_FAILED",
    "errors": {
    	"email": ["auth failed"]
    },
    "message": "auth failed"
}
```

The structure is defined as follows:

- message: Semantic description of errors；
- errors: Error message which can be empty , and contains the field in which the error occurred and the corresponding error message； 
- errorCode:Error code to distinguish the type of error.



### Common error code comparison table

| Error code | Chinese meaning | English meaning |
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
