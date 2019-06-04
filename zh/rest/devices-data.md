# 设备数据


## 实时事件

#### API 定义

```bash
GET /api/v1/devices/<device_id>/last_event
```

#### 请求示例

```bash
GET /api/v1/devices/11/last_event
```

#### 成功响应

```json
[
  {
    "data": "{'hum': {'time': 1558343626, 'value': 15}, 'temp': {'time': 1558343626, 'value': 59}}",
    "dataType": 1,
    "dataTypeLabel": "event",
    "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
    "msgTime": "2019-05-20 17:13:46",
    "responseResult": null,
    "streamID": "qwerty",
    "topic": "world"
  }
]
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| data| {'hum': {'time': 1558343626, 'value': 15}, 'temp': {'time': 1558343626, 'value': 59}} | String  | 上报数据 |
| dataType| event| String  | 数据类型，包含：event，request，response |
| deviceID| dbabdf8ad91ef595bf9e9f35b1eef433 | String  | 设备 ID |
| msgTime| 2019-05-20 17:13:46 | Date  | 事件时间|
| responseResult| {} | JSON  | 响应结果|
| streamID| 0921uq | String  | 数据流标识|
| topic| world | String  | topic|


## 历史事件

#### API 定义

```bash
GET /api/v1/devices/<device_id>/events?_page={page}&_limit={pageSize}&timeType=history&start_time={start_time}&end_time={end_time}
```

参数说明

| 参数             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| timeType| history | String  | 事件类型 |
| start_time| 2019-05-27+16:26:15 | Date  | 开始时间 |
| end_time| 2019-05-30+00:00:15 | Date  | 结束时间 |

#### 请求示例

```bash
GET /api/v1/devices/11/events?_page=1&_limit=10&timeType=realtime&start_time=2019-05-27+16:26:15&end_time=2019-06-03+16:26:15
```

#### 成功响应

```json
{
  "items": [
    {
      "data": "{'hum': {'time': 1558343626, 'value': 15}, 'temp': {'time': 1558343626, 'value': 59}}", 
      "dataType": 1, 
      "dataTypeLabel": "event", 
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433", 
      "msgTime": "2019-05-20 17:13:46", 
      "responseResult": null, 
      "streamID": "qwerty", 
      "topic": "world"
    }, 
    {
      "data": "{'hum': {'time': 1558343623, 'value': 52}, 'temp': {'time': 1558343623, 'value': 89}}", 
      "dataType": 1, 
      "dataTypeLabel": "event", 
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433", 
      "msgTime": "2019-05-20 17:13:43", 
      "responseResult": null, 
      "streamID": "qwerty", 
      "topic": "world"
    }, 
    {
      "data": "{'hum': {'time': 1558343620, 'value': 34}, 'temp': {'time': 1558343620, 'value': 84}}", 
      "dataType": 1, 
      "dataTypeLabel": "event", 
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433", 
      "msgTime": "2019-05-20 17:13:40", 
      "responseResult": null, 
      "streamID": "qwerty", 
      "topic": "world"
    }, 
    {
      "data": "{'hum': {'time': 1558343617, 'value': 5}, 'temp': {'time': 1558343617, 'value': 48}}", 
      "dataType": 1, 
      "dataTypeLabel": "event", 
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433", 
      "msgTime": "2019-05-20 17:13:37", 
      "responseResult": null, 
      "streamID": "qwerty", 
      "topic": "world"
    }, 
    {
      "data": "{'hum': {'time': 1558343614, 'value': 39}, 'temp': {'time': 1558343614, 'value': 72}}", 
      "dataType": 1, 
      "dataTypeLabel": "event", 
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433", 
      "msgTime": "2019-05-20 17:13:34", 
      "responseResult": null, 
      "streamID": "qwerty", 
      "topic": "world"
    }
  ], 
  "meta": {
    "count": 5, 
    "limit": 10, 
    "page": 1
  }
}
```

## 实时功能数据

#### API 定义

```bash
GET /api/v1/devices/<device_id>/last_capability_data
```

#### 请求示例

```bash
GET /api/v1/devices/11/last_capability_data
```

#### 成功响应

```json
[
  {
    "dataPointID": "hum",
    "dataPointName": "湿度",
    "msgTime": "2019-05-20 17:13:46",
    "streamID": "qwerty",
    "streamName": "温湿度数据流",
    "value": 15
  },
  {
    "dataPointID": "temp",
    "dataPointName": "温度",
    "msgTime": "2019-05-20 17:13:46",
    "streamID": "qwerty",
    "streamName": "温湿度数据流",
    "value": 59
  }
]
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| dataPointID| hum | String  | 功能点标识 |
| dataPointName| 温度| String  | 功能点名称 |
| msgTime| 2019-05-20 17:13:46 | Date  | 事件时间|
| streamID| 0921uq | String  |数据流标识|
| streamName| 温湿度数据流 | String  | 数据流名称|
| value| 59 | String/Integer/Float/Boolean  | 59|


## 历史功能数据

#### API 定义

```bash
GET /api/v1/devices/<device_id>/capability_data?_page={page}&_limit={pageSize}&timeType=history&start_time={start_time}&end_time={end_time}
```

参数说明

| 参数             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| timeType| history | String  | 事件类型 |
| start_time| 2019-05-27+16:26:15 | Date  | 开始时间 |
| end_time| 2019-05-30+00:00:15 | Date  | 结束时间 |

