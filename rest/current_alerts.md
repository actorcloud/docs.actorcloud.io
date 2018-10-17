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


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| alertContent| "电流过大，请检查设备" | String  | true  | 告警内容 |
| alertDetail| {"Addr":52,"Current":0.199,"PowerConsumption":1.4000000000000001,"State":1,"TimeStamp":1539756645,"Voltage":239.39000000000001} | JSON  | true  | 告警详情 |
| alertName| "电流过大" | String  | true  | 告警名称 |
| alertSeverity| 1 | Integer  | true  | 告警级别，可选参数: 紧急: 1, 主要: 2, 次要: 3, 警告: 4 |
| alertSeverityLabel| "紧急" | String  | true  | 紧急 |
| alertTimes| 8125 | Integer  | true  | 告警次数 |
| createAt| "2018-10-16 18:12:56" | Date  | true  | 创建时间 |
| deviceID| "8d05fa80d5be5a42a0c999865222176d" | String  | true  | 设备 ID |
| deviceName| "智能电表01" | String  | true  | 设备名称 |
| id| 116 | Integer  | true  | id |
| startTime| "2018-10-16 15:20:05" | Date  | true  | 开始时间 |
| updateAt| "null" | Date  | true  | 更新时间 |









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







