# 双向认证

使用 8884 端口进行 SSL/TLS 通信，服务器设备使用绑定的证书验证设备身份：

- 需要使用**设备编号**与**连接用户名**
- 设备认证方式为 证书
- 使用平台绑定设备的证书
- 设备接入地址为：`iot.actorcloud.io:8884`

设备绑定相应证书详情页中，点击下载证书后解压文件得到：

```bash
common_certs/
├── common.crt # 自签名证书；
├── common.key # 自签名证书密钥
└── root_ca.crt  # ActorCloud 根证书；
```

使用双向认证接入的设备无需密码验证，但设备需绑定并使用其匹配证书才能认证成功。

示例代码：

```python
# --coding: utf-8--

import ssl
import paho.mqtt.client as mqtt
import json

# 设备需要在 ActorCloud 平台注册且认证方式为 "证书"
client_id = 'ef14be2cfd2f555397bde858750cbda8'
username = 'ef14be2cfd2f555397bde858750cbda8'
password = '630a7f6b54d75e50a2e59b4baca722d4'
HOST = 'iot.actorcloud.io'

# 双向认证端口
PORT = 8884


def on_connect(client, userdata, flags, rc):
    print('Connected with result code ' + str(rc))
    client.subscribe('/hello')
    client.publish('/hello', json.dumps({
        'hello': 'world'
    }))


# 设备下发、分组控制及其他方式 publish 的消息统一在此处理
def on_message(client, userdata, msg):
    print('topic: {0}, payload: {1}'.format(msg.topic, str(msg.payload)))
    # 其他处理逻辑
    pass

client = mqtt.Client(client_id=client_id)
# 双向认证只需要使用用户名
client.username_pw_set(username)
# 设置 PROT 为 8884 并设置根证书、签名证书及密钥路径

client.tls_set(ca_certs='./common_certs/root_ca.crt',
	certfile='./common_certs/common.crt',
	keyfile='./common_certs/common.key',
	tls_version=ssl.PROTOCOL_TLSv1_2)

client.tls_insecure_set(True)

client.on_connect = on_connect
client.on_message = on_message

client.connect(HOST, PORT)

client.loop_forever()
```


如果您使用 MQTT fx 测试，连接设置如下：

- 按照**设备安全**页面中提供的信息设置基础接入信息，需要指定 Client ID 与 User Name，同时使用 8884 端口，指定证书 SSL/TLS 加密方式并设置自签名证书路径：

![mqttfx_config_3](./_assets/mqttfx_config_3.png)

![mqttfx_config_4](./_assets/mqttfx_config_4.png)
