# 单向认证

使用 8883 端口进行 SSL/TLS 加密通信：

- 设备使用设备编号、设备密钥、连接用户名认证
- 设备认证方式为 Token
- 设备接入地址为：`iot.acotecloud.io:8883`

使用设备编号，设备密钥，连接用户名可以连接到消息服务器：

- 设备编号：设备连接 MQTT 服务器时，client_id 即为设备编号；
- 设备密钥：对应设备连接时 MQTT 连接密码；
- 连接用户名：对应设备连接时 MQTT 连接用户名。

设备详情页的认证信息模块，可以查看设备认证信息:

![device_security](./_assets/device_security_2.png)

示例接入代码：

```python
# --coding: utf-8--

import ssl
import paho.mqtt.client as mqtt
import json

# 设备需要在 ActorCloud 平台注册
client_id = '6198289b38939358305813fe41551483b1f0'
username = '6198289b38939358305813fe41551483b1f0'
password = '2312686198f5722ef570b855694655f1b475'
HOST = 'iot.actorcloud.io'
PORT = 8883


def on_connect(client, userdata, flags, rc):
    print('Connected with result code ' + str(rc))
    client.subscribe('/hello')
    client.publish('/hello', json.dumps({
        'hello': 'world'
    }))


# 设备下发 其他方式 publish 的消息统一在此处理
def on_message(client, userdata, msg):
    print('topic: {0}, payload: {1}'.format(msg.topic, str(msg.payload)))
    # 其他处理逻辑
    pass

client = mqtt.Client(client_id=client_id)

# 单向认证仍需要用户名密码
client.username_pw_set(username, password)

# 设置证书信息
client.tls_set(certfile=None, keyfile=None, cert_reqs=ssl.CERT_REQUIRED, ciphers=None)
client.on_connect = on_connect
client.on_message = on_message

client.connect(HOST, PORT)

client.loop_forever()

```

如果您使用 MQTT fx 测试，连接设置如下：

- 按照**设备安全**页面中提供的信息设置基础接入信息，使用 8883 端口，指定证书 SSL/TLS 加密方式

![mqttfx_config_1](./_assets/mqttfx_config_1.png)

![mqttfx_config_2](./_assets/mqttfx_config_2.png)
