Sendgrid MailProvider for [node-transacemail](https://github.com/FGRibreau/node-transacemail) ![](https://img.shields.io/circleci/project/BrightFlair/PHP.Gt/master.svg)
===========================================

[![Build Status](https://img.shields.io/circleci/project/FGRibreau/transacemail-sendgrid.svg)](https://circleci.com/gh/FGRibreau/transacemail-sendgrid/) [![Deps](	https://img.shields.io/david/FGRibreau/transacemail-sendgrid.svg)](https://david-dm.org/FGRibreau/transacemail-sendgrid) [![NPM version](https://img.shields.io/npm/v/transacemail-sendgrid.svg)](http://badge.fury.io/js/transacemail-sendgrid)  [![Downloads](http://img.shields.io/npm/dm/transacemail-sendgrid.svg)](https://www.npmjs.com/package/transacemail-sendgrid) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg)

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
