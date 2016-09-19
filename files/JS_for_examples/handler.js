var aws = require('aws-sdk');
var lambda = new aws.Lambda({region:'us-east-1'});
var async = require('async');
//Here it loads the 1,000,000 array.
var jObj = require('./intarray.json');


var nArray = JSON.parse(JSON.stringify(jObj));

module.exports.handler=function(event,context,cb){

  var params =
    {
      FunctionName: 'duderealtesting-sls-homeworklambdamergesorthelper',
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: '{ "array" : [' + nArray + '] }'
    }
  ;

  lambda.invoke(params, function(err, sorted) {
    if (err) {
      console.log(err);
      context.fail(err);
    } else {
      return cb(null,
        sorted.Payload
      );
    }
  })



};
