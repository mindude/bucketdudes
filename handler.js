var aws = require('aws-sdk');
var lambda = new aws.Lambda({region:'us-east-1'});
var async = require('async');
var jObj = require('./intarray.json');


//var nArray = JSON.parse(JSON.stringify(jObj));

var nArray=[0,5,2];
//console.log(sorted);
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
