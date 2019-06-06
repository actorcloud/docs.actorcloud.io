# Nginx 安装与配置

## Nginx 安装

### 安装包安装

```bash
$ sudo apt-get install nginx
```



## Nginx 配置

##### 先决条件

若使用 ``` apt-get ``` 安装 Nginx 则目录结构如下

* /etc/nginx/ :   nginx 配置文件存放(nginx.conf, virtual_host.conf等)
* /usr/sbin/nginx :   nginx 程序文件
* /var/log/nginx : nginx 日志文件

##### 配置

1. 创建 root 目录

   ```bash
   # 自定义创建
   $ mkdir -p /etc/nginx/www
   ```
   
2. 替换 Nginx 配置

   ```bash
   # $ActorCloud 为 ActorCloud项目路径
   $ cp -r $ActorCloud/server/deploy/production/nginx/* /etc/nginx/
   ```
   
3. 修改 `nginx.conf`

4. 修改 `virtual_host.conf`

   * listen: 监听端口
   * server_name: ip或域名
   * root:  /etc/nginx/www(自定义创建路径)
   
5. 重启nginx

   ```bash
   sudo service nginx restart
   ```

   