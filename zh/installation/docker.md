# Docker 部署

## 部署前准备

#### 安装 [Docker Engine](https://docs.docker.com/engine/installation/)

如使用 Linux，则可以通过运行[安装脚本](https://get.docker.com/)来安装 Docker Engine

```bash
$  curl -fsSL https://get.docker.com | sh
```

#### 创建数据卷

用户存放 ActorCloud 数据:

```bash
mkdir -p /opt/actorcloud/server /opt/actorcloud/rule_engine
```

## 部署

### 第三方组件安装

#### TimescaleDB
[TimescaleDB 安装](timescaledb.md#timescaledb-安装)

#### EMQ X
[EMQ X 安装](emqx.md#emq-x-安装)

### ActorCloud Rule Engine 部署

#### 获取 ActorCloud Rule Engine 镜像
```bash
docker pull actorcloud-rule_engine
```

#### 运行 ActorCloud Rule Engine 容器
ActorCloud Server 容器运行命令需要在 `/opt/actorcloud/rule_engine` 下运行
```bash
$ docker run -it -d --restart=always --name actorcloud-rule_engine \
    -p 8080:8080 \
    -p 8888:8888 \
    -v $PWD/data:/opt/pulsar/data \
    -v $PWD/logs:/opt/pulsar/logs \
    -v $PWD/rule_engine:/opt/pulsar/rule_engine \
    actorcloud-rule_engine
```
目录及端口说明
* data: rule_engine 数据存放
* logs: 日志存放目录
* rule_engine: rule_engine 配置存放

### ActorCloud Server 部署

#### 获取 ActorCloud Server 镜像
```bash
$ docker pull actorcloud-server
```

#### 运行 ActorCloud Server 容器

ActorCloud Server 容器部署命令需要在 `/opt/actorcloud/server` 下运行

```bash
$ docker run -it -d --restart=always --name actorcloud-server \
    -p 80:80 \
    -p 7000:7000 \
    -p 7001:7001 \
    -v $PWD/static:/opt/actorcloud/server/static \
    -v $PWD/instance:/opt/actorcloud/server/instance \
    -v $PWD/logs:/opt/tmp/logs \
    -v $PWD/nginx:/etc/nginx \
    actorcloud-server:latest
```
目录说明
* static: 静态文件存放目录
* Instance:  自定义配置(config.yml)、 证书(certs)目录
* logs: 日志存放目录
* nginx: nginx 配置目录
* 80:  nginx 反向代理端口
* 7000: backend 运行端口
* 7001: 异步任务运行端口

## 配置

### 第三方组件配置
#### TimescaleDB
[TimescaleDB 配置](timescaledb.md#timescaledb-配置)

#### EMQ X
[EMQ X 配置](emqx.md#emq-x-配置)

### ActorCloud Rule Engine 配置
Rule Engine 配置文件在 `/opt/pulsar/rule_engine` 路径下

#### actorcloud-db-sink-config.yml
数据库连接信息修改

```YAML
configs:
  userName: root
  password: public
  jdbcUrl: jdbc:postgresql://127.0.0.1:5432/actorcloud
  tableName: device_events
  columns:
    - topic
    - msgTime
    - tenantID
    - deviceID
    - data
    - dataType
    - streamID
    - responseResult
```
#### mail-sink-config.yml
邮件服务器信息修改

```YAML
configs:
  host: smtp.xxx.com
  port: 25
  user: xxx@xxx.com
  password: xxxxxx
  from: xxx@xxx.com
  encryptionType: STARTTLS  # OR SSL
  debug: false
```
#### publish-sink-config.yml
EMQX api 接口和 Application 信息修改

```YAML
configs:
  url: http://127.0.0.1:8080/api/v3/mqtt/publish  # EMQX IP 和 http:management 端口
  username: actorcloud  # EMQX Application:AppID
  password: Mjg3MjcxMjk4ODkzNjA3NzMzMzc3OTY0MTk0NTI2NjU4NTG  # EMQX Application:AppSecret
```

#### emqx-config.yml
EMQX broker 信息修改

```YAML
configs:
  brokerUrl: tcp://127.0.0.1:11883
  inputTopics: $share/group1/#
  ruleId: __emqx_all
```

* EMQX 和 Pulsar 在同一服务器，使用默认配置，不用修改
* 不在同一服务器，修改为 EMQX 内网地址。
  该地址对应 EMQX 的 emqx.conf 中的 listener.tcp.internal = 127.0.0.1:11883 配置，也需要同步修改。
  同时，为了能保证订阅到系统主题，需要修改 EMQX 的 acl.conf，将下面这行注释或删除
  ```
  {deny, all, subscribe, ["$SYS/#", {eq, "#"}]}.
  ```
  
#### stream-admin

```
Tenant="public"
Namespace="default"
Parallelism=1
```

### ActorCloud Server 配置

#### config.yml 修改
```bash
$ vi /opt/actorcloud/server/instance/config.yml
```

配置文件修改(参考备注修改)，以下配置部署前必须修改

* language: 系统语言

* backend_node: 后端 API 服务节点，docker 内网地址+端口

* async_tasks_node: 异步任务节点, docker 内网地址+端口

* log_path:  ActorCloud 运行日志存放路径

* secret_key:  flask [SECRET_KEY](http://flask.pocoo.org/docs/1.0/config/#SECRET_KEY)

* admin_email, admin_password: 超级用户登录邮箱和密码

* site_name, site_domain, email_title:  用户邀请注册信息

* default_devices_limit: 是否限制租户所能创建的设备数, -1则不限制

* postgres: postgresql 配置信息

* emqx: emqx 配置信息

* mail: 邮件信息配置

* stream: pulsar配置信息


#### Nginx 配置文件修改

* Nginx 配置文件修改参考 [Full Example Configuration](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

* 重载 Nginx 配置文件

  ```bash
  docker exec -it actorcloud-server nginx -s reload
  ```

## 运行

### ActorCloud Rule Engine 运行
```bash
docker exec -it actorcloud-rule_engine chmod +x /opt/pulsar/rule_engine/stream-admin
docker exec -it actorcloud-rule_engine /opt/pulsar/rule_engine/stream-admin create all
```

### ActorCloud Server 运行

ActorCloud Server 采用 [Supervisor](http://supervisord.org/) 运行
#### 后端服务初始化
```bash
$ docker exec -it actorcloud flask deploy
```

#### Supervisor 配置更新
```bash
$ docker exec -it actorcloud-server cp /opt/actorcloud/server/config/actorcloud_supervisord.conf /etc/supervisor/conf.d/
$ docker exec -it actorcloud-server supervisorctl update
```

#### 查看 ActorCloud 运行情况
```bash
$ docker exec -it actorcloud-server supervisorctl status
```