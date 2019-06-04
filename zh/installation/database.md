# 数据库安装与配置

### 数据库安装
##### PostgreSQL 10 安装
```bash
# Add PostgresSQL Repository to Ubuntu
$ sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -c -s`-pgdg main' >> /etc/apt/sources.list.d/pgdg.list"
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
# Update and Install PostgreSQL
$ sudo apt-get update
$ sudo apt-get install -y postgresql-10
```

##### TimescaleDB 安装
```bash
# Add our PPA
$ sudo add-apt-repository ppa:timescale/timescaledb-ppa
$ sudo apt-get update

# Now install appropriate package for PG version
$ sudo apt install -y timescaledb-postgresql-10
```

##### 配置TimescaleDB

```bash
sudo timescaledb-tune
```

##### 重启PostgreSQL

```bash
sudo service postgresql restart
```

### 数据库配置
