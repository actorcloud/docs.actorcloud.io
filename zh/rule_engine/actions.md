# 动作管理

动作是数据流里的数据满足规则时触发的事件，用于业务规则和围栏规则。

平台支持 5 种类型的动作。

#### 1. 告警

将触发规则的相关信息记录到平台[告警管理](/alert/alert.md)中，包含有告警等级，告警标题与告警内容；

#### 2. 邮件

发送告警邮件到指定邮箱，可以使用逗号分隔输入多个邮箱，需要填写邮件标题与邮件内容。邮件内容支持模板。例如：

```
室内温度超过${temp}，湿度低于${hum}，请及时查看。
```
模板变量对应规则 SQL 的 SELECT 结果

#### 3. Webhook

将消息推送到指定 URL 地址，创建前必须通过验证，请参考验证流程进行配置。

消息格式为：

```json
{
  "action": {
    "url": "",
    "token": ""
  },
  "value": {
  }
}
```

- action：包含 Webhook 的地址和验证 token
- value：规则 SQL 的 SELECT 结果

#### 4. 指令下发

指定 topic，平台将下发指定消息到指定设备。

#### 5. MQTT 消息转发

转发消息到指定的 topic。

---

**附：Webhook 验证流程**

**ActorCloud** 根据填入的 URL 地址与 token 进行认证，服务器将发送 GET 请求到填写的服务器地址 URL 上，请求携带参数如下:
- timestamp：时间戳；
- nonce：随机数；
- signature：加密签名，signature 为 token、 timestamp、nonce 变量值拼接并进行 sha1 加密后的值。

请求地址为：`{webhook_url}?signature=xxx&?timestamp=yyy&nonce=zzz`

Webhook 接口收到请求后，需要进行校验，校验规则如下：

- 按 token、timestamp、nonce 顺序，将三个变量的值拼接为一个字符串，并用 sha1 进行加密；
- 将加密后的字符串与请求中的 signature 字符串对比。

若相等则验证通过，直接以 JSON 格式返回 nonce 随机数：

```json
{
  "nonce": "zzz"
}
```