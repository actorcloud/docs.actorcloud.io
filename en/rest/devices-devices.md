# Device

## Create device

#### Creation instructions

##### Field constraint

- Device type and uplink system:

  When the deviceType is `1 (terminal)`, it must carry the  `upLinkSystem` field, otherwise `upLinkSystem` should be empty.

- Uplink system and affiliated gateway:

  The uplink system must carry a valid field of ` `gateway ID when it is 2 (gateway)

- Uplink system and affiliated device:

  The uplink system must carry a valid field of ` `parentDevice ID when it is 3 (device)


> See the device field description for detailed field constraints.。


##### Multiple device types

The request parameters vary according to the cloud protocol of the selected product. In addition to the basic information, the following table gives the relevant differences:

| cloud protocol | Item required to fill | Locked item |
| --------------- | ----------------- | ------- |
| MQTT、CoAP、HTTP、WebSocket、Modbus | Authentication method：`authType` | -- |
| LwM2M | Access IMEI：`IMEI` 、Automatic subscription： `autoSub` | -- |
| LoRa | LoRa Protocol related information, network access method：`lora.type` 、DevEUI：`deviceID`、AppEUI： `lora.appEUI`、AppKey： `lora.appKey` 、FCnt Check： `lora.fcntCheck`、allow to join：`lora.canJoin` | network access method：when `lora.type` equals `otaa` |
| LoRa | LoRa Protocol related information, network access method：`lora.type` 、Gateway：`gateway`、DevAddr： `deviceID`、Transmitting frequency： `lora.region` 、NwkSKey： `lora.nwkSKey`、AppSKey：`lora.appSKey`、FCnt Up：`lora.fcntUp`、FCnt Down： `lora.fcntDown`、FCnt Check：`lora.fcntCheck` | network access method：when `lora.type  `  equals `abp` |


When the cloud protocol is `LwM2M` and `LoRa`, the protocol related information corresponds to `lwm2mData` and `loraData` respectively, examples are as follows:

`LwM2M` protocol

```json
{
  // Additional information about the device
  "lwm2mData":{
    "IMEI":"",
    "IMSI":"",
    "autoSub":1
  }
}
```

`LoRa` protocol

```json
{
  // Additional information about the device
  "loraData": {
    "appEUI": "1092ej1029e0192u",
    "appKey": "12u1092u0192je1029u0912uu142j4oi",
    "canJoin": 1,
    "fcntCheck": 0,
    "region": "EU863-870",
    "type": "otaa"
  }
}
```

#### API 

```bash
POST /api/v1/devices
```

#### Example

```bash
POST /api/v1/devices
```

```json
{
  "authType": 1,
  "carrier": 1,
  "cloudProtocol": 1,
  "description": "smart lock",
  "deviceID": "10c61f1a1f47",
  "deviceName": "smart lock",
  "deviceUsername": "10c61f1a1f47",
  "deviceType": 1,
  "groups":[1,2],
  "hardwareVersion": "v 1.0",
  "latitude": 30.266682,
  "location": "Yuquan Campus, Zhejiang University, Lingyin Street, Xihu District, Hangzhou, Zhejiang",
  "longitude": 120.124144,
  "mac":"",
  "manufacturer": "Jiangnan",
  "productID": "p3zZMy",
  "serialNumber": "1061f1a1f47",
  "softVersion": "v 1.2",
  "upLinkNetwork": 3,
  "upLinkSystem": 1,
  "token": "10c61f1a1f47"
}
```


#### Response

```bash
status 201
```

