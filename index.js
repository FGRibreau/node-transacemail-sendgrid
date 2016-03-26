var Sendgrid = require('sendgrid');
var _ = require('lodash');
var deepExtend = require('deep-extend');

function MailProvider(apiKey, options) {
  if (!apiKey) {
    throw new Error("require('transacemail-sendgrid')('apikey'), api key is required.");
  }

  this.options = deepExtend({}, MailProvider.DEFAULT_OPTION, options);
  this.sendgrid = Sendgrid(apiKey);
}

/**
 * Debug mode
 * @type {Boolean}
 */
MailProvider.DEBUG_MODE = false;

/**
 * Default options
 * @type {Object}
 */
MailProvider.DEFAULT_OPTION = {
  from: 'Transacemail',
  subject: "node-transacemail-sendgrid"
};

/**
 * Send method
 * @param  {Object}   mail TransacEmail Mail object
 * @param  {Function} fn   Callback to call when done
 */
MailProvider.prototype.send = function(mail, fn) {
  if (!mail.data || !mail.data.email) {
    throw new Error("The `email` field is required");
  }

  var options = deepExtend({}, this.options, mail.sendgrid, {
    /**
     * HTML content
     * @type {String}
     */
    html: mail.html,

    /**
     * Text content
     * @type {String}
     */
    text: mail.text,

    /**
     * To email
     * @type {String}
     */
    to: mail.data.email,

    /**
     * To user name
     * @type {String}
     */
    toname: mail.data.name
  });

  if (MailProvider.DEBUG_MODE) {
    console.log("Sending an email to " + mail.data.email);
    console.log(JSON.stringify(options, null, 2));
    fn(null, [{
      email: mail.data.email,
      status: 'sent'
    }]);
    return;
  }

  this.sendgrid.send(options, function(error, response) {
    //everything's good, lets see what sendgrid said
    //[ { email: 'plop@fgribreau.com', status: 'sent' } ]
    if(error){
      return fn(JSON.stringify(error));
    }

    if(!_.isPlainObject(response) || !response.message || response.message !== 'success'){
      return fn(JSON.stringify({message: 'Could not send message', raw: response}));
    }

    return fn(null, [{email: options.to, status: 'sent'}]);
  });
};

/**
 * TransacEmail-Mandrill factory
 * @param  {String} apiKey        Mandrill API Key
 * @param  {Object} defaultOption Default send option
 * @return {MailProvider}
 */
function Factory(apiKey, defaultOption) {
  return new MailProvider(apiKey, defaultOption || {});
}

Factory.MailProvider = MailProvider;
module.exports = Factory;
