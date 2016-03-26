Sendgrid MailProvider for [node-transacemail](https://github.com/FGRibreau/node-transacemail)
===========================================

Usage
=====

```JavaScript
var Mailing = require('transacemail');

var mails = Mailing
              .compile('/path/to/mails')
              .setMailProvider(require('transacemail-sendgrid')('apikey'));

// OR
var Mandrill = require('transacemail-sendgrid');

var mails = Mailing
              .compile('/path/to/mails')
              .setMailProvider(Mandrill('apikey', {
                subject: "node-transacemail-sendgrid",
                from: "sendgrid@transacemail.com",
                fromname: "Francois-Guillaume Ribreau"
              }));
```

## Donate

I maintain this project in my free time, if it helped you please support my work via [paypal](https://paypal.me/fgribreau) or [bitcoins](https://www.coinbase.com/fgribreau), thanks a lot!
