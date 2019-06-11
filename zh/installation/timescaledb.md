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