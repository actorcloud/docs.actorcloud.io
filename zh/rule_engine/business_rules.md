# 业务规则

业务规则应用于每一条设备上报至平台的数据流，通过预定义数据的相关规则与关联触发动作，当数据流里的数据满足规则定义时即可触发相应的动作。

创建业务规则前，需要预先进行[功能定义](/device/product.md#功能定义)。

规则的触发采用 `SQL` 的方式。

```sql
SELECT {payload}
FROM "{topic}"
WHERE condition
```

- `SELECT`：消息的 payload，`SELECT *`，`SELECT temperature AS temp`，`SELECT payload$$hum AS hum`(适用于 {"payload":{"hum":89}} 的情况)

-  `FROM` ：消息的 topic，topic 的结构为：
`/{protocol}/{tenantID}/{productID}/{deviceID}/{realTopic}`

业务规则 SQL 主要包含关联对象，条件频率和条件

#### 1. 关联对象

具体的 topic 可以界面上使用`查询主题`进行查询，根据情况可以关联到具体设备的数据流或者产品下所有设备的数据流。

关联到具体设备的数据流
```
/mqtt/CcSMji6gp/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world
```

关联到产品下所有设备的数据流，使用 `+` 通配符
```
/mqtt/CcSMji6gp/bff530/+/world
```

#### 2. 条件频率

一般来说，平台支持以下几种类型的条件频率：

-  每次满足条件都触发。

   示例：每次温度（temp）大于 10 时触发规则

```sql
SELECT * 
FROM "/mqtt/CcSMji6gp/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world"
WHERE temp > 10
```


   - 满足频率时触发：当数据流多长时间内满足条件多少次时触发。

     示例：温度（temp）大于 10 且 2 分钟内满足 5 次时触发

```sql
SELECT * 
FROM "/mqtt/CcSMji6gp/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world"
WHERE temp > 10
GROUP BY slidingwindow('mi', 2)
HAVING COUNT(*) >= 5
```

- 条件持久存在时触发：当数据流满足条件持续若干分钟/小时时触发。

  示例：温度（temp）大于 10 且持续 2 分钟时触发

```sql
SELECT * 
FROM "/mqtt/CcSMji6gp/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world"
WHERE temp > 10
GROUP BY slidingwindow('mi', 2)
HAVING COUNT(*) = size()
```

- 多长时间内未上报时触发。

  示例：2 分钟内未上报数据时触发

```sql
SELECT * 
FROM "/mqtt/CcSMji6gp/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world"
GROUP BY tumblingwindow('mi', 2)
HAVING size() = 0
```

#### 3. 条件

和常规 SQL 类似

![business_rule_create](_assets/business_rule_create.png)


**特别注意**

若选择触发动作为`告警`，**必须**查询 topic，方法如下：
```sql
SELECT getMetadataPropertyValue('/mqtt/CcSMji6gp/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world','topic') as topic,*
FROM "/mqtt/CcSMji6gp/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world"
```

**SQL 函数说明**

```
slidingwindow(String unit, long size)
```

```
tumblingwindow(String unit, long size)
```

| unit | 说明 |
| ---- | ---- |
| mc   | 微秒  |
| tt/ms| 毫秒  |
| ss   | 秒   |
| mi   | 分钟 |
| hh   | 小时 |
| dd   | 天   |

```
String getMetadataPropertyValue(String topic, String property)
```
获取元数据中的特定属性值，此处仅支持获取 topic 的值