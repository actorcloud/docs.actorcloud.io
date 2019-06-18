# Device data


## Real-time event

#### API 

```bash
GET /api/v1/devices/<device_id>/last_event
```

#### Example

```bash
GET /api/v1/devices/11/last_event
```

#### Response

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

#### Field description

| Name         | Sample value   | Type |  Description       |
| --------------- | ----------------- | ------- | ------------------- |
| data| {'hum': {'time': 1558343626, 'value': 15}, 'temp': {'time': 1558343626, 'value': 59}} | String  | Reporting data |
| dataType| event| String  | Data type，including：event，request，response |
| deviceID| dbabdf8ad91ef595bf9e9f35b1eef433 | String  | Device ID |
| msgTime| 2019-05-20 17:13:46 | Date  | Event time |
| responseResult| {} | JSON  | Response result |
| streamID| 0921uq | String  | Data stream ID |
| topic| world | String  | topic|


## Historical event

#### API 

```bash
GET /api/v1/devices/<device_id>/events?_page={page}&_limit={pageSize}&start_time={start_time}&end_time={end_time}
```

Parameter Description

| Name     | Sample value   | Type |  Description       |
| --------------- | ----------------- | ------- | ------------------- |
| start_time| 2019-05-27+16:26:15 | Date  | start time |
| end_time| 2019-05-30+00:00:15 | Date  | end time |

#### Example

```bash
GET /api/v1/devices/11/events?_page=1&_limit=10&start_time=2019-05-27+16:26:15&end_time=2019-06-03+16:26:15
```

#### Response

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

## Real-time functional data

#### API 

```bash
GET /api/v1/devices/<device_id>/last_capability_data
```

#### Example

```bash
GET /api/v1/devices/11/last_capability_data
```

#### Response

```json
[
  {
    "dataPointID": "hum",
    "dataPointName": "humidity",
    "msgTime": "2019-05-20 17:13:46",
    "streamID": "qwerty",
    "streamName": "Temperature and humidity data stream",
    "value": 15
  },
  {
    "dataPointID": "temp",
    "dataPointName": "Temperature",
    "msgTime": "2019-05-20 17:13:46",
    "streamID": "qwerty",
    "streamName": "Temperature and humidity data stream",
    "value": 59
  }
]
```

#### Field description

| Name         | Sample value   | Type |  Description       |
| --------------- | ----------------- | ------- | ------------------- |
| dataPointID| hum | String  | Data point ID |
| dataPointName| Temperatur | String  | Data point ID |
| msgTime| 2019-05-20 17:13:46 | Date  | Event time |
| streamID| 0921uq | String  |Data stream ID|
| streamName| Temperature and humidity data stream | String  | Data stream name |
| value| 59 | String/Integer/Float/Boolean  | 59|


## Historical function data

#### API 

```bash
GET /api/v1/devices/<device_id>/capability_data?_page={page}&_limit={pageSize}&start_time={start_time}&end_time={end_time}
```

Field description

|              |                |     |                    |
| --------------- | ----------------- | ------- | ------------------- |
| start_time| 2019-05-27+16:26:15 | Date  | start_time |
| end_time| 2019-05-30+00:00:15 | Date  | end_time |

#### Example

```bash
GET /api/v1/devices/11/capability_data?_page=1&_limit=10&start_time=2019-05-27+16:26:15&end_time=2019-06-03+16:26:15
```

#### Response

```json
{
  "items": [
    {
      "dataPointID": "hum",
      "dataPointName": "Humidity",
      "msgTime": "2019-05-20 17:13:46",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 15
    },
    {
      "dataPointID": "temp",
      "dataPointName": "Temperature",
      "msgTime": "2019-05-20 17:13:46",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 59
    },
    {
      "dataPointID": "hum",
      "dataPointName": "Humidity",
      "msgTime": "2019-05-20 17:13:43",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 52
    },
    {
      "dataPointID": "temp",
      "dataPointName": "Temperature",
      "msgTime": "2019-05-20 17:13:43",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 89
    },
    {
      "dataPointID": "hum",
      "dataPointName": "Humidity",
      "msgTime": "2019-05-20 17:13:40",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 34
    },
    {
      "dataPointID": "temp",
      "dataPointName": "Temperature",
      "msgTime": "2019-05-20 17:13:40",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
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


## Real-time chart data

#### API 

```bash
GET /api/v1/devices/<device_id>/last_data_charts
```

#### Example

```bash
GET /api/v1/devices/11/last_data_charts
```

#### Response

```json
[
  {
    "chartData": {
      "time": "2019-05-20 17:13:46",
      "value": 59
    },
    "chartName": "Temperature and humidity data stream/Temperature",
    "dataPointID": "temp",
    "streamID": "qwerty"
  },
  {
    "chartData": {
      "time": "2019-05-20 17:13:46",
      "value": 15
    },
    "chartName": "Temperature and humidity data stream/Humidity",
    "dataPointID": "hum",
    "streamID": "qwerty"
  }
]
```

#### Field description

| Name         | Sample value | Type | Description                          |
| --------------- | ----------------- | ------- | ------------------- |
| chartData.time| 2019-05-20 17:01:01 | Date  | chart data, time |
| chartData.value| 90 | String/Integer/Float/Boolean  | Chart data, time corresponding value |
| chartName| Temperature and humidity data stream/Humidity | String  | chart name |
| dataPointID| hum | String  |Data point ID|
| streamID| 0921uq | String  |Data stream ID|


## Historical chart data

#### API 

```bash
GET /api/v1/devices/<device_id>/charts?timeUnit={time_unit}
```



|          |      |        |                                        |
| -------- | ---- | ------ | -------------------------------------- |
| timeUnit | 5m   | String | Time unit, support：5m、1h、6h、1d、1w |

#### 

```bash
GET /api/v1/devices/11/charts?timeUnit=1w
```

#### 

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
    "chartName": "Temperature and humidity data stream/Temperature",
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
    "chartName": "Temperature and humidity data stream/Humidity",
    "dataPointID": "hum",
    "streamID": "qwerty"
  }
]
```

#### 

|              |                |     |                    |
| --------------- | ----------------- | ------- | ------------------- |
| chartData.time| ["2019-05-20 17:01:01","2019-05-20 17:01:04"] | List  | Chart data, value of time |
| chartData.value| [90,48] | List  | Chart data, value of time |



## Device data under the gateway

#### API 

```bash
GET /api/v1/device_capability_data?gatewayIntID={gateway_id}
```



|              |      | T       |           |
| ------------ | ---- | ------- | --------- |
| gatewayIntID | 12   | Integer | ateway id |

#### 

```bash
GET /api/v1/device_capability_data?gatewayIntID=12
```

#### 

```json
{
  "items": [
    {
      "dataPointID": "hum",
      "dataPointName": "Humidity",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "Gateway device",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
      "value": 80.0
    },
    {
      "dataPointID": "temp",
      "dataPointName": "Temperature",
      "deviceID": "4e9d4e4fcce18fcdcd85ea46aee4115e",
      "deviceIntID": 12,
      "deviceName": "Gateway device",
      "msgTime": "2019-01-28 07:47:32",
      "streamID": "qwerty",
      "streamName": "Temperature and humidity data stream",
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