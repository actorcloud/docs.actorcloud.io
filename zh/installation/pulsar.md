# Pulsar 安装与配置

## Pulsar 安装

### 系统要求
操作系统：Mac OS 或者 Linux

运行环境：Java 8

### 本地安装运行
Pulsar 可通过下载二进制安装包进行安装。
1.  下载 [Pulsar 2.2.0](https://archive.apache.org/dist/pulsar/pulsar-2.2.0/apache-pulsar-2.2.0-bin.tar.gz)。

    ```bash
    $ wget https://archive.apache.org/dist/pulsar/pulsar-2.2.0/apache-pulsar-2.2.0-bin.tar.gz
    ```
2.  解压到系统中，并切换到 Pulsar 目录下。

    ```
    $ tar xvfz apache-pulsar-2.3.2-bin.tar.gz
    $ cd apache-pulsar-2.3.2
    ```
3. 运行 Pulsar，根据命令提示查看日志以确定 Pulsar 正常启动
    ```
    $ bin/pulsar-daemon start standalone
    ```

### 生产环境运行

如果你想在生产环境运行完整的 Pulsar，请参考 [Pulsar 的集群部署](https://pulsar.apache.org/docs/zh-CN/deploy-bare-metal/)

## Pulsar 配置

Pulsar 无需更改默认配置即可运行。为了与 ActorCloud 集成，需要在 Pulsar 安装机器上配置 ActorCloud 的规则引擎。

1. 编译打包 rule engine: 获取 ActorCloud 源码，然后在 ActorCloud 源码的 rule-engine 目录下，运行 maven 进行打包。
    ```
    $ git clone https://github.com/actorcloud/ActorCloud
    $ cd ActorCloud/rule-engine
    $ mvn package
    ```
2. 打包成功后，可在 rule-engine/target 下找到打包后的产品，当前为 0.5.3 版本。修改如下配置文件里的数据库等连接信息。
    ```
    actorcloud-db-sink-config.yml
    db-sink-config.yml
    mail-sink-config.yml
    publish-sink-config.yml
    stream-admin
    ```
3. 上传 rule-engine 打包目录 0.5.3 到 Pulsar 部署的机器上。切换到上传目录内，运行如下命令启动规则引擎。
    ```
    $ stream-admin create all
    ```