# Action management

An action is an event that is triggered when data in a data stream meets a rule, and is used for business rule and scope rule.

5 types of actions is  supported in the platform.

#### 1. Alert

The relevant information of the trigger rule is recorded to [alert management](/alert/alert.md) of the platform, including the alert level, alert title and alert content;

#### 2. Email

Send an alert email to the specified email address where multiple email addresses can be separated by commas. The email title and email content are required to be filled. Template is supported by email content. For example:

```
The indoor temperature is over ${temp} and the humidity is lower than ${hum}, please check it in time.
```
Template variable corresponds with rule SQL SELECT result.

#### 3. Webhook

Push the message to the specified URL address, which must be verified before creation. Please refer to the verification process for configuration.

The format of message is as follows：

```json
{
  "action": {
    "url": "",
    "token": ""
  },
  "value": {
  }
}
```

- action: Containing Webhook address and verification token 
- value: Rule SQL SELECT result

#### 4. Order issued

Specify topic, and the platform will issue the specified message to the specified device.

#### 5. MQTT Message forwarding

Forward the message to the specified topic.

---

**Appendix: Webhook verification process**

**ActorCloud** authenticates based on the token and the  filled URL address. The server will send a GET request to the filled server address URL. The request carries the following parameters:

- timestamp;
- nonce: random number；
- signature: The cryptographic signature, which is the value when token, timestamp, nonce variable value are spliced and sha1 encrypted.

The request address is:`{webhook_url}?signature=xxx&?timestamp=yyy&nonce=zzz`

After the Webhook interface receives the request, it needs to be verified. The verification rules are as follows:

- splice the values of the three variables into a string in order of token, timestamp and nonce, and use sha1 for encryption;
- compare the encrypted string with the signature string in the request.

If they are equal, the verification passes and returns the random number of nonce  directly in JSON format:

```json
{
  "nonce": "zzz"
}
```