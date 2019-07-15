# Actorcloud deployment

> **This document is based on Ubuntu 16.04**



### Prerequisites

**Minimum system configuration for Actorcloud deployment **

* 64-bit operating system
- If third-party components (Timescaledb, Pulsar, Emqx) are deployed separately from ActorCloud, the minimum configuration required is 2 cores 4G
- If the third-party component is deployed on the same server as ActorCloud, the minimum configuration required is 4 cores 8G

### Third party component

ActorCloud needs the following component:

* TimescaleDB
* Pulsar 
* EMQ X
* Nginx

##### TimescaleDB
TimescaleDB in ActorCloud is used  to store data such as tenants, devices, applications. TimescaleDB is a simple and extensible open source sequential database.

##### Pulsar 

Pulsar in ActorCloud is used  for rule management, device data processing, and so on. Apache Pulsar is an open source distributed pub-sub messaging system.

##### EMQ X

EMQ X in ActorCloud is used  for device message servers. EMQ X is an open source IoT messaging server based on the Erlang/OTP platform.

##### Nginx

Nginx is used for reverse proxy in ActorCloud. Nginx is a lightweight, high performance reverse proxy server.

### Single node deployment

When to install and configure the ActorCloud component on a single Linux node, follow [Single Node Deployment](single_node.md)

### Docker deployment
When to install and configure the ActorCloud component in Docker, please follow [Docker Deployment](docker.md) 
