# Product operation

### Get product list

**API :**

```bash
GET /api/v1/products?_page=1&_limit=10 
```

**Response:**

```json
{
  "items": [
    {
      "createAt": "2018-03-24 13:59:02",
      "description": "desc",
      "devices": [
        {
          "id": 433
        }
      ],
      "id": 18,
      "productID": "fSPvWw",
      "productName": "Default product",
      "updateAt": null,
      "userIntID": 6
    },
    {
      "createAt": "2018-03-23 11:38:28",
      "description": "Environmental monitoring series",
      "devices": [
        {
          "id": 427
        },
        {
          "id": 428
        },
        {
          "id": 432
        }
      ],
      "id": 11,
      "productID": "kGBizO",
      "productName": "Environmental monitoring",
      "updateAt": null,
      "userIntID": 6
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```

**Field description:**

| Name      | Sample value      | Type | Description |
| ----------- | ------------------- | ------- | ---------- |
| createAt    | 2018-03-28 10:41:15 | Date    | Creation time |
| description | Environmental monitoring | String  | Product description |
| devices     |                     | Array   | All device IDs under this product |
| id          | 21                  | Integer | Primary key ID |
| productID   | DcSzpG              | String  | Product ID |
| productName | Environmental monitor | String  | Product name |
| updateAt    |                     | Date    | Update time |
| userIntID   | 6                   | Integer | Create user primary key ID |

  

**Query parameter:**

```bash
GET /api/v1/products?_page=1&_limit=10&pruductName_like=Shared bicycle
```

**Field description:**

| Name  | Type | Description |
| ------ | --- | ----------- |
| productName_like  | String | Filter by product name |




### Create a product

**API :**

```bash
POST /api/v1/products
```

**Body:**

```json
{
  "productName": "Environmental monitor",
  "description": "Environmental monitoring"
}
```

**Field description:**

| Name        | Sample value             | Type   | Required to fill or not | Description         |
| ----------- | ------------------------ | ------ | ----------------------- | ------------------- |
| productName | Environmental monitor    | String | true                    | Product name        |
| description | Environmental monitoring | String | true                    | Product description |

  




### View product details

**API :**

```bash
GET /api/v1/products/{product_id}
```

**Response:**

```json
{
  "createAt": "2018-03-23 11:38:28",
  "createUser": "EMQ",
  "description": "Environmental monitoring series",
  "deviceCount": 3,
  "devices": [
    {
      "id": 427
    },
    {
      "id": 428
    },
    {
      "id": 432
    }
  ],
  "id": 11,
  "productID": "kGBizO",
  "productName": "Environmental monitoring ",
  "updateAt": null,
  "userIntID": 6
}
```

**Field description:**

| Name        | Sample value                    | Type    | Description                          |
| ----------- | ------------------------------- | ------- | ------------------------------------ |
| createAt    | 2018-03-23 11:38:28             | Date    | Creation time                        |
| createUser  | EMQ                             | String  | Creation username                    |
| description | Environmental monitoring series | String  | Product description                  |
| deviceCount | 3                               | Integer | Number of devices under this product |
| devices     | []                              | Array   | All device IDs under this product    |
| id          | 11                              | Integer | Product ID                           |
| productID   | kGBizO                          | String  | Product ID                           |
| productName | Environmental monitoring        | String  | Product name                         |
| updateAt    |                                 | Date    | Update time                          |
| userIntID   | 6                               | Integer | Create user primary key ID           |

  





### Edit product information

**API :**

```bash
PUT /api/v1/products/{product_id}
```

**Body:**

```json
{
  "productName": "Environmental monitor",
  "description": "for environmental monitoring "
}
```




### Delete product

**API :**

```bash
# Single delete
DELETE /api/v1/products?ids={product_id}

# Support batch deletion, multiple device_ids separated by English commas
DELETE /api/v1/products?ids={product_id, product_id, product_id}
```


**Response:**

```bash
HTTP Status Code 204
```

