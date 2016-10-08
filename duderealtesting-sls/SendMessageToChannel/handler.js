var jToken = require('./token.json');
var request = require('request');

module.exports.handler = function(event, context, cb) {
  console.log(jToken.token);
  request.post({url:'https://slack.com/api/chat.postMessage?token='+jToken.token, form: {channel:'munchos', text:'-Committer: '+event.name + ' -Message: '+ event.message}}, function(error,data){
    if(error){
      return cb(error);
    }
    else{
      return cb(null, data);
    }
  });
};
