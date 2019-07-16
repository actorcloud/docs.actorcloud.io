# EMQ X Installation and configuration

## EMQ X Installation

You can install EMQ X in different way as needed:

-  Set up the EMQ X image library for installation and upgrade tasks.
- Manually download the package and install it.

### Install EMQ X using the image library

Before installing EMQ X for the first time on a new host, the EMQ X image library is required to set up. After that,  EMQ X can be installed and updated from the image library.

#### Set up the image library

1. Update the `apt` package index:

   ```
   $ sudo apt update
   ```

2. Install the necessary software:

   ```
   $ sudo apt install -y \
       apt-transport-https \
       ca-certificates \
       curl \
       gnupg-agent \
       software-properties-common
   ```

3. Add the official GPG key for EMQ X:

   ```
   $ curl -fsSL https://repos.emqx.io/gpg.pub | sudo apt-key add -
   ```

   Authenticate key

   ```
   $ sudo apt-key fingerprint 3E640D53
   
   pub   rsa2048 2019-04-10 [SC]
         FC84 1BA6 3775 5CA8 487B  1E3C C0B4 0946 3E64 0D53
   uid           [ unknown] emqx team <support@emqx.io>
   ```

4. Use the following command to set up the **stable** image library. To add a mirror library of **unstable**, add the word unstable after the word stable in the following command.

   > **Note **: The following lsb_release -cs subcommand returns the name of the Ubuntu distribution, such as xenial. Sometimes in a distribution like Linux Mint, it need to change $(lsb_release -cs) to the parent Ubuntu distribution. For example, if  Linux Mint Tessa is used, bionic can be used. EMQ X does not provide any guarantees for untested and unsupported Ubuntu distribution.

   ```
   $ sudo add-apt-repository \
       "deb [arch=amd64] https://repos.emqx.io/emqx-ce/deb/ubuntu/ \
       $(lsb_release -cs) \
       stable"
   ```

#### Install EMQ X 

1. Update the `apt` package index:

   ```
   $ sudo apt update
   ```

2. Install the latest version of EMQ X or go to the next step to install a specific version:

   ```
   $ sudo apt install emqx
   ```

   > If multiple EMQ X image libraries are enabled, the highest possible version will always be installed if no version is specified in the `apt install` or `apt update` command, which may not be suitable for stability requirements.

3. To install a specific version of EMQ X, you need to list the available versions, then select and install:

   Query available version

   ```
   $ sudo apt-cache madison emqx
   
         emqx |      3.1.0 | https://repos.emqx.io/emqx-ce/deb/ubuntu bionic/stable amd64 Packages
         emqx |      3.0.1 | https://repos.emqx.io/emqx-ce/deb/ubuntu bionic/stable amd64 Packages
         emqx |      3.0.0 | https://repos.emqx.io/emqx-ce/deb/ubuntu bionic/stable amd64 Packages
   ```

   Install a specific version using the version string from the second column, for example `3.1.0`

   ```
   $ sudo apt install emqx=3.1.0
   ```

4. Start EMQ X 

   ```
   $ emqx start
   emqx 3.1 is started successfully!
   $ emqx_ctl status
   Node 'emqx@127.0.0.1' is started
   emqx v3.1.0 is running
   ```

### Install EMQ X using the installation package

If you are unable to install EMQ X using EMQ X's image library, you can download the `.deb` file or the `.zip` file and install it manually.

#### Install from `.deb` file

1. Go to [emqx.io](https://www.emqx.io/downloads/emq/broker?osType=Linux) or [github](https://github.com/emqx/emqx/releases ), select the Ubuntu version, and then download the `.deb` file of the EMQ X version you want to install.

2. Install EMQ X and change the path below to the path to download the EMQ X package.

   ```
   $ sudo dpkg -i /path/to/emqx-ubuntu18.04-v3.1.0_amd64.deb
   ```

3. Start EMQ X 

   ```
   $ emqx start
   emqx 3.1 is started successfully!
   $ emqx_ctl status
   Node 'emqx@127.0.0.1' is started
   emqx v3.1.0 is running
   ```

#### Install from `.zip` file

1. Go to [emqx.io](https://www.emqx.io/downloads/emq/broker?osType=Linux) or [github](https://github.com/emqx/emqx/releases ), select the Ubuntu version, and then download the `.zip` file of the EMQ X version you want to install.

2. Unzip the package and change the path below to the path to download the EMQ X package.

   ```
   $ unzip /path/to/emqx-ubuntu18.04-v3.1.0.zip
   ```

3. Start EMQ X 

   ```
   $ cd emqx
   $ ./bin/emqx start
   emqx 3.1 is started successfully!
   $ ./bin/emqx_ctl status
   Node 'emqx@127.0.0.1' is started
   emqx v3.1.0 is running
   ```

## EMQ X configuration
### Configuration plugin

The EMQ X plugin configuration file is in the `emqx/etc/plugins` directory.

* emqx_auth_http plugin configuration

  ```
  # async_tasks_node is configured as config.yml 
  auth.http.auth_req = http://async_tasks_node/api/v1/emqx/auth
  auth.http.auth_req.method = post
  auth.http.auth_req.params = device_id=%c,username=%u,password=%P,cn=%cn,ip=%a
  ```

* emqx_web_hook plugin configuration

  ```
  web.hook.api.url = http://async_tasks_node/api/v1/emqx/callback
  web.hook.rule.client.connected.1     = {"action": "on_client_connected"}
  web.hook.rule.client.disconnected.1  = {"action": "on_client_disconnected"} 
  web.hook.rule.message.acked.1        = {"action": "on_message_acked"}
  ```

  

### Enable plugin

Visit the Plugins page in the EMQX Dashboard to start the following three plugins.

* emqx_auth_http
* emqx_web_hook
* emqx_lwm2m（No need to start without the protocol access requirement）