```json
{
  "authType": 1, 
  "blocked": 0, 
  "carrier": 3, 
  "createAt": "2019-06-03 09:58:20", 
  "description": "smart lock", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "10c61f1a1f47", 
  "deviceName": "smart lock", 
  "deviceStatus": 0, 
  "deviceType": 1, 
  "deviceUsername": "10c61f1a1f47", 
  "gateway": null, 
  "groups": [], 
  "groupsIndex": [], 
  "hardwareVersion": "2.0", 
  "id": 27, 
  "lastConnection": null, 
  "latitude": 30.266682,
  "location": "Yuquan Campus, Zhejiang University, Lingyin Street, Xihu District, Hangzhou, Zhejiang",
  "longitude": 120.124144,
  "loraData": null, 
  "lwm2mData": null, 
  "mac": "", 
  "manufacturer": "Jiangnan", 
  "metaData": null, 
  "parentDevice": null, 
  "productID": "p3zZMy", 
  "serialNumber": "1061f1a1f47", 
  "softVersion": "V 1.0", 
  "token": "10c61f1a1f47", 
  "upLinkNetwork": 3, 
  "upLinkSystem": 1, 
  "updateAt": null
}
```


## Edit device


#### API 

```bash
PUT /api/v1/devices/{device_id}
```

#### Example

```bash
PUT /api/v1/devices/191
```

```json
{
  "authType": 1, 
  "blocked": 0, 
  "carrier": 3, 
  "createAt": "2019-06-03 09:58:20", 
  "description": "smart lock", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "deviceName": "smart lock", 
  "deviceStatus": 0, 
  "deviceType": 1, 
  "deviceUsername": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "gateway": null, 
  "groups": [], 
  "groupsIndex": [], 
  "hardwareVersion": "2.0", 
  "id": 27, 
  "lastConnection": null, 
  "latitude": 39.908692, 
  "location": "Dongcheng District, Beijing", 
  "longitude": 116.397477, 
  "loraData": null, 
  "lwm2mData": null, 
  "mac": "12.87", 
  "manufacturer": "Dongnan", 
  "metaData": null, 
  "parentDevice": null, 
  "productID": "bff530", 
  "serialNumber": "988888alsd", 
  "softVersion": "1.0", 
  "token": "6e1ecb1b74bc526ceeee6e709d2beaebe996", 
  "upLinkNetwork": 3, 
  "upLinkSystem": 1, 
  "updateAt": null
}
```


#### Response

```bash
status 200
```

```json
{
  "authType": 1, 
  "blocked": 0, 
  "carrier": 3, 
  "createAt": "2019-06-03 09:58:20", 
  "description": "smart lock", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "deviceName": "smart lock", 
  "deviceStatus": 0, 
  "deviceType": 1, 
  "deviceUsername": "51ab2bc6658e6c604b36bbea1e62beeae666", 
  "gateway": null, 
  "groups": [], 
  "groupsIndex": [], 
  "hardwareVersion": "2.0", 
  "id": 27, 
  "lastConnection": null, 
  "latitude": 39.908692, 
  "location": "Dongcheng District, Beijing", 
  "longitude": 116.397477, 
  "loraData": null, 
  "lwm2mData": null, 
  "mac": "12.87", 
  "manufacturer": "Dongnan", 
  "metaData": null, 
  "parentDevice": null, 
  "productID": "bff530", 
  "serialNumber": "988888alsd", 
  "softVersion": "1.0", 
  "token": "6e1ecb1b74bc526ceeee6e709d2beaebe996", 
  "upLinkNetwork": 3, 
  "upLinkSystem": 1, 
  "updateAt": "2019-06-03 10:00:20"
}
```




## Delete device

#### API 

```bash
DELETE /api/v1/devices?ids={device_ids}
```
> Support for deleting multiple devices，ids=1,2,3

#### Example

```bash
DELETE /api/v1/devices?ids=190
```

#### Response

```bash
status 204
```


## Device details

#### API 

```bash
GET /api/v1/devices/{device_id}
```

#### Example

```bash
GET /api/v1/devices/46
```

#### Response

```bash
status 200
```