#### 请求示例

```bash
GET /api/v1/devices/11/capability_data?_page=1&_limit=10&timeType=realtime&start_time=2019-05-27+16:26:15&end_time=2019-06-03+16:26:15
```

#### 成功响应

```json
{
  "items": [
    {
      "dataPointID": "hum",
      "dataPointName": "湿度",
      "msgTime": "2019-05-20 17:13:46",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 15
    },
    {
      "dataPointID": "temp",
      "dataPointName": "温度",
      "msgTime": "2019-05-20 17:13:46",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 59
    },
    {
      "dataPointID": "hum",
      "dataPointName": "湿度",
      "msgTime": "2019-05-20 17:13:43",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 52
    },
    {
      "dataPointID": "temp",
      "dataPointName": "温度",
      "msgTime": "2019-05-20 17:13:43",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 89
    },
    {
      "dataPointID": "hum",
      "dataPointName": "湿度",
      "msgTime": "2019-05-20 17:13:40",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 34
    },
    {
      "dataPointID": "temp",
      "dataPointName": "温度",
      "msgTime": "2019-05-20 17:13:40",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 84
    }
  ],
  "meta": {
    "count": 5,
    "limit": 10,
    "page": 1
  }
}
```


## 实时图表数据

#### API 定义

```bash
GET /api/v1/devices/<device_id>/last_data_charts?timeUnit={time_unit}
```

参数说明

| 参数     | 示例 | 类型   | 说明                               |
| -------- | ---- | ------ | ---------------------------------- |
| timeUnit | 5m   | String | 时间单位，支持：5m、1h、6h、1d、1w |

#### 请求示例

```bash
GET /api/v1/devices/11/last_data_charts?timeUnit=1h
```

#### 成功响应

```json
[
  {
    "chartData": {
      "time": "2019-05-20 17:13:46",
      "value": 59
    },
    "chartName": "温湿度数据流/温度",
    "dataPointID": "temp",
    "streamID": "qwerty"
  },
  {
    "chartData": {
      "time": "2019-05-20 17:13:46",
      "value": 15
    },
    "chartName": "温湿度数据流/湿度",
    "dataPointID": "hum",
    "streamID": "qwerty"
  }
]
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| chartData.time| 2019-05-20 17:01:01 | Date  | 图表数据，时间 |
| chartData.value| 90 | String/Integer/Float/Boolean  | 图表数据，时间对应的值 |
| chartName| 温湿度数据流/湿度| String  | 图表名称 |
| dataPointID| hum | String  |功能点标识|
| streamID| 0921uq | String  |数据流标识|


## 历史图表数据

#### API 定义

```bash
GET /api/v1/devices/<device_id>/charts?timeUnit={time_unit}
```

参数说明

| 参数     | 示例 | 类型   | 说明                               |
| -------- | ---- | ------ | ---------------------------------- |
| timeUnit | 5m   | String | 时间单位，支持：5m、1h、6h、1d、1w |

#### 请求示例

```bash
GET /api/v1/devices/11/charts?timeUnit=1w
```

#### 成功响应

```json
[
  {
    "chartData": {
      "time": [
        "2019-05-20 17:01:01",
        "2019-05-20 17:01:04",
        "2019-05-20 17:01:07",
        "2019-05-20 17:01:10",
        "2019-05-20 17:01:13",
        "2019-05-20 17:01:16",
        "2019-05-20 17:01:19",
        "2019-05-20 17:01:22",
        "2019-05-20 17:01:25",
        "2019-05-20 17:01:28"
      ],
      "value": [
        18,
        50,
        55,
        25,
        8,
        69,
        89,
        75,
        23,
        47
      ]
    },
    "chartName": "温湿度数据流/温度",
    "dataPointID": "temp",
    "streamID": "qwerty"
  },
  {
    "chartData": {
      "time": [
        "2019-05-20 17:01:01",
        "2019-05-20 17:01:04",
        "2019-05-20 17:01:07",
        "2019-05-20 17:01:10",
        "2019-05-20 17:01:13",
        "2019-05-20 17:01:16",
        "2019-05-20 17:01:19",
        "2019-05-20 17:01:22",
        "2019-05-20 17:01:25",
        "2019-05-20 17:01:28"
      ],
      "value": [
        90,
        48,
        60,
        92,
        37,
        55,
        71,
        5,
        34,
        42
      ]
    },
    "chartName": "温湿度数据流/湿度",
    "dataPointID": "hum",
    "streamID": "qwerty"
  }
]
```

#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| chartData.time| ["2019-05-20 17:01:01","2019-05-20 17:01:04"] | List  | 图表数据，时间 |
| chartData.value| [90,48] | List  | 图表数据，时间对应的值 |



## 网关下的设备数据

#### API 定义

```bash
GET /api/v1/device_capability_data?gatewayIntID={gateway_id}
```

参数说明

| 参数         | 示例 | 类型    | 说明    |
| ------------ | ---- | ------- | ------- |
| gatewayIntID | 12   | Integer | 网关 id |

#### 请求示例

```bash
GET /api/v1/device_capability_data?gatewayIntID=12
```

#### 成功响应

```json
{
  "items": [
    {
      "dataPointID": "hum",
      "dataPointName": "湿度",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "网关设备",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 80.0
    },
    {
      "dataPointID": "temp",
      "dataPointName": "温度",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "网关设备",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "温湿度数据流",
      "value": 37.0
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```