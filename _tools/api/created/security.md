# 安全管理

## 证书

### 查看证书列表

**API 定义：**

```bash
GET /api/v1/certs?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/certs?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "createAt": "2018-09-30 16:38:38",
      "enable": 1,
      "id": 31,
      "name": "证书2"
    },
    {
      "createAt": "2018-09-30 16:15:20",
      "enable": 1,
      "id": 30,
      "name": "默认证书"
    }
  ],
  "meta": {
    "count": 2,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| createAt| "2018-09-30 16:38:38" | Date  | true  | 创建时间 |
| enable| 1 | Integer  | true  | 是否可用 可选参数: 允许: 1, 不允许: 0 |
| id| 31 | Integer  | true  | id |
| name| "证书2" | String  | true  | 设备名称 |









### 查看证书详情

**API 定义：**

```bash
GET /api/v1/certs/{certsID}
```

**请求示例：**

```bash
GET /api/v1/certs/31
```

**成功响应：**

```bash
status 200
```

```json
{
  "CN": "C1g8RWNwv:4EgbqSUKsONlMZjGVTAwchHYdC",
  "cert": "-----BEGIN CERTIFICATE-----\nMIIDEzCCAfsCAQAwDQYJKoZIhvcNAQELBQAwcDEbMBkGA1UEAwwSbXF0dC5hY3Rv\ncmNsb3VkLmlvMQ8wDQYDVQQKDAZxY2xvdWQxDzANBgNVBAsMBnFjbG91ZDEQMA4G\nA1UEBwwHQmVpamluZzEQMA4GA1UECAwHQmVpamluZzELMAkGA1UEBhMCQ04wHhcN\nMTgwOTMwMDgzODM4WhcNMTkwOTMwMDgzODM4WjAvMS0wKwYDVQQDDCRDMWc4UldO\nd3Y6NEVnYnFTVUtzT05sTVpqR1ZUQXdjaEhZZEMwggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQDOeg93PVHsMyUfoXv9+zmLemoAfqqLcvfN5G6HVnHgD/Pl\n/TYTrqNTn8feZh2xJHHfzDkZJo2v4JUzcxFCYor1G+afwGelQNC3nqwskKCFp8iG\n5YK0EuhxjUmM0arzrK8fNR/Ac5xBb3pJ7R/fImdZnwuHSHhA5f8WV+kk7WZkpnWv\nXZuAHumh9+CmzfmLNjZauyHv1shjqHSiY3wlhb87PDTc++HQebeRCGKHh+AhEcGf\nfQzA5C3kUWZbsKnsmoqRPs6VxH0i31PyeKFv7NEymgmZ2Fjxc7kmfXZpgD2Jtsfb\nVfG5c8jCQCt/bGX2X7qezQV4BvwPB+oGqJdROWClAgMBAAEwDQYJKoZIhvcNAQEL\nBQADggEBAJSHB00dexJ4kJDW2KxxDRgswGFupLhHUkwqLfWs7o2vADDinZas+rDI\nwhtpENHes8rxIABqfI0Bx9TT0ohl3JjU7hjIBlHSLmMF+YBMa7huxjod2BtfW4au\nvFaCu+bqJsTgE8Md/V++ASUjKxdo7BkVFRw8Wkb0BXp1LOSYaJIB9kI4rQmVcawQ\non5Xw1fQ1Y6WHEyHHbdaYainFxYRbtpKlk4VQrTVVDGYY79XBrCugv8CuP/g6MbM\nOKqOqyliYj+HD2ziWdNYauzZfs9aw+u6EgJFVeQ3yVpe8pnPELdB40IA001rKwKC\np3saT3IGUrWIA2wiulymNvZLY2f6KeU=\n-----END CERTIFICATE-----\n",
  "createAt": "2018-09-30 16:38:38",
  "createUser": "ActorCloud",
  "enable": 1,
  "id": 31,
  "key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDOeg93PVHsMyUf\noXv9+zmLemoAfqqLcvfN5G6HVnHgD/Pl/TYTrqNTn8feZh2xJHHfzDkZJo2v4JUz\ncxFCYor1G+afwGelQNC3nqwskKCFp8iG5YK0EuhxjUmM0arzrK8fNR/Ac5xBb3pJ\n7R/fImdZnwuHSHhA5f8WV+kk7WZkpnWvXZuAHumh9+CmzfmLNjZauyHv1shjqHSi\nY3wlhb87PDTc++HQebeRCGKHh+AhEcGffQzA5C3kUWZbsKnsmoqRPs6VxH0i31Py\neKFv7NEymgmZ2Fjxc7kmfXZpgD2JtsfbVfG5c8jCQCt/bGX2X7qezQV4BvwPB+oG\nqJdROWClAgMBAAECggEBAJ2RXo4TeJo1KaZq2LGo73A2egBoqYODuAIiygpz+LER\n24Hu6z637iIZ9DAPY6dUdaZhNk2wMz49t/6sWEZ95ydIJIZTEYV14hHOf/v+XtHA\nifIP4d/D8ij9tlxFgR018epx4wo978er5/nUgJcKrS4ihmy17Dcyjakia2Rn2tUB\nJ2gGsYGGPGKJXLTcOY3E9aE1gfYo09JEJPIZGjTmnAuaizKhxJp6He8BsGcOXnM/\nP/Fi0VHOjaRNQONSvIbvTF32zm7cgndAfHaink9KVZlfbsuIvmQ7/TCpS2anmf++\nzS91VZ4/ZOJJ3SaJ58HrQKJusapmvNfCQ0xCHXJEyV0CgYEA9fYYNsHvFUAYks9S\nxUcJYsOIjjmbNuWoqtVATMVCCFi81QiH5g1bNC58C/zCn9Wstf9mXrlsrm1Dgp3T\n8o6OkjOLArPjxG0jEUOQtvgPKIHlo6FgNAnHTvBO23Dq2Y/kwK/6rEvUWLQbtF9i\nWmOfLldA7b9xHfdrGSZvAALgjWsCgYEA1udqVQ2WxYoSC1AwqKuEtke+sIA99sZa\nC3Efvmbg9x4rARunZ4Y2rSXFY35dMO4jo1mEy0tltU8fwgbyzdmp2+4zk6u6S0OE\nhQaSrMs5pvjNDImQwp3Mhao0VoOjJrqtc0ooc+Hc00MFA5RR286F1YDvoonyeSeX\nrn25a8uevi8CgYEA1HsM4AEZsZn1oJ5KOvLrQM76oSNS21H7K9md+rROHzfJqZ/9\nBthy+dlOgGyTFdFZqsBAh4RYRzdNIwGFn/1XXSX56RPOqFo/+SINWoNhVPUilQFM\nQqhP7fnbpecee2S7kVp1i3LWtuqhJGliZgO5+CaYiMrhxamAc/Gn4rKZmpECgYBd\nuipXFAko+JHsGzpNphjIgzv4sMXVpibJjLoCic4eGSs6XXxCm3enRqzzOr6cQ5CJ\ngtZ279hZHjxEnFEzVHZPtHEMO76Ras4WUoqQEEaBu0t651iaeMYlmdkfzmPO1WYm\nvTYtbFmqTjWWnQ6ipk0alBRvuGhnTMxLzwuapwECAwKBgAIvVO9Ww9MxdCBkBsZb\nd2wd05zTcvTYZJNXGqIktg8002eZ6Rhj4WCyuzHXaeEqRCcXXYiKq0a9UwYsyORq\nwb16R+uA6HwfVC5ClYVFUsd/1r1Dv/4aOkwXpVvM9qY/YORb8q7A1tU3wQkMfAed\nA9UzOY4cLGr2YKypWumSEhAj\n-----END PRIVATE KEY-----\n",
  "name": "证书2",
  "root": "-----BEGIN CERTIFICATE-----\nMIIErjCCA5agAwIBAgIQBYAmfwbylVM0jhwYWl7uLjANBgkqhkiG9w0BAQsFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0xNzEyMDgxMjI4MjZaFw0yNzEyMDgxMjI4MjZaMHIxCzAJBgNVBAYTAkNO\nMSUwIwYDVQQKExxUcnVzdEFzaWEgVGVjaG5vbG9naWVzLCBJbmMuMR0wGwYDVQQL\nExREb21haW4gVmFsaWRhdGVkIFNTTDEdMBsGA1UEAxMUVHJ1c3RBc2lhIFRMUyBS\nU0EgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCgWa9X+ph+wAm8\nYh1Fk1MjKbQ5QwBOOKVaZR/OfCh+F6f93u7vZHGcUU/lvVGgUQnbzJhR1UV2epJa\ne+m7cxnXIKdD0/VS9btAgwJszGFvwoqXeaCqFoP71wPmXjjUwLT70+qvX4hdyYfO\nJcjeTz5QKtg8zQwxaK9x4JT9CoOmoVdVhEBAiD3DwR5fFgOHDwwGxdJWVBvktnoA\nzjdTLXDdbSVC5jZ0u8oq9BiTDv7jAlsB5F8aZgvSZDOQeFrwaOTbKWSEInEhnchK\nZTD1dz6aBlk1xGEI5PZWAnVAba/ofH33ktymaTDsE6xRDnW97pDkimCRak6CEbfe\n3dXw6OV5AgMBAAGjggFPMIIBSzAdBgNVHQ4EFgQUf9OZ86BHDjEAVlYijrfMnt3K\nAYowHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUwDgYDVR0PAQH/BAQD\nAgGGMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAG\nAQH/AgEAMDQGCCsGAQUFBwEBBCgwJjAkBggrBgEFBQcwAYYYaHR0cDovL29jc3Au\nZGlnaWNlcnQuY29tMEIGA1UdHwQ7MDkwN6A1oDOGMWh0dHA6Ly9jcmwzLmRpZ2lj\nZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RDQS5jcmwwTAYDVR0gBEUwQzA3Bglg\nhkgBhv1sAQIwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly93d3cuZGlnaWNlcnQuY29t\nL0NQUzAIBgZngQwBAgEwDQYJKoZIhvcNAQELBQADggEBAK3dVOj5dlv4MzK2i233\nlDYvyJ3slFY2X2HKTYGte8nbK6i5/fsDImMYihAkp6VaNY/en8WZ5qcrQPVLuJrJ\nDSXT04NnMeZOQDUoj/NHAmdfCBB/h1bZ5OGK6Sf1h5Yx/5wR4f3TUoPgGlnU7EuP\nISLNdMRiDrXntcImDAiRvkh5GJuH4YCVE6XEntqaNIgGkRwxKSgnU3Id3iuFbW9F\nUQ9Qqtb1GX91AJ7i4153TikGgYCdwYkBURD8gSVe8OAco6IfZOYt/TEwii1Ivi1C\nqnuUlWpsF1LdQNIdfbW3TSe0BhQa7ifbVIfvPWHYOu3rkg1ZeMo6XRU9B4n5VyJY\nRmE=\n-----END CERTIFICATE-----",
  "updateAt": null
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| CN| "C1g8RWNwv:4EgbqSUKsONlMZjGVTAwchHYdC" | String  | true  | 是否中国区 |
| cert| "----BEGIN CERTIFICATE-----\nMIIDEzCCAfsCAQAwDQYJKoZIhvcNAQELBQAwcDEbMBkGA1UEAwwSbXF0dC5hY3Rv\ncmNsb3" | String  | true  | 证书文件内容 |
| createAt| "2018-09-30 16:38:38" | Date  | true  | 创建时间 |
| createUser| "ActorCloud" | String  | true  | 创建用户 |
| enable| 1 | Integer  | true  | 是否可用 可选参数: 允许: 1, 不允许: 0 |
| id| 31 | Integer  | true  | id |
| key| "----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDOeg93PVHsMyUf\noXv9+z" | String  | true  | key file string |
| name| "证书2" | String  | true  | 设备名称 |
| root| "----BEGIN CERTIFICATE-----\nMIIErjCCA5agAwIBAgIQBYAmfwbylVM0jhwYWl7uLjANBgkqhkiG9w0BAQsFADBh\nMQswCQ" | String  | true  | root ca 内容 |
| updateAt| "null" | Date  | true  | 更新时间 |









### 创建证书

**API 定义：**

```bash
POST /api/v1/certs
```

**请求示例：**

```bash
POST /api/v1/certs
```

```json
{
  "enable": 1,
  "name": "证书2"
}
```


**成功响应：**

```bash
status 201
```

```json
{
  "CN": "C1g8RWNwv:4EgbqSUKsONlMZjGVTAwchHYdC",
  "cert": {
    "content": "-----BEGIN CERTIFICATE-----\nMIIDEzCCAfsCAQAwDQYJKoZIhvcNAQELBQAwcDEbMBkGA1UEAwwSbXF0dC5hY3Rv\ncmNsb3VkLmlvMQ8wDQYDVQQKDAZxY2xvdWQxDzANBgNVBAsMBnFjbG91ZDEQMA4G\nA1UEBwwHQmVpamluZzEQMA4GA1UECAwHQmVpamluZzELMAkGA1UEBhMCQ04wHhcN\nMTgwOTMwMDgzODM4WhcNMTkwOTMwMDgzODM4WjAvMS0wKwYDVQQDDCRDMWc4UldO\nd3Y6NEVnYnFTVUtzT05sTVpqR1ZUQXdjaEhZZEMwggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQDOeg93PVHsMyUfoXv9+zmLemoAfqqLcvfN5G6HVnHgD/Pl\n/TYTrqNTn8feZh2xJHHfzDkZJo2v4JUzcxFCYor1G+afwGelQNC3nqwskKCFp8iG\n5YK0EuhxjUmM0arzrK8fNR/Ac5xBb3pJ7R/fImdZnwuHSHhA5f8WV+kk7WZkpnWv\nXZuAHumh9+CmzfmLNjZauyHv1shjqHSiY3wlhb87PDTc++HQebeRCGKHh+AhEcGf\nfQzA5C3kUWZbsKnsmoqRPs6VxH0i31PyeKFv7NEymgmZ2Fjxc7kmfXZpgD2Jtsfb\nVfG5c8jCQCt/bGX2X7qezQV4BvwPB+oGqJdROWClAgMBAAEwDQYJKoZIhvcNAQEL\nBQADggEBAJSHB00dexJ4kJDW2KxxDRgswGFupLhHUkwqLfWs7o2vADDinZas+rDI\nwhtpENHes8rxIABqfI0Bx9TT0ohl3JjU7hjIBlHSLmMF+YBMa7huxjod2BtfW4au\nvFaCu+bqJsTgE8Md/V++ASUjKxdo7BkVFRw8Wkb0BXp1LOSYaJIB9kI4rQmVcawQ\non5Xw1fQ1Y6WHEyHHbdaYainFxYRbtpKlk4VQrTVVDGYY79XBrCugv8CuP/g6MbM\nOKqOqyliYj+HD2ziWdNYauzZfs9aw+u6EgJFVeQ3yVpe8pnPELdB40IA001rKwKC\np3saT3IGUrWIA2wiulymNvZLY2f6KeU=\n-----END CERTIFICATE-----\n",
    "fileName": "4EgbqSUKsONlMZjGVTAwchHYdC.crt"
  },
  "createAt": "2018-09-30 16:38:38",
  "enable": 1,
  "id": 31,
  "key": {
    "content": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDOeg93PVHsMyUf\noXv9+zmLemoAfqqLcvfN5G6HVnHgD/Pl/TYTrqNTn8feZh2xJHHfzDkZJo2v4JUz\ncxFCYor1G+afwGelQNC3nqwskKCFp8iG5YK0EuhxjUmM0arzrK8fNR/Ac5xBb3pJ\n7R/fImdZnwuHSHhA5f8WV+kk7WZkpnWvXZuAHumh9+CmzfmLNjZauyHv1shjqHSi\nY3wlhb87PDTc++HQebeRCGKHh+AhEcGffQzA5C3kUWZbsKnsmoqRPs6VxH0i31Py\neKFv7NEymgmZ2Fjxc7kmfXZpgD2JtsfbVfG5c8jCQCt/bGX2X7qezQV4BvwPB+oG\nqJdROWClAgMBAAECggEBAJ2RXo4TeJo1KaZq2LGo73A2egBoqYODuAIiygpz+LER\n24Hu6z637iIZ9DAPY6dUdaZhNk2wMz49t/6sWEZ95ydIJIZTEYV14hHOf/v+XtHA\nifIP4d/D8ij9tlxFgR018epx4wo978er5/nUgJcKrS4ihmy17Dcyjakia2Rn2tUB\nJ2gGsYGGPGKJXLTcOY3E9aE1gfYo09JEJPIZGjTmnAuaizKhxJp6He8BsGcOXnM/\nP/Fi0VHOjaRNQONSvIbvTF32zm7cgndAfHaink9KVZlfbsuIvmQ7/TCpS2anmf++\nzS91VZ4/ZOJJ3SaJ58HrQKJusapmvNfCQ0xCHXJEyV0CgYEA9fYYNsHvFUAYks9S\nxUcJYsOIjjmbNuWoqtVATMVCCFi81QiH5g1bNC58C/zCn9Wstf9mXrlsrm1Dgp3T\n8o6OkjOLArPjxG0jEUOQtvgPKIHlo6FgNAnHTvBO23Dq2Y/kwK/6rEvUWLQbtF9i\nWmOfLldA7b9xHfdrGSZvAALgjWsCgYEA1udqVQ2WxYoSC1AwqKuEtke+sIA99sZa\nC3Efvmbg9x4rARunZ4Y2rSXFY35dMO4jo1mEy0tltU8fwgbyzdmp2+4zk6u6S0OE\nhQaSrMs5pvjNDImQwp3Mhao0VoOjJrqtc0ooc+Hc00MFA5RR286F1YDvoonyeSeX\nrn25a8uevi8CgYEA1HsM4AEZsZn1oJ5KOvLrQM76oSNS21H7K9md+rROHzfJqZ/9\nBthy+dlOgGyTFdFZqsBAh4RYRzdNIwGFn/1XXSX56RPOqFo/+SINWoNhVPUilQFM\nQqhP7fnbpecee2S7kVp1i3LWtuqhJGliZgO5+CaYiMrhxamAc/Gn4rKZmpECgYBd\nuipXFAko+JHsGzpNphjIgzv4sMXVpibJjLoCic4eGSs6XXxCm3enRqzzOr6cQ5CJ\ngtZ279hZHjxEnFEzVHZPtHEMO76Ras4WUoqQEEaBu0t651iaeMYlmdkfzmPO1WYm\nvTYtbFmqTjWWnQ6ipk0alBRvuGhnTMxLzwuapwECAwKBgAIvVO9Ww9MxdCBkBsZb\nd2wd05zTcvTYZJNXGqIktg8002eZ6Rhj4WCyuzHXaeEqRCcXXYiKq0a9UwYsyORq\nwb16R+uA6HwfVC5ClYVFUsd/1r1Dv/4aOkwXpVvM9qY/YORb8q7A1tU3wQkMfAed\nA9UzOY4cLGr2YKypWumSEhAj\n-----END PRIVATE KEY-----\n",
    "fileName": "4EgbqSUKsONlMZjGVTAwchHYdC.key"
  },
  "name": "证书2",
  "root": {
    "content": "-----BEGIN CERTIFICATE-----\nMIIErjCCA5agAwIBAgIQBYAmfwbylVM0jhwYWl7uLjANBgkqhkiG9w0BAQsFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0xNzEyMDgxMjI4MjZaFw0yNzEyMDgxMjI4MjZaMHIxCzAJBgNVBAYTAkNO\nMSUwIwYDVQQKExxUcnVzdEFzaWEgVGVjaG5vbG9naWVzLCBJbmMuMR0wGwYDVQQL\nExREb21haW4gVmFsaWRhdGVkIFNTTDEdMBsGA1UEAxMUVHJ1c3RBc2lhIFRMUyBS\nU0EgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCgWa9X+ph+wAm8\nYh1Fk1MjKbQ5QwBOOKVaZR/OfCh+F6f93u7vZHGcUU/lvVGgUQnbzJhR1UV2epJa\ne+m7cxnXIKdD0/VS9btAgwJszGFvwoqXeaCqFoP71wPmXjjUwLT70+qvX4hdyYfO\nJcjeTz5QKtg8zQwxaK9x4JT9CoOmoVdVhEBAiD3DwR5fFgOHDwwGxdJWVBvktnoA\nzjdTLXDdbSVC5jZ0u8oq9BiTDv7jAlsB5F8aZgvSZDOQeFrwaOTbKWSEInEhnchK\nZTD1dz6aBlk1xGEI5PZWAnVAba/ofH33ktymaTDsE6xRDnW97pDkimCRak6CEbfe\n3dXw6OV5AgMBAAGjggFPMIIBSzAdBgNVHQ4EFgQUf9OZ86BHDjEAVlYijrfMnt3K\nAYowHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUwDgYDVR0PAQH/BAQD\nAgGGMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAG\nAQH/AgEAMDQGCCsGAQUFBwEBBCgwJjAkBggrBgEFBQcwAYYYaHR0cDovL29jc3Au\nZGlnaWNlcnQuY29tMEIGA1UdHwQ7MDkwN6A1oDOGMWh0dHA6Ly9jcmwzLmRpZ2lj\nZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RDQS5jcmwwTAYDVR0gBEUwQzA3Bglg\nhkgBhv1sAQIwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly93d3cuZGlnaWNlcnQuY29t\nL0NQUzAIBgZngQwBAgEwDQYJKoZIhvcNAQELBQADggEBAK3dVOj5dlv4MzK2i233\nlDYvyJ3slFY2X2HKTYGte8nbK6i5/fsDImMYihAkp6VaNY/en8WZ5qcrQPVLuJrJ\nDSXT04NnMeZOQDUoj/NHAmdfCBB/h1bZ5OGK6Sf1h5Yx/5wR4f3TUoPgGlnU7EuP\nISLNdMRiDrXntcImDAiRvkh5GJuH4YCVE6XEntqaNIgGkRwxKSgnU3Id3iuFbW9F\nUQ9Qqtb1GX91AJ7i4153TikGgYCdwYkBURD8gSVe8OAco6IfZOYt/TEwii1Ivi1C\nqnuUlWpsF1LdQNIdfbW3TSe0BhQa7ifbVIfvPWHYOu3rkg1ZeMo6XRU9B4n5VyJY\nRmE=\n-----END CERTIFICATE-----",
    "fileName": "root_ca.crt"
  },
  "updateAt": null
}
```







### 编辑证书

**API 定义：**

```bash
PUT /api/v1/certs/{certsID}
```

**请求示例：**

```bash
PUT /api/v1/certs/32
```

```json
{
  "CN": "C2xPah6mn:bJkDLhGS9z4eEud07wQ3iX8Aqn",
  "cert": "-----BEGIN CERTIFICATE-----\nMIIDEzCCAfsCAQAwDQYJKoZIhvcNAQELBQAwcDEbMBkGA1UEAwwSbXF0dC5hY3Rv\ncmNsb3VkLmlvMQ8wDQYDVQQKDAZxY2xvdWQxDzANBgNVBAsMBnFjbG91ZDEQMA4G\nA1UEBwwHQmVpamluZzEQMA4GA1UECAwHQmVpamluZzELMAkGA1UEBhMCQ04wHhcN\nMTgxMDE3MDU0OTM1WhcNMTkxMDE3MDU0OTM1WjAvMS0wKwYDVQQDDCRDMnhQYWg2\nbW46YkprRExoR1M5ejRlRXVkMDd3UTNpWDhBcW4wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQCd4Ezn9x2FjUqwDDhRj6Ql5TJpPXH02EUPSEzcavdRUiOD\nzfrnD7tphU4Ex3HeBrLFjn2oZjo1aC+Vhf9oqYe5k2ZIgsZNS8i2BleiX2F4yZfu\nluuqA0yDgnXDF9Nr52OfQSnxGqlvEqtLyiyKcbIsVfnVk/Skh8JoDnWKzXSbruql\nvU/6acPx5SPVJEN7FUqY2+DovAckAZSgAo29EGsNNxZ8uFzwjeBhJ1KldkuF34ql\n/I+CzfELhh1k2CrE9WAhvZAPvm/wrUxPs9K035V0IT4imaVuEXcLcy42eUre0HTz\n0elxU7LLj35m8frWDHivCOEFU2Fv5o3adzW2GyNJAgMBAAEwDQYJKoZIhvcNAQEL\nBQADggEBAGGCRChu6caHhkOP/Z+6c0n5sY0l1PFWTFS3CmcmpLDz8EXdGuPZCQ9n\npOwu1wO6Fpp1YmQFmPZW3AbV3BHObwjlBhOYFh91H93lpoWmHAZftxnZro3UMW82\nb1SMeU0z7xPHUB8Xtx3rLNiCuQ0ryTU/buzsX7x0C3YKJxzFI/qrr6IHbauufjik\nquIz/uajZNP9x148HKsuRKxhfgW6GW74sp915WwI+bin7WisHeXUDqtNuk+jWvzp\nP5IjW1ZhdCECZWPmvJAUOylgDAHE5KZ9+RTPVDQuH5XzNN3NyAwiBf5LxHGUulsa\nNeBbkyqMznSr7Zm7F+MvGEV58pEzML0=\n-----END CERTIFICATE-----\n",
  "createAt": "2018-10-17 13:49:35",
  "createUser": "actorcloud",
  "enable": 0,
  "id": 32,
  "key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCd4Ezn9x2FjUqw\nDDhRj6Ql5TJpPXH02EUPSEzcavdRUiODzfrnD7tphU4Ex3HeBrLFjn2oZjo1aC+V\nhf9oqYe5k2ZIgsZNS8i2BleiX2F4yZfuluuqA0yDgnXDF9Nr52OfQSnxGqlvEqtL\nyiyKcbIsVfnVk/Skh8JoDnWKzXSbruqlvU/6acPx5SPVJEN7FUqY2+DovAckAZSg\nAo29EGsNNxZ8uFzwjeBhJ1KldkuF34ql/I+CzfELhh1k2CrE9WAhvZAPvm/wrUxP\ns9K035V0IT4imaVuEXcLcy42eUre0HTz0elxU7LLj35m8frWDHivCOEFU2Fv5o3a\ndzW2GyNJAgMBAAECggEAG+QWchyMEJ4HhdaC1JXlz/QP1dvPGAxlFvAU9BPJoYo7\nT/vBybRTza6JO/roOOtCBfjIZkm5GtpPHcFQf/MDUVujBEhmNB2hVdcFAGCNXcNv\nnez3sU9n4wvXNiItbbCxPt9KQ5gMOt03eeo7uDGh4odF3d+HptF9HNkBFwZ5BU+4\niAxg+xLHEXAxmzVuIG3FsmLweqhnOzfUoKCeWWs3SLpSxGVpGMOWh5Yj59fEa2aK\nZxrMsmybXO137sNMSdJfMk+JMt2CCkaRXIvzjN8Sw9r08wfCurHswPl6IFKY1a7U\nX/6SLfAR2CCak12S31FB1haLoN3bLIr3N8yYGQm3AQKBgQDJNU/pcqD6frF5xe5A\nquFDGC+7jzi1jZTs/Qsulwm6XMOsAsbOjkmUFFZFc6mwPIJhOAS+S7ZuJKwxEsfW\nOTtI0wt9Y6g2zU8rWY+AVFXe67creC9C8xymAgpkaX9HXEhjLZmj8NdtmFYH6tzX\ngamrCHb8Kw1NxNCtf9kVlu5J0QKBgQDI3jW/KbramnFf9Pbr0jIJWz8qC8u2VU50\naujjuYP0e4ap397zNKiyeH4w7RX2+g2RIzTkVg//ksRpjTSRorUo79LaJdunTKhL\n9vP8Nv/4W8z6sqAH8r0b+QrK6SFBz+1WCNdVXcQMD6kE1dl6P/8wuNM3QDdk8GwR\n6OIkEM6n+QKBgHcMTBPb9tM/UtKyAZ3RfSatkNBwlSUWeB8gORV/2AmkCUIlAmwE\nVBSBU+oT3TqhEqNi+at+MJpKqHcAnaxqgGE+PXYbGNQT9du4Seer/oK/BMl7ersq\nDLFMU8nFgcE/ILVNrbIKNexqTbyxgakg1rqTb5MUBfMVmEKPemoDu0mBAoGABbp4\nk+wPvR48b30f8Ze7/5JPmdZeR+Pk6eMGoz/uKHHBZGTTCeKNkRFon+KTBskYy/PS\nFVTy/dnkqhHx1tlqCzHTtI7x1bKU9h2j1aSH5kBP9zJS6AcfJ4YRrbm6ThMs9JAp\n+/BBoApuSooCur7Ke0w6EdBOBB3rJxOaJ2cnTZkCgYEAsQqAxKOfxOvSODu4aafs\n66A0hEQbBf3QXEmhu20jmObzWbcGzmcSX6yljzjPiGICzf+gBjQy9KmIsnIQk9mH\ndV6nSLC3Th5Hi/q/ws5CkXTXG+6SFV4cG+UBwf67PYrbN2TmM0KHaMSlEmyXVp24\ngl+9E6q5ETlvxeHHpADaU3s=\n-----END PRIVATE KEY-----\n",
  "name": "证书",
  "root": "-----BEGIN CERTIFICATE-----\nMIIErjCCA5agAwIBAgIQBYAmfwbylVM0jhwYWl7uLjANBgkqhkiG9w0BAQsFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0xNzEyMDgxMjI4MjZaFw0yNzEyMDgxMjI4MjZaMHIxCzAJBgNVBAYTAkNO\nMSUwIwYDVQQKExxUcnVzdEFzaWEgVGVjaG5vbG9naWVzLCBJbmMuMR0wGwYDVQQL\nExREb21haW4gVmFsaWRhdGVkIFNTTDEdMBsGA1UEAxMUVHJ1c3RBc2lhIFRMUyBS\nU0EgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCgWa9X+ph+wAm8\nYh1Fk1MjKbQ5QwBOOKVaZR/OfCh+F6f93u7vZHGcUU/lvVGgUQnbzJhR1UV2epJa\ne+m7cxnXIKdD0/VS9btAgwJszGFvwoqXeaCqFoP71wPmXjjUwLT70+qvX4hdyYfO\nJcjeTz5QKtg8zQwxaK9x4JT9CoOmoVdVhEBAiD3DwR5fFgOHDwwGxdJWVBvktnoA\nzjdTLXDdbSVC5jZ0u8oq9BiTDv7jAlsB5F8aZgvSZDOQeFrwaOTbKWSEInEhnchK\nZTD1dz6aBlk1xGEI5PZWAnVAba/ofH33ktymaTDsE6xRDnW97pDkimCRak6CEbfe\n3dXw6OV5AgMBAAGjggFPMIIBSzAdBgNVHQ4EFgQUf9OZ86BHDjEAVlYijrfMnt3K\nAYowHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUwDgYDVR0PAQH/BAQD\nAgGGMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAG\nAQH/AgEAMDQGCCsGAQUFBwEBBCgwJjAkBggrBgEFBQcwAYYYaHR0cDovL29jc3Au\nZGlnaWNlcnQuY29tMEIGA1UdHwQ7MDkwN6A1oDOGMWh0dHA6Ly9jcmwzLmRpZ2lj\nZXJ0LmNvbS9EaWdpQ2VydEdsb2JhbFJvb3RDQS5jcmwwTAYDVR0gBEUwQzA3Bglg\nhkgBhv1sAQIwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly93d3cuZGlnaWNlcnQuY29t\nL0NQUzAIBgZngQwBAgEwDQYJKoZIhvcNAQELBQADggEBAK3dVOj5dlv4MzK2i233\nlDYvyJ3slFY2X2HKTYGte8nbK6i5/fsDImMYihAkp6VaNY/en8WZ5qcrQPVLuJrJ\nDSXT04NnMeZOQDUoj/NHAmdfCBB/h1bZ5OGK6Sf1h5Yx/5wR4f3TUoPgGlnU7EuP\nISLNdMRiDrXntcImDAiRvkh5GJuH4YCVE6XEntqaNIgGkRwxKSgnU3Id3iuFbW9F\nUQ9Qqtb1GX91AJ7i4153TikGgYCdwYkBURD8gSVe8OAco6IfZOYt/TEwii1Ivi1C\nqnuUlWpsF1LdQNIdfbW3TSe0BhQa7ifbVIfvPWHYOu3rkg1ZeMo6XRU9B4n5VyJY\nRmE=\n-----END CERTIFICATE-----",
  "updateAt": null
}
```


**成功响应：**

```bash
status 200
```

```json
{
  "CN": "C2xPah6mn:bJkDLhGS9z4eEud07wQ3iX8Aqn",
  "cert": "-----BEGIN CERTIFICATE-----\nMIIDEzCCAfsCAQAwDQYJKoZIhvcNAQELBQAwcDEbMBkGA1UEAwwSbXF0dC5hY3Rv\ncmNsb3VkLmlvMQ8wDQYDVQQKDAZxY2xvdWQxDzANBgNVBAsMBnFjbG91ZDEQMA4G\nA1UEBwwHQmVpamluZzEQMA4GA1UECAwHQmVpamluZzELMAkGA1UEBhMCQ04wHhcN\nMTgxMDE3MDU0OTM1WhcNMTkxMDE3MDU0OTM1WjAvMS0wKwYDVQQDDCRDMnhQYWg2\nbW46YkprRExoR1M5ejRlRXVkMDd3UTNpWDhBcW4wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQCd4Ezn9x2FjUqwDDhRj6Ql5TJpPXH02EUPSEzcavdRUiOD\nzfrnD7tphU4Ex3HeBrLFjn2oZjo1aC+Vhf9oqYe5k2ZIgsZNS8i2BleiX2F4yZfu\nluuqA0yDgnXDF9Nr52OfQSnxGqlvEqtLyiyKcbIsVfnVk/Skh8JoDnWKzXSbruql\nvU/6acPx5SPVJEN7FUqY2+DovAckAZSgAo29EGsNNxZ8uFzwjeBhJ1KldkuF34ql\n/I+CzfELhh1k2CrE9WAhvZAPvm/wrUxPs9K035V0IT4imaVuEXcLcy42eUre0HTz\n0elxU7LLj35m8frWDHivCOEFU2Fv5o3adzW2GyNJAgMBAAEwDQYJKoZIhvcNAQEL\nBQADggEBAGGCRChu6caHhkOP/Z+6c0n5sY0l1PFWTFS3CmcmpLDz8EXdGuPZCQ9n\npOwu1wO6Fpp1YmQFmPZW3AbV3BHObwjlBhOYFh91H93lpoWmHAZftxnZro3UMW82\nb1SMeU0z7xPHUB8Xtx3rLNiCuQ0ryTU/buzsX7x0C3YKJxzFI/qrr6IHbauufjik\nquIz/uajZNP9x148HKsuRKxhfgW6GW74sp915WwI+bin7WisHeXUDqtNuk+jWvzp\nP5IjW1ZhdCECZWPmvJAUOylgDAHE5KZ9+RTPVDQuH5XzNN3NyAwiBf5LxHGUulsa\nNeBbkyqMznSr7Zm7F+MvGEV58pEzML0=\n-----END CERTIFICATE-----\n",
  "createAt": "2018-10-17 13:49:35",
  "enable": 0,
  "id": 32,
  "key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCd4Ezn9x2FjUqw\nDDhRj6Ql5TJpPXH02EUPSEzcavdRUiODzfrnD7tphU4Ex3HeBrLFjn2oZjo1aC+V\nhf9oqYe5k2ZIgsZNS8i2BleiX2F4yZfuluuqA0yDgnXDF9Nr52OfQSnxGqlvEqtL\nyiyKcbIsVfnVk/Skh8JoDnWKzXSbruqlvU/6acPx5SPVJEN7FUqY2+DovAckAZSg\nAo29EGsNNxZ8uFzwjeBhJ1KldkuF34ql/I+CzfELhh1k2CrE9WAhvZAPvm/wrUxP\ns9K035V0IT4imaVuEXcLcy42eUre0HTz0elxU7LLj35m8frWDHivCOEFU2Fv5o3a\ndzW2GyNJAgMBAAECggEAG+QWchyMEJ4HhdaC1JXlz/QP1dvPGAxlFvAU9BPJoYo7\nT/vBybRTza6JO/roOOtCBfjIZkm5GtpPHcFQf/MDUVujBEhmNB2hVdcFAGCNXcNv\nnez3sU9n4wvXNiItbbCxPt9KQ5gMOt03eeo7uDGh4odF3d+HptF9HNkBFwZ5BU+4\niAxg+xLHEXAxmzVuIG3FsmLweqhnOzfUoKCeWWs3SLpSxGVpGMOWh5Yj59fEa2aK\nZxrMsmybXO137sNMSdJfMk+JMt2CCkaRXIvzjN8Sw9r08wfCurHswPl6IFKY1a7U\nX/6SLfAR2CCak12S31FB1haLoN3bLIr3N8yYGQm3AQKBgQDJNU/pcqD6frF5xe5A\nquFDGC+7jzi1jZTs/Qsulwm6XMOsAsbOjkmUFFZFc6mwPIJhOAS+S7ZuJKwxEsfW\nOTtI0wt9Y6g2zU8rWY+AVFXe67creC9C8xymAgpkaX9HXEhjLZmj8NdtmFYH6tzX\ngamrCHb8Kw1NxNCtf9kVlu5J0QKBgQDI3jW/KbramnFf9Pbr0jIJWz8qC8u2VU50\naujjuYP0e4ap397zNKiyeH4w7RX2+g2RIzTkVg//ksRpjTSRorUo79LaJdunTKhL\n9vP8Nv/4W8z6sqAH8r0b+QrK6SFBz+1WCNdVXcQMD6kE1dl6P/8wuNM3QDdk8GwR\n6OIkEM6n+QKBgHcMTBPb9tM/UtKyAZ3RfSatkNBwlSUWeB8gORV/2AmkCUIlAmwE\nVBSBU+oT3TqhEqNi+at+MJpKqHcAnaxqgGE+PXYbGNQT9du4Seer/oK/BMl7ersq\nDLFMU8nFgcE/ILVNrbIKNexqTbyxgakg1rqTb5MUBfMVmEKPemoDu0mBAoGABbp4\nk+wPvR48b30f8Ze7/5JPmdZeR+Pk6eMGoz/uKHHBZGTTCeKNkRFon+KTBskYy/PS\nFVTy/dnkqhHx1tlqCzHTtI7x1bKU9h2j1aSH5kBP9zJS6AcfJ4YRrbm6ThMs9JAp\n+/BBoApuSooCur7Ke0w6EdBOBB3rJxOaJ2cnTZkCgYEAsQqAxKOfxOvSODu4aafs\n66A0hEQbBf3QXEmhu20jmObzWbcGzmcSX6yljzjPiGICzf+gBjQy9KmIsnIQk9mH\ndV6nSLC3Th5Hi/q/ws5CkXTXG+6SFV4cG+UBwf67PYrbN2TmM0KHaMSlEmyXVp24\ngl+9E6q5ETlvxeHHpADaU3s=\n-----END PRIVATE KEY-----\n",
  "name": "证书",
  "updateAt": "2018-10-17 13:50:00"
}
```







### 删除证书

**API 定义：**

```bash
DELETE /api/v1/certs?ids=certIDS
```

**请求示例：**

```bash
DELETE /api/v1/certs?ids=29
```

**成功响应：**

```bash
status 400
```

```json
{
  "errorCode": "REFERENCED_ERROR",
  "errors": {
    "device": "Referenced error"
  },
  "message": "Referenced error"
}
```







## 策略

### 查看策略列表

**API 定义：**

```bash
GET /api/v1/policies?_page={page}&_limit={pageSize}
```

**请求示例：**

```bash
GET /api/v1/policies?_page=1&_limit=10
```

**成功响应：**

```bash
status 200
```

```json
{
  "items": [
    {
      "access": 1,
      "accessLabel": "发布",
      "allow": 1,
      "allowLabel": "允许",
      "createAt": "2018-10-17 13:51:29",
      "description": null,
      "id": 16,
      "mqtt_acl": [],
      "name": "策略",
      "topic": "hello",
      "updateAt": "2018-10-17 13:51:48",
      "userIntID": 2
    },
    {
      "access": 1,
      "accessLabel": "发布",
      "allow": 0,
      "allowLabel": "拒绝",
      "createAt": "2018-09-21 14:51:43",
      "description": null,
      "id": 13,
      "mqtt_acl": [
        {
          "id": 11
        }
      ],
      "name": "qqqqqqq",
      "topic": "qqqqqqqqqqqqqqq",
      "updateAt": null,
      "userIntID": 2
    }
  ],
  "meta": {
    "count": 11,
    "limit": 10,
    "page": 1
  }
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| access| 1 | Integer  | true  | 操作 可选参数: 发布: 1, 订阅: 2, 发布或订阅: 3 |
| accessLabel| "发布" | String  | true  | 操作 可选参数: 发布: 1, 订阅: 2, 发布或订阅: 3 |
| allow| 1 | Integer  | true  | 访问控制 可选参数: 拒绝: 0, 允许: 1 |
| allowLabel| "允许" | String  | true  | 访问控制 可选参数: 拒绝: 0, 允许: 1 |
| createAt| "2018-10-17 13:51:29" | Date  | true  | 创建时间 |
| description| "ull" | String  | true  | 描述 |
| id| 16 | Integer  | true  | id |
| mqtt_acl| [] | Array  | true  | MQTT ACL ID |
| name| "策略" | String  | true  | 设备名称 |
| topic| "hello" | String  | true  | 主题 |
| updateAt| "2018-10-17 13:51:48" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









### 查看策略详情

**API 定义：**

```bash
GET /api/v1/policies/policiesID
```

**请求示例：**

```bash
GET /api/v1/policies/16
```

**成功响应：**

```bash
status 200
```

```json
{
  "access": 1,
  "accessLabel": "发布",
  "allow": 1,
  "allowLabel": "允许",
  "createAt": "2018-10-17 13:51:29",
  "createUser": "actorcloud",
  "description": null,
  "id": 16,
  "mqtt_acl": [],
  "name": "策略",
  "topic": "hello",
  "updateAt": "2018-10-17 13:51:48",
  "userIntID": 2
}
```


**字段说明：**

| 字段名             | 示例值               | 字段类型    | 必填(创建/更新)  | 说明                  |
| --------------- | ----------------- | ------- | ----- | ------------------- |
| access| 1 | Integer  | true  | 操作 可选参数: 发布: 1, 订阅: 2, 发布或订阅: 3 |
| accessLabel| "发布" | String  | true  | 操作 可选参数: 发布: 1, 订阅: 2, 发布或订阅: 3 |
| allow| 1 | Integer  | true  | 访问控制 可选参数: 拒绝: 0, 允许: 1 |
| allowLabel| "允许" | String  | true  | 访问控制 可选参数: 拒绝: 0, 允许: 1 |
| createAt| "2018-10-17 13:51:29" | Date  | true  | 创建时间 |
| createUser| "actorcloud" | String  | true  | 创建用户 |
| description| "ull" | String  | true  | 描述 |
| id| 16 | Integer  | true  | id |
| mqtt_acl| [] | Array  | true  | MQTT ACL ID |
| name| "策略" | String  | true  | 设备名称 |
| topic| "hello" | String  | true  | 主题 |
| updateAt| "2018-10-17 13:51:48" | Date  | true  | 更新时间 |
| userIntID| 2 | Integer  | true  | 用户 ID |









### 创建策略

**API 定义：**

```bash
POST /api/v1/policies
```

**请求示例：**

```bash
POST /api/v1/policies
```

```json
{
  "access": 1,
  "allow": 0,
  "name": "策略 2",
  "topic": "topic",
  "description": "禁止发布"
}
```


**成功响应：**

```bash
status 201
```

```json
{
  "access": 1,
  "allow": 0,
  "createAt": "2018-09-30 16:39:05",
  "description": "禁止发布",
  "id": 15,
  "mqtt_acl": [],
  "name": "策略 2",
  "topic": "topic",
  "updateAt": null,
  "userIntID": 23
}
```







### 编辑策略

**API 定义：**

```bash
PUT /api/v1/policies/policiesID
```

**请求示例：**

```bash
PUT /api/v1/policies/16
```

```json
{
  "access": 1,
  "accessLabel": "发布",
  "allow": 1,
  "allowLabel": "拒绝",
  "createAt": "2018-10-17 13:51:29",
  "createUser": "actorcloud",
  "description": null,
  "id": 16,
  "mqtt_acl": [],
  "name": "策略",
  "topic": "hello",
  "updateAt": null,
  "userIntID": 2
}
```


**成功响应：**

```bash
status 200
```

```json
{
  "access": 1,
  "allow": 1,
  "createAt": "2018-10-17 13:51:29",
  "description": null,
  "id": 16,
  "mqtt_acl": [],
  "name": "策略",
  "topic": "hello",
  "updateAt": "2018-10-17 13:51:48",
  "userIntID": 2
}
```







### 删除策略

**API 定义：**

```bash
DELETE /api/v1/policies?ids=policiesIDS
```

**请求示例：**

```bash
DELETE /api/v1/policies?ids=12
```

**成功响应：**

```bash
status 204
```

```json
""
```







