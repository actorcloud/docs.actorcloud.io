# Group operation

### Get group list

**API :**

```bash
GET /api/v1/groups?_page=1&_limit=10 
```

**Response:**

```json
{
  "items": [
    {
      "createAt": "2018-03-23 13:51:48",
      "description": "Reporting data",
      "devices": [
        {
          "id": 427
        },
        {
          "id": 428
        }
      ],
      "groupID": "9H6t1L",
      "groupName": "Reporting group",
      "id": 4,
      "productID": "kGBizO",
      "productName": "Environmental monitoring",
      "updateAt": null,
      "userIntID": 6
    }
  ],
  "meta": {
    "count": 1,
    "limit": 10,
    "page": 1
  }
}
```

**Field description:**

| Name      | Sample value                  | Type | Description |
| ----------- | ------------------------------- | ------- | ---------- |
| createAt    | 2018-03-23 13:51:48             | Date    | Creation time |
| description | Reporting data              | String  | Product description |
| devices     | [] | Array   | All device IDs under this product |
| groupID     | 9H6t1L                          | String  | Group ID |
| groupName   | Reporting group             | String  | Group name |
| id          | 4                               | Integer | Primary key ID |
| productID   | kGBizO                          | String  | Product ID |
| productName | Environmental monitoring    | String  | Product name |
| updateAt    |                                 | Date    | Update time |
| userIntID   | 6                               | Integer | Create a user primary key ID |

**Query parameter:**

```bash
GET /api/v1/products?_page=1&_limit=10&pruductName_like=shared bicycle
```

**Field description:**

| Name  | Type | Description |
| ------ | --- | ----------- |
| groupName_like  | String | Filter by group name |
| groupID_like  | String | Filter by group id |


### Create a group

**API :**

```bash
POST /api/v1/groups
```

**Body:**

```json
{
  "groupName": "Default group",
  "productID": "kGBizO",
  "description": "Default group"
}
```

**Field description:**

| Name        | Sample value  | Type   | required to fill or not | Description       |
| ----------- | ------------- | ------ | ----------------------- | ----------------- |
| groupName   | Default group | String | true                    | Subordinate Group |
| productID   | kGBizO        | String | true                    | Product ID        |
| description | Default group | String | true                    | Group description |


### View group details

**API :**

```bash
GET /api/v1/groups/{group_id}
```

**Response:**

```json
{
  "createAt": "2018-03-23 13:51:48",
  "createUser": "EMQ",
  "description": "Reporting error",
  "devices": [
    {
      "id": 427
    },
    {
      "id": 428
    }
  ],
  "groupID": "9H6t1L",
  "groupName": "Reporting group",
  "id": 4,
  "productID": "kGBizO",
  "updateAt": null,
  "userIntID": 6
}
```

**Field description:**

| Name      | Sample value                  | Type | Description |
| ----------- | ------------------------------- | ------- | ---------- |
| createAt    | 2018-03-23 13:51:48             | Date    | Creation time |
| createUser  | EMQ                             | String  | Creation username |
| description | Reporting data              | String  | Product description |
| devices     | [] | Array   | All device primary key IDs under this product |
| groupID     | 9H6t1L                          | String  | Group ID |
| groupName   | Reporting group              | String  | Subordinate Group |
| id          | 4                               | Integer | Primary key ID |
| productID   | kGBizO                          | String  | Product ID |
| updateAt    |                                 | Date    | Update time |
| userIntID   | 6                               | Integer | Create user primary key ID |


### Edit group information

**API :**

```bash
PUT /api/v1/groups/{group_id}
```

**Body:**

```json
{
  "description": "Default group",
  "groupName": "Default group",
  "id": 4,
  "productID": "Gq2kxM"
}
```


### Delete group

**API :**

```bash
# Single delete
DELETE /api/v1/groups?ids={group_id}

# Support batch deletion, multiple group_ids separated by English commas
DELETE /api/v1/groups?ids={group_id, group_id, group_id}
```


**Response:**

```bash
HTTP Status Code 204
```

