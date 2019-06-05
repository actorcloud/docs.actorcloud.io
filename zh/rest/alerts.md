# 告警管理

## 当前告警详情

#### API 定义

```bash
GET /api/v1/current_alerts/<alert_id>
```

#### 请求示例

```bash
GET /api/v1/current_alerts/11
```

#### 成功响应

```bash
status 200
```

```json
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
  "ruleIntID": 1,
  "ruleName": "规则1",
  "startTime": "2018-10-16 15:20:05",
  "updateAt": null
}
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| alertContent| 电流过大，请检查设备 | String  | 告警内容 |
| alertDetail| {"temp":23} | Object  | 产生告警的详细内容 |
| alertName| 电流过大 | String  | 告警名称 |
| alertServity| 1 | Integer  | 告警等级，紧急：1，主要：2，次要：3，警告：4 |
| alertTimes| 12 | Integer  | 告警次数 |
| createAt| 2019-09-13 21:26:01 | Date  | 创建时间 |
| deviceID| 8d05fa80d5be5a42a0c999865222176d | String  | 设备 ID |
| deviceName| 智能电表 | String  | 设备名称 |
| id| 60 | Integer  | id |
| ruleIntID| 2ioNzM | String  | 规则 id |
| ruleName| 规则1 | String  | 规则名称 |
| startTime| 2018-10-17 15:20:16 | Date  | 告警开始时间 |
| updateAt| "2018-10-17 11:50:16" | Date  | 更新时间 |


## 当前告警列表

#### API 定义

```bash
GET /api/v1/current_alerts?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/current_alerts?_page=1&_limit=10
```

#### 成功响应

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
      "ruleIntID": 1,
      "ruleName": "规则名称",
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


## 历史告警详情

#### API 定义

```bash
GET /api/v1/history_alerts/<alert_id>
```

#### 请求示例

```bash
GET /api/v1/history_alerts/11
```

#### 成功响应

```bash
status 200
```

```json
{
  "alertContent": "告警内容",
  "alertDetail": {
    "temp": 24
  },
  "alertName": "告警1",
  "alertSeverity": 1,
  "alertSeverityLabel": "紧急",
  "alertTimes": 12,
  "createAt": "2019-06-05 05:53:29",
  "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
  "deviceName": "测试设备1",
  "endTime": "2019-05-24 08:00:00",
  "id": 1,
  "startTime": "2019-05-20 00:00:00",
  "updateAt": null
}
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| endTime| 2018-10-17 15:20:16 | Date  | 告警结束时间 |


## 历史告警列表

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
      "alertContent": "告警内容",
      "alertDetail": {
        "temp": 24
      },
      "alertName": "告警1",
      "alertSeverity": 1,
      "alertSeverityLabel": "紧急",
      "alertTimes": 12,
      "createAt": "2019-06-05 05:53:29",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "deviceName": "测试设备1",
      "endTime": "2019-05-24 08:00:00",
      "id": 1,
      "startTime": "2019-05-20 00:00:00",
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











