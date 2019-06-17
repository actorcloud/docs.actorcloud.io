# Data stream

## View data stream list

#### API 

```bash
GET /api/v1/data_streams?productID={productID}&_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/data_streams?productID=2ioNzM&_page=1&_limit=10
```

#### Response

```bash
status 200
```

```json
{
  "items": [
    {
      "id": 17,
      "productName": "MQTT product",
      "streamDataType": 1,
      "streamDataTypeLabel": "JSON",
      "streamName": "Test",
      "streamType": 2,
      "streamTypeLabel": "data issue",
      "topic": "hello"
    },
    {
      "id": 1,
      "productName": "MQTT product",
      "streamDataType": 1,
      "streamDataTypeLabel": "JSON",
      "streamName": "Temperature and humidity",
      "streamType": 1,
      "streamTypeLabel": "Terminal reporting",
      "topic": "hum_temp"
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```







## View data stream details

#### API 

```bash
GET /api/v1/data_streams/{dataStreamsID}
```

#### Example

```bash
GET /api/v1/data_streams/9
```

#### Response

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:48:22",
  "dataPointNames": [
    "longitude",
    "latitude"
  ],
  "dataPoints": [
    28,
    29
  ],
  "detail": null,
  "id": 9,
  "productID": "p3zZMy",
  "streamDataType": 1,
  "streamDataTypeLabel": "JSON",
  "streamName": "location",
  "streamType": 1,
  "topic": "topic",
  "updateAt": null,
  "userIntID": 23
}
```


#### Field description

| Name          | Sample value    | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| createAt| "2018-09-30 16:48:22" | Date  | Creation time |
| dataPointNames| ["latitude Longitude"] | Array  | Data point name |
| dataPoints| [28,29] | Array  | Data point ID |
| detail| "null" | String  | Remarks |
| id| 9 | Integer  | id |
| productID| "p3zZMy" | String  | Product ID |
| streamDataType| 1 | Integer  | Data Type Optional Parameters: JSON: 1, Binary: 2 |
| streamDataTypeLabel| "JSON" | String  | Data Type Optional Parameters: JSON: 1, Binary: 2 |
| streamName| "location" | String  | Data stream name |
| streamType| 1 | Integer  | Data stream type Optional parameters: Device data report: 1, Device data issue: 2, Gateway data report: 3, Gateway data issue: 4. Gateway data report and issue is optional only for gateway products. |
| topic| "topic" | String  | Topic |
| updateAt| "null" | Date  | Update time |
| userIntID| 23 | Integer  | User ID |









## Create data stream

#### API 

```bash
POST /api/v1/data_points
```

#### Example

```bash
POST /api/v1/data_points
```

```json
{
  "dataPointName": "longitude",
  "dataPointID": "x",
  "productIntID": "128",
  "pointDataType": 1,
  "dataTransType": 1,
  "unitName": "longitude",
  "unitSymbol": "x",
  "upperLimit": "180",
  "lowerLimit": "0",
  "dataStep": "0.01",
  "enum": [],
  "isLocationType": 1,
  "locationType": 1
}
```


#### Response

```bash
status 201
```

```json
{
  "binarySize": null,
  "createAt": "2018-09-30 16:46:53",
  "dataPointID": "x",
  "dataPointName": "longitude",
  "dataStep": 0.01,
  "dataTransType": 1,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 28,
  "isDiscard": null,
  "isLocationType": 1,
  "locationType": 1,
  "lowerLimit": 0,
  "pointDataType": 1,
  "productID": "p3zZMy",
  "unitName": "longitude",
  "unitSymbol": "x",
  "updateAt": null,
  "upperLimit": 180
}
```







## Edit data stream

#### API 

```bash
PUT /api/v1/data_points/{dataStreamsID}
```

#### Example

```bash
PUT /api/v1/data_points/31
```

```json
{
  "binarySize": null,
  "createAt": "2018-09-30 16:49:06",
  "createUser": "ActorCloud",
  "dataPointID": "name",
  "dataPointName": "name",
  "dataStep": null,
  "dataTransType": 3,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 31,
  "isDiscard": null,
  "isLocationType": 0,
  "locationType": null,
  "lowerLimit": null,
  "pointDataType": 1,
  "productID": "p3zZMy",
  "unitName": null,
  "unitSymbol": null,
  "updateAt": null,
  "upperLimit": null
}
```


#### Response

```bash
status 200
```

```json
{
  "binarySize": null,
  "createAt": "2018-09-30 16:49:06",
  "dataPointID": "name",
  "dataPointName": "name",
  "dataStep": null,
  "dataTransType": 3,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 31,
  "isDiscard": null,
  "isLocationType": 0,
  "locationType": null,
  "lowerLimit": null,
  "pointDataType": 1,
  "productID": "p3zZMy",
  "unitName": null,
  "unitSymbol": null,
  "updateAt": "2018-09-30 16:51:00",
  "upperLimit": null
}
```







## Delete data stream

#### API 

```bash
DELETE /api/v1/data_points?ids={dataStreamsIDS}
```

#### Example

```bash
DELETE /api/v1/data_points?ids=30
```

#### Response

```bash
status 204
```

```json
""
```







