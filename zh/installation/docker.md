# Docker 部署

### 部署前准备

##### 安装[Docker Engine](https://docs.docker.com/engine/installation/)

如果使用Linux，则可以通过运行[安装脚本](https://get.docker.com/)来安装Docker Engine

```bash
$  curl -fsSL https://get.docker.com | sh
```



##### 创建 ActorCloud 容器数据卷挂载目录

```bash
$ mkdir -p /opt/actorcloud/status \
           /opt/actorcloud/instance \
           /opt/actorcloud/logs \
           /opt/actorcloud/nginx
```



### 容器部署

##### 获取ActorCloud 镜像

```bash
$ docker pull actorcloud:latest
```



#####运行容器

```bash
$ docker run -it -d --restart=always --name actorcloud \
    -p 80:80 \
    -p 7000:7000 \
    -p 7001:7001 \
    -v /opt/actorcloud/status:/opt/actorcloud/server/static \
    -v /opt/actorcloud/instance:/opt/actorcloud/instance \
    -v /opt/actorcloud/logs:/opt/tmp/logs \
    -v /opt/nginx:/etc/nginx \
    actorcloud:latest
```





### 配置 ActorCloud

#####数据卷说明

* status/ : 静态文件存放目录(images, excels)
* instance/ :   自定义配置文件存放目录(config.yml,  certs)
* logs/ :    日志存放目录(actorcloud.log)
* nginx/ :    Nginx配置文件存放目录(nginx.conf, virtual_host.conf)



##### ActorCloud 配置文件修改

```bash
$ vi /opt/instance/config.yml
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

  

##### Nginx 配置文件修改

* Nginx 配置文件修改参考 [Nginx 配置](nginx.md#nginx-配置)

* 重载 Nginx 配置文件

  ```bash
  docker exec -it actorcloud nginx -s reload
  ```

### 运行

##### ActorCloud 后端服务运行

ActorCloud 后端服务采用 [Supervisor](http://supervisord.org/) 运行
1. 后端服务初始化

   ```bash
   $ docker exec -it actorcloud flask deploy
   ```

2. 拷贝 Supervisor 配置

   ```bash
   $ docker exec -it actorcloud cp opt/actorcloud/server/config/actorcloud_supervisord.conf /etc/supervisor/conf.d/
   ```

3. 更新 Supervisor配置

   ```bash
   $ docker exec -it actorcloud supervisorctl update
   ```

4. 查看 ActorCloud 运行情况

   ```bash
   $ docker exec -it actorcloud supervisorctl status
   ```
   ![actorcloud_run_status](_assets/actorcloud_run_status.png)

5. 运行，暂停，重启 ActorCloud

   ```bash
   # 运行
   $ docker exec -it actorcloud supervisorctl start actorcloud:*
   # 暂停
   $ docker exec -it actorcloud supervisorctl stop actorcloud:*
   # 重启
   $ docker exec -it actorcloud supervisorctl restart actorcloud:*
   ```
