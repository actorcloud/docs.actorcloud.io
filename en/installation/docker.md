# Docker deployment

## Preparation before deployment

#### Install [Docker Engine](https://docs.docker.com/engine/installation/)

Docker Engine If Linux is used, Docker Engine can be installed by running installation [Script](https://get.docker.com/) 

```bash
$  curl -fsSL https://get.docker.com | sh
```

#### Create a data volume

ActorCloud data is stored by users:

```bash
mkdir -p /opt/actorcloud/server /opt/actorcloud/rule_engine
```

## Deployment

### Third-party component installation

#### TimescaleDB
[TimescaleDB installation](timescaledb.md#timescaledb-安装)

#### EMQ X
[EMQ X installation](emqx.md#emq-x-安装)

### ActorCloud codec installation (optional)

ActorCloud Codec needs to work with EMQX of Enterprise Edition .

#### Docker Engine installation

```bash
$ curl -fsSL https://get.docker.com | sh
```

#### Get the ActorCloud codec image

```bash
$ docker pull actorcloudcli/actorcloud-codec
```

#### Run ActorCloud codec

```bash
$ docker run -it -d --restart=always \
         --name actorcloud-codec \
         -p 7002:7002 \
         actorcloudcli/actorcloud-codec
```

### ActorCloud Rule Engine installation

#### Get the ActorCloud Rule Engine image
```bash
docker pull actorcloud-rule_engine
```

#### Run ActorCloud Rule Engine container
The ActorCloud Server container run command needs to run under `/opt/actorcloud/rule_engine`
```bash
$ docker run -it -d --restart=always --name actorcloud-rule_engine \
    -p 8080:8080 \
    -p 8888:8888 \
    -v $PWD/data:/opt/pulsar/data \
    -v $PWD/logs:/opt/pulsar/logs \
    -v $PWD/rule_engine:/opt/pulsar/rule_engine \
    actorcloudcli/actorcloud-rule_engine
```
Directory and port description
* data: rule_engine data storage
- logs: log storage directory
- rule_engine: rule_engine configuration storage

### ActorCloud server installation

#### Get ActorCloud server image
```bash
$ docker pull actorcloud-server
```

#### Run ActorCloud server container

The ActorCloud Server container deployment command needs to run under `/opt/actorcloud/server`

```bash
$ docker run -it -d --restart=always --name actorcloud-server \
    -p 80:80 \
    -p 7000:7000 \
    -p 7001:7001 \
    -v $PWD/static:/opt/actorcloud/server/static \
    -v $PWD/instance:/opt/actorcloud/server/instance \
    -v $PWD/logs:/opt/tmp/logs \
    -v $PWD/nginx:/etc/nginx \
    actorcloudcli/actorcloud-server:latest
```
Directory description
* static: static file storage directory
- Instance: custom configuration (config.yml), certificate (certs) directory
- logs: log storage directory
- nginx: nginx configuration directory
- 80: nginx reverse proxy port
- 7000: backend running port
- 7001: Asynchronous task running port

## Configuration

### Third-party component configuration
#### TimescaleDB
[TimescaleDB configuration](timescaledb.md#timescaledb-配置)

#### EMQ X
[EMQ X configuration](emqx.md#emq-x-配置)

### ActorCloud Rule Engine configuration
The Rule Engine configuration file is in the path of `/opt/pulsar/rule_engine`.

#### actorcloud-db-sink-config.yml
Database connection information modification

```YAML
configs:
  userName: root
  password: public
  jdbcUrl: jdbc:postgresql://127.0.0.1:5432/actorcloud
  tableName: device_events
  columns:
    - topic
    - msgTime
    - tenantID
    - deviceID
    - data
    - dataType
    - streamID
    - responseResult
```
#### mail-sink-config.yml
Mail server information modification

```YAML
configs:
  host: smtp.xxx.com
  port: 25
  user: xxx@xxx.com
  password: xxxxxx
  from: xxx@xxx.com
  encryptionType: STARTTLS  # OR SSL
  debug: false
```
#### publish-sink-config.yml
EMQX api interface and Application information modification

```YAML
configs:
  url: http://127.0.0.1:8080/api/v3/mqtt/publish  # EMQX IP 和 http:management port
  username: actorcloud  # EMQX Application:AppID
  password: Mjg3MjcxMjk4ODkzNjA3NzMzMzc3OTY0MTk0NTI2NjU4NTG  # EMQX Application:AppSecret
```

#### emqx-config.yml
EMQX broker  information modification

```YAML
configs:
  brokerUrl: tcp://127.0.0.1:11883
  inputTopics: $share/group1/#
  ruleId: __emqx_all
```

* EMQX and Pulsar are on the same server, using the default configuration without modification

* If not on the same server, it was modified to EMQX intranet address.

  This address corresponds to the listener.tcp.internal = 127.0.0.1:11883 configuration in emqx.conf of EMQX and needs to be modified synchronously.
  At the same time, in order to guarantee the subscription to the system topic,  the acl.conf of EMQX needs to be modified, and the following line needs to be comment or deleted.

  ```
  {deny, all, subscribe, ["$SYS/#", {eq, "#"}]}.
  ```

#### stream-admin

```
Tenant="public"
Namespace="default"
Parallelism=1
```

### ActorCloud Server Configuration

#### config.yml modification
```bash
$ vi /opt/actorcloud/server/instance/config.yml
```

For configuration file modification (refer to note modification), the following configuration must be modified before deployment:

* language: system language
- backend_node: backend API service node, docker intranet address + port
- async_tasks_node: asynchronous task node, docker intranet address + port
* log_path: ActorCloud running log storage path
* secret_key:  flask [SECRET_KEY](http://flask.pocoo.org/docs/1.0/config/#SECRET_KEY)
* admin_email, admin_password: Super user login email and password
- site_name, site_domain, email_title: User invitation registration information
* default_devices_limit: Whether to limit the number of devices that the tenant can create, -1 is not limited
- postgres: postgresql configuration information
- emqx: emqx configuration information
- mail: mail information configuration
- stream: pulsar configuration information


#### Nginx configuration file modification

* For Nginx configuration file modification, refer to [Full Example Configuration](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

* Reloading the Nginx configuration file

  ```bash
  docker exec -it actorcloud-server nginx -s reload
  ```

## Running

### ActorCloud Rule Engine running
```bash
docker exec -it actorcloud-rule_engine chmod +x /opt/pulsar/rule_engine/stream-admin
docker exec -it actorcloud-rule_engine /opt/pulsar/rule_engine/stream-admin create all
```

### ActorCloud server running

ActorCloud Server runs with [Supervisor](http://supervisord.org/) 
#### Backend service initialization
```bash
$ docker exec -it actorcloud flask deploy
```

#### Supervisor configuration update
```bash
$ docker exec -it actorcloud-server cp /opt/actorcloud/server/config/actorcloud_supervisord.conf /etc/supervisor/conf.d/
$ docker exec -it actorcloud-server supervisorctl update
```

#### View ActorCloud running status
```bash
$ docker exec -it actorcloud-server supervisorctl status
```

