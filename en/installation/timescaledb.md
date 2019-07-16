# TimescaleDB Installation and configuration

## TimescaleDB Installation

1. PostgreSQL 10 Installation
```bash
# Add PostgresSQL Repository to Ubuntu
$ sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -c -s`-pgdg main' >> /etc/apt/sources.list.d/pgdg.list"
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
# Update and Install PostgreSQL
$ sudo apt-get update
$ sudo apt-get install -y postgresql-10
```

2. TimescaleDB plugin installation
```bash
# Add PPA
$ sudo add-apt-repository ppa:timescale/timescaledb-ppa
$ sudo apt-get update
# Now install appropriate package for PG version
$ sudo apt install -y timescaledb-postgresql-10
```

3. Start TimescaleDB plugin
```bash
sudo timescaledb-tune
```

4. Restart PostgreSQL
```bash
sudo service postgresql restart
```

## TimescaleDB configuration

### postgresql.conf modification

The storage path of postgresql.conf is`/etc/postgresql/10/main/postgresql.conf`

* For Postgresql configuration modification, refer to [Setting Parameters](https://www.postgresql.org/docs/10/config-setting.html)
* For TimescaleDB configuration modification, refer to [Further configuration / manual tuning](https://docs.timescale.com/v1.3/getting-started/configuring#further-config)`

### pg_hba.conf modification

The storage path of pg_hba.conf  is /etc/postgresql/10/main/pg_hba.conf`

For configuration modification, refer to [The pg_hba.conf File](https://www.postgresql.org/docs/10/auth-pg-hba-conf.html)

### ActorCloud Database configuration

* Enter the psql command line

  ```bash
  $ sudo -u postgres psql
  ```

* Create a database

  ```
  CREATE DATABASE actorcloud;
  ```

* Creating a Role

  ```plsql
  CREATE USER actorcloud WITH ENCRYPTED PASSWORD 'public';
  ```


* Role assignment

  Note: Assign role permissions as appropriate

  ```plsql
  ALTER ROLE "actorcloud" WITH LOGIN;  # Allow role login
  ALTER ROLE "actorcloud" WITH SUPERUSER; # Set the role as super administrator
  ALTER ROLE "actorcloud" WITH CREATEDB; # Allow roles to create databases
  ALTER ROLE "actorcloud" WITH CREATEROLE; # Allow roles to create roles
  ```

* Grant database permissions

  ```plsql
  grant all privileges on database actorcloud to actorcloud;
  ```