```json
{
  "authType": 1, 
  "authTypeLabel": "Token", 
  "blocked": 0, 
  "carrier": 1, 
  "cloudProtocol": 7, 
  "cloudProtocolLabel": "Modbus", 
  "createAt": "2018-10-26 11:27:56", 
  "createUser": "modbus", 
  "description": "", 
  "deviceConsoleIP": null, 
  "deviceConsolePort": 22, 
  "deviceConsoleUsername": null, 
  "deviceID": "ea78e8af256d57b2a52dcda2f05282cf", 
  "deviceName": "modubs device1", 
  "deviceStatus": 0, 
  "deviceStatusLabel": "offline", 
  "deviceType": 1, 
  "deviceUsername": "ea78e8af256d57b2a52dcda2f05282cf", 
  "gateway": 94, 
  "gatewayName": "Modbus gateway", 
  "hardwareVersion": "1.0", 
  "id": 95, 
  "lastConnection": "2019-01-01 15:00:00",
  "latitude": 39.908692, 
  "location": "Dongcheng District, Beijing", 
  "longitude": 116.397477, 
  "loraData": {
    "appEUI": "1092ej1029e0192u",
    "appKey": "12u1092u0192je1029u0912uu142j4oi",
    "canJoin": 1,
    "fcntCheck": 0,
    "region": "EU863-870",
    "type": "otaa"
  },
  "lwm2mData": {
    "IMEI": "4982747892374918",
    "IMSI": "8347984918218298",
    "autoSub": 1
  },
  "mac" :"",
  "manufacturer": "", 
  "metaData": {},  
  "parentDevice": 1, 
  "parentDeviceName": "",  
  "productID": "4jMRrz", 
  "productIntID": 36, 
  "productName": "Modbus product", 
  "serialNumber": "", 
  "softVersion": "1.0", 
  "token": "da77cafead065dbf8ac1844f11db9d8c", 
  "upLinkNetwork": 2,
  "upLinkSystem": 1,
  "updateAt": "2018-10-26 12:27:56"
}
```


#### Field description

| Name          | Sample value   | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| authType| 1 | Integer  | Authentication method, optional parameters: Token: 1, Certificate: 2 |
| authTypeLabel| Token | String  | Token |
| blocked| 0 | Integer  | allow access or not, 0: Allow 1: Prohibit |
| carrier| 1 | Integer  | Carrier, optional parameters: China Telecom: 1, China Mobile: 2, China Unicom: 3, Others: 4 |
| cloudProtocol| 1 | Integer  | Cloud protocol，optional parameters: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| cloudProtocolLabel| MQTT | String  | Cloud protocol，optional parameters: MQTT: 1, CoAP: 2, LwM2M: 3, LoRa: 4, HTTP: 5, WebSocket: 6, Modbus: 7 |
| createAt| 2019-09-14 14:55:20 | Date  | Creation time |
| createUser| actorcloud | String  | Creation user |
| description| Smart lock | String  | Description |
| deviceConsoleIP| 127.0.0.1 | String  | Console IP |
| deviceConsolePort| 22 | Integer  | Console Port |
| deviceConsoleUsername| root | String  | Console Username |
| deviceID| 063da5117b8c5ea5a6b3441edbf99d03 | String  | Device ID |
| deviceName| mqtt device_1 | String  | Device name |
| deviceStatus| 0 | Integer  | Device running status, optional parameters: Offline: 0, Online: 1, Sleep: 2 |
| deviceStatusLabel| Offline | String  | Device running status, optional parameters: Offline: 0, Online: 1, Sleep: 2 |
| deviceType| 1 | Integer  | Device type, optional parameters: Terminal: 1, Gateway: 2 Mutually exclusive with the uplink system: fill in the `upLinkSystem` field if only the value is `terminal: 1` |
| deviceUsername| 063da5117b8c5ea5a6b3441edbf99d03 | String  | Device username, used to connect emq |
| gateway| 1 | Integer  | Gateway , and the ID must be filled in when device type 'upLinkSystem' is 2 (gateway) |
| gatewayName| Gateway1 | String  | Gateway Name |
| gatewayProtocol| 7 | Integer  | Gateway Protocol |
| hardwareVersion| 1.0 | String  | Hardware Version |
| id| 46 | Integer  | id |
| lastConnection| 2019-01-01 15:00:00 | Date  | Last connection time |
| latitude| 25.064918 | Float  | Latitude |
| location| Jinding Science and Technology Park, Fengning Street, Wuhua District, Kunming, Yunnan | String  | Location |
| longitude| 102.678732 | Float  | Longitude |
| loraData| {"appEUI": "1092ej1029e0192u","appKey": "12u1092u0192je1029u0912uu142j4oi","canJoin": 1,"fcntCheck": 0,"region": "EU863-870","type": "otaa"} | JSON  | LoRa Protocol device data |
| lwm2mData| {"IMEI": "4982747892374918","IMSI": "8347984918218298","autoSub": 1} | JSON  | LwM2M Protocol device data |
| mac| a4:5e:60:be:ef:3b | String  | MAC |
| manufacturer| Samsung | String  | manufacturer |
| metaData | {} | JSON | Meta Data |
| parentDevice | 2 | Integer | The uplink device ID, when the uplink system selects `device`, it must be filled in. |
| parentDeviceName | Uplink device | String | Uplink device name |
| productID| 2ioNzM | String  | Product  ID |
| productIntID| 60 | Integer  | Product ID |
| productName| MQTT Product | String  | Product name |
| serialNumber| 16OQUWEOI923 | String  | Serial Number |
| softVersion| 1.0 | String  | Software Version |
| token| 990afd1e9448584abfca5b7154f9bcba | String  | Device key |
| upLinkNetwork| 1 | Integer  | UpLink Network，Optional parameter: 2G: 1, 3G: 2, 4G: 3, Wi-Fi: 4, NB-IoT: 5, BlueTooth: 6, wired: 7 |
| upLinkSystem| 1 | Integer  | Uplink system, optional parameters: Cloud: 1, Device: 2, Gateway: 3 |
| updateAt| 2018-10-12 09:39:52 | Date  | Update time |

