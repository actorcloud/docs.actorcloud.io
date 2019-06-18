# Authentication and basic query

Before using the REST API, you need to create an [application](../application/application.md), and its ID and  key can be used to call API.


### URL Address

- REST API access URL address:
```bash
https://console.actorcloud.io/api/v1/
```

### Authentication Method

- Based on Basic Auth authentication, the username is the application ID and the password is the application key:
```bash
curl -v --basic -u <AppID>:<AppSecret> -k https://console.actorcloud.io/api/v1/overview/current_count
```

### Message body format

- Define the following two values in the HTTP request header and send JSON formatted text data when the POST PUT request is made.
```bash
Content-Type: 'application/json'
Accept: 'application/json'
```

### Response
- HTTP Status Code = 20X can be considered as successful operation. When the status code is greater than 300, the error message will be returned in the response body.

Error message refers[error handling](error.md)


### Resource list

- In the resource list page,  the URL parameter can be used for paged queries.

Example:

```bash
GET /api/v1/products?_page=1&_limit=10
```

Field description:

| Name  | Type | Description |
| ------ | --- | ----------- |
| _page  | Integer | Current page number, default is 1 |
| _limit | Integer | Page size, default is 10 |

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
      "productName": "Environmental monitoring ",
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
In the response information of resource list, **items** is the resource list data, and **meta** is the paging information.

meta definition:

| Name | Type | Description |
| ------ | --- | ----------- |
| count  | Integer | Total number of meeting the conditions |
| limit | Integer | Paging Size |
| page | Integer | Current page |


### Query parameter
In some resources, the URL parameter can be used to filter resources. Query format: **Field name_Query command=Query value**.

Example:

```bash
GET /api/v1/products?_page=1&_limit=10&productName_like=Shared bicycle
```
Common query instructions:

| Instruction | Type | Description |
| ------ | --- | ----------- |
| *_like  | -- | Fuzzy query |

> For specific query parameters, see the documentation under each resource.

