# Product management

## Create product

#### API 

```bash
POST /api/v1/products
```

#### Example

```bash
POST /api/v1/products
```

```json
{
  "cloudProtocol": 1,
  "description": "Product description",
  "productName": "LWM2M",
  "productType": 1
}
```


#### Response

```bash
status 201
```

```json
{
  "cloudProtocol": 3,
  "createAt": "2018-09-30 17:02:53",
  "description": "Product description",
  "gatewayProtocol":null,
  "id": 129,
  "productID": "Bwj2pn",
  "productName": "LWM2M",
  "productType":1,
  "updateAt": null
}
```


## Edit product

#### API 

```bash
PUT /api/v1/products/<product_id>
```

#### Example

```bash
PUT /api/v1/products/60
```

```json
{
  "description": "mqtt product test 1",
  "productName": "MQTT product",
}
```


#### Response

```bash
status 200
```

```json
{
  "cloudProtocol": 1,
  "createAt": "2019-09-13 21:26:01",
  "description": "mqtt product test1",
  "gatewayProtocol":null,
  "id": 60,
  "productID": "2ioNzM",
  "productName": "MQTT product",
  "productType": 1,
  "updateAt": "2018-10-17 11:50:16"
}
```




## Delete product

#### API 

```bash
DELETE /api/v1/products?ids=<product_ids>
```

#### Example

```bash
DELETE /api/v1/products?ids=127
```

#### Response

```bash
status 204
```



## Product details

#### API 

```bash
GET /api/v1/products/<product_id>
```

#### Example

```bash
GET /api/v1/products/60
```

#### Response

```bash
status 200
```

```json
{
  "cloudProtocol": 1,
  "cloudProtocolLabel": "MQTT",
  "createAt": "2019-09-13 21:26:01",
  "createUser": "actorcloud",
  "description": "mqtt product test 1",
  "deviceCount": 10,
  "gatewayProtocol": null,
  "id": 60,
  "productID": "2ioNzM",
  "productName": "MQTT product",
  "productType": 1,
  "productTypeLabel": "device",
  "updateAt": "2018-10-17 11:50:16"
}
```


#### Field description

| Name          | Sample value    | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| cloudProtocol| 1 | Integer  | Cloud protocol, optional parameters: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| cloudProtocolLabel| MQTT | String  | Cloud protocol, optional parameters: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6 |
| createAt| 2019-09-13 21:26:01 | Date  | Creation time |
| createUser| actorcloud | String  | Creation user |
| description| mqtt product test 1 | String  | Description |
| deviceCount| 10 | Integer  | Number of devices under the product |
| gatewayProtocol| 7 | Integer  | Gateway protocol (if the product type is gateway） |
| id| 60 | Integer  | id |
| productID| 2ioNzM | String  | Product ID |
| productName| MQTT Product | String  | Product name |
| productType| 1 | String  | Product type, equipment: 1, gateway: 2 |
| updateAt| 2018-10-17 11:50:16 | Date  | Update time |


## Product list

#### API 

```bash
GET /api/v1/products?_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/products?_page=1&_limit=10
```


#### Response

```bash
status 200
```

```json
{
  "items": [
    {
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-06-04 16:47:42",
      "dataPointCount": 0,
      "dataStreamCount": 0,
      "description": "PUT",
      "deviceCount": 0,
      "gatewayProtocol": null,
      "id": 7,
      "productID": "05ea56",
      "productName": "PUT test",
      "productType": 1,
      "productTypeLabel": "device",
      "updateAt": "2019-06-04 16:55:10"
    },
    {
      "cloudProtocol": 4,
      "cloudProtocolLabel": "LoRa",
      "createAt": "2019-05-31 13:45:20",
      "dataPointCount": 0,
      "dataStreamCount": 0,
      "description": null,
      "deviceCount": 1,
      "gatewayProtocol": null,
      "id": 6,
      "productID": "87b8ee",
      "productName": "LoRa product",
      "productType": 1,
      "productTypeLabel": "device",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 7,
    "limit": 10,
    "page": 1
  }
}
```

#### Field description

| name          | Sample value    | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| dataPointCount| 1 | Integer  | Number of data point |
| dataStreamCount| 1 | Integer  | Number of data stream |





## List of devices under the product

#### API 

```bash
GET /api/v1/devices?_page={page}&_limit={pageSize}&productID={productID}
```

Parameter Description

| Name          | Sample          | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| productID| bff530 | String  | Product ID |

> The return data format is the same as the device list


#### Example

```bash
GET /api/v1/devices?_page=1&_limit=10&productID=bff530
```


#### Response

```bash
status 200
```

```json
{
  "items": [
    {
      "authType": 1,
      "authTypeLabel": "Token",
      "blocked": 0,
      "carrier": 3,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-05-31 11:26:41",
      "description": "Device description",
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "e6951abf3639be0b8eff5a5f403e4ee353b6",
      "deviceName": "Full data device",
      "deviceStatus": 0,
      "deviceStatusLabel": "Offline",
      "deviceType": 1,
      "deviceUsername": "e6951abf3639be0b8eff5a5f403e4ee353b6",
      "gateway": null,
      "gatewayProtocol": null,
      "groups": [
        "1eee19"
      ],
      "groupsIndex": [
        {
          "label": "group",
          "value": 1
        }
      ],
      "hardwareVersion": "1.1",
      "id": 22,
      "lastConnection": null,
      "latitude": 39.908692,
      "location": "Tiananmen Square, Donghuamen Street, Dongcheng District, Beijing",
      "longitude": 116.397477,
      "loraData": null,
      "lwm2mData": null,
      "mac": "0.0.0.0",
      "manufacturer": "Apple",
      "metaData": null,
      "parentDevice": null,
      "productID": "bff530",
      "productIntID": 1,
      "productName": "test product",
      "serialNumber": "28109489328759",
      "softVersion": "1.0",
      "token": "40ee8e9a185e51bbd6b78573a64a1d70198a",
      "upLinkNetwork": 3,
      "upLinkSystem": 1,
      "updateAt": null
    },
    {
      "authType": 1,
      "authTypeLabel": "Token",
      "blocked": 0,
      "carrier": 1,
      "cloudProtocol": 1,
      "cloudProtocolLabel": "MQTT",
      "createAt": "2019-05-08 10:50:03",
      "description": null,
      "deviceConsoleIP": null,
      "deviceConsolePort": 22,
      "deviceConsoleUsername": null,
      "deviceID": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "deviceName": "test device 1",
      "deviceStatus": 1,
      "deviceStatusLabel": "online",
      "deviceType": 1,
      "deviceUsername": "dbabdf8ad91ef595bf9e9f35b1eef433",
      "gateway": null,
      "gatewayProtocol": null,
      "groups": [
        "1eee19"
      ],
      "groupsIndex": [
        {
          "label": "group",
          "value": 1
        }
      ],
      "hardwareVersion": null,
      "id": 1,
      "lastConnection": "2019-06-03 14:51:03",
      "latitude": null,
      "location": null,
      "longitude": null,
      "loraData": null,
      "lwm2mData": null,
      "mac": null,
      "manufacturer": null,
      "metaData": null,
      "parentDevice": null,
      "productID": "bff530",
      "productIntID": 1,
      "productName": "test product",
      "serialNumber": null,
      "softVersion": null,
      "token": "1974e8f49da9e131ef5fe50bf96f19be",
      "upLinkNetwork": 3,
      "upLinkSystem": 1,
      "updateAt": "2019-06-03 14:51:03"
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```