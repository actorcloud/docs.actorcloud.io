# Pulsar 安装与配置

## Pulsar 安装

### 系统要求
操作系统：Mac OS 或者 Linux

运行环境：Java 8

### 本地安装运行

**准备**

Java 和 maven 安装
```bash
$ sudo apt update
$ sudo apt install openjdk-8-jdk
$ sudo apt install maven
```

Pulsar 可通过下载二进制安装包进行安装。
1. 创建 `stream` 目录。
    ```bash
    # 目录 /opt 权限更改
    $ sudo chown -R ubuntu:ubuntu /opt
    $ mkdir /opt/stream
    $ cd stream
    ```

1.  下载 [Pulsar 2.2.0](https://archive.apache.org/dist/pulsar/pulsar-2.2.0/apache-pulsar-2.2.0-bin.tar.gz)，或者通过 `wget`：

    ```bash
    $ wget https://archive.apache.org/dist/pulsar/pulsar-2.2.0/apache-pulsar-2.2.0-bin.tar.gz
    ```
2.  解压到系统中，并切换到 Pulsar 目录下。

    ```bash
    $ tar xvfz apache-pulsar-2.2.0-bin.tar.gz
    $ cd apache-pulsar-2.2.0
    ```
3. 运行 Pulsar，根据命令提示查看日志以确定 Pulsar 正常启动。
    ```bash
    $ bin/pulsar-daemon start standalone
    ```

### 生产环境运行

如果你想在生产环境运行完整的 Pulsar，请参考 [Pulsar 的集群部署](https://pulsar.apache.org/docs/zh-CN/deploy-bare-metal/)

## Pulsar 配置

Pulsar 无需更改默认配置即可运行。为了与 ActorCloud 集成，需要在 Pulsar 安装机器上配置 ActorCloud 的规则引擎。

1. 编译打包 rule engine：获取 ActorCloud 源码，然后在 ActorCloud 源码的 rule-engine 目录下，运行 `maven` 进行打包。
    ```bash
    $ cd /opt && git clone https://github.com/actorcloud/ActorCloud
    $ cd ActorCloud/rule-engine
    $ mvn package
    ```
2. 打包成功后，可在 `rule-engine/target/x.y.z/` 下找到打包后的产品（x.y.z 为当前版本号）。修改如下配置文件里的数据库等连接信息。
    ```
    actorcloud-db-sink-config.yml
    db-sink-config.yml
    mail-sink-config.yml
    publish-sink-config.yml
    stream-admin
    ```

    `actorcloud-db-sink-config.yml`，修改数据库连接信息

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

    `mail-sink-config.yml`，修改邮件服务器信息
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

    `publish-sink-config.yml`，修改 `EMQX` 地址和 `Application` 信息
    ```YAML
    configs:
      url: http://127.0.0.1:8080/api/v3/mqtt/publish  # EMQX IP 和 http:management 端口
      username: actorcloud  # EMQX Application:AppID
      password: Mjg3MjcxMjk4ODkzNjA3NzMzMzc3OTY0MTk0NTI2NjU4NTG  # EMQX Application:AppSecret
    ```

    `stream-admin`，Broker 配置有两种情况：
    - EMQX 和 Pulsar 在同一服务器，使用默认配置，不用修改。
    - 不在同一服务器，修改为 EMQX 内网地址。该地址对应 EMQX 的 `emqx.conf` 中的 `listener.tcp.internal = 127.0.0.1:11883` 配置，也需要同步修改。同时，为了能保证订阅到系统主题，需要修改 EMQX 的 `acl.conf`，将下面这行注释：

        ```
        {deny, all, subscribe, ["$SYS/#", {eq, "#"}]}.
        ```
    `stream-admin` 配置
    ```
    Tenant="public"
    Namespace="default"
    Broker="tcp://127.0.0.1:11883"
    Parallelism=1
    ```


3. 拷贝 rule-engine 打包目录 `x.y.z` 到 `stream` 目录下。切换到目录内，运行如下命令启动规则引擎。
    ```bash
    $ cp -r rule-engine/target/x.y.z /opt/stream/ 
    $ cd /opt/stream/x.y.z
    $ sudo ./stream-admin create all
    ```