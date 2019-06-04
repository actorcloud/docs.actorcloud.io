# Actorcloud安装

### 先决条件

以下是Actorcloud部署的最低系统配置

* 64 位操作系统
* 如果远程部署第三方组件(Timescaledb, Pulsar, Emqx等)，所需最低配置为2 核 4 G
* 如果第三方组件部署在同一节点上，所需最低配置为4 核 8 G

Actorcloud支持以下操作系统

* Ubuntu 16.04

### 第三方组件

Actorcloud 需要以下组件

* PostgreSQL 10.5
* TimescaleDB
* Pulsar 
* Emqx
* Nginx

##### Timescaledb
TimescaleDB在actorcloud中用于存储租户、设备、应用等数据。它是在PostgreSQL数据库的基础上进行开发，所以使用方法基本和传统数据库一致。它可以支持复杂的SQL查询，并针对时间序列数据的快速插入和复杂查询进行了优化，特别适合用于监控，IoT，金融，物流等大数据领域。

##### Pulsar 

Pulsar在actorcloud中用于规则管理，设备数据处理等。Apache Pulsar是一个开源的分布式pub-sub消息系统。

##### Emqx

Emqx 

##### Nginx

Nginx在actorcloud中用于反向代理。Nginx是一款轻量级的文本反向代理服务器及电子邮件代理服务器，其特点是内存少，并发高。

### 安装Actorcloud

需要在单个Linux节点上安装和配置actorcloud组件，请按照[单节点部署](single_node.md#单节点部署)进行操作

