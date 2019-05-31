# REST API

### 认证与基础查询

使用 REST API 之前需要创建一个应用，使用应用 ID 与应用密钥作为调用 API 的凭证。

![](/assets/app_create.png)

> 请合理分配应用权限并妥善保管应用信息，并及时销毁过期密钥。

### URL 地址

- REST API 访问 URL 地址：
```bash
https://console.actorcloud.io/api/v1/
```

### 认证方式

- 基于 Basic Auth 认证，用户名为应用 ID，密码为应用密钥：

```bash
curl -v --basic -u <AppID>:<AppSecret> -k https://console.actorcloud.io/api/v1/overview/current_count
```

### 代码示例

- Python 通过 REST API 获取当前设备列表：

```python
# --coding: utf-8--
import urllib2, base64

# 访问地址 认证信息
base_url = 'https://actorcloud.io/api/v1'
app_id = 'erGNyh'
app_token = '177154ed13955fff9acbcf46bb637532'

# 构造 URL
request = urllib2.Request('%s/devices' % base_url)
# basic 认证
auth = base64.b64encode('%s:%s' % (app_id, app_token))
request.add_header("Authorization", "Basic %s" % auth)   
result = urllib2.urlopen(request)

# 获取得到数据
print(result.read())
```

具体 API 列表参考 [REST API](../rest/rest.md)。

