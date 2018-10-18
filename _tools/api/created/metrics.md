# 指标管理

## 查看指标列表

#### API 定义

```bash
GET /api/v1/metrics?productID={productID}&_page={page}&_limit={pageSize}
```

#### 请求示例

```bash
GET /api/v1/metrics?productID=2ioNzM&_page=1&_limit=10
```

#### 成功响应

```bash
status 200
```

```json
{
  "items": [
    {
      "dataPointName": "温度",
      "id": 25,
      "metricName": "555555555",
      "metricType": 2,
      "metricTypeLabel": "聚合指标"
    },
    {
      "dataPointName": "温度",
      "id": 24,
      "metricName": "222222222222222",
      "metricType": 2,
      "metricTypeLabel": "聚合指标"
    }
  ],
  "meta": {
    "count": 4,
    "limit": 10,
    "page": 1
  }
}
```







## 查看指标详情

#### API 定义

```bash
GET /api/v1/metrics/{metricsID}
```

#### 请求示例

```bash
GET /api/v1/metrics/25
```

#### 成功响应

```bash
status 200
```

```json
{
  "aggregateData": 1,
  "aggregateDataLabel": "公式值",
  "aggregateType": 1,
  "aggregateTypeLabel": "最大值",
  "chartType": 1,
  "chartTypeLabel": "折线图",
  "createAt": "2018-10-15 15:55:15",
  "createUser": "actorcloud",
  "dataPointIntID": 1,
  "dataPointName": "温度",
  "expressions": null,
  "id": 25,
  "isShow": 1,
  "metricName": "555555555",
  "metricType": 2,
  "metricTypeLabel": "聚合指标",
  "productID": "2ioNzM",
  "productItemIntID": null,
  "remark": null,
  "updateAt": null
}
```


#### 字段说明

| 字段名             | 示例值               | 字段类型    |  说明                  |
| --------------- | ----------------- | ------- | ------------------- |
| aggregateData| 1 | String  | 聚合数据 |
| aggregateDataLabel| "公式值" | String  | 公式值 |
| aggregateType| 1 | Integer  | 聚合方式 可选参数: 最大值: 1, 最小值: 2, 平均值: 3, 累计值: 4 |
| aggregateTypeLabel| "最大值" | String  | 聚合方式 可选参数: 最大值: 1, 最小值: 2, 平均值: 3, 累计值: 4 |
| chartType| 1 | Integer  | 展示图表类型 可选参数: 折线图: 1, 柱状图: 2 |
| chartTypeLabel| "折线图" | String  | 展示图表类型 可选参数: 折线图: 1, 柱状图: 2 |
| createAt| "2018-10-15 15:55:15" | Date  | 创建时间 |
| createUser| "actorcloud" | String  | 创建用户 |
| dataPointIntID| 1 | Integer  | 功能点 ID |
| dataPointName| "温度" | String  | 功能点名称 |
| expressions| "null" | String  | 计算公式 |
| id| 25 | Integer  | id |
| isShow| 1 | Integer  | 是否显示在设备详情页面: 0否 1是 |
| metricName| "555555555" | String  | 指标名称 |
| metricType| 2 | Number  | 指标类型 可选参数： 公式指标：1，聚合指标：2 |
| metricTypeLabel| "聚合指标" | String  | 指标类型 |
| productID| "2ioNzM" | String  | 产品 ID |
| productItemIntID| "null" | Integer  | 产品 Item |
| remark| "null" | String  | 备注 |
| updateAt| "null" | Date  | 更新时间 |









## 创建指标

#### API 定义

```bash
POST /api/v1/metrics
```

#### 请求示例

```bash
POST /api/v1/metrics
```

```json
{
  "expressionsLabel": "+ name + 100",
  "chartType": 1,
  "metricName": "name",
  "dataPointIntID": 31,
  "isShow": 1,
  "aggregateType": 1,
  "expressions": "+ dataPoint + 100"
}
```


#### 成功响应

```bash
status 201
```

```json
{
  "aggregateType": 1,
  "chartType": 1,
  "createAt": "2018-09-30 16:49:34",
  "dataPointIntID": 31,
  "expressions": "+ dataPoint + 100",
  "id": 5,
  "isShow": 1,
  "metricName": "name",
  "productItemIntID": null,
  "remark": null,
  "updateAt": null
}
```







## 编辑指标

#### API 定义

```bash
PUT /api/v1/metrics/{metricsID}
```

#### 请求示例

```bash
PUT /api/v1/metrics/25
```

```json
{
  "aggregateData": 1,
  "aggregateDataLabel": "公式值",
  "aggregateType": 1,
  "aggregateTypeLabel": "最大值",
  "chartType": 1,
  "chartTypeLabel": "折线图",
  "createAt": "2018-10-15 15:55:15",
  "createUser": "actorcloud",
  "dataPointIntID": 1,
  "dataPointName": "温度",
  "expressions": null,
  "id": 25,
  "isShow": 1,
  "metricName": "555555555",
  "metricType": 2,
  "metricTypeLabel": "聚合指标",
  "productID": "2ioNzM",
  "productItemIntID": null,
  "remark": null,
  "updateAt": null,
  "expressionsLabel": ""
}
```


#### 成功响应

```bash
status 200
```

```json
{
  "aggregateData": 1,
  "aggregateType": 1,
  "chartType": 1,
  "createAt": "2018-10-15 15:55:15",
  "dataPointIntID": 1,
  "expressions": null,
  "id": 25,
  "isShow": 1,
  "metricName": "555555555",
  "metricType": 2,
  "productID": "2ioNzM",
  "productItemIntID": null,
  "remark": null,
  "updateAt": null
}
```







## 删除指标

#### API 定义

```bash
DELETE /api/v1/metrics?ids={metricsIDS}
```

#### 请求示例

```bash
DELETE /api/v1/metrics?ids=25
```

#### 成功响应

```bash
status 204
```

```json
""
```







