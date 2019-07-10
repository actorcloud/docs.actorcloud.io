# Certificate

Based on the device number, device key, and connection user name authentication, the platform can also use the device certificate for authentication to further ensure communication security.

**ActorCloud** provides device certificate generation, and allows certificates to be bound to any device under the account and configured for availability.

Click **Device Management** -> **Security Management** -> **Certificate** to manage the certificate.


### Certificate creation

- Enter the name of the certificate, select the availability of the certificate and create the certificate. Once created, please download and properly keep the relevant certificates.

![](/assets/certs_create.png)


### Binding device

- When the device uses SSL/TLS secure connection, it should use the bound certificate for encrypted communication. On the certificate details page, the certificate information can be modified and bound device can be managed.

![](/assets/certs_bind.png)


### Guidance

- One-way authentication: Use port 8883 for SSL/TLS encrypted connection, and the certificate is used by client to verify the validity of the server connection.
- Two-way authentication: use port 8884 for SSL/TLS encrypted connection, and two-way authentication is used  by client and server;
- For access example, see [Device Quick Access Guide -> Device Certificate](../access_guide/certs.md).