`LoRa` Protocol device field description

| Name          | Sample value   | Type |  Description  |
| --------------- | ----------------- | ------- | ------------------- |
|type|otaa|String|Network access method|
|appSKey||String|appSkey|
|region|9600|String|Transmitting frequency|
|fcntCheck|0|Integer|FCnt Check|
|fcntDown|0|Integer|FCnt Down|
|fcntUp|0|Integer|FCnt Up|
|nwkSKey||String|nwkSKey|
|canJoin|0|Integer|Allow to join|
|appEUI| |String|appEUI|
|appKey| |String|appKey|



`LwM2M` Protocol device field description

| Name         | Sample value   | Type |  Description  |
| --------------- | ----------------- | ------- | ------------------- |
|IMEI|7472938749187241|String|IMEI|
|IMSI|2384792739482336|String|IMSI|
|autoSub|1|Integer|Subscribe automatically or not, 1: Subscribe automatically, 0: Not subscribe automatically|

## Device list


#### API 

```bash
GET /api/v1/devices?_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/devices?_page=1&_limit=10
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
      "carrier": 1, 
      "cloudProtocol": 7, 
      "cloudProtocolLabel": "Modbus", 
      "createAt": "2018-10-26 11:27:56", 
      "description": "", 
      "deviceConsoleIP": null, 
      "deviceConsolePort": 22, 
      "deviceConsoleUsername": null, 
      "deviceID": "ea78e8af256d57b2a52dcda2f05282cf", 
      "deviceName": "modubs device 1", 
      "deviceStatus": 0, 
      "deviceStatusLabel": "offline", 
      "deviceType": 1,  
      "deviceUsername": "ea78e8af256d57b2a52dcda2f05282cf", 
      "gateway": 94, 
      "gatewayProtocol": 7,
      "hardwareVersion": "1.0",
      "id": 95, 
      "lastConnection": "2019-01-01 15:00:00",
      "latitude": 39.908692, 
      "location": "Dongcheng District, Beijing", 
      "longitude": 116.397477, 
      "loraData": {
        "appEUI": "1092ej1029e0192u",
        "appKey": "12u1092u0192je1029u0912uu142j4oi",
        "canJoin": 1,
        "fcntCheck": 0,
        "region": "EU863-870",
        "type": "otaa"
      },
      "lwm2mData": {
        "IMEI": "4982747892374918",
        "IMSI": "8347984918218298",
        "autoSub": 1
      },
      "mac" :"",
      "manufacturer": "", 
      "metaData": {},  
      "productID": "4jMRrz", 
      "productIntID": 36, 
      "productName": "Modbus product", 
      "serialNumber": "", 
      "softVersion": "1.0", 
      "tenantID": "CkqVIYpeh", 
      "token": "da77cafead065dbf8ac1844f11db9d8c", 
      "upLinkNetwork": 2, 
      "upLinkSystem": 1,
      "updateAt": "2018-10-26 12:27:56"
    }
  ], 
  "meta": {
    "count": 1, 
    "limit": 10, 
    "page": 1
  }
}
```







