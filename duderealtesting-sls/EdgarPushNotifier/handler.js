var request = require('request');
var jToken = require('./token.json');

module.exports.handler = function(event, context, cb) {
  var result = JSON.parse(event.Records[0].Sns.Message);
  console.log(result);
  request.post({url:'https://slack.com/api/chat.postMessage?token='+jToken.token, form: {channel:'munchos', text:'-Committer: '+result.pusher.name + ' -Message: '+ result.commits[0].message}}, function(error,data){
    if(error){
      return cb(error);
    }
    else{
      return cb(null, data);
    }
  });
};
