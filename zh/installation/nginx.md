# Nginx 安装与配置

## Nginx 安装

### 安装包安装

```bash
$ sudo apt-get install nginx
```



## Nginx 配置

##### 先决条件

若使用 ``` apt-get ``` 安装 Nginx 则目录结构如下

* /etc/nginx/ :   nginx 配置文件存放(nginx.conf, virtual_host.conf, www/等)
* /usr/sbin/nginx :   nginx 程序文件
* /var/log/nginx : nginx 日志文件

##### 配置

1. 替换 Nginx 配置

   ```bash
   # 需在 ActorCloud 项目路径下执行
   $ cp -r ./deploy/nginx/* /etc/nginx/
   ```

2. 修改 `nginx.conf`

   可参考 [Nginx 配置](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

3. 修改 `virtual_host.conf`

   * listen: 监听端口
   * server_name: ip或域名
   * proxy_pass backend_node: backend_node 的值必须与 ActorCloud instance/config.yml 中配置的一致。

4. 重启nginx

   ```bash
   sudo service nginx restart
   ```

   