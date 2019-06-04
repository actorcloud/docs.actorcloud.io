# 单节点部署

本指南介绍如何在单个Linux节点上安装和配置Actorcloud。

如果这是您第一次使用actorcloud，请先使用(actorcloud.io)[https://www.actorcloud.io/]。



### 安装

##### 基础组件安装

按照以下说明安装所需的基础组件

1. 下载并安装依赖以及常用程序

   ```bash
   $ sudo apt-get update
   
   $ sudo apt-get -y install wget gcc
   ```

2. Python3.6安装

   ```bash
   $ sudo add-apt-repository -y ppa:jonathonf/python-3.6
   
   $ sudo apt-get update
   
   $ sudo apt-get install -y python3.6
   
   $ sudo apt-get install -y python3.6-dev
   ```

   

3. pip 安装

   ```bash
   $ wget https://bootstrap.pypa.io/get-pip.py && python3.6 get-pip.py --force-reinstall --user
   ```

   

4. pipenv 安装

   ```bash
   $ pip install --user pipenv
   ```

5. supervisord安装及启动

   ```bash
   $ sudo apt-get install -y supervisor
   $ sudo systemctl enable supervisord
   ```



##### 第三方组件安装

1. [数据库安装](database.md#数据库安装)
2. [Pulsar 安装](pulsar.md#Pulsar 安装)
3. [Emqx 安装](emqx.md#Emqx 安装)


##### Actorcloud 安装

组件安装需要进入actorcloud项目路径下执行

1. 安装依赖包

   ```bash
   $ pipenv install
   ```



### 配置

##### 组件配置

1. [数据库配置](database.md#数据库配置)
2. [Pulsar 配置](pulsar.md#Pulsar 配置)
3. [Emqx 配置](emqx.md#Emqx 配置)

##### Actorcloud 配置

Actorcloud 配置需要进入actorcloud项目路径($actorcloud_path)下执行

自定义配置文件

```bash
$ cp server/config/config.yml server/instance/config.yml
```

配置文件修改(参考备注修改)，以下配置部署前必须修改

* language: 系统语言
* log_path: actorcloud日志存放路径
* secret_key:  flask [SECRET_KEY](http://flask.pocoo.org/docs/1.0/config/#SECRET_KEY)
* admin_email, admin_password: 超级用户登录邮箱和密码
* site_name, site_domain, email_title:  用户邀请注册信息
* default_devices_limit: 是否限制租户所能创建的设备数, -1则不限制
* postgres: postgresql 配置信息
* emqx: emqx 配置信息
* mail: 邮件信息配置
* stream: pulsar配置信息



### 部署

##### Actorcloud 部署

```bash
flask deploy
```

