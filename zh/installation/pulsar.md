# Pulsar 安装与配置

## Pulsar 安装

### 系统要求
操作系统：MacOS或者Linux
运行环境：Java 8

### 本地安装运行
Pulsar可通过下载二进制安装包进行安装。
1.  下载[Pulsar 2.2.0](https://archive.apache.org/dist/pulsar/pulsar-2.2.0/apache-pulsar-2.2.0-bin.tar.gz)。
2.  解压到系统中，并切换到pulsar目录下。

```
$ tar xvfz apache-pulsar-2.3.2-bin.tar.gz
$ cd apache-pulsar-2.3.2
```
3. 运行pulsar，根据命令提示查看日志以确定pulsar正常启动
```
$ bin/pulsar-daemon start standalone
```

### 生产环境运行

如果你想在生产环境运行完整的Pulsar，请参考 [Pulsar的集群部署](https://pulsar.apache.org/docs/zh-CN/deploy-bare-metal/)

## Pulsar 配置

Pulsar无需更改默认配置即可运行。为了与ActorCloud集成，需要在Pulsar安装机器上配置Actor Cloud的rule engine
1. 编译打包rule engine。在ActorCloud源码的rule-engine目录下，运行maven进行打包
    ```
    $ mvn package
    ```
2. 打包成功后，可在rule-engine/target下找到打包后的产品,当前为0.5.3版本。修改如下配置文件里的数据库等连接信息
    ```
    actorcloud-db-sink-config.yml
    db-sink-config.yml
    mail-sink-config.yml
    publish-sink-config.yml
    stream-admin
    ```
3. 上传rule-engine打包目录0.5.3到Pulsar部署的机器上。切换到上传目录内，运行如下命令启动rule-engine
    ```
    $ stream-admin create all
    ```