# 当前告警

## 查看当前告警

**API 定义：**

```bash
GET /api/v1/current_alerts?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/current_alerts?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "alertContent": "电流过大，请检查设备",
      "alertDetail": {
        "Addr": 52,
        "Current": 0.199,
        "PowerConsumption": 1.4000000000000001,
        "State": 1,
        "TimeStamp": 1539756645,
        "Voltage": 239.39000000000001
      },
      "alertName": "电流过大",
      "alertSeverity": 1,
      "alertSeverityLabel": "紧急",
      "alertTimes": 8125,
      "createAt": "2018-10-16 18:12:56",
      "deviceID": "8d05fa80d5be5a42a0c999865222176d",
      "deviceName": "智能电表01",
      "id": 116,
      "startTime": "2018-10-16 15:20:05",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 1,
    "limit": 10,
    "page": 1
  }
}
```







## 处理当前告警

**API 定义：**

```bash
DELETE /api/v1/current_alerts?ids={alertIDS}
```

**请求示例：**

```bash
DELETE /api/v1/current_alerts?ids=11
```

**成功响应：**

```bash
status 204
```

```json
""
```







