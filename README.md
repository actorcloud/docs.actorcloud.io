ActorCloud 使用手册
----
**ActorCloud** 是一个综合的物联网设备管理平台，具备完善的设备管理、设备连接（MQTT与CoAP）、认证鉴权、设备消息存储、设备控制、应用能力、用户管理、用户/应用角色管理 等功能。

访问 [https://www.actorcloud.io](https://www.actorcloud.io/) 可试用 **ActorCloud** 完整功能。


### 接入准备

  - 一台能够访问公共网络的计算机；

  - 如果您已经有现成设备，则可以使用设备接入 **ActorCloud** 来完成本教程；

  - 如果您没有现成设备，可以通过使用 [MQTT 客户端](http://emqtt.com/clients)或[在线测试中心](https://console.actorcloud.io/mqtt_client)利用软件环境来模拟一个接入设备，查看[设备接入指南](./access_guide/device.md)。


### 接入方式

尽管同一账户下任意接入方式中的设备消息是互通的，但是您需要依据产品需求选择合适的接入方式。

通常使用 SSL/TLS 在带来更高的安全性的同时会降低连接性能，一些设备性能受限只能运行轻量级的 CoAP 客户端，而 WebSocket 则被推荐用于浏览器上实时通信。


##### 附：**ActorCloud** 支持接入协议

| 名称  | 接入地址 | 使用说明 |
| ------- | ------- | ----|
| MQTT  | iot.actorcloud.io:1883 | 普通 MQTT 接入 |
| MQTT/SSL  | iot.actorcloud.io:8883 | SSL MQTT 接入（单向认证） |
| MQTT/SSL  | iot.actorcloud.io:8884 | SSL MQTT 接入 （双向认证）|
| CoAP  | iot.actorcloud.io:5683/mqtt | MQTT/CoAP 接入 |
| CoAP/DTLS  | iot.actorcloud.io:5684/mqtt | DTLS MQTT/CoAP 接入 |
| MQTT/WebSocket  | iot.actorcloud.io:8083/mqtt | MQTT/WebSocket 接入 |
| MQTT/WebSocket/SSL  | iot.actorcloud.io:8084/mqtt | SSL MQTT/WebSocket 接入 |

