# TimescaleDB 安装与配置

## TimescaleDB 安装

1. PostgreSQL 10 安装
```bash
# Add PostgresSQL Repository to Ubuntu
$ sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -c -s`-pgdg main' >> /etc/apt/sources.list.d/pgdg.list"
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
# Update and Install PostgreSQL
$ sudo apt-get update
$ sudo apt-get install -y postgresql-10
```

2. TimescaleDB 插件安装
```bash
# Add PPA
$ sudo add-apt-repository ppa:timescale/timescaledb-ppa
$ sudo apt-get update
# Now install appropriate package for PG version
$ sudo apt install -y timescaledb-postgresql-10
```

3. 启用 TimescaleDB 插件
```bash
sudo timescaledb-tune
```

4. 重启 PostgreSQL
```bash
sudo service postgresql restart
```

## TimescaleDB 配置

### postgresql.conf 修改

postgresql.conf 存放路径为`/etc/postgresql/10/main/postgresql.conf`

* Postgresql 配置修改可参考 [Setting Parameters](https://www.postgresql.org/docs/10/config-setting.html)
* TimescaleDB 配置修改可参考 [Further configuration / manual tuning](https://docs.timescale.com/v1.3/getting-started/configuring#further-config)

### pg_hba.conf 修改

pg_hba.conf  存放路径为`/etc/postgresql/10/main/pg_hba.conf`

配置修改可参考 [The pg_hba.conf File](https://www.postgresql.org/docs/10/auth-pg-hba-conf.html)

### ActorCloud 数据库配置

* 进入 psql 命令行

  ```bash
  $ sudo -u postgres psql
  ```

* 创建数据库

  ```
  CREATE DATABASE actorcloud;
  ```

* 创建角色

  ```plsql
  CREATE USER actorcloud WITH ENCRYPTED PASSWORD 'public';
  ```


* 角色权限分配

  注意: 依据情况适当赋予角色权限！

  ```plsql
  ALTER ROLE "actorcloud" WITH LOGIN;  # 允许角色登录
  ALTER ROLE "actorcloud" WITH SUPERUSER; # 设置角色为超级管理员
  ALTER ROLE "actorcloud" WITH CREATEDB; # 允许角色创建数据库
  ALTER ROLE "actorcloud" WITH CREATEROLE; # 允许角色创建角色
  ```

* 授予数据库权限

  ```plsql
  grant all privileges on database actorcloud to actorcloud;
  ```
 