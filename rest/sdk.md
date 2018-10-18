# OTA 升级

## 查看升级包列表

#### API 定义

```bash
GET /api/v1/sdk?_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/sdk?_page=1&_limit=10
```

#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "createAt": "2018-10-17 13:55:47",
      "id": 4,
      "package": [
        {
          "name": "diff.zip",
          "uploadID": 10,
          "url": "/api/v1/download?fileType=package&filename=aadce17e340c536308d394eb46966d4a.zip"
        }
      ],
      "productID": "2ioNzM",
      "productName": "MQTT产品",
      "sdkName": "升级包3",
      "sdkType": 1,
      "sdkTypeLabel": "应用程序",
      "sdkVersion": "1.1",
      "updateAt": "2018-10-17 13:59:13"
    },
    {
      "createAt": "2018-09-13 21:39:31",
      "id": 1,
      "package": [
        {
          "name": "Dash.zip",
          "uploadID": 1,
          "url": "/api/v1/download?fileType=package&filename=09f51e1946a714083de6f7589cd1ebc6.zip"
        }
      ],
      "productID": "2ioNzM",
      "productName": "MQTT产品",
      "sdkName": "v1.1",
      "sdkType": 1,
      "sdkTypeLabel": "应用程序",
      "sdkVersion": "v1.1",
      "updateAt": null
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```







## 查看升级包详情

#### API 定义

```bash
GET /api/v1/sdk/sdkID
```

#### 请求示例

```bash
GET /api/v1/sdk/3
```

#### 成功响应

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:52:15",
  "displayName": "默认证书 (1).zip",
  "fileUrl": "/api/v1/download?fileType=package&filename=e81e7077344b8187d0afbdf054461974.zip",
  "id": 3,
  "package": [
    {
      "name": "默认证书 (1).zip",
      "uploadID": 9,
      "url": "/api/v1/download?fileType=package&filename=e81e7077344b8187d0afbdf054461974.zip"
    }
  ],
  "productID": "p3zZMy",
  "productName": "智能锁",
  "sdkName": "默认软件包",
  "sdkType": 1,
  "sdkTypeLabel": "应用程序",
  "sdkVersion": "v 1.3",
  "updateAt": null
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| createAt| "2018-09-30 16:52:15" | Date  | 创建时间 |
| displayName| "默认证书 (1).zip" | String  | 文件原始名称 |
| fileUrl| "/api/v1/download?fileType=package&filename=e81e7077344b8187d0afbdf054461974.zip" | String  | 下载地址 |
| id| 3 | Integer  | id |
| package| [{"name":"默认证书 (1).zip","uploadID":9,"url":"/api/v1/download?fileType=package&filename=e81e7077344b8187d0afbdf054461974.zip"}] | Integer  | 数据包 |
| productID| "p3zZMy" | String  | 产品 ID |
| productName| "智能锁" | String  | 产品名称 |
| sdkName| "默认软件包" | String  | 软件包名字 |
| sdkType| 1 | Integer  | 软件包类型 可选参数: 应用程序: 1, 固件: 2, 内核: 3 |
| sdkTypeLabel| "应用程序" | String  | 软件包类型 可选参数: 应用程序: 1, 固件: 2, 内核: 3 |
| sdkVersion| "v 1.3" | String  | 软件包版本 |
| updateAt| "null" | Date  | 更新时间 |









## 创建升级包

#### API 定义

```bash
POST /api/v1/sdk
```

#### 请求示例

```bash
POST /api/v1/sdk
```

```json
{
  "sdkType": 1,
  "productID": "p3zZMy",
  "sdkName": "默认软件包",
  "sdkVersion": "v 1.3",
  "package": 9
}
```


#### 成功响应

```bash
status 201
```

```json
{
  "createAt": "2018-09-30 16:52:15",
  "id": 3,
  "package": [
    {
      "name": "默认证书 (1).zip",
      "uploadID": 9,
      "url": "/api/v1/download?fileType=package&filename=e81e7077344b8187d0afbdf054461974.zip"
    }
  ],
  "productID": "p3zZMy",
  "sdkName": "默认软件包",
  "sdkType": 1,
  "sdkVersion": "v 1.3",
  "updateAt": null
}
```







## 编辑升级包

#### API 定义

```bash
PUT /api/v1/sdk/sdkID
```

#### 请求示例

```bash
PUT /api/v1/sdk/3
```

```json
{
  "createAt": "2018-09-30 16:52:15",
  "displayName": "默认证书 (1).zip",
  "fileUrl": "/api/v1/download?fileType=package&filename=e81e7077344b8187d0afbdf054461974.zip",
  "id": 3,
  "package": 9,
  "productID": "p3zZMy",
  "productName": "智能锁",
  "sdkName": "默认软件包",
  "sdkType": 1,
  "sdkTypeLabel": "应用程序",
  "sdkVersion": "v 1.4",
  "updateAt": null
}
```


#### 成功响应

```bash
status 200
```

```json
{
  "createAt": "2018-09-30 16:52:15",
  "id": 3,
  "package": [
    {
      "name": "默认证书 (1).zip",
      "uploadID": 9,
      "url": "/api/v1/download?fileType=package&filename=e81e7077344b8187d0afbdf054461974.zip"
    }
  ],
  "productID": "p3zZMy",
  "sdkName": "默认软件包",
  "sdkType": 1,
  "sdkVersion": "v 1.4",
  "updateAt": "2018-09-30 16:52:21"
}
```







## 删除升级包

#### API 定义

```bash
DELETE /api/v1/sdk?ids=sdkIDS
```

#### 请求示例

```bash
DELETE /api/v1/sdk?ids=3
```

#### 成功响应

```bash
status 204
```

```json
""
```







