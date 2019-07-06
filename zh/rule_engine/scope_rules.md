# 围栏规则

围栏规则主要用于地理信息，可以为设备设置一个围栏，设定为活动区域或者禁止区域，当设备超出活动区域或者进入禁止区域时，触发规则。

一般来说，围栏规则 SQL 通过用户选择以后自动生成，若用户有需要，可以进行修改。围栏规则主要包含三个部分。

**1. 围栏类型**

- 活动区域
- 禁止区域

**2. 围栏范围**

通过在地图上选择围栏范围，支持圆形围栏和多边形围栏

**3. 关联设备**

选择围栏规则应用的设备，可多选

![scope_rules_create](_assets/scope_rules_create.png)

SQL 样例

```sql
SELECT *
FROM "/#"
WHERE inCircle(data$$lat$$value, data$$lng$$value, 39.917739, 116.357634, 2083.487794747287)
    AND split_part(getMetadataPropertyValue('/#', 'topic'), '/' , 5) in ('client_id_5000','client_id_50001')
```

**说明**

`split_part(getMetadataPropertyValue('/#', 'topic'), '/' , 5)` 函数是为了从 topic 中取出设备 id


**函数说明**

```
String split_part(String text, String delimiter, int position)
```
返回分割以后的特定位置的字符串

参数说明：
- text：待分割的字符串
- delimiter：分隔符
- position：位置，从 1 开始

例子：
```sql
split_part('a,b,c', ',', 2)   # b
split_part('/bff530/dbabdf8ad91ef595bf9e9f35b1eef433/world', '/', 3)  #  dbabdf8ad91ef595bf9e9f35b1eef433
```

***

```
boolean inCircle(double lat, double lng, double centerlat, double centerlng, double radius)
```
判断经纬度是否位于一个圆形范围内

参数说明：
- lat：纬度
- lng：经度
- centerLat：圆形范围圆心纬度
- centerLng：圆形范围圆心经度
- radius：圆形范围半径，单位为**米**

例子：
```sql
inCircle(26.21453, 104.102951, 39.917739, 116.357634, 2083.487794747287)
```
***

```
boolean inPolygon(double lat, double lng, String pointArrayStr)
```

判断经纬度是否位于一个多边形范围内

参数说明
- lat：纬度
- lng：经度
- pointArrayStr：多边形经纬度列表字符串，如：`'[[39.922637,116.362612],[39.90315,116.397631],[39.888795,116.361239]]'`

例子：
```sql
inPolygon(26.21453, 104.102951, '[[39.922637,116.362612],[39.90315,116.397631],[39.888795,116.361239]]')
```