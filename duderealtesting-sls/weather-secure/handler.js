var aws = require('aws-sdk');
var lambda = new aws.Lambda({region:'us-east-1'});
var async = require('async');

module.exports.handler = function(event, context, cb) {

  var params =
  {
    FunctionName: 'duderealtesting-sls-weatherstats',
    InvocationType: 'RequestResponse'
  };


  lambda.invoke(params, function(error,data){
    if(error){
      cb(error);
    }
    else{

      cb(null,data.Payload);
    }
  })
}