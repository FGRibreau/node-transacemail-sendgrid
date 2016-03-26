const t = require('chai').assert;
const assert = require('assert');

describe('sendgrid', function(){
  it('should send an email', function(f){
    var SENDGRID_KEY = process.env.SENDGRID_KEY;
    assert(SENDGRID_KEY, 'SENDGRID_KEY environment variable is missing');
    var provider = require('./')(SENDGRID_KEY);
    provider.send({
      html: '<strong>hello :)</strong>',
      text: 'hello :)',
      data:{
        email: 'transacemail-sendgrid@fgribreau.com',
        name: 'Transacemail Sendgrid'
      }
    }, function(err, result){
      t.strictEqual(err, null);
      t.deepEqual(result, {"message":"success"});
      f();
    });
  });
});