## Sub-device creation and editing

> Similar to the creation and editing of a normal device, the only difference is that `parentDevice` is required and must be the ID of the uplink device.







## Sub-device deletion

> Refer to the delete interface of the common device.




## Device event

#### API 

```bash
GET /api/v1/devices/{deviceIntID}/events?_page={page}&_limit={pageSize}
```

#### Example

```bash
GET /api/v1/devices/189/events?_page=1&_limit=10
```

#### Response

```bash
status 200
```

```json
{
  "items": [
    {
      "IP": null,
      "createAt": "2018-09-30 16:55:31",
      "deviceID": "10c61f1a1f47",
      "deviceName": "smart lock",
      "id": 7623,
      "msgTime": "2018-09-30 16:55:31",
      "payload": "{ \"x\": 33.2, \"y\": 31.4 }",
      "topic": "topic",
      "updateAt": null
    },
    {
      "IP": null,
      "createAt": "2018-09-30 16:55:30",
      "deviceID": "10c61f1a1f47",
      "deviceName": "smart lock",
      "id": 7622,
      "msgTime": "2018-09-30 16:55:30",
      "payload": "{ \"x\": 33.2, \"y\": 31.4 }",
      "topic": "topic",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 6,
    "limit": 10,
    "page": 1
  }
}
```







## View device original data

#### API 

```bash
GET /api/v1/original_data?deviceID={deviceID}&metricType=2&time_unit=day
```

#### Example

```bash
GET /api/v1/original_data?deviceID=063da5117b8c5ea5a6b3441edbf99d03&metricType=2&time_unit=day
```

#### Response

```bash
status 200
```

```json
[
  {
    "dataPointIntID": 1,
    "dataPointName": "temperature",
    "originalData": {
      "time": [],
      "value": []
    }
  },
  {
    "dataPointIntID": 2,
    "dataPointName": "humidity",
    "originalData": {
      "time": [],
      "value": []
    }
  }
]
```


#### Field description

| Name          | Sample value   | Type |  Description        |
| --------------- | ----------------- | ------- | ------------------- |
| dataPointIntID| 1 | Integer  | Data point ID |
| dataPointName| "temperature" | String  | Data point name |
| originalData| {"time":[],"value":[]} | Object  | Original Data |









## View device metrics data

#### API 

```bash
GET /api/v1/metrics_data?deviceID={deviceID}&metricType=1
```

#### Example

```bash
GET /api/v1/metrics_data?deviceID=063da5117b8c5ea5a6b3441edbf99d03&metricType=1
```

#### Response

```bash
status 200
```

```json
[
  {
    "aggregateData": null,
    "aggregateType": 1,
    "chartType": 1,
    "createAt": "2018-10-12 17:49:42",
    "dataPointIntID": 1,
    "expressions": "currentValue - lastValue",
    "id": 13,
    "isShow": 1,
    "metricData": {
      "time": [],
      "value": []
    },
    "metricName": "111",
    "metricType": 1,
    "productID": "2ioNzM",
    "productItemIntID": null,
    "remark": null,
    "updateAt": null
  }
]
```

## Device control

#### API 

```bash
POST /api/v1/device_publish
```

#### Example

```bash
POST /api/v1/device_publish
```

```json
{
  "deviceID": "10c61f1a1f47",
  "payload": "{\"message\":\"Hello\"}",
  "topic": "topic"
}
```


#### Response

```bash
status 201
```

```json
{
  "message": "Client publish success", 
  "progress": 100, 
  "result": {
    "deviceID": "10c61f1a1f47", 
    "taskID": "e58b55bcb11a53b9f9598f825bedfbb5"
  }, 
  "status": 3
}
```