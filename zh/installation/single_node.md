# 单节点部署

* 本文档介绍如何在单个 Linux 节点上部署 ActorCloud

* 建议 ActorCloud Rule Engine 和 Server 部署在不同机器上

* ActorCloud 默认部署在 `/opt` 目录

  

## 安装

### 安装前准备

#### 基础环境配置

```bash
$ sudo apt-get update
# local utf-8 config(optional)
$ DEBIAN_FRONTEND=noninteractive sudo apt-get install -y locales \
&& sudo sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen \
&& sudo dpkg-reconfigure --frontend=noninteractive locales \
&& sudo update-locale LANG=en_US.UTF-8
$ sudo apt-get -y install wget gcc curl
```

#### 获取 ActorCloud 安装包
前往 ActorCloud [releases](https://github.com/actorcloud/ActorCloud/releases) 获取最新版本

```bash
# 更改 ActorCloud 项目所在目录权限(可选, 默认 /opt 目录)
$ sudo chown -R ubuntu:ubuntu /opt
# 获取 assets 中 Actorcloud-*-*.tar.gz 或 Actorcloud-*-*.zip
$ wget https://github.com/actorcloud/ActorCloud/releases/download/v3.0.0-rc.3/ActorCloud-v3.0.0-rc.3.tar.gz
# 解压
$ tar -zxvf ActorCloud-v3.0.0-rc.3.tar.gz -C /opt
```

### 第三方组件安装

#### TimescaleDB
[TimescaleDB 安装](timescaledb.md#timescaledb-安装)

#### EMQ X
[EMQ X 安装](emqx.md#emq-x-安装)

### ActorCloud Rule Engine 安装

#### 基础环境安装

```bash
$ sudo apt install openjdk-8-jdk
```

#### Pulsar 安装
Pulsar 可通过下载二进制安装包进行安装。

```bash
# 获取 apache pulsar 2.2.0 安装包
$ wget https://archive.apache.org/dist/pulsar/pulsar-2.2.0/apache-pulsar-2.2.0-bin.tar.gz
# 解压(默认 /opt 目录)
$ tar -zxvf apache-pulsar-2.2.0-bin.tar.gz -C /opt
# 重命名
$ mv /opt/apache-pulsar-2.2.0 /opt/pulsar
```

#### Rule Engine 安装
Rule Engine 运行文件存放在 `/opt/actorcloud/deploy/rule_engine` 路径下

```bash
$ cp -r /opt/actorcloud/deploy/rule_engine /opt/pulsar
```

### ActorCloud Server 安装

#### 基础环境安装

1. Python3.6 安装

    ```bash
    $ sudo add-apt-repository -y ppa:jonathonf/python-3.6
    
    $ sudo apt-get update
    
    $ sudo apt-get install -y python3.6
    
    $ sudo apt-get install -y python3.6-dev
    ```

2. Pip 安装

   ```bash
   $ wget https://bootstrap.pypa.io/get-pip.py && python3.6 get-pip.py --force-reinstall --user
   ```

3. Pipenv 安装

   ```bash
   $ pip install --user pipenv
   ```

4. Supervisord 安装

   ```bash
   $ sudo apt-get install -y supervisor
   ```

5. Nginx 安装

   ```bash
   $ sudo apt-get install nginx
   ```

#### Server 依赖安装

安装需要在 `/opt/actorcloud/server/` 路径下执行
```bash
$ pipenv install --skip-lock
```



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
  ```bash
  {deny, all, subscribe, ["$SYS/#", {eq, "#"}]}.
  ```
  
#### stream-admin

```bash
Tenant="public"
Namespace="default"
Parallelism=1
```

### ActorCloud Server 配置

Server 运行配置以及 Nginx 代理配置修改

#### Server config.yml
ActorCloud Server 配置信息

```bash
# 拷贝默认配置信息
$ cp /opt/actorcloud/server/config/config.yml /opt/actorcloud/server/instance/config.yml
# 自定义配置信息
$ vi /opt/actorcloud/server/instance/config.yml
```

配置文件修改(参考备注修改)，以下配置部署前必须修改
* language: 系统语言
* backend_node: 后端 API 服务节点，内网地址+端口
* async_tasks_node: 异步任务节点, 内网地址+端口
* log_path:  ActorCloud 运行日志存放路径
* secret_key:  flask [SECRET_KEY](http://flask.pocoo.org/docs/1.0/config/#SECRET_KEY)
* admin_email, admin_password: 超级用户登录邮箱和密码
* site_name, site_domain, email_title:  用户邀请注册信息
* default_devices_limit: 是否限制租户所能创建的设备数, -1则不限制
* postgres: postgresql 配置信息
* emqx: emqx 配置信息
* mail: 邮件信息配置
* stream: pulsar配置信息

#### Nginx
若使用 ``` apt-get ``` 安装 Nginx 则目录结构如下
* /etc/nginx/ :   nginx 配置文件存放(nginx.conf, virtual_host.conf, www/等)
* /usr/sbin/nginx :   nginx 程序文件
* /var/log/nginx : nginx 日志文件

1. 替换 Nginx 配置

   ```bash
   $ cp -r /opt/actorcloud/deploy/nginx/* /etc/nginx/
   ```

2. 修改 `nginx.conf` , 参考 [Nginx 配置](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

3. 修改 `virtual_host.conf`
   * listen: 监听端口
   * server_name: ip 或域名
   * location /api/v1/ proxy_pass: IP和端口应与 ActorCloud instance/config.yml backend_node 中配置的一致

4. 重启nginx

   ```bash
   $ sudo service nginx restart
   ```




## 运行

### ActorCloud Rule Engine 运行

#### Pulsar 运行
ActorCloud Rule Engine 运行依赖于 Pulsar

```bash
$ cd /opt/pulsar
$ ./bin/pulsar-daemon start standalone
```

#### Rule Engine 运行

```bash
# 进入项目运行目录
$ cd /opt/pulsar/rule_engine
# rule engine 运行
$ sudo ./stream-admin create all
```



### ActorCloud Server 运行

ActorCloud Server 采用 [Supervisor](http://supervisord.org/) 运行

#### Server 初始化
```bash
$ pipenv run flask deploy
```

#### Supervisor 配置更新

```bash
$ sudo cp server/config/actorcloud_supervisord.conf /etc/supervisor/conf.d/
$ sudo supervisorctl update
```

#### Server 运行情况

```bash
$ sudo supervisorctl status
```
![actorcloud_run_status](_assets/server_run_status.png)

#### 运行，暂停，重启 Server

```bash
# 运行
$ sudo supervisorctl start actorcloud:*
# 暂停
$ sudo supervisorctl stop actorcloud:*
# 重启
$ sudo supervisorctl restart actorcloud:*
```
