# Data point

## View data point list

<!-- !#!GET_/api/v1/data_points?productID={productID}&_page={page}&_limit={pageSize}!#! -->

#### API 

```bash
GET /api/v1/data_points?productID={productID}&_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/data_points?productID=2ioNzM&_page=1&_limit=10
```

#### Response

```bash
status 200
```

```json
{
  "items": [
    {
      "binarySize": null,
      "createAt": "2018-10-15 17:37:53",
      "dataPointID": "fsdf",
      "dataPointName": "Test character",
      "dataStep": null,
      "dataTransType": 1,
      "dataTransTypeLabel": "Report only",
      "detail": null,
      "enum": [],
      "faultValue": null,
      "id": 42,
      "isDiscard": null,
      "isLocationType": 0,
      "locationType": null,
      "lowerLimit": null,
      "pointDataType": 3,
      "pointDataTypeLabel": "String",
      "productID": "2ioNzM",
      "productName": "MQTT product",
      "registerAddr": null,
      "unitName": null,
      "unitSymbol": null,
      "updateAt": null,
      "upperLimit": null
    },
    {
      "binarySize": null,
      "createAt": "2018-10-15 17:13:45",
      "dataPointID": "wrqwr",
      "dataPointName": "Test boolean",
      "dataStep": null,
      "dataTransType": 3,
      "dataTransTypeLabel": "report and issue",
      "detail": null,
      "enum": null,
      "faultValue": null,
      "id": 41,
      "isDiscard": null,
      "isLocationType": 0,
      "locationType": null,
      "lowerLimit": null,
      "pointDataType": 5,
      "pointDataTypeLabel": "Boolean",
      "productID": "2ioNzM",
      "productName": "MQTT product",
      "registerAddr": null,
      "unitName": null,
      "unitSymbol": null,
      "updateAt": "2018-10-15 17:14:39",
      "upperLimit": null
    }
  ],
  "meta": {
    "count": 7,
    "limit": 10,
    "page": 1
  }
}
```




## View data point details

<!-- !#!GET_/api/v1/data_points/{id}!#! -->

#### API 

```bash
GET /api/v1/data_points/{dataPointIntID}
```

#### Example

```bash
GET /api/v1/data_points/42
```

#### Response

```bash
status 200
```

```json
{
  "binarySize": null,
  "createAt": "2018-10-15 17:37:53",
  "createUser": "actorcloud",
  "dataPointID": "fsdf",
  "dataPointName": "Test character",
  "dataStep": null,
  "dataTransType": 1,
  "detail": null,
  "enum": [],
  "faultValue": null,
  "id": 42,
  "isDiscard": null,
  "isLocationType": 0,
  "locationType": null,
  "lowerLimit": null,
  "pointDataType": 3,
  "productID": "2ioNzM",
  "registerAddr": null,
  "unitName": null,
  "unitSymbol": null,
  "updateAt": null,
  "upperLimit": null
}
```


#### Field description

| Name          | Sample value    | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| binarySize| "null" | Integer  | Binary length (optional when numeric type is binary (11)). In the case of Modbus protocol product, if the data type is Boolean, it means where the data is in |
| createAt| "2018-10-15 17:37:53" | Date  | Creation time |
| createUser| "actorcloud" | String  | Creation user |
| dataPointID| "fsdf" | String  | Data point ID |
| dataPointName| "Test character" | String  | Name of data point |
| dataStep| "null" | Float  | Data step size (optional when data type is numerical type (1) |
| dataTransType| 1 | Integer  | Data transmission type, optional parameters: only report: 1, only issue: 2, both report and issue: 3 |
| detail| "null" | String  | Remarks |
| enum| [] | JSON  | Enumeration value |
| faultValue| "null" | String  | Fault value (required when the data type is fault type (4)) |
| id| 42 | Integer  | id |
| isDiscard| "null" | Integer  | Discard this message or not(optional when the data type is fault type (4)) |
| isLocationType| "null" | Integer  | Whether it is a location type (default 1) Optional parameters: Yes: 1, No: 2 |
| locationType| "null" | Integer  | Location Type Optional parameters: Longitude: 1, Latitude: 2, Altitude: 3 |
| lowerLimit| "null" | Float  | Lower limit (optional when the data type is numeric type (1)) |
| pointDataType| 3 | Integer  | Data format optional parameters: Value: 1, String: 3, Fault: 4, Boolean: 5, Geographical location: 6, fixed length string: 11, variable length string: 12, fixed length binary: 13, variable length Binary: 14, signed integer: 15, unsigned integer: 16, single precision floating point type: 17, double precision floating point type: 18, bit type: 19. signed long integer for Modbus protocol products : 21, unsigned long integer: 22, Boolean: 23, time: 24, floating point: 25 |
| productID| "2ioNzM" | String  | Product ID |
| registerAddr | "null" | String | Address, required to fill for Modbus protocol product |
| unitName| "null" | String  | Unit name (optional when the data type is numeric type (1)) |
| unitSymbol| "null" | String  | Unit symbol (optional when the data type is numeric type (1)) |
| updateAt| "null" | Date  | Update time |
| upperLimit| "null" | Float  | Upper limit (optional when the data type is numeric type (1)) |




## Create data point

<!-- !#!POST_/api/v1/data_points!#! -->

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




## Edit data point

<!-- !#!PUT_/api/v1/data_points/{id}!#! -->

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




## Delete data point

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







