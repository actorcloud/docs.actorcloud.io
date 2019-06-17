# Docker 部署

## 部署前准备

##### 安装 [Docker Engine](https://docs.docker.com/engine/installation/)

如使用 Linux，则可以通过运行[安装脚本](https://get.docker.com/)来安装 Docker Engine

```bash
$  curl -fsSL https://get.docker.com | sh
```

##### 创建数据卷

用户存放 ActorCloud 数据:

```bash
mkdir -p /opt/actorcloud/server /opt/actorcloud/rule-engine
```

## 部署

### 第三方组件部署

##### Emqx 部署


### ActorCloud Rule Engine 部署

##### 获取 ActorCloud Rule Engine 镜像
```bash

```

##### 运行 ActorCloud Rule Engine 容器
ActorCloud Server 容器运行命令需要在 `/opt/actorcloud/rule-engine` 下运行
```bash

```

### ActorCloud Server 部署

##### 获取 ActorCloud Server 镜像

```bash
$ docker pull actorcloud-server:latest
```

##### 运行 ActorCloud Server 容器

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

### ActorCloud Rule Engine 配置

### ActorCloud Server 配置

##### config.yml 修改
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


##### Nginx 配置文件修改

* Nginx 配置文件修改参考 [Full Example Configuration](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

* 重载 Nginx 配置文件

  ```bash
  docker exec -it actorcloud-server nginx -s reload
  ```

## 运行

### ActorCloud Rule Engine 运行

### ActorCloud Server 运行

ActorCloud Server 采用 [Supervisor](http://supervisord.org/) 运行
##### 后端服务初始化

   ```bash
$ docker exec -it actorcloud flask deploy
   ```

##### Supervisor 配置更新

   ```bash
$ docker exec -it actorcloud-server cp /opt/actorcloud/server/config/actorcloud_supervisord.conf /etc/supervisor/conf.d/
$ docker exec -it actorcloud-server supervisorctl update
   ```

##### 查看 ActorCloud 运行情况

   ```bash
$ docker exec -it actorcloud-server supervisorctl status
   ```