# 历史告警

## 查看历史告警

#### API 定义

```bash
GET /api/v1/history_alerts?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/history_alerts?_page=1&_limit=10
```

#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "alertContent": "湿度过高",
      "alertDetail": {
        "HUMIDITY": 59.9,
        "TEMPERATURE": 21.8,
        "TimeStamp": 1539140375
      },
      "alertName": "湿度过高",
      "alertSeverity": 1,
      "alertSeverityLabel": "紧急",
      "alertTimes": 48,
      "createAt": "2018-10-10 10:59:35",
      "deviceID": "3F_TEMP_1",
      "deviceName": "工业温湿度传感器",
      "endTime": "2018-10-10 10:59:35",
      "id": 7,
      "startTime": "2018-10-10 10:55:30",
      "updateAt": null
    },
    {
      "alertContent": "湿度过高",
      "alertDetail": {
        "HUMIDITY": 59.9,
        "TEMPERATURE": 21.4,
        "TimeStamp": 1539140094
      },
      "alertName": "湿度过高",
      "alertSeverity": 1,
      "alertSeverityLabel": "紧急",
      "alertTimes": 9,
      "createAt": "2018-10-10 10:54:54",
      "deviceID": "3F_TEMP_1",
      "deviceName": "工业温湿度传感器",
      "endTime": "2018-10-10 10:54:54",
      "id": 6,
      "startTime": "2018-10-10 10:54:09",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 5,
    "limit": 10,
    "page": 1
  }
}
```







## 删除历史告警

#### API 定义

```bash
DELETE /api/v1/history_alerts?ids=alertIDS
```

#### 请求示例

```bash
DELETE /api/v1/history_alerts?ids=3
```

#### 成功响应

```bash
status 204
```

```json
""
```







