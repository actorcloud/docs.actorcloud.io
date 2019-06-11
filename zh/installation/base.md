# Actorcloud 部署

### 先决条件

Actorcloud 部署最低系统配置

* 64 位操作系统
* 如果第三方组件(Timescaledb, Pulsar, Emqx)与 ActorCloud 分开部署，所需最低配置为 2 核 4G
* 如果第三方组件与 ActorCloud 部署在同一台服务器，所需最低配置为 4 核 8G

### 第三方组件

ActorCloud 需要以下组件

* TimescaleDB
* Pulsar 
* EMQ X
* Nginx

##### TimescaleDB
TimescaleDB 在 ActorCloud 中用于存储租户、设备、应用等数据。TimescaleDB 是简单可扩展的开源时序数据库。

##### Pulsar 

Pulsar 在 ActorCloud 中用于规则管理，设备数据处理等。Apache Pulsar 是一个开源的分布式 pub-sub 消息系统。

##### EMQ X

EMQ X 在 ActorCloud 用于设备消息服务器。EMQ X 是基于 Erlang/OTP 平台开发的开源物联网消息服务器。

##### Nginx

Nginx 在 ActorCloud 中用于反向代理。Nginx 是一款轻量, 高性能的的反向代理服务器。

### ActorCloud 单节点部署

需要在单个 Linux 节点上安装和配置 ActorCloud 组件，请按照[单节点部署](single_node.md)进行操作

### ActorCloud Docker 部署
需要在在 Docker 安装和配置 ActorCloud 组件，请按照[Docker部署](docker.md)进行操作
