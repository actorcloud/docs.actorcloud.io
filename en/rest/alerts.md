# Alert Management

## Current Alert Details

#### API Definition

```bash
GET /api/v1/current_alerts/<alert_id>
```

#### Request Example

```bash
GET /api/v1/current_alerts/11
```

#### Successful Response

```bash
status 200
```

```json
{
  "alertContent": "The current is excessive. Please check the equipment.",
  "alertDetail": {
    "Addr": 52,
    "Current": 0.199,
    "PowerConsumption": 1.4000000000000001,
    "State": 1,
    "TimeStamp": 1539756645,
    "Voltage": 239.39000000000001
  },
  "alertName": "excessive current",
  "alertSeverity": 1,
  "alertSeverityLabel": "urgent",
  "alertTimes": 8125,
  "createAt": "2018-10-16 18:12:56",
  "deviceID": "8d05fa80d5be5a42a0c999865222176d",
  "deviceName": "Smart meter01",
  "id": 116,
  "ruleIntID": 1,
  "ruleName": "Rule1",
  "startTime": "2018-10-16 15:20:05",
  "updateAt": null
}
```

#### Field description

| Field name    | Sample value   | Field type |  Description       |
| --------------- | ----------------- | ------- | ------------------- |
| alertContent| The current is excessive. Please check the equipment | String  | Alert Content |
| alertDetail| {"temp":23} | Object  | Generate alert details |
| alertName| Excessive current | String  | Alert name |
| alertServity| 1 | Integer  | Alert level, urgent: 1, primary: 2, secondary: 3, warning: 4 |
| alertTimes| 12 | Integer  | Number of alerts |
| createAt| 2019-09-13 21:26:01 | Date  | Create time |
| deviceID| 8d05fa80d5be5a42a0c999865222176d | String  | Device ID |
| deviceName| Smart meter | String  | Device name |
| id| 60 | Integer  | id |
| ruleIntID| 2ioNzM | String  | Rule id |
| ruleName| Rule1 | String  | Rule name |
| startTime| 2018-10-17 15:20:16 | Date  | Alert start time |
| updateAt| "2018-10-17 11:50:16" | Date  | Update time |


## Current alert list

#### API definition

```bash
GET /api/v1/current_alerts?_page={page}&_limit={pageSize}
```

#### Request Example

```bash
GET /api/v1/current_alerts?_page=1&_limit=10
```

#### Successful Response

```bash
status 200
```

```json
{
  "items": [
    {
      "alertContent": "The current is excessive. Please check the equipment",
      "alertDetail": {
        "Addr": 52,
        "Current": 0.199,
        "PowerConsumption": 1.4000000000000001,
        "State": 1,
        "TimeStamp": 1539756645,
        "Voltage": 239.39000000000001
      },
      "alertName": "excessive current",
      "alertSeverity": 1,
      "alertSeverityLabel": "Urgent",
      "alertTimes": 8125,
      "createAt": "2018-10-16 18:12:56",
      "deviceID": "8d05fa80d5be5a42a0c999865222176d",
      "deviceName": "Smart meter01",
      "id": 116,
      "ruleIntID": 1,
      "ruleName": "Rule name",
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


## Historical alert details

#### API  Definition

```bash
GET /api/v1/history_alerts/<alert_id>
```

#### Request Example

```bash
GET /api/v1/history_alerts/11
```

#### Successful Response

```bash
status 200
```

```json
{
  "alertContent": "Alert Content",
  "alertDetail": {
    "temp": 24
  },
  "alertName": "Alert 1",
  "alertSeverity": 1,
  "alertSeverityLabel": "Urgent",
  "alertTimes": 12,
  "createAt": "2019-06-05 05:53:29",
  "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
  "deviceName": "Test device 1",
  "endTime": "2019-05-24 08:00:00",
  "id": 1,
  "startTime": "2019-05-20 00:00:00",
  "updateAt": null
}
```

#### Field description

| Field name    | Sample value   | Field type |  Description       |
| --------------- | ----------------- | ------- | ------------------- |
| endTime| 2018-10-17 15:20:16 | Date  | Alert end time |


## Historical alert list

#### API Definition

```bash
GET /api/v1/history_alerts?_page={page}&_limit={pageSize}
```

#### Request Example

```bash
GET /api/v1/history_alerts?_page=1&_limit=10
```

#### Successful Response

```bash
status 200
```

```json
{
  "items": [
    {
      "alertContent": "Alert Content",
      "alertDetail": {
        "temp": 24
      },
      "alertName": "Alert1",
      "alertSeverity": 1,
      "alertSeverityLabel": "Urgent",
      "alertTimes": 12,
      "createAt": "2019-06-05 05:53:29",
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "deviceName": "Test device1",
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











