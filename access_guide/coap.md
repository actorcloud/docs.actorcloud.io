# CoAP 设备接入

### 在线测试

- 成功创建设备后，点击**测试中心** -> **CoAP 客户端**可以选取设备进行连接测试。按照设备名称搜索选择一个设备，点击上报数据即可发送消息。

![](/assets/coap.png)



### CoAP 在 **ActorCloud** 的实现

- 暂只支持 GET、PUT 方法，分别对应**订阅**、**发布**概念；

- 核心层逻辑、业务功能与 MQTT 客户端一致；

- 暂不支持双向认证接入。


CoAP 连接示例代码：

```python
# --coding: utf-8--


from coapthon.client.helperclient import HelperClient


# 演示库仅支持使用 IP 地址接入

host = "139.198.190.35"
port = 5683
path = "/mqtt/hello_topic?c=10C61F1A1F40&u=10C61F1A1F40&p=ce07c199187811e8a12b525440546606"


def foo(response):
    print(response.pretty_print())


client = HelperClient(server=(host, port))
response = client.observe(path, callback=foo)

```

单向认证示例代码：

```python
# --coding: utf-8--


import ssl
from socket import (socket, AF_INET, SOCK_DGRAM,
                    SOL_SOCKET, SO_REUSEADDR)
from dtls.wrapper import wrap_client
from coapthon.client.helperclient import HelperClient


# 演示库仅支持使用 IP 地址接入

host = "139.198.190.35"
# 默认端口 5683，单向认证使用 5684 端口
port = 5684
path = "/mqtt/hello_topic?c=10C61F1A1F40&u=10C61F1A1F40&p=ce07c199187811e8a12b525440546606"

_sock = socket(AF_INET, SOCK_DGRAM)
_sock.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
_sock = wrap_client(_sock,
                    # keyfile="./key.key",
                    # certfile="./cert.crt",
                    # 单向认证根证书
                    ca_certs="./root_ca.crt",
                    cert_reqs=ssl.CERT_NONE,
                    # ciphers="RSA",
                    do_handshake_on_connect=False)


def foo(response):
    print(response.pretty_print())


client = HelperClient(server=(host, port), sock=_sock)
response = client.observe(path, callback=foo)
```

> 参考项目地址：https://github.com/emqtt/emq-coap